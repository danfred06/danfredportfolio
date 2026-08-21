import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export function HomePageBannerSection() {
  return (
    <Section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-32">
      <div className="mx-auto max-w-4xl space-y-7 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
          Welcome to My Portfolio
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Danfred Ando
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
          I'm a passionate technology enthusiast and aspiring web developer
          who enjoys creating modern, responsive, and user-friendly websites
          using React, Tailwind CSS, and modern web technologies.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-5 sm:flex-row">
          <NavLink to="/about">
            <Button className="h-12 w-full px-8 text-base shadow-lg shadow-blue-500/20 sm:w-auto">
              About Me
            </Button>
          </NavLink>

          <NavLink to="/contact">
            <Button
              variant="secondary"
              className="h-12 w-full border border-gray-200 bg-white px-8 text-base text-gray-700 hover:bg-gray-50 sm:w-auto"
            >
              Contact Me
            </Button>
          </NavLink>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-8">
          {[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Web Development",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </Section>
  );
}