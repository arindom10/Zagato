import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050510] text-white py-10 px-4 md:px-8 lg:px-16">
      {/* Top section with heading and button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          HAVE AN AMAZING LAYOUT? LET&apos;S TALK{" "}
          <MessageSquare className="text-yellow-400 h-6 w-6 fill-yellow-400" />
        </h2>
        <Link
          href="#contact"
          className="mt-4 md:mt-0 border border-white px-6 py-2 hover:bg-white hover:text-[#050510] transition-colors"
        >
          GET IN TOUCH
        </Link>
      </div>

      {/* Main footer content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Quick links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quicks links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/department"
                className="hover:text-white transition-colors"
              >
                Department
              </Link>
            </li>
            <li>
              <Link
                href="/price-plans"
                className="hover:text-white transition-colors"
              >
                Price plans
              </Link>
            </li>
            <li>
              <Link
                href="/fabric-printing"
                className="hover:text-white transition-colors"
              >
                Fabric printing
              </Link>
            </li>
            <li>
              <Link
                href="/business-growth"
                className="hover:text-white transition-colors"
              >
                Business growth
              </Link>
            </li>
            <li>
              <Link
                href="/customer-services"
                className="hover:text-white transition-colors"
              >
                Customer services
              </Link>
            </li>
          </ul>
        </div>

        {/* Social info */}
        <div>
          <h3 className="text-lg font-medium mb-4">Social info</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                href="https://facebook.com"
                className="hover:text-white transition-colors"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                className="hover:text-white transition-colors"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                className="hover:text-white transition-colors"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://dribbble.com"
                className="hover:text-white transition-colors"
              >
                Dribbble
              </Link>
            </li>
          </ul>
        </div>

        {/* Sign up */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            Sign up here for regular updates
          </h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-b border-gray-600 py-2 pr-4 focus:outline-none focus:border-white text-sm w-full"
            />
            <button className="ml-2 flex items-center text-sm">
              Send now <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <p className="text-gray-400 mb-1">supports@gmail.com</p>
          <p className="text-gray-400">+123 456 7890 12</p>
        </div>

        {/* Popular updates */}
        <div>
          <h3 className="text-lg font-medium mb-4">Popular updates</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-16 h-16 relative overflow-hidden rounded">
                <Image
                  src="https://i.ibb.co.com/bR7sFp8f/post-01-150x150-jpg.webp"
                  alt="Textiles during pandemic"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <Link
                  href="/blog/textiles-pandemic"
                  className="text-sm font-medium hover:text-blue-400 transition-colors"
                >
                  Can textiles lead the way during the pandemic?
                </Link>
                <p className="text-xs text-gray-400 mt-1">March 15, 2021</p>
              </div>
            </div>

            <div className="flex gap-3 border border-blue-500 p-2">
              <div className="flex-shrink-0 w-16 h-16 relative overflow-hidden rounded">
                <Image
                  src="https://i.ibb.co.com/JR7jvWZB/post-02-150x150-jpg.webp"
                  alt="Silk Lands Cotton"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <Link
                  href="/blog/silk-lands-cotton"
                  className="text-sm font-medium hover:text-blue-400 transition-colors"
                >
                  The Story of a Silk Lands Cotton like ComfortRayon
                </Link>
                <p className="text-xs text-gray-400 mt-1">March 9, 2021</p>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <span className="bg-blue-600 text-white text-xs px-2 py-1">
                120
              </span>
              <span className="bg-blue-400 text-white text-xs px-2 py-1">
                85
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800 text-sm">
        <p className="text-gray-400 mb-4 md:mb-0">
          Copyright © 2025, Golmavior Limited. All rights reserved.
        </p>
        <div className="flex gap-4 text-gray-400">
          <Link href="/terms" className="hover:text-white transition-colors">
            Term & condition
          </Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy policy
          </Link>
          <span>|</span>
          <Link href="/support" className="hover:text-white transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
