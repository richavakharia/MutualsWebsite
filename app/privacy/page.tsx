"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Globe } from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly to us, as well as information collected automatically when you use the Service.\n\nInformation You Provide: phone number, profile information (name, bio, interests), profile photo or images, experiences/plans/activities you create or join, messages and content shared within chats or plans, and reports/feedback/support requests.\n\nInformation Collected Automatically: device information, log and usage data, diagnostic data, and approximate or precise location information (with your permission).`,
  },
  {
    title: "Location Information",
    body: `With your permission, Mutuals may collect precise location information from your device to support core features. We use location data to show relevant experiences, plans, and activity near you, recommend people in your general area, and improve discovery and relevance within the app. Mutuals does not share your exact location with other users.\n\nOther users may see that you are nearby or within a general area, but your precise coordinates are never displayed. You can disable location access at any time through your device settings.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to operate, maintain, and improve Mutuals. This includes creating and managing your account, enabling users to discover experiences and create or join plans, recommending nearby users and activities, supporting messaging and social features, improving app performance and reliability, analyzing usage trends, detecting and preventing fraud or abuse, enforcing our Terms of Service, and responding to support or safety requests.`,
  },
  {
    title: "How We Share Information",
    body: `We do not sell your personal information. We only share information in limited circumstances. With Other Users: your profile name, profile photo, and experiences/plans you create or join are visible. Your phone number is not shared. With Service Providers: we may share information with trusted third-party providers including hosting (Amazon Web Services), chat services (Stream), and analytics (Mixpanel). For Legal and Safety Reasons: we may disclose information to comply with laws, respond to lawful requests, protect user safety, or enforce our Terms of Service.`,
  },
  {
    title: "Data Retention",
    body: `We retain personal information for as long as necessary to provide the Service. We may retain information longer to comply with legal obligations, resolve disputes, enforce agreements, or maintain safety and security. If you delete your account, we will take reasonable steps to delete or anonymize your personal information, subject to legal and operational requirements.`,
  },
  {
    title: "Security",
    body: `We implement reasonable technical and organizational safeguards to protect your information. However, no system is completely secure, and we cannot guarantee absolute security of your data. We continuously work to improve our security practices.`,
  },
  {
    title: "Your Choices and Controls",
    body: `You have control over your information through your account and device settings. You may update your profile information, disable location access through your device settings, block or report other users, and request account deletion.`,
  },
  {
    title: "Children's Privacy",
    body: `Mutuals is intended only for individuals 18 years of age or older. We do not knowingly collect personal information from individuals under 18. If we become aware of such collection, we will delete the account and associated information.`,
  },
  {
    title: "Changes to This Privacy Policy",
    body: `We may update this Privacy Policy from time to time. If we make material changes, we may notify users through the app or by other appropriate means. Your continued use of Mutuals after changes become effective constitutes your acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
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
            <em className="gradient-text" style={{ fontStyle: "italic" }}>Privacy Policy</em>
          </h1>

          <p style={{ marginTop: 16, fontSize: 14, color: "rgba(242,242,245,0.4)", ...bd }}>
            Last updated: 3/31/2026
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 40 }}>
            {sections.map((section, i) => (
              <div key={i}>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontWeight: 700, color: "white", marginBottom: 12 }}>
                  {section.title}
                </h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", marginBottom: 12, ...bd }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="glass" style={{ marginTop: 8, borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(43,68,204,0.08),rgba(139,92,246,0.05))", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontWeight: 700, color: "white", marginBottom: 16 }}>
                Contact Information
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", marginBottom: 20, ...bd }}>
                If you have any questions about this Privacy Policy, you may contact us at: Mutuals AI Inc., 2261 Market Street #66810, San Francisco, CA 94114, United States.
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
