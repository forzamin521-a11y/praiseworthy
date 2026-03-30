"use client";

import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Mic2, ExternalLink, CheckCircle } from "lucide-react";

const RADIO_VIDEO_URL = "https://youtu.be/D3-Mh_sWkvA?si=kP9YSmKUUigzEgDl";
const RADIO_EMBED_URL = "https://www.youtube.com/embed/D3-Mh_sWkvA";

const trustPoints = [
  "처음 맡기는 루핑 업체가 걱정되신다면, 방송을 통해 팀 분위기부터 먼저 확인해보실 수 있습니다.",
  "DFW 현지에서 실제로 활동하는 로컬 루핑 팀이라는 점을 한국어로 더 분명하게 느끼실 수 있습니다.",
  "문의 전에 한 번 보고 오시면, 어떤 팀인지 훨씬 안심하고 판단하실 수 있습니다.",
];

export default function KoreanRadioFeature() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <Badge className="mb-4 rounded-full border border-brand-orange/20 bg-brand-orange/10 text-brand-orange">
              <Mic2 className="mr-2 h-3.5 w-3.5" />
              Dalkora 라디오 소개
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-brand-text md:text-4xl">
              한국 라디오에서도 소개된
              <br />
              Praise Worthy를 먼저 확인해보세요
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">
              낯선 루핑 업체에 바로 연락하는 게 망설여지신다면, 한국인들이 자주
              듣는 Dalkora 라디오에서 소개된 Praise Worthy 이야기를 먼저
              들어보세요. 텍사스에서 실제로 활동하는 팀인지, 어떤 마음가짐으로
              일하는지 한국어로 더 편하게 확인하실 수 있습니다.
            </p>

            <div className="mt-8 space-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[20px] bg-brand-surface px-4 py-3"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-success" />
                  <p className="text-sm leading-6 text-brand-text">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <LinkButton
                href={RADIO_VIDEO_URL}
                target="_blank"
                rel="noreferrer"
                size="lg"
                className="rounded-full border border-brand-navy/15 bg-brand-navy px-8 py-6 text-base font-semibold text-white hover:bg-brand-navy/92"
              >
                방송 영상 바로 보기
                <ExternalLink className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-brand-navy/8 bg-brand-surface shadow-[0_18px_40px_rgba(27,54,38,0.08)]">
            <div className="aspect-video w-full">
              <iframe
                src={RADIO_EMBED_URL}
                title="Praise Worthy on Dalkora radio"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
