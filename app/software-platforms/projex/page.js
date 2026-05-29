// app/software-platforms/projex/page.js

export const metadata = {
  title:
    "Projex | Workflow & Project Delivery Platform | GDC Digital Solutions",
  description:
    "Discover Projex, the all-in-one workflow and project delivery platform by GDC Digital Solutions. Streamline your team's productivity and project management.",
};

export default function ProjexPlatformPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-customPurple font-semibold mb-4">
            Powered by GDC Digital Solutions
          </p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Projex
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Projex is a smart, cloud-based workforce and project management
            platform designed to streamline task coordination, team performance,
            and project delivery across engineering, architecture, and
            construction businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://projex.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-customPurple text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Visit Projex Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 3h7m0 0v7m0-7L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="overflow-hidden">
            <img
              src="/assets/images/website-dev/projex/2.png"
              alt="Projex Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
