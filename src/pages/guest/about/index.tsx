export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          About Me
        </p>

        <div className="mt-6 h-48 w-48">
          <img
            src="/danfred.jpg"
            alt="Danfred Ando"
            className="h-full w-full rounded-full object-cover shadow-lg"
          />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
          Hi, I'm Danfred Ando
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          I'm Danfred Ando, a passionate and aspiring technology enthusiast
          who enjoys learning about web development and creating modern,
          user-friendly digital experiences.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          I'm continuously improving my skills in programming and technology,
          while exploring new ideas and building projects that turn creative
          concepts into functional websites and applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700">
            Web Development
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700">
            Technology
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700">
            Programming
          </span>
        </div>

      </div>
    </section>
  );
}