"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CloudRain, Zap, ShieldCheck } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function StormAwareness() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const { t } = useLanguage();
  const problems = [
    { ...t.storm.cards[0], icon: CloudRain, color: "text-brand-navy", bgColor: "bg-brand-navy/8" },
    { ...t.storm.cards[1], icon: Zap, color: "text-brand-orange", bgColor: "bg-brand-orange/12" },
    { ...t.storm.cards[2], icon: ShieldCheck, color: "text-brand-success", bgColor: "bg-brand-success/18" },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text mb-4">
            {t.storm.title}
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            {t.storm.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className={`border border-brand-navy/8 shadow-md hover:shadow-xl bg-white transition-all duration-500 hover:-translate-y-1 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl ${problem.bgColor} flex items-center justify-center mb-5`}
                >
                  <problem.icon className={`w-7 h-7 ${problem.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-text mb-3">
                  {problem.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {problem.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
