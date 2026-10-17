import React, { useState, useEffect } from 'react';

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
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-100">
        <div>
          <h3 className="text-base font-bold text-zinc-950 flex items-center gap-2">
            OBD-II Diagnostic Reader Concept
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Real-time vehicle telemetry demo based on my automotive software work
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-100 border border-zinc-200 rounded-lg text-xs">
          <button
            onClick={() => setMode('normal')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              mode === 'normal'
                ? 'bg-white text-zinc-950 font-medium shadow-2xs'
                : 'text-zinc-600 hover:text-black'
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => setMode('sport')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              mode === 'sport'
                ? 'bg-white text-zinc-950 font-medium shadow-2xs'
                : 'text-zinc-600 hover:text-black'
            }`}
          >
            High Revs
          </button>
          <button
            onClick={() => setMode('diagnostic')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              mode === 'diagnostic'
                ? 'bg-red-600 text-white font-medium shadow-2xs'
                : 'text-zinc-600 hover:text-black'
            }`}
          >
            Simulate DTC
          </button>
        </div>
      </div>

      {/* Gauges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Speed</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950">{speed}</span>
            <span className="text-xs text-zinc-500 font-mono">km/h</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Engine RPM</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-2xl sm:text-3xl font-bold font-mono ${rpm > 4500 ? 'text-amber-600' : 'text-zinc-950'}`}>
              {rpm}
            </span>
            <span className="text-xs text-zinc-500 font-mono">rpm</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Coolant Temp</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-2xl sm:text-3xl font-bold font-mono ${coolant > 100 ? 'text-red-600' : 'text-zinc-950'}`}>
              {coolant}
            </span>
            <span className="text-xs text-zinc-500 font-mono">°C</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
          <span className="text-[11px] font-mono text-zinc-500 block uppercase">Throttle</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950">{throttle}</span>
            <span className="text-xs text-zinc-500 font-mono">%</span>
          </div>
        </div>
      </div>

      {/* Diagnostics / Fault Status & Data Stream */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* DTC Box */}
        <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-200">
            <span className="font-semibold text-zinc-900">
              Diagnostic Trouble Codes (DTC)
            </span>
            {dtcCodes.length > 0 && (
              <button
                onClick={clearDtc}
                className="text-[11px] px-2 py-0.5 rounded bg-white text-zinc-800 hover:text-black border border-zinc-300 shadow-2xs cursor-pointer"
              >
                Clear DTC
              </button>
            )}
          </div>

          {dtcCodes.length === 0 ? (
            <div className="text-zinc-600 py-2">
              <span className="text-emerald-600 font-medium">✓ No fault codes stored</span> (ECU systems normal)
            </div>
          ) : (
            <div className="space-y-1.5">
              {dtcCodes.map((dtc, i) => (
                <div key={i} className="p-2 rounded bg-red-50 border border-red-200 text-red-700 font-mono text-xs">
                  {dtc}
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 pt-2 border-t border-zinc-200 text-[11px] text-zinc-500 flex justify-between">
            <span>Battery: <strong className="text-zinc-900 font-mono">{voltage}V</strong></span>
            <span>Protocol: <strong className="text-zinc-900 font-mono">ISO 15765-4 (CAN)</strong></span>
          </div>
        </div>

        {/* Live Packet Log */}
        <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 font-mono text-xs">
          <div className="pb-2 mb-3 border-b border-zinc-200 text-zinc-800 font-semibold">
            CAN-Bus Packet Stream
          </div>
          <div className="space-y-1.5 text-zinc-600">
            {logPackets.map((pkt, i) => (
              <div key={i} className="text-[11px] truncate">
                <span className="text-zinc-400 mr-1.5">›</span>
                <span className={i === 0 ? 'text-zinc-950 font-medium' : 'text-zinc-500'}>{pkt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
