"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function CampusSideQuestPage() {
  const bd: React.CSSProperties = { fontFamily: "var(--font-instrument)" };

  return (
    <>
      <div className="noise" />

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "14px var(--px)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/m-removebg-preview.png" alt="Mutuals" width={36} height={36} style={{ width: 36, height: 36, objectFit: "contain" }} />
          </Link>
          <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Image src="/mutuals-logo.png" alt="Mutuals" width={120} height={34} style={{ height: 26, width: "auto" }} priority />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link href="/blogs" className="btn-outline" style={{ padding: "9px 18px", fontSize: 13 }}>Blogs</Link>
          </div>
        </div>
      </nav>

      <main style={{ color: "var(--text)", overflow: "hidden", position: "relative", minHeight: "100vh" }}>

        {/* BACKGROUND — matches homepage */}
        <div style={{ position: "fixed", inset: 0, zIndex: -10, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, background: "#05060a" }} />
          <div style={{ position: "absolute", top: -180, left: -120, width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", top: "32%", right: -140, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(43,68,204,0.12) 0%,transparent 70%)", filter: "blur(90px)" }} />
          <div style={{ position: "absolute", bottom: "15%", left: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,rgba(214,51,108,0.06) 0%,transparent 70%)", filter: "blur(90px)" }} />
        </div>

        <section style={{ maxWidth: 720, margin: "0 auto", padding: "160px var(--px) 120px" }}>

          <span className="purple-badge" style={{ display: "inline-block", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 22, ...bd }}>
            Featured Initiative
          </span>

          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.6rem,6vw,4.2rem)", lineHeight: 1.08, fontWeight: 800 }}>
            <em className="gradient-text-purple" style={{ fontStyle: "italic" }}>Campus SideQuest</em>
          </h1>

          <p style={{ marginTop: 20, maxWidth: 560, fontSize: 18, lineHeight: 1.7, color: "rgba(242,242,245,0.85)", ...bd }}>
            Helping students find like-minded people, meaningful friendships, and communities on campus.
          </p>

          <div className="glass" style={{ marginTop: 32, borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span style={{ color: "#b79bff", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", ...bd }}>Note</span>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(242,242,245,0.55)", ...bd }}>
              Campus SideQuest will live on its own website, separate from mutualssocial.com. Details here are a preview of what's coming.
            </p>
          </div>

          <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
              Campus SideQuest is Mutuals' AI-powered campus pilot focused on connecting students with like-minded peers based on their interests, personality, goals, hobbies, and the types of experiences they're looking for.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
              Students complete a personalized profile, allowing our system to identify highly compatible students and introduce them through curated matches and shared interests. In addition to connecting students with one another, Campus SideQuest also recommends relevant campus organizations, communities, and events that align with each student's interests.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
              Our goal is to make it easier for students to build meaningful friendships, discover communities they genuinely belong in, and become more involved in campus life.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
              Beyond helping students, Campus SideQuest also serves as an important research initiative for Mutuals. Every interaction helps us better understand how friendships form, how communities grow, and how people discover meaningful real-world experiences, laying the foundation for Mutuals' long-term vision of building the intelligence layer for real-world participation.
            </p>
          </div>

          <div className="glass" style={{ marginTop: 44, borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(139,92,246,0.08),rgba(43,68,204,0.05))", pointerEvents: "none" }} />
            <p style={{ position: "relative", fontFamily: "var(--font-playfair)", fontSize: 20, lineHeight: 1.6, color: "white", fontStyle: "italic" }}>
              Our mission is simple: help every student find their people and build a stronger sense of community on campus.
            </p>
          </div>

          <Link href="/" className="btn-outline" style={{ marginTop: 44, padding: "14px 28px", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
