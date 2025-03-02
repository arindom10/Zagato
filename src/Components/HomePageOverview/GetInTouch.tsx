"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-3xl w-full">
        <div className="text-center">
          <span className="text-[#FF6B00] text-sm uppercase tracking-wider font-medium">
            //CONTACT US
          </span>
          <h1 className="text-3xl font-bold mt-2 text-[#0F0F1B]">
            GET IN TOUCH
          </h1>
        </div>
        <div className="grid md:grid-cols-2">
          {/* Left Side: Form */}
          <form className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your valid email"
                className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your valid phone number"
                className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Leave a Comment
              </label>
              <textarea
                placeholder="Write a message..."
                className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm min-h-[120px] resize-none mt-1"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F0F1B] hover:bg-[#0F0F1B]/90 text-white py-3 rounded-xl transition-colors duration-200 text-sm font-medium flex items-center justify-center"
            >
              Send Message
              <ArrowRight size={18} className="ml-2" />
            </button>
          </form>

          {/* Right Side: Image */}
          <div className="relative hidden md:block">
            <Image
              src="https://i.ibb.co.com/ynydPGYK/Image-1.webp"
              alt="Contact visual"
              width={500}
              height={500}
              className="object-cover rounded-r-xl h-full"
              priority
            />
            <div className="absolute inset-0 bg-black/40 rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
