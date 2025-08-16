"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

/*
  여상수(yss.com) 랜딩 흐름을 참고해 같은 구조/동선으로 재구성한 템플릿(합법적 리라이팅).
  - Next.js App Router용 단일 파일(page.tsx)
  - Tailwind + framer-motion 애니메이션
  - 섹션: HERO → 브랜드소개 → 경쟁력 → 수익률 → 창업비용 → 사례 → 절차 → FAQ → 문의 → 푸터
  - 상단 상수(BRAND/EDGE/PROFIT/비용/사례/FAQ)만 바꾸면 전체가 자동 반영
  - 이미지 경로: /public/images/*
*/

// ──────────────────────────────────────────────────────────────
// 1) 교체할 데이터
// ──────────────────────────────────────────────────────────────
const BRAND = {
  name: "여상수",
  tagline: "조현준 바보 할머니의 손맛그대로 안동식양념소갈비를 트렌디하게 즐기는",
  phone: "010-8230-0800",
  address: "경기도 안양시 삼덕로 80-1, 1층 여상수",
};

const NAV = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "브랜드소개" },
  { href: "#edge", label: "경쟁력" },
  { href: "#profit", label: "수익률" },
  { href: "#cost", label: "창업비용" },
  { href: "#cases", label: "사례" },
  { href: "#process", label: "절차" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "문의" },
];

const EDGE = [
  { t: "1인운영 구조", d: "단일공정·동선최적화로 주방 1인 운영 가능." },
  { t: "안정 객단가", d: "양념+소고기 중심으로 적은 운영시간 적은 테이블로 안정 매출." },
  { t: "원가율 관리", d: "핵심 식자재 직공급, 목표 원가율 35% 내외." },
  { t: "리모델링 창업", d: "기존매장 변경 시 비용 파격 절감." },
  { t: "매뉴얼화", d: "초보도 가능한 조리·서비스 매뉴얼 제공." },
];

const PROFIT = [
  { k: "월매출(100%)", v: "58,000,000" },
  { k: "식자재(27%)", v: "-15,660,000" },
  { k: "인건비(12%)", v: "-6,960,000" },
  { k: "임대료(2%)", v: "-1,160,000" },
  { k: "기타(5%)", v: "-2,900,000" },
  { k: "세전이익(44%)", v: "25,520,000" },
];

const COST_SOFT = [
  { k: "가맹비", v: "10,000,000만원" },
  { k: "교육비", v: "5,000,000만원" },
  { k: "디자인 및 공간기획", v: "5,000,000만원 ~ 7,000,000만원" },
  { k: "소프트웨어 총비용", v: "20,000,000만원 ~ 22,000,000만원" },
];
const COST_HARD = [
  { k: "인테리어", v: "실비" },
  { k: "주방/기물", v: "실비" },
  { k: "사인/VMD", v: "실비" },
  { k: "기타설비", v: "실비" },
];

const CASES = [
  {
    name: "안성아양점(30평)",
    before: "/images/case-ansung-before.jpg",
    after: "/images/case-ansung-after.jpg",
    memo: "덕트/가스/전기 보강 + 주방설비 + 간판",
    total: "시설 1,800만 / 총 3,600만",
  },
  {
    name: "신도림점(35평)",
    before: "/images/case-sindorim-before.jpg",
    after: "/images/case-sindorim-after.jpg",
    memo: "리모델 2,700 + 설비증설 1,000 + 기물 1,000",
    total: "시설 5,950만 / 총 7,950만",
  },
  {
    name: "강릉점(40평)",
    before: "/images/case-gangneung-before.jpg",
    after: "/images/case-gangneung-after.jpg",
    memo: "인테리어 7,000 + 설비 2,000 + 가구/사인",
    total: "시설 1억2천 / 총 1억4,200만",
  },
];

const FAQ = [
  { q: "완전 초보인데 가능한가요?", a: "조리·서비스 매뉴얼 및 1:1 교육 제공. 시범 운영 후 오픈 권장." },
  { q: "권장 상권/면적은?", a: "오피스·주거 혼합 상권 20~40평. 배달 병행 가능 입지면 더 좋음." },
  { q: "원가율은 어느 정도?", a: "핵심 식자재 직공급 기준 30% 내외(상권/운영 따라 변동)." },
  { q: "오픈까지 기간은?", a: "계약 후 평균 4~6주(현장 상황/인허가에 따라 달라질 수 있음)." },
];

// ──────────────────────────────────────────────────────────────
// 2) 공통 섹션 컴포넌트
// ──────────────────────────────────────────────────────────────
function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <motion.section
      id={id}
      className="w-full max-w-6xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}
      {children}
    </motion.section>
  );
}

