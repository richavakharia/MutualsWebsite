"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const APP = "https://apps.apple.com/us/app/mutuals-experiences-plans/id6760976464";

const AppleSVG = ({ s = 16 }: { s?: number }) => (
  <svg style={{ width: s, height: s }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function Blogs() {
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
            <Link href="/blogs" className="btn-outline" style={{ padding: "9px 18px", fontSize: 13, borderColor: "rgba(74,102,245,0.5)", color: "white" }}>Blogs</Link>
            <a href={APP} target="_blank" rel="noreferrer" className="btn-white" aria-label="Download on the App Store" style={{ width: 36, height: 36, padding: 0, borderRadius: "50%" }}>
              <AppleSVG s={16} />
            </a>
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

        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "150px var(--px) 100px", textAlign: "center" }}>

          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3.5rem,9vw,7rem)", lineHeight: 1.05, fontWeight: 800, maxWidth: 780 }}>
            <em className="gradient-text" style={{ fontStyle: "italic" }}>Blogs</em>
          </h1>

          <p style={{ marginTop: 16, fontSize: 19, color: "rgba(242,242,245,0.85)", ...bd }}>
            Our thoughts on connection. Coming soon.
          </p>

          <p style={{ marginTop: 16, maxWidth: 640, fontSize: 19, lineHeight: 1.8, color: "rgba(242,242,245,0.85)", ...bd }}>
            Blogs will be where we write about the ideas behind Mutuals: social fragmentation, AI's growing role in work and life, the future of connection, how social media is shaping this generation, and what it looks like to use tech for good.
          </p>

          <Link href="/" className="btn-outline" style={{ marginTop: 56, padding: "14px 28px", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
