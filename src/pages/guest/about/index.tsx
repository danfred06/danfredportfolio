const profilePhoto = "/danfred.jpg";
export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl">
        {/* Section Label */}
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          About Me
        </p>

        {/* Profile Image */}
        <div className="w-48 h-48 mt-6">
          <img
            src={profilePhoto}
            alt="Danfred Ando"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900">
          Hi, I'm Danfred Ando
        </h1>

        {/* Introduction */}
        <p className="mt-6 text-lg leading-8 text-gray-600">
          I'm Danfred Ando, a passionate and aspiring technology enthusiast
          who enjoys learning about web development and creating modern,
          user-friendly digital experiences.
        </p>

        {/* Additional Information */}
        <p className="mt-4 text-lg leading-8 text-gray-600">
          I’m continuously improving my skills in programming and technology,
          while exploring new ideas and building projects that turn creative
          concepts into functional websites and applications.
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            Web Development
          </span>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            Technology
          </span>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            Programming
          </span>
        </div>
      </div>
    </section>
  );
}