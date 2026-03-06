import { CheckCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          You&apos;re In!
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-lg mb-6">
          We just sent <span className="text-[#f59e0b] font-semibold">The Free Testosterone Optimization Blueprint</span> to your email.
        </p>

        {/* Email Icon Box */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Mail className="w-6 h-6 text-[#3b82f6]" />
            <span>Check your inbox (and spam folder)</span>
          </div>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="text-[#3b82f6] hover:text-[#60a5fa] text-sm transition-colors"
        >
          ← Back to home
        </Link>

        {/* Footer */}
        <footer className="mt-16 text-gray-500 text-sm">
          <p>&copy; 2026 Rock Mountain Performance</p>
        </footer>
      </div>
    </div>
  );
}
