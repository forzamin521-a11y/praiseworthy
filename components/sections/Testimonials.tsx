"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { testimonialBase } from "@/lib/i18n";
import { useLanguage } from "@/components/providers/LanguageProvider";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-brand-orange fill-brand-orange"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const { t } = useLanguage();
  const testimonials = testimonialBase.map((item, index) => ({
    ...item,
    content: t.testimonials.reviews[index],
  }));

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text mb-4">
            {t.testimonials.title}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <StarRating rating={5} />
            <span className="font-semibold text-brand-text">5.0</span>
          </div>
          <p className="text-brand-muted text-lg">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`border border-brand-navy/7 bg-brand-surface shadow-md hover:shadow-lg transition-all duration-500 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-brand-orange/38 mb-3" />
                <StarRating rating={testimonial.rating} />
                <p className="text-brand-text mt-4 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-brand-navy/10">
                  <Avatar className="bg-brand-navy text-brand-surface">
                    <AvatarFallback className="bg-brand-navy text-brand-surface font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-brand-text text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-brand-muted text-xs">
                      {t.common.homeowner}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Praise Worthy",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: testimonials.length.toString(),
              },
              review: testimonials.map((testimonial) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: testimonial.name,
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: testimonial.rating.toString(),
                  bestRating: "5",
                },
                reviewBody: testimonial.content,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
