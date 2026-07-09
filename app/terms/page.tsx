"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";

const sections = [
  { title: "Eligibility", body: "You must be 18 years of age or older to use Mutuals." },
  { title: "Description of Service", body: "Mutuals helps users discover experiences, create plans, and connect with others in real life." },
  { title: "Platform Disclaimer", body: "Mutuals does not organize or supervise events. Users participate in all activities at their own risk." },
  { title: "User Responsibilities", body: "You are solely responsible for your actions, content, and plans created on the platform." },
  { title: "User Conduct", body: "No harassment, illegal activity, scams, or unsafe events are permitted on Mutuals." },
  { title: "Account Security", body: "You are responsible for maintaining the security of your account and login credentials." },
  { title: "Termination", body: "We reserve the right to suspend or terminate accounts that violate these Terms of Service." },
  { title: "Limitation of Liability", body: "Mutuals is not liable for user interactions, third-party events, or any outcomes arising from use of the platform." },
  { title: "Governing Law", body: "These terms are governed by the laws of the State of California." },
];

export default function TermsPage() {
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
          <div style={{ position: "absolute", top: -180, left: -120, width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle,rgba(43,68,204,0.18) 0%,transparent 70%)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", top: "32%", right: -140, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 70%)", filter: "blur(90px)" }} />
          <div style={{ position: "absolute", bottom: "15%", left: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,rgba(214,51,108,0.06) 0%,transparent 70%)", filter: "blur(90px)" }} />
        </div>

        <section style={{ maxWidth: 720, margin: "0 auto", padding: "160px var(--px) 120px" }}>

          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.6rem,6vw,4.2rem)", lineHeight: 1.08, fontWeight: 800 }}>
            <em className="gradient-text" style={{ fontStyle: "italic" }}>Terms of Service</em>
          </h1>

          <p style={{ marginTop: 16, fontSize: 14, color: "rgba(242,242,245,0.4)", ...bd }}>
            Last updated: 3/31/2026
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 36 }}>
            {sections.map((section, i) => (
              <div key={i}>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontWeight: 700, color: "white", marginBottom: 12 }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="glass" style={{ marginTop: 8, borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(43,68,204,0.08),rgba(139,92,246,0.05))", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontWeight: 700, color: "white", marginBottom: 16 }}>
                Contact
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#4A66F5" }}><Mail size={16} /></span>
                <a href="mailto:anagh@mutualssocial.com" style={{ fontSize: 15, color: "white", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: 2, ...bd }}>
                  anagh@mutualssocial.com
                </a>
              </div>
            </div>
          </div>

          <Link href="/" className="btn-outline" style={{ marginTop: 44, padding: "14px 28px", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
