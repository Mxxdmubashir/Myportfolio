import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

type SimMode = 'normal' | 'sport' | 'diagnostic';

export const InteractiveOBDDemo: React.FC = () => {
  const [mode, setMode] = useState<SimMode>('normal');
  const [speed, setSpeed] = useState<number>(68);
  const [rpm, setRpm] = useState<number>(2300);
  const [coolant, setCoolant] = useState<number>(88);
  const [throttle, setThrottle] = useState<number>(32);
  const [voltage] = useState<number>(14.1);
  const [dtcCodes, setDtcCodes] = useState<string[]>([]);
  const [logPackets, setLogPackets] = useState<string[]>([
    'PID 0x0C (Engine RPM): 2300 rpm',
    'PID 0x0D (Vehicle Speed): 68 km/h',
    'PID 0x05 (Engine Coolant): 88 °C',
  ]);

  useEffect(() => {
    if (mode === 'normal') {
      setSpeed(68);
      setRpm(2300);
      setCoolant(88);
      setThrottle(32);
      setDtcCodes([]);
    } else if (mode === 'sport') {
      setSpeed(124);
      setRpm(4900);
      setCoolant(94);
      setThrottle(78);
      setDtcCodes([]);
    } else if (mode === 'diagnostic') {
      setSpeed(35);
      setRpm(1750);
      setCoolant(106);
      setThrottle(20);
      setDtcCodes(['P0300 - Random/Multiple Cylinder Misfire Detected', 'P0171 - System Too Lean (Bank 1)']);
    }
  }, [mode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => Math.max(0, Math.min(200, Math.round(prev + (Math.random() * 4 - 2)))));
      setRpm(prev => Math.max(800, Math.min(6500, Math.round(prev + (Math.random() * 60 - 30)))));
      
      const newPacket = `PID 0x0C: ${Math.round(rpm)} rpm | PID 0x0D: ${Math.round(speed)} km/h`;
      setLogPackets(prev => [newPacket, ...prev.slice(0, 3)]);
    }, 1500);

    return () => clearInterval(interval);
  }, [rpm, speed]);

  const clearDtc = () => {
    setDtcCodes([]);
    setLogPackets(prev => ['Mode 0x04: DTC codes cleared successfully', ...prev.slice(0, 3)]);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800/80">
        <div>
          <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
            OBD-II Diagnostic Reader Concept
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Real-time vehicle telemetry demo based on my automotive software work
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs">
          <button
            onClick={() => setMode('normal')}
            className={`px-2.5 py-1 rounded transition-colors ${
              mode === 'normal'
                ? 'bg-zinc-200 text-zinc-950 font-medium'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => setMode('sport')}
            className={`px-2.5 py-1 rounded transition-colors ${
              mode === 'sport'
                ? 'bg-zinc-200 text-zinc-950 font-medium'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            High Revs
          </button>
          <button
            onClick={() => setMode('diagnostic')}
            className={`px-2.5 py-1 rounded transition-colors ${
              mode === 'diagnostic'
                ? 'bg-red-500 text-white font-medium'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Simulate DTC
          </button>
        </div>
      </div>

      {/* Gauges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800/80">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Speed</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100">{speed}</span>
            <span className="text-xs text-zinc-400 font-mono">km/h</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800/80">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Engine RPM</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-2xl sm:text-3xl font-bold font-mono ${rpm > 4500 ? 'text-amber-400' : 'text-zinc-100'}`}>
              {rpm}
            </span>
            <span className="text-xs text-zinc-400 font-mono">rpm</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800/80">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Coolant Temp</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-2xl sm:text-3xl font-bold font-mono ${coolant > 100 ? 'text-red-400' : 'text-zinc-100'}`}>
              {coolant}
            </span>
            <span className="text-xs text-zinc-400 font-mono">°C</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800/80">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Throttle</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100">{throttle}</span>
            <span className="text-xs text-zinc-400 font-mono">%</span>
          </div>
        </div>
      </div>

      {/* Diagnostics / Fault Status & Data Stream */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* DTC Box */}
        <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
            <span className="font-semibold text-zinc-300">
              Diagnostic Trouble Codes (DTC)
            </span>
            {dtcCodes.length > 0 && (
              <button
                onClick={clearDtc}
                className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700"
              >
                Clear DTC
              </button>
            )}
          </div>

          {dtcCodes.length === 0 ? (
            <div className="text-zinc-400 py-2">
              <span className="text-emerald-400 font-medium">✓ No fault codes stored</span> (ECU systems normal)
            </div>
          ) : (
            <div className="space-y-1.5">
              {dtcCodes.map((dtc, i) => (
                <div key={i} className="p-2 rounded bg-red-950/30 border border-red-900/40 text-red-300 font-mono text-xs">
                  {dtc}
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex justify-between">
            <span>Battery: <strong className="text-zinc-300 font-mono">{voltage}V</strong></span>
            <span>Protocol: <strong className="text-zinc-300 font-mono">ISO 15765-4 (CAN)</strong></span>
          </div>
        </div>

        {/* Live Packet Log */}
        <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-xs">
          <div className="pb-2 mb-3 border-b border-zinc-800 text-zinc-400 font-semibold">
            CAN-Bus Packet Stream
          </div>
          <div className="space-y-1.5 text-zinc-400">
            {logPackets.map((pkt, i) => (
              <div key={i} className="text-[11px] truncate">
                <span className="text-zinc-600 mr-1.5">›</span>
                <span className={i === 0 ? 'text-zinc-200' : 'text-zinc-500'}>{pkt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
