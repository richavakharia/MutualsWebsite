import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
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

        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-6 text-white/60">Last updated: 3/31/2026</p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Information We Collect</h2>
        <p className="text-white/80">
          We collect information you provide directly to us, as well as information collected automatically when you use the Service.
        </p>
        <p className="mt-4 text-white/80">
          Information You Provide: phone number, profile information (name, bio, interests), profile photo or images, experiences/plans/activities you create or join, messages and content shared within chats or plans, and reports/feedback/support requests.
        </p>
        <p className="mt-4 text-white/80">
          Information Collected Automatically: device information, log and usage data, diagnostic data, and approximate or precise location information (with your permission).
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Location Information</h2>
        <p className="text-white/80">
          With your permission, Mutuals may collect precise location information from your device to support core features. We use location data to show relevant experiences, plans, and activity near you, recommend people in your general area, and improve discovery and relevance within the app. Mutuals does not share your exact location with other users.
        </p>
        <p className="mt-4 text-white/80">
          Other users may see that you are nearby or within a general area, but your precise coordinates are never displayed. You can disable location access at any time through your device settings.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">How We Use Your Information</h2>
        <p className="text-white/80">
          We use the information we collect to operate, maintain, and improve Mutuals. This includes creating and managing your account, enabling users to discover experiences and create or join plans, recommending nearby users and activities, supporting messaging and social features, improving app performance and reliability, analyzing usage trends, detecting and preventing fraud or abuse, enforcing our Terms of Service, and responding to support or safety requests.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">How We Share Information</h2>
        <p className="text-white/80">
          We do not sell your personal information. We only share information in limited circumstances. With Other Users: your profile name, profile photo, and experiences/plans you create or join are visible. Your phone number is not shared. With Service Providers: we may share information with trusted third-party providers including hosting (Amazon Web Services), chat services (Stream), and analytics (Mixpanel). For Legal and Safety Reasons: we may disclose information to comply with laws, respond to lawful requests, protect user safety, or enforce our Terms of Service.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Data Retention</h2>
        <p className="text-white/80">
          We retain personal information for as long as necessary to provide the Service. We may retain information longer to comply with legal obligations, resolve disputes, enforce agreements, or maintain safety and security. If you delete your account, we will take reasonable steps to delete or anonymize your personal information, subject to legal and operational requirements.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Security</h2>
        <p className="text-white/80">
          We implement reasonable technical and organizational safeguards to protect your information. However, no system is completely secure, and we cannot guarantee absolute security of your data. We continuously work to improve our security practices.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Your Choices and Controls</h2>
        <p className="text-white/80">
          You have control over your information through your account and device settings. You may update your profile information, disable location access through your device settings, block or report other users, and request account deletion.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Children&apos;s Privacy</h2>
        <p className="text-white/80">
          Mutuals is intended only for individuals 18 years of age or older. We do not knowingly collect personal information from individuals under 18. If we become aware of such collection, we will delete the account and associated information.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Changes to This Privacy Policy</h2>
        <p className="text-white/80">
          We may update this Privacy Policy from time to time. If we make material changes, we may notify users through the app or by other appropriate means. Your continued use of Mutuals after changes become effective constitutes your acceptance of the updated policy.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-semibold">Contact Information</h2>
        <p className="text-white/80">
          If you have any questions about this Privacy Policy, you may contact us at: Mutuals AI Inc., 2261 Market Street #66810, San Francisco, CA 94114, United States. Email:{" "}
          <a
            href="mailto:anagh@mutualssocial.com"
            className="underline underline-offset-4 transition hover:text-white"
          >
            anagh@mutualssocial.com
          </a>
          . Website: https://mutualssocial.com
        </p>
      </div>
    </main>
  );
}