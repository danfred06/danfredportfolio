import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export function HomePageBannerSection() {
  return (
    <Section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center space-y-7">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          Welcome to My Portfolio
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Danfred Ando
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          I'm a passionate technology enthusiast and aspiring web developer
          who enjoys creating modern, responsive, and user-friendly websites
          using React, Tailwind CSS, and modern web technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-5">

          <NavLink to="/about">
            <Button className="w-full sm:w-auto text-base px-8 h-12 shadow-lg shadow-blue-500/20">
              About Me
            </Button>
          </NavLink>

          <NavLink to="/contact">
            <Button
              variant="secondary"
              className="w-full sm:w-auto text-base px-8 h-12 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700"
            >
              Contact Me
            </Button>
          </NavLink>

        </div>

        {/* Skills */}
        <div className="pt-8 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm">
            React
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm">
            Tailwind CSS
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm">
            JavaScript
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm">
            Web Development
          </span>
        </div>

      </div>
    </Section>
  );
}