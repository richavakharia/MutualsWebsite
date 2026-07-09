"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Globe } from "lucide-react";

export default function SupportPage() {
  const bd: React.CSSProperties = { fontFamily: "var(--font-instrument)" };

  return (
    <>
      <div className="noise" />

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="nav-inner" style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "14px var(--px)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/m-removebg-preview.png" alt="Mutuals" width={36} height={36} style={{ width: 36, height: 36, objectFit: "contain" }} />
          </Link>
          <Link href="/" className="nav-logo-center" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Image src="/mutuals-logo.png" alt="Mutuals" width={120} height={34} style={{ height: 26, width: "auto" }} priority />
          </Link>
          <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
            <em className="gradient-text" style={{ fontStyle: "italic" }}>Support</em>
          </h1>

          <p style={{ marginTop: 24, maxWidth: 520, fontSize: 17, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
            Need help with Mutuals? Our team is here for you. Reach out and we'll get back to you as soon as possible.
          </p>

          <div className="glass" style={{ marginTop: 44, borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(43,68,204,0.08),rgba(139,92,246,0.05))", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(242,242,245,0.5)", marginBottom: 20, ...bd }}>
                Contact Us
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ color: "#4A66F5" }}><Mail size={16} /></span>
                <a href="mailto:anagh@mutualssocial.com" style={{ fontSize: 15, color: "white", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: 2, ...bd }}>
                  anagh@mutualssocial.com
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#4A66F5" }}><Globe size={16} /></span>
                <a href="https://mutualssocial.com" style={{ fontSize: 15, color: "white", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: 2, ...bd }}>
                  mutualssocial.com
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
