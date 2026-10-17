import React, { useState } from 'react';
import { Icons } from './Icons';
import { soundFX } from '../utils/sound';

interface Endpoint {
  method: 'GET' | 'POST';
  path: string;
  desc: string;
  response: object;
}

const ENDPOINTS: Endpoint[] = [
  {
    method: 'GET',
    path: '/api/v1/developer/status',
    desc: 'Fetch live developer status and availability',
    response: {
      status: 'active',
      developer: 'Muhammed Mubashir',
      role: 'Full-Stack Developer',
      company: 'Ziqx Creative Clique LLP',
      availableForHire: true,
      interests: ['React', 'TypeScript', 'Automotive Software', 'AI/VR'],
      location: 'Kerala, India',
      responseCode: 200
    }
  },
  {
    method: 'GET',
    path: '/api/v1/projects?featured=true',
    desc: 'Retrieve featured production applications',
    response: {
      total: 7,
      featured: [
        { id: 'pepito-cloud', name: 'Pepito Cloud Kitchen POS & KDS', stack: ['React', 'Node.js', 'Socket.io', 'SQLite'] },
        { id: 'obd-reader', name: 'OBD-II System Telemetry Dashboard', stack: ['React', 'TypeScript', 'CAN-Bus'] },
        { id: 'ar-solar', name: 'Unity AR Solar System', stack: ['Unity', 'C#', 'Augmented Reality'] }
      ],
      serverTimestamp: new Date().toISOString()
    }
  },
  {
    method: 'POST',
    path: '/api/v1/telemetry/obd/diagnostics',
    desc: 'Execute real-time CAN-Bus sensor handshake',
    response: {
      ecuHandshake: 'ESTABLISHED',
      protocol: 'ISO 15765-4 (CAN 11/500)',
      sensors: {
        engineRpm: 2450,
        vehicleSpeedKmH: 72,
        coolantTempC: 90,
        dtcCount: 0
      },
      integrity: '100% OK'
    }
  }
];

export const ApiPlayground: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [activeResponse, setActiveResponse] = useState<object>(ENDPOINTS[0].response);
  const [latency, setLatency] = useState(18);

  const endpoint = ENDPOINTS[selectedIdx];

  const handleSend = () => {
    setIsLoading(true);
    soundFX.playBlip();

    setTimeout(() => {
      setIsLoading(false);
      setActiveResponse(endpoint.response);
      setLatency(Math.floor(Math.random() * 25) + 12);
      soundFX.playChime();
    }, 280);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Icons.Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              Interactive REST API Sandbox
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                LIVE REST CLIENT
              </span>
            </h3>
            <p className="text-xs text-slate-400">Test drive backend endpoints built with Node.js & Express architecture</p>
          </div>
        </div>

        <button
          onClick={handleSend}
          disabled={isLoading}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer self-start sm:self-auto"
        >
          <Icons.Send className="w-3.5 h-3.5" />
          <span>{isLoading ? 'Executing...' : 'Send Request'}</span>
        </button>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4">
        {ENDPOINTS.map((ep, i) => (
          <button
            key={ep.path}
            onClick={() => {
              setSelectedIdx(i);
              setActiveResponse(ep.response);
              soundFX.playBlip();
            }}
            className={`p-2.5 rounded-xl text-left border transition-all ${
              selectedIdx === i
                ? 'bg-slate-800/90 border-cyan-500/40 text-white'
                : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${ep.method === 'GET' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                {ep.method}
              </span>
              <span className="truncate">{ep.path}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Response Viewer */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-bold">HTTP 200 OK</span>
            <span>Latency: <strong className="text-slate-300">{latency}ms</strong></span>
          </div>
          <span>Content-Type: application/json</span>
        </div>

        <pre className="text-cyan-300 overflow-x-auto leading-relaxed">
          {JSON.stringify(activeResponse, null, 2)}
        </pre>
      </div>
    </div>
  );
};

