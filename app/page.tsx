"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram, Linkedin, X, ChevronDown, ArrowRight,
  ChevronLeft, ChevronRight, MapPin, Users, Zap
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

/* ─── Scroll Reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".reveal,.reveal-left").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Mobile detection (JS, not CSS) — used to force the hero phones
   to a straight, uniform look on small screens without fighting CSS
   specificity. Desktop is unaffected since this only flips below 640px. ─── */
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isMobile;
}

/* ─── iPhone placeholder ─── */
function IPhone({ width = 220, tilt = 0, label, sublabel, screen }: {
  width?: number; tilt?: number; label?: string; sublabel?: string; screen?: string;
}) {
  return (
    <div className="iphone-wrap" style={{ width, maxWidth: "100%", flexShrink: 0, transform: `rotate(${tilt}deg)` }}>
      <div className="iphone" style={{ width: "100%", aspectRatio: "1 / 2.165", overflow: "hidden", position: "relative" }}>
        {screen ? (
          <img src={screen} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg,#0a0d1c,#0e1228)" }} />
        )}
      </div>
      {label && (
        <div className="iphone-caption" style={{ marginTop: 16, textAlign: "center", transform: `rotate(${-tilt}deg)` }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: "rgba(242,242,245,0.82)", fontFamily: "var(--font-instrument)" }}>{label}</p>
          {sublabel && <p style={{ fontSize: 13, marginTop: 4, color: "rgba(242,242,245,0.52)", fontFamily: "var(--font-instrument)" }}>{sublabel}</p>}
        </div>
      )}
    </div>
  );
}

/* ─── Carousel ─── */
function Carousel({ images, height = 440 }: { images: string[]; height?: number }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  useEffect(() => { const t = setInterval(next, 4200); return () => clearInterval(t); }, []);
  const btnS = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute", [side]: 10, top: "50%", transform: "translateY(-50%)", zIndex: 10,
    background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", border: "none", borderRadius: "50%",
    width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "white",
  });
  return (
    <div className="carousel-outer" style={{ height, width: "100%" }}>
      <div className="carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {images.map((src, i) => (
          <div key={i} className="carousel-slide"><img src={src} alt="" /></div>
        ))}
      </div>
      <button onClick={prev} style={btnS("left")}><ChevronLeft size={15} /></button>
      <button onClick={next} style={btnS("right")}><ChevronRight size={15} /></button>
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 10 }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{ border: "none", borderRadius: "50%", cursor: "pointer", padding: 0, width: i === idx ? 16 : 5, height: 5, background: i === idx ? "white" : "rgba(255,255,255,0.35)", transition: "width 0.3s" }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Photo Strip ─── */
type StripPhoto = { src: string; credit?: { label: string; url: string } };

