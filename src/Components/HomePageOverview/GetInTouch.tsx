"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-10">
      <div className="w-[80%] bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="text-center pt-6">
          <span className="text-[#FF6B00] text-sm uppercase tracking-wider font-medium">
            CONTACT US
          </span>
          <h1 className="text-3xl font-bold mt-2 text-[#0F0F1B]">
            GET IN TOUCH
          </h1>
        </div>

        <div className="grid md:grid-cols-2">
          <form className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-sm font-semibold text-black">
                  First Name
                </span>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
                />
              </div>
              <div>
                <span className="block text-sm font-semibold text-black">
                  Last Name
                </span>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
                />
              </div>
            </div>

            <div>
              <span className="block text-sm font-semibold text-black">
                Email
              </span>
              <input
                type="email"
                placeholder="Enter your valid email"
                className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
              />
            </div>

            <div>
              <span className="block text-sm font-semibold text-black">
                Phone Number
              </span>
              <input
                type="tel"
                placeholder="Enter your valid phone number"
                className="w-full bg-gray-100 px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm mt-1"
              />
            </div>

            <div>
              <span className="block text-sm font-semibold text-black">
                Leave a Comment
              </span>
              <textarea
                placeholder="Write a message..."
                className="w-full bg-gray-100 text-black px-4 py-3 rounded border border-gray-300 focus:outline-none text-sm min-h-[120px] resize-none mt-1"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F0F1B] text-white hover:bg-white hover:text-[#050510] border border-black py-3 rounded-xl transition-colors duration-200 text-sm font-medium flex items-center justify-center"
            >
              Send Message
              <ArrowRight size={18} className="ml-2 " />
            </button>
          </form>

          <div className="relative hidden md:block h-[500px]">
            <Image
              src="https://i.ibb.co.com/ynydPGYK/Image-1.webp"
              alt="Contact visual"
              layout="fill"
              objectFit="cover"
              className="rounded-r-xl"
              priority
            />
            <div className="absolute inset-0 bg-black/30 rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
