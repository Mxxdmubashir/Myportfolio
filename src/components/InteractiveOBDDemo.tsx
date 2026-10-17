import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

type SimMode = 'normal' | 'sport' | 'diagnostic';

export const InteractiveOBDDemo: React.FC = () => {
  const [mode, setMode] = useState<SimMode>('normal');
  const [speed, setSpeed] = useState<number>(72);
  const [rpm, setRpm] = useState<number>(2450);
  const [coolant, setCoolant] = useState<number>(90);
  const [throttle, setThrottle] = useState<number>(38);
  const [voltage, setVoltage] = useState<number>(14.2);
  const [dtcCodes, setDtcCodes] = useState<string[]>([]);
  const [logPackets, setLogPackets] = useState<string[]>([
    'CAN-BUS [0x7E8] 04 41 0C 13 22 00 00 : RPM 2450 OK',
    'CAN-BUS [0x7E8] 03 41 0D 48 00 00 00 : SPEED 72 KM/H',
    'CAN-BUS [0x7E8] 03 41 05 5A 00 00 00 : ECT 90°C NORMAL',
  ]);

  // Handle mode switches
  useEffect(() => {
    if (mode === 'normal') {
      setSpeed(72);
      setRpm(2450);
      setCoolant(90);
      setThrottle(38);
      setDtcCodes([]);
    } else if (mode === 'sport') {
      setSpeed(138);
      setRpm(5600);
      setCoolant(96);
      setThrottle(84);
      setDtcCodes([]);
    } else if (mode === 'diagnostic') {
      setSpeed(42);
      setRpm(1820);
      setCoolant(108);
      setThrottle(25);
      setDtcCodes(['P0300 - Random/Multiple Cylinder Misfire', 'P0171 - System Too Lean (Bank 1)']);
    }
  }, [mode]);

  // Subtle real-time telemetry jitter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => Math.max(0, Math.min(220, prev + (Math.random() * 4 - 2))));
      setRpm(prev => Math.max(800, Math.min(7000, Math.round(prev + (Math.random() * 80 - 40)))));
      
      const pids = ['0x7E8', '0x7EA', '0x7DF'];
      const randomPid = pids[Math.floor(Math.random() * pids.length)];
      const randomHex = Math.floor(Math.random() * 0xFF).toString(16).padStart(2, '0').toUpperCase();
      const newPacket = `CAN [${randomPid}] 03 41 ${randomHex} OK : TELEMETRY ACK`;
      
      setLogPackets(prev => [newPacket, ...prev.slice(0, 4)]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const clearDtc = () => {
    setDtcCodes([]);
    setLogPackets(prev => ['CAN-BUS [0x7DF] 01 04 00 00 00 00 00 : DTC CLEARED', ...prev.slice(0, 4)]);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Decorative HUD glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Icons.Gauge className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white tracking-wide">OBD-II Real-time Telemetry Simulator</h3>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse">
                LIVE CAN-BUS
              </span>
            </div>
            <p className="text-xs text-slate-400">Interactive telemetry viewer inspired by my automotive software work</p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800 rounded-xl text-xs font-medium">
          <button
            onClick={() => setMode('normal')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'normal'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cruising
          </button>
          <button
            onClick={() => setMode('sport')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'sport'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sport Mode
          </button>
          <button
            onClick={() => setMode('diagnostic')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'diagnostic'
                ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DTC Fault Test
          </button>
        </div>
      </div>

      {/* Main Gauges Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        {/* Speed */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Vehicle Speed</span>
          <div className="my-2 flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight">
              {Math.round(speed)}
            </span>
            <span className="text-xs text-cyan-400 font-mono font-medium">km/h</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-cyan-400 h-full transition-all duration-300"
              style={{ width: `${Math.min(100, (speed / 220) * 100)}%` }}
            />
          </div>
        </div>

        {/* RPM */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Engine RPM</span>
          <div className="my-2 flex items-baseline gap-1">
            <span className={`text-3xl md:text-4xl font-extrabold font-mono tracking-tight ${rpm > 5000 ? 'text-amber-400' : 'text-white'}`}>
              {Math.round(rpm)}
            </span>
            <span className="text-xs text-slate-400 font-mono">rpm</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${rpm > 5000 ? 'bg-amber-400' : 'bg-blue-400'}`}
              style={{ width: `${Math.min(100, (rpm / 7000) * 100)}%` }}
            />
          </div>
        </div>

        {/* Coolant Temp */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Coolant Temp</span>
          <div className="my-2 flex items-baseline gap-1">
            <span className={`text-3xl md:text-4xl font-extrabold font-mono tracking-tight ${coolant > 100 ? 'text-rose-400' : 'text-white'}`}>
              {coolant}
            </span>
            <span className="text-xs text-slate-400 font-mono">°C</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${coolant > 100 ? 'bg-rose-500' : 'bg-emerald-400'}`}
              style={{ width: `${Math.min(100, (coolant / 120) * 100)}%` }}
            />
          </div>
        </div>

        {/* Throttle */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Throttle Position</span>
          <div className="my-2 flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight">
              {throttle}
            </span>
            <span className="text-xs text-slate-400 font-mono">%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-400 h-full transition-all duration-300"
              style={{ width: `${throttle}%` }}
            />
          </div>
        </div>
      </div>

      {/* Diagnostics / Fault Status & Data Stream */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* DTC Codes */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Icons.AlertTriangle className={`w-4 h-4 ${dtcCodes.length > 0 ? 'text-rose-400 animate-bounce' : 'text-emerald-400'}`} />
                Diagnostic Fault Codes (DTC)
              </span>
              {dtcCodes.length > 0 && (
                <button
                  onClick={clearDtc}
                  className="text-xs px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-rose-300 rounded border border-rose-500/30 flex items-center gap-1 transition-all"
                >
                  <Icons.RotateCcw className="w-3 h-3" /> Clear DTC
                </button>
              )}
            </div>

            {dtcCodes.length === 0 ? (
              <div className="py-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <Icons.CheckCircle2 className="w-4 h-4" />
                  ECU Status: All Systems Operational (No Faults)
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {dtcCodes.map((dtc, index) => (
                  <div
                    key={index}
                    className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 flex items-center justify-between"
                  >
                    <span>{dtc}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-rose-950 rounded text-rose-200">CONFIRMED</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>ECU Voltage: <strong className="text-white font-mono">{voltage}V</strong></span>
            <span>Protocol: <strong className="text-white font-mono">ISO 15765-4 (CAN 11/500)</strong></span>
          </div>
        </div>

        {/* Live Packet Stream */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 font-mono text-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              Live CAN-BUS Hex Stream
            </span>
            <span className="text-[10px] text-slate-500">500 kbps</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            {logPackets.map((pkt, i) => (
              <div key={i} className="text-[11px] truncate text-slate-400 flex items-center gap-2">
                <span className="text-cyan-500 font-bold">›</span>
                <span className={i === 0 ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                  {pkt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