// ──────────────────────────────────────────────────────────────
// 3) 페이지
// ──────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-bold">{BRAND.name}</a>
          <div className="hidden md:flex gap-6 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:opacity-70">{n.label}</a>
            ))}
          </div>
          <a href="#contact" className="text-sm border px-3 py-1 rounded-full">문의</a>
        </nav>
      </div>

      {/* HERO */}
      <header id="home" className="relative">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="hero" className="w-full h-[70vh] object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 h-[70vh] flex items-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-widest text-xs mb-3">FRANCHISE LANDING</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">{BRAND.tagline}</h1>
            <p className="opacity-90 max-w-2xl">매장 운영 경험이 없어도 가능한 동선·공정 설계. 리모델링 기반의 실속형 창업 모델을 소개합니다.</p>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <Section id="about" title="브랜드 소개" subtitle="핵심은 단일공정·원가율·배달병행">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div className="md:col-span-1" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src="/images/ceo.jpg" alt="대표" className="w-full rounded-2xl shadow" />
          </motion.div>
          <motion.div className="md:col-span-2 space-y-4" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <p>과장된 미사여구보다 창업자가 알아야 할 실질을 공개합니다. 공정 설계와 수치로 설명합니다.</p>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
              <li>동일 품질을 위한 표준 레시피 & 공급망</li>
              <li>홀/배달 겸용 구조로 비수기 완충</li>
              <li>리모델 중심의 CAPEX 절감 전략</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* EDGE */}
      <Section id="edge" title="경쟁력">
        <div className="grid md:grid-cols-3 gap-6">
          {EDGE.map((e, i) => (
            <motion.div key={e.t} className="p-6 rounded-2xl border shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <h3 className="font-semibold mb-2">{e.t}</h3>
              <p className="text-gray-700 text-sm leading-6">{e.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROFIT */}
      <Section id="profit" title="월 평균 수익률">
        <motion.div className="overflow-x-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <table className="w-full text-sm">
            <tbody>
              {PROFIT.map((row) => (
                <tr key={row.k} className="border-b">
                  <td className="py-3 pr-4 font-medium">{row.k}</td>
                  <td className="py-3">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <p className="text-xs text-gray-500 mt-3">* 예시는 가맹점 평균이 아닌 시뮬레이션 수치이며, 상권/운영에 따라 변동.</p>
      </Section>

      {/* COST */}
      <Section id="cost" title="창업비용" subtitle="소프트웨어 비용은 고정, 하드웨어는 현장에 따라 변동">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h4 className="font-semibold mb-2">소프트웨어</h4>
            <ul className="space-y-2 text-sm">
              {COST_SOFT.map((c) => (
                <li key={c.k} className="flex justify-between border-b py-2"><span>{c.k}</span><span>{c.v}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <h4 className="font-semibold mb-2">하드웨어(실비)</h4>
            <ul className="space-y-2 text-sm">
              {COST_HARD.map((c) => (
                <li key={c.k} className="flex justify-between border-b py-2"><span>{c.k}</span><span>{c.v}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-xl text-sm text-gray-700">같은 컨셉이라도 리모델링 범위/공실 여부에 따라 총비용이 달라집니다. 현장 실측 후 상세 견적 제공합니다.</div>
      </Section>

      {/* CASES */}
      <Section id="cases" title="BEFORE → AFTER" subtitle="실제 리모델링 사례(예시 이미지 교체)">
        <div className="space-y-10">
          {CASES.map((c, i) => (
            <motion.div key={c.name} className="grid md:grid-cols-2 gap-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
              <div>
                <img src={c.before} alt={`${c.name} before`} className="w-full rounded-xl shadow" />
              </div>
              <div>
                <img src={c.after} alt={`${c.name} after`} className="w-full rounded-xl shadow" />
                <div className="mt-4 p-4 border rounded-xl">
                  <h4 className="font-semibold">{c.name}</h4>
                  <p className="text-sm text-gray-700 mt-1">{c.memo}</p>
                  <p className="text-sm text-gray-500 mt-1">{c.total}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" title="창업 절차" subtitle="상담 → 실측 → 계약 → 교육 → 오픈">
        <ol className="grid md:grid-cols-5 gap-4 list-decimal ml-5 text-sm">
          {['상담/상권 검토','현장 실측/견적','계약/일정 확정','조리/운영 교육','시범 운영/오픈'].map((step, i) => (
            <motion.li key={step} className="p-4 border rounded-xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>{step}</motion.li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="자주 묻는 질문">
        <div className="space-y-4">
          {FAQ.map((f, i) => (
            <details key={i} className="rounded-xl border p-4">
              <summary className="font-medium cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="문의" subtitle="연락 주시면 24시간 내 회신합니다.">
        <form action="https://formspree.io/f/xzzvwlna" method="POST" className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="이름" className="border rounded-lg px-3 py-2" />
          <input name="phone" required placeholder="연락처" className="border rounded-lg px-3 py-2" />
          <input name="area" placeholder="희망 상권/지역" className="border rounded-lg px-3 py-2 md:col-span-2" />
          <textarea name="msg" placeholder="문의 내용" className="border rounded-lg px-3 py-2 md:col-span-2" rows={5} />
          <button type="submit" className="md:col-span-2 border rounded-xl px-4 py-3 font-semibold hover:bg-gray-50">문의 보내기</button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <p>대표번호: {BRAND.phone}</p>
          <p>주소: {BRAND.address}</p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-semibold">{BRAND.name}</div>
              <div className="opacity-70">{BRAND.address}</div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-70">이용약관</a>
              <a href="#" className="hover:opacity-70">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 고정 문의 버튼 */}
      <a href="#contact" className="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded-full shadow-lg text-sm">지금 문의하기</a>
    </div>
  );
}
