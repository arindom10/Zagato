import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="text-[#FF6B00] text-sm uppercase tracking-wider font-medium">
          CONTACT US
        </span>
        <h1 className="text-4xl font-bold mt-1">GET IN TOUCH</h1>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <form className="p-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-gray-100 px-4 py-2 rounded-sm focus:outline-none text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-gray-100 px-4 py-2 rounded-sm focus:outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 px-4 py-2 rounded-sm focus:outline-none text-sm"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-100 px-4 py-2 rounded-sm focus:outline-none text-sm"
              />
            </div>

            <div>
              <textarea
                placeholder="Leave a Comment"
                className="w-full bg-gray-100 px-4 py-2 rounded-sm focus:outline-none text-sm h-32 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F0F1B] hover:bg-[#0F0F1B]/90 text-white py-3 rounded-sm transition-colors duration-200 text-sm font-medium flex items-center justify-center"
            >
              Send Message
              <span className="ml-2 text-lg">•</span>
            </button>
          </form>

          <div className="relative h-full w-full">
            <Image
              src="https://i.ibb.co.com/zWkRm15m/Image-1.webp"
              alt="Contact visual"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
