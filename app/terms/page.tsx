import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#05070f]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(40,58,160,0.32)_0%,rgba(40,58,160,0.18)_22%,transparent_48%),linear-gradient(180deg,#05070f_0%,#071021_55%,#05070f_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(117,39,189,0.14)_0%,transparent_35%)]" />

      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8">

        {/* LOGO BUTTON */}
        <div className="mb-8">
          <Link href="/" aria-label="Go home">
            <Image
              src="/m-removebg-preview.png"
              alt="Mutuals home"
              width={48}
              height={48}
              className="h-10 w-auto cursor-pointer transition hover:opacity-80"
              priority
            />
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-white/60 mb-6">Last updated: 3/31/2026</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Eligibility</h2>
        <p className="text-white/80">You must be 18+ to use Mutuals.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Description of Service</h2>
        <p className="text-white/80">
          Mutuals helps users discover experiences, create plans, and connect with others.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Platform Disclaimer</h2>
        <p className="text-white/80">
          Mutuals does not organize or supervise events. Users participate at their own risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">User Responsibilities</h2>
        <p className="text-white/80">
          You are responsible for your actions, content, and plans.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">User Conduct</h2>
        <p className="text-white/80">
          No harassment, illegal activity, scams, or unsafe events.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Account Security</h2>
        <p className="text-white/80">
          You are responsible for your account and login credentials.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Termination</h2>
        <p className="text-white/80">
          We may suspend accounts that violate terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="text-white/80">
          Mutuals is not liable for user interactions or events.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Governing Law</h2>
        <p className="text-white/80">
          Governed by California law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="text-white/80">
          <a
            href="mailto:anagh@mutualssocial.com"
            className="underline underline-offset-4 transition hover:text-white"
          >
            anagh@mutualssocial.com
          </a>
        </p>
      </div>
    </main>
  );
}