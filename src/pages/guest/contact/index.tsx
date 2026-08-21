import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Contact Me
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            You can reach me through my contact information and social media.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          <a
            href="mailto:andodanfred@gmail.com"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <Mail className="mb-4 h-8 w-8 text-blue-600" />

            <h2 className="text-xl font-semibold text-gray-900">
              Gmail
            </h2>

            <p className="mt-2 break-all text-gray-600">
              andodanfred@gmail.com
            </p>
          </a>

          <a
            href="tel:+639649305979"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <Phone className="mb-4 h-8 w-8 text-green-600" />

            <h2 className="text-xl font-semibold text-gray-900">
              Phone Number
            </h2>

            <p className="mt-2 text-gray-600">
              +63 964 930 5979
            </p>
          </a>

          <a
            href="https://www.facebook.com/danfred.ando.3"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 text-3xl">ⓕ</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Facebook
            </h2>

            <p className="mt-2 text-gray-600">
              Visit my Facebook
            </p>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 text-3xl">◎</div>

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