function PhotoStrip({ photos }: { photos: StripPhoto[] }) {
  const doubled = [...photos, ...photos];
  return (
    <div className="strip-outer">
      <div className="strip-inner">
        {doubled.map((photo, i) => (
          <div key={i} className="strip-photo">
            <img src={photo.src} alt="" />
            {photo.credit && (
              <a
                href={photo.credit.url}
                target="_blank"
                rel="noreferrer"
                className="strip-credit-overlay"
              >
                <span>{photo.credit.label}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FAQ ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-border" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <button onClick={() => setOpen(!open)} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: 24, textAlign: "left", background: "none", border: "none", cursor: "pointer" }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "rgba(242,242,245,0.85)", lineHeight: 1.5, fontFamily: "var(--font-instrument)" }}>{q}</span>
        <ChevronDown size={18} style={{ flexShrink: 0, color: "rgba(242,242,245,0.35)", transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)", marginTop: 2 }} />
      </button>
      <div className={`faq-body ${open ? "open" : ""}`}>
        <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.9, color: "rgba(242,242,245,0.46)", fontFamily: "var(--font-instrument)" }}>{a}</p>
      </div>
    </div>
  );
}

/* ─── Contact Modal ─── */
function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [msg, setMsg] = useState("");
  const inputS: React.CSSProperties = { width: "100%", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.05)", padding: "14px 20px", fontSize: 14, color: "white", outline: "none", fontFamily: "var(--font-instrument)" };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1b3e86f6-a868-41c0-a5c2-7f36ab637281",
          subject: "New Mutuals Contact Form Submission",
          name,
          email,
          message: msg,
        }),
      });
      onClose(); alert("Message sent! We'll be in touch within 48 hours.");
    } catch { alert("Error sending. Email anagh@mutualssocial.com directly."); }
  };
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)", padding: "0 24px" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: 440, borderRadius: 28, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(8,10,18,0.97)", padding: 32, color: "white" }}>
        <button onClick={onClose} style={{ position: "absolute", right: 20, top: 20, background: "none", border: "none", cursor: "pointer", color: "rgba(242,242,245,0.35)" }}><X size={20} /></button>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 24, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>Let's work together.</h2>
        <p style={{ fontSize: 14, marginBottom: 24, color: "rgba(242,242,245,0.42)", fontFamily: "var(--font-instrument)", lineHeight: 1.7 }}>Hosting an event, campus org, or looking for a partnership? We'd love to hear from you.</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name or organization" style={inputS} />
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" style={inputS} />
          <textarea required value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us what you're looking for..." rows={3} style={{ ...inputS, resize: "none" }} />
          <button type="submit" className="btn-primary" style={{ padding: "14px 20px", fontSize: 14, marginTop: 4 }}>Send Message <ArrowRight size={14} /></button>
        </form>
      </div>
    </div>
  );
}

