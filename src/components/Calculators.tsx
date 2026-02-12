"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Percent, Home, Car, PiggyBank } from "lucide-react";

const calculators = [
  { icon: Calculator, label: "SIP Calculator", id: "sip" },
  { icon: Percent, label: "EMI Calculator", id: "emi" },
  { icon: Home, label: "Home Loan", id: "home" },
  { icon: Car, label: "Car Loan", id: "car" },
  { icon: PiggyBank, label: "FD Calculator", id: "fd" },
];

export default function Calculators() {
  const [activeCalc, setActiveCalc] = useState("sip");
  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const totalInvested = amount * months;

  let result = 0;
  if (activeCalc === "sip") {
    result = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  } else if (activeCalc === "emi") {
    result = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  } else {
    result = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  const wealthGained = result - totalInvested;

  const formatCurrency = (num: number) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cred-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-cred-muted">Calculators</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight gradient-text">
            plan your finances.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Calculator Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalc(calc.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCalc === calc.id
                    ? "bg-white text-black"
                    : "bg-white/5 text-cred-muted hover:bg-white/10 hover:text-white"
                }`}
              >
                <calc.icon className="w-4 h-4" />
                {calc.label}
              </button>
            ))}
          </div>

          {/* Calculator Body */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="space-y-8">
              {/* Monthly Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm text-cred-muted">
                    {activeCalc === "emi" ? "Loan Amount" : "Monthly Investment"}
                  </label>
                  <span className="text-white font-semibold">{formatCurrency(amount)}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={200000}
                  step={1000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1 bg-cred-border rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-xs text-cred-muted mt-1">
                  <span>₹1K</span>
                  <span>₹2L</span>
                </div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm text-cred-muted">Expected Return Rate (p.a.)</label>
                  <span className="text-white font-semibold">{rate}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={0.5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-1 bg-cred-border rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-xs text-cred-muted mt-1">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Time Period */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm text-cred-muted">Time Period</label>
                  <span className="text-white font-semibold">{years} years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-1 bg-cred-border rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-xs text-cred-muted mt-1">
                  <span>1 yr</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 pt-8 border-t border-cred-border">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-xs text-cred-muted uppercase tracking-wider mb-2">
                    {activeCalc === "emi" ? "Monthly EMI" : "Invested"}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {activeCalc === "emi" ? formatCurrency(result) : formatCurrency(totalInvested)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-cred-muted uppercase tracking-wider mb-2">
                    {activeCalc === "emi" ? "Total Interest" : "Wealth Gained"}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-green-400">
                    {activeCalc === "emi"
                      ? formatCurrency(result * months - amount)
                      : formatCurrency(wealthGained)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-cred-muted uppercase tracking-wider mb-2">Total Value</div>
                  <div className="text-xl md:text-2xl font-bold gradient-text-gold">
                    {activeCalc === "emi"
                      ? formatCurrency(result * months)
                      : formatCurrency(result)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
