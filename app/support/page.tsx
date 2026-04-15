export default function SupportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-[#05070f]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(40,58,160,0.32)_0%,rgba(40,58,160,0.18)_22%,transparent_48%),linear-gradient(180deg,#05070f_0%,#071021_55%,#05070f_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(117,39,189,0.14)_0%,transparent_35%)]" />

      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <h1 className="mb-4 text-3xl font-bold">Support</h1>

        <p className="text-white/80">
          Need help with Mutuals? Reach out to us and we’ll get back to you as soon as possible.
        </p>

        <p className="mt-4 text-white/80">
          Email:{" "}
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