/* ─── Toggle Section (User / Host) ─── */
function ToggleSection({ APP, bd, setContactOpen, AppleSVG }: {
  APP: string; bd: React.CSSProperties;
  setContactOpen: (v: boolean) => void; AppleSVG: ({ s }: { s?: number }) => React.ReactElement;
}) {
  const [tab, setTab] = useState<"user" | "host">("user");
  const isUser = tab === "user";
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [tab]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const userCards = [
    { label: "See who's going", sub: "Know when your friends join a plan", screen: "/ui/plans-friends.png" },
    { label: "Join in two taps", sub: "One tap to request, one to confirm", screen: "/ui/event-poster.png" },
    { label: "Chat with your plan", sub: "Every plan gets its own group chat to coordinate in", screen: "/ui/explore-categories.png" },
  ];
  const hostCards = [
    { label: "Post in minutes", sub: "Set the vibe, sell tickets, and go live", screen: "/ui/profile-page.png" },
    { label: "Get discovered", sub: "Shown to people nearby who are likely to attend, with built-in virality when friends join", screen: "/ui/map-view.png" },
    { label: "Track in real time", sub: "Watch RSVPs and ticket sales come in as they happen", screen: "/ui/plans-list.png" },
  ];
  const cards = isUser ? userCards : hostCards;

  return (
    <div className="reveal">
      {/* Underline tabs */}
      <div className="toggle-tabs" style={{ display: "flex", justifyContent: "center", gap: 64, marginBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 0 }}>
        {(["user", "host"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: 18, fontWeight: 600, fontFamily: "var(--font-instrument)",
            color: tab === t ? "white" : "rgba(242,242,245,0.35)",
            paddingBottom: 18, position: "relative",
            transition: "color 0.25s",
            textTransform: "capitalize",
          }}>
            {t === "user" ? "Users" : "Hosts"}
            <span style={{
              position: "absolute", bottom: -1, left: 0, right: 0, height: 2, borderRadius: 2,
              background: t === "user"
                ? "linear-gradient(90deg,#2B44CC,#4A66F5)"
                : "linear-gradient(90deg,#9d174d,#D6336C)",
              opacity: tab === t ? 1 : 0,
              transition: "opacity 0.25s",
            }} />
          </button>
        ))}
      </div>

      {/* Three phones + captions */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => scrollByCard(-1)}
          className="toggle-arrow toggle-arrow-left"
          aria-label="Previous"
          style={{
            display: "none", position: "absolute", left: -4, top: "38%", transform: "translateY(-50%)",
            zIndex: 5, width: 34, height: 34, borderRadius: "50%", alignItems: "center", justifyContent: "center",
            background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)", color: "white", cursor: "pointer",
          }}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          className="toggle-arrow toggle-arrow-right"
          aria-label="Next"
          style={{
            display: "none", position: "absolute", right: -4, top: "38%", transform: "translateY(-50%)",
            zIndex: 5, width: 34, height: 34, borderRadius: "50%", alignItems: "center", justifyContent: "center",
            background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)", color: "white", cursor: "pointer",
          }}
        >
          <ChevronRight size={16} />
        </button>

        <div ref={scrollRef} className="toggle-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, alignItems: "start" }}>
          {cards.map((card, i) => (
            <div key={`${tab}-${i}`} className="toggle-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ position: "relative", marginBottom: 24 }}>
                <div style={{
                  position: "absolute", inset: -28, borderRadius: "50%",
                  background: isUser
                    ? "radial-gradient(circle,rgba(43,68,204,0.18) 0%,transparent 70%)"
                    : "radial-gradient(circle,rgba(214,51,108,0.15) 0%,transparent 70%)",
                  filter: "blur(36px)", pointerEvents: "none",
                }} />
                <IPhone width={isMobile ? 222 : 200} screen={card.screen} />
              </div>
              <p style={{ fontSize: 16, fontWeight: 600, color: "white", lineHeight: 1.4, ...bd }}>{card.label}</p>
              <p style={{ marginTop: 8, fontSize: 14, color: "rgba(242,242,245,0.5)", lineHeight: 1.7, maxWidth: 200, ...bd }}>{card.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {!isUser && (
        <div style={{ marginTop: 52, display: "flex", justifyContent: "center" }}>
          <button onClick={() => setContactOpen(true)} className="btn-outline" style={{ padding: "14px 32px", fontSize: 15, display: "inline-flex", gap: 8 }}>Talk to Our Team <ArrowRight size={15} /></button>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════ PAGE ══════════════════════════════════════ */
export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  useScrollReveal();
  const isMobile = useIsMobile();

  useEffect(() => {
    const fn = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
  }, []);

  const APP = "https://apps.apple.com/us/app/mutuals-experiences-plans/id6760976464";
  const bd: React.CSSProperties = { fontFamily: "var(--font-instrument)" };

  const LUPFR_CREDIT = { label: "LUPFR Entertainment", shortLabel: "LUPFR", url: "https://lupfr.com/" };
  const MAISON_CREDIT = { label: "Maison Noir", url: "https://maisonnoir.club/" };

  const AppleSVG = ({ s = 16 }: { s?: number }) => (
    <svg style={{ width: s, height: s }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const carouselImages = [
    "/photos/slide_8_2.jpg",
    "/photos/img_4289.jpeg",
    "/photos/slide_5_5.jpg",
    "/photos/slide_8_3.jpeg",
    "/photos/slide_4.jpg",
  ];

  const stripPhotos: StripPhoto[] = [
    { src: "/photos/MAISONNOIRSF_2.jpeg", credit: MAISON_CREDIT },
    { src: "/photos/LUPFR_1.JPEG", credit: LUPFR_CREDIT },
    { src: "/photos/MAISONNOIRSF_5.JPG", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_6.jpg", credit: MAISON_CREDIT },
    { src: "/photos/FRAT_3.jpeg" },
    { src: "/photos/MAISONNOIRSF_8.jpg", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_13.jpg", credit: MAISON_CREDIT },
    { src: "/photos/LUPFR_3.JPEG", credit: LUPFR_CREDIT },
    { src: "/photos/MAISONNOIRSF_23.JPG", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_27.jpg", credit: MAISON_CREDIT },
    { src: "/photos/FRAT_4.jpeg" },
    { src: "/photos/MAISONNOIRSF_32.jpg", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_36.jpg", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_40.jpg", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_43.jpg", credit: MAISON_CREDIT },
    { src: "/photos/FRAT_8.jpeg" },
    { src: "/photos/MAISONNOIRSF_46.jpg", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_50.jpg", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_75.jpg", credit: MAISON_CREDIT },
    { src: "/photos/MAISONNOIRSF_96.jpg", credit: MAISON_CREDIT },
  ];

  /* Event card wall — real event photos, with credit links for LUPFR / Maison Noir */
  const eventCards = [
    { img: "/photos/LUPFR_2.JPEG", credit: LUPFR_CREDIT, vibe: "Yacht Edition", emoji: "🛥️", title: "Boiler Boat 003", meta: "Sat · Pier 40, SF" },
    { img: "/photos/FRAT_1.jpeg", vibe: "Frat Party", emoji: "🍺", title: "Phi Delta Theta House Party", meta: "Sat · USF" },
    { img: "/photos/LUPFR_8.JPEG", credit: LUPFR_CREDIT, vibe: "Live Music", emoji: "🎸", title: "Where's West?", meta: "Sat · Sausalito" },
    { img: "/photos/MAISONNOIRSF_26.jpg", credit: MAISON_CREDIT, vibe: "Gatsby Night", emoji: "🥂", title: "Maison Noir Vol. 2", meta: "Mon · San Francisco, CA" },
  ];

  const faqs = [
    { q: "Is Mutuals free to use?", a: "Yes, completely free for users. Discover events, join plans, and connect with people at no cost." },
    { q: "Is Mutuals available on Android?", a: "Mutuals is currently live on iOS. Android is launching very soon. Download on iPhone now and stay tuned." },
    { q: "How is Mutuals different from Eventbrite or Facebook Events?", a: "Mutuals is built around your social graph and your city, not just a listing page. You see what friends are going to, get real-time map discovery, and connect with people who share your vibe." },
    { q: "What is Campus Side Quests?", a: "Campus SideQuest is Mutuals' AI-powered campus pilot that connects students with like-minded peers based on interests, personality, and goals, and recommends communities and events they'd genuinely enjoy." },
    { q: "How do I host an event?", a: "Create an account, tap +, and fill in your event details. Takes under two minutes. For partnerships and large-scale hosting, reach out to our team." },
    { q: "How do I get my org on Mutuals?", a: "We're actively partnering with student orgs and local venues. Hit 'Contact' and we'll respond within 48 hours." },
  ];

  const S = (extra?: React.CSSProperties): React.CSSProperties => ({ maxWidth: "var(--max-w)", margin: "0 auto", padding: "96px var(--px)", ...extra });

  return (
    <>
      <div className="noise" />

      {/* ═══ NAV ═══ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? "nav-blur" : ""}`}>
        <div className="nav-inner" style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "14px var(--px)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/m-removebg-preview.png" alt="Mutuals" width={36} height={36} style={{ width: 36, height: 36, objectFit: "contain" }} />
          </Link>
          <Link href="/" className="nav-logo-center" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Image src="/mutuals-logo.png" alt="Mutuals" width={120} height={34} style={{ height: 26, width: "auto" }} priority />
          </Link>
          <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link href="/blogs" className="btn-outline" style={{ padding: "9px 18px", fontSize: 13 }}>Blogs</Link>
            <button onClick={() => setContactOpen(true)} className="btn-outline" style={{ padding: "9px 18px", fontSize: 13 }}>For Hosts</button>
          </div>
        </div>
      </nav>

      <main style={{ color: "var(--text)", overflow: "hidden", position: "relative" }}>

        {/* BACKGROUND — black with blue/purple orbs */}
        <div style={{ position: "fixed", inset: 0, zIndex: -10, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, background: "#05060a" }} />
          <div className="orb-a" style={{ position: "absolute", top: -180, left: -120, width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle,rgba(43,68,204,0.18) 0%,transparent 70%)", filter: "blur(80px)" }} />
          <div className="orb-b" style={{ position: "absolute", top: "32%", right: -140, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 70%)", filter: "blur(90px)" }} />
          <div style={{ position: "absolute", bottom: "15%", left: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,rgba(214,51,108,0.06) 0%,transparent 70%)", filter: "blur(90px)" }} />
        </div>

        {/* ═══ HERO ═══ */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "150px var(--px) 64px", textAlign: "center" }}>

          <div className="blue-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 100, padding: "8px 18px", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 32, ...bd }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#4A66F5", display: "inline-block" }} />
            Now Live on the App Store
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3rem,7.5vw,6.2rem)", lineHeight: 1.07, fontWeight: 800, maxWidth: 900 }}>
            <span style={{ color: "white" }}>Your world</span><br />
            <em className="gradient-text-mixed" style={{ fontStyle: "italic" }}>is waiting.</em>
          </h1>

          <p style={{ marginTop: 28, maxWidth: 520, fontSize: 17, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
            Mutuals is the curated IRL social network for Gen Z. Discover events, make plans, and find your people in the real world.
          </p>

          <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a href={APP} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "16px 34px", fontSize: 16 }}><AppleSVG /> Get Mutuals Free</a>
            <button onClick={() => setContactOpen(true)} className="btn-outline" style={{ padding: "16px 30px", fontSize: 15 }}>I Host Events</button>
          </div>

          <p style={{ marginTop: 18, fontSize: 15, color: "rgba(242,242,245,0.55)", ...bd }}>
            Free on iOS &middot; Android coming soon
          </p>

          {/* Three iPhones */}
          <div className="hero-phones-row" style={{ position: "relative", marginTop: 72, display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "center", gap: 28 }}>
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 520, height: 130, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(43,68,204,0.22) 0%,rgba(139,92,246,0.1) 55%,transparent 78%)", filter: "blur(30px)", pointerEvents: "none" }} />
            <div className="hero-phone-side" style={{ marginBottom: 24 }}><IPhone width={isMobile ? 222 : 182} tilt={isMobile ? 0 : -5} label="Discover everything." sublabel="Events on a live map" screen="/ui/map-view.png" /></div>
            <div style={{ zIndex: 2 }}><IPhone width={222} tilt={0} label="Any plan, any vibe." sublabel="Hangouts · Events · Parties" screen="/ui/plans-list.png" /></div>
            <div className="hero-phone-side" style={{ marginBottom: 24 }}><IPhone width={isMobile ? 222 : 182} tilt={isMobile ? 0 : 5} label="Set the vibe, your way." sublabel="Control who joins" screen="/ui/event-attendees.png" /></div>
          </div>

          <div className="scroll-hint" style={{ marginTop: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,242,245,0.2)", ...bd }}>
            <span>scroll</span><ChevronDown size={13} />
          </div>
        </section>

        {/* ═══ PHOTO STRIP ═══ */}
        <div className="divider" />
        <div style={{ padding: "56px 0" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 var(--px) 28px", textAlign: "center" }}>
            <h2 className="reveal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700 }}>
              Real moments. <em className="gradient-text" style={{ fontStyle: "italic" }}>Real people.</em>
            </h2>
          </div>
          <PhotoStrip photos={stripPhotos} />
        </div>
        <div className="divider" />

        {/* ═══ EVENT CARD WALL — the new creative element ═══ */}
        <section style={S()}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="reveal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 700, lineHeight: 1.15 }}>
              This is what a weekend
              <br /><em className="gradient-text" style={{ fontStyle: "italic" }}>on Mutuals looks like.</em>
            </h2>
            <p className="reveal delay-1" style={{ margin: "20px auto 0", maxWidth: 480, fontSize: 16, lineHeight: 1.9, color: "var(--muted)", ...bd }}>
              Every plan lives on a card: a vibe, a place, a time, and the people going. All plans are curated for you.
            </p>
          </div>

          <div className="event-card-wall" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 }}>
            {eventCards.map((ev, i) => (
              <div key={i} className={`event-card reveal delay-${Math.min(i, 3)}`}>
                <div className="ec-img">
                  <span className="ec-vibe">{ev.emoji} {ev.vibe}</span>
                  <img src={ev.img} alt="" />
                  {ev.credit && (
                    <a
                      href={ev.credit.url}
                      target="_blank"
                      rel="noreferrer"
                      className="strip-credit-overlay"
                    >
                      <span className="credit-label-full">{ev.credit.label}</span>
                      <span className="credit-label-short">{(ev.credit as any).shortLabel || ev.credit.label}</span>
                    </a>
                  )}
                </div>
                <div className="ec-body">
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "white", lineHeight: 1.45, ...bd }}>{ev.title}</h3>
                  <p style={{ marginTop: 6, fontSize: 12.5, color: "rgba(242,242,245,0.42)", lineHeight: 1.6, ...bd }}>{ev.meta}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="reveal" style={{ marginTop: 28, textAlign: "center", fontSize: 16, color: "rgba(242,242,245,0.6)", ...bd }}>
            Plans near you look just like this.
          </p>
        </section>

        <div className="divider" />

        {/* ═══ DISCOVER — carousel + copy ═══ */}
        <section style={S()}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 64, alignItems: "center" }}>
            <div className="reveal-left" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: -36, borderRadius: "50%", background: "radial-gradient(circle,rgba(43,68,204,0.2) 0%,transparent 70%)", filter: "blur(44px)", pointerEvents: "none" }} />
                <IPhone width={isMobile ? 222 : 235} label="Discover everything fun around you." sublabel="Events on a live map" screen="/ui/map-view.png" />
              </div>
            </div>
            <div>
              <h2 className="reveal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15, fontWeight: 700 }}>
                Everything fun around you.
                <br /><em className="gradient-text" style={{ fontStyle: "italic" }}>On a map.</em>
              </h2>
              <p className="reveal delay-1" style={{ marginTop: 22, lineHeight: 1.9, color: "var(--muted)", fontSize: 16, ...bd }}>
                Concerts, pop-ups, free events, house parties. See it all pinned live on a map. Filter by today, this week, or whatever's your vibe.
              </p>
              <div className="reveal delay-2" style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: <MapPin size={14} />, text: "Live map of everything happening near you" },
                  { icon: <Users size={14} />, text: "See which plans your friends joined" },
                  { icon: <Zap size={14} />, text: "If it's happening, it's on the map" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, lineHeight: 1.8, color: "rgba(242,242,245,0.6)", ...bd }}>
                    <span style={{ color: "#4A66F5" }}>{item.icon}</span>{item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ═══ TWO MODES — toggle design ═══ */}
        <section style={S()}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="reveal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 700, lineHeight: 1.15 }}>
              Be there.
              <br /><em className="gradient-text-purple" style={{ fontStyle: "italic" }}>Or make it happen.</em>
            </h2>
          </div>

          <ToggleSection APP={APP} bd={bd} setContactOpen={setContactOpen} AppleSVG={AppleSVG} />
        </section>

        <div className="divider" />

        <div className="divider" />

        {/* ═══ CAMPUS ═══ */}
        <section style={S()}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <h2 className="reveal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 700, lineHeight: 1.15 }}>
                Built for college.
                <br /><em className="gradient-text-purple" style={{ fontStyle: "italic" }}>Amplified for you.</em>
              </h2>
              <p className="reveal delay-1" style={{ marginTop: 22, lineHeight: 1.9, color: "var(--muted)", fontSize: 16, ...bd }}>
                Mutuals started on campuses because that's where the energy is. Org events, Greek life, late-night pop-ups, study meetups. It's all here.
              </p>
            </div>
            <div className="reveal delay-1 glass" style={{ borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(139,92,246,0.07),rgba(43,68,204,0.05))", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <span className="purple-badge" style={{ display: "inline-block", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18, ...bd }}>Featured Initiative</span>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 23, fontWeight: 700, color: "white", marginBottom: 12, lineHeight: 1.3 }}>Campus SideQuest</h3>
                <p style={{ fontSize: 15, lineHeight: 1.9, marginBottom: 22, color: "var(--muted)", ...bd }}>
                  Mutuals' AI-powered campus pilot connecting students with like-minded peers based on interests, personality, and goals, then recommending communities and events built for them.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22, fontSize: 14, lineHeight: 1.8, color: "rgba(242,242,245,0.52)", ...bd }}>
                  {["AI-matched intros","Personalized profiles","Community recommendations","Campus events"].map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <Link href="/campus-sidequest" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#b79bff", textDecoration: "none", ...bd }}>Learn more <ArrowRight size={13} /></Link>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ═══ FAQ ═══ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "96px var(--px)" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="reveal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 700, lineHeight: 1.15 }}>
              Questions, <em className="gradient-text" style={{ fontStyle: "italic" }}>answered.</em>
            </h2>
          </div>
          <div className="reveal delay-1">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
        </section>

        <div className="divider" />

        {/* ═══ FINAL CTA ═══ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "112px var(--px)", textAlign: "center" }}>
          <h2 className="reveal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.8rem,7.5vw,5.6rem)", fontWeight: 800, lineHeight: 1.07 }}>
            <span style={{ color: "white" }}>Discover your</span><br />
            <em className="gradient-text-mixed" style={{ fontStyle: "italic" }}>social life.</em>
          </h2>
          <p className="reveal delay-1" style={{ marginTop: 24, lineHeight: 1.9, color: "var(--muted)", fontSize: 17, ...bd }}>
            Download Mutuals and start discovering what's actually happening around you.
          </p>
          <p className="reveal delay-3" style={{ marginTop: 18, fontSize: 15, lineHeight: 1.9, color: "rgba(242,242,245,0.5)", ...bd }}>Android, coming soon.</p>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "64px var(--px) 48px" }}>
            <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, alignItems: "start" }}>
              <div>
                <Image src="/mutuals-logo.png" alt="Mutuals" width={120} height={34} style={{ height: 28, width: "auto", marginBottom: 16 }} />
                <p style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(242,242,245,0.42)", ...bd, maxWidth: 220 }}>The IRL social network for Gen Z. Discover events, make plans, find your people.</p>
              </div>
              <div className="footer-link-col">
                <h4>Download</h4>
                <a href="#" style={{ color: "rgba(242,242,245,0.3)", cursor: "default" }}>App on Android <span style={{ fontSize: 11, color: "#b79bff" }}>Soon</span></a>
              </div>
              <div className="footer-link-col">
                <h4>Company</h4>
                <a href="mailto:anagh@mutualssocial.com">Contact</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setContactOpen(true); }}>Partner with us</a>
              </div>
              <div className="footer-link-col">
                <h4>Legal</h4>
                <Link href="/support">Support</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />
          <div style={{ padding: "28px var(--px)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28 }}>
              {[
                { href: "https://www.instagram.com/joinmutuals?igsh=NTc4MTIwNjQ2YQ==", icon: <Instagram size={20} strokeWidth={1.75} /> },
                { href: "https://www.linkedin.com/company/mutualssocial/", icon: <Linkedin size={20} strokeWidth={1.75} /> },
                { href: "https://www.tiktok.com/@join_mutuals", icon: <SiTiktok size={20} /> },
              ].map(({ href, icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" style={{ color: "rgba(242,242,245,0.42)", transition: "color 0.2s" }}>{icon}</a>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "rgba(242,242,245,0.25)", ...bd, lineHeight: 1.8 }}>© 2026 Mutuals AI Inc. All rights reserved.</p>
          </div>
        </footer>
      </main>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
}
