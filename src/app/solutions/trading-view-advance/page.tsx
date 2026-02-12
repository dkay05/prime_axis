"use client";

import { TrendingUp } from "lucide-react";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export default function TradingViewAdvancePage() {
  return (
    <SolutionPageTemplate
      icon={TrendingUp}
      badge="Trading View Advance"
      title="TradingView-Powered"
      highlight="Charting & Analysis"
      subtitle="Integrate the world's most popular charting library into your trading platform. Advanced technical analysis tools your traders already know and love."
      description="Our TradingView Advance solution embeds the full TradingView charting experience directly into your white-label platform. Traders get access to 100+ technical indicators, 50+ drawing tools, multi-timeframe analysis, and real-time data — all within your branded environment. The integration supports custom indicators, Pine Script, alerts, and watchlists. Give your traders the professional-grade charting they expect without building it from scratch."
      features={[
        { title: "Full TradingView Charts", description: "Embedded TradingView charting library with all premium features and real-time data." },
        { title: "100+ Technical Indicators", description: "Moving averages, oscillators, volume indicators, and custom Pine Script indicators." },
        { title: "50+ Drawing Tools", description: "Trendlines, Fibonacci, Gann, Elliott Wave, and advanced geometric tools." },
        { title: "Multi-Timeframe Analysis", description: "From 1-second to monthly charts with synchronized multi-chart layouts." },
        { title: "Custom Alerts", description: "Price alerts, indicator crossovers, and custom condition alerts with push notifications." },
        { title: "One-Click Trading", description: "Trade directly from the chart with integrated order entry and position management." },
      ]}
      benefits={[
        "Traders get the charting tools they already know and trust",
        "No learning curve — TradingView is the industry standard",
        "100+ built-in indicators plus custom Pine Script support",
        "Multi-chart layouts for professional multi-timeframe analysis",
        "Real-time data streaming with sub-second chart updates",
        "One-click trading directly from chart for faster execution",
        "Fully embedded in your white-label platform — seamless UX",
        "Reduces development cost vs building charting from scratch",
      ]}
      mockupContent={
        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 text-center">TradingView Advanced Charts</div>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {["1m", "5m", "15m", "1H", "4H", "1D"].map((tf, i) => (
                  <div key={tf} className={`text-[9px] px-2 py-1 rounded ${i === 3 ? "bg-blue-600/20 text-blue-400" : "text-zinc-500 hover:text-zinc-300"} cursor-pointer`}>
                    {tf}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {["📐", "📊", "⚙️"].map((tool) => (
                  <div key={tool} className="text-[10px] px-1.5 py-0.5 cursor-pointer">{tool}</div>
                ))}
              </div>
            </div>
            {/* Chart with candlesticks */}
            <div className="h-44 bg-zinc-800/50 rounded-lg relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 400 176" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="tvGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[40, 80, 120, 160].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                ))}
                {/* Candlesticks */}
                {[
                  { x: 30, o: 120, c: 100, h: 90, l: 130 },
                  { x: 60, o: 100, c: 110, h: 85, l: 115 },
                  { x: 90, o: 110, c: 90, h: 80, l: 120 },
                  { x: 120, o: 90, c: 80, h: 70, l: 100 },
                  { x: 150, o: 80, c: 95, h: 65, l: 100 },
                  { x: 180, o: 95, c: 75, h: 60, l: 100 },
                  { x: 210, o: 75, c: 65, h: 55, l: 85 },
                  { x: 240, o: 65, c: 70, h: 50, l: 80 },
                  { x: 270, o: 70, c: 55, h: 45, l: 80 },
                  { x: 300, o: 55, c: 60, h: 40, l: 70 },
                  { x: 330, o: 60, c: 45, h: 35, l: 65 },
                  { x: 360, o: 45, c: 50, h: 30, l: 55 },
                ].map((candle) => {
                  const isGreen = candle.c < candle.o;
                  const top = Math.min(candle.o, candle.c);
                  const height = Math.abs(candle.o - candle.c);
                  return (
                    <g key={candle.x}>
                      <line x1={candle.x} y1={candle.h} x2={candle.x} y2={candle.l} stroke={isGreen ? "#22c55e" : "#ef4444"} strokeWidth="1" />
                      <rect x={candle.x - 8} y={top} width="16" height={Math.max(height, 2)} fill={isGreen ? "#22c55e" : "#ef4444"} rx="1" />
                    </g>
                  );
                })}
                {/* MA line */}
                <path d="M30,110 Q90,95 150,85 T270,60 T360,48" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />
                {/* Trendline */}
                <line x1="30" y1="130" x2="360" y2="55" stroke="#f59e0b" strokeWidth="1" strokeDasharray="6 3" />
              </svg>
              <div className="absolute top-2 left-3 text-[9px] text-zinc-500">EUR/USD · 1H · TradingView</div>
              <div className="absolute top-2 right-3 text-[9px] text-green-400 font-mono">1.0847 +0.12%</div>
            </div>
            {/* Indicators */}
            <div className="flex gap-1.5">
              {["MA(20)", "RSI(14)", "MACD", "Volume"].map((ind) => (
                <div key={ind} className="bg-zinc-800/60 text-zinc-400 text-[8px] px-2 py-1 rounded font-medium">
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
