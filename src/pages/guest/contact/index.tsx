import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Contact Me
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            You can reach me through my contact information and social media.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Gmail */}
          <a
            href="mailto:andodanfred@gmail.com"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
          >
            <Mail className="w-8 h-8 text-blue-600 mb-4" />

            <h2 className="text-xl font-semibold text-gray-900">
              Gmail
            </h2>

            <p className="mt-2 text-gray-600 break-all">
              andodanfred@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+639649305979"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
          >
            <Phone className="w-8 h-8 text-green-600 mb-4" />

            <h2 className="text-xl font-semibold text-gray-900">
              Phone Number
            </h2>

            <p className="mt-2 text-gray-600">
              +63 964 930 5979
            </p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/danfred.ando.3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
          >
            <div className="text-3xl mb-4">ⓕ</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Facebook
            </h2>

            <p className="mt-2 text-gray-600">
              Visit my Facebook
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
          >
            <div className="text-3xl mb-4">◎</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Instagram
            </h2>

            <p className="mt-2 text-gray-600">
              Visit my Instagram
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}