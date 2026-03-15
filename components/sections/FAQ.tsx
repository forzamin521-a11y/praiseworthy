"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function FAQ() {
  const { t } = useLanguage();
  const faqs = t.faq.items.map(([question, answer]) => ({ question, answer }));

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 rounded-full bg-brand-navy/8 text-brand-navy border-brand-navy/12">
            <HelpCircle className="w-3 h-3 mr-1" />
            {t.nav[5]}
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text mb-4">
            {t.faq.titleLine1}
            <br />
            {t.faq.titleLine2}
          </h2>
          <p className="text-brand-muted text-lg">
            {t.faq.description}
          </p>
        </div>

        <Accordion className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              className="bg-white rounded-[22px] border border-brand-navy/7 px-6 data-[open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-brand-text text-base pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-brand-muted text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
