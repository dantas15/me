export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Comp Júnior</h2>
        <p className="text-gray-600">9 months | Lavras, Minas Gerais, Brazil</p>
        <p className="prose prose-neutral dark:prose-invert">
          <strong>Projects Director</strong> | Aug 2023 - Present | 5 months
          <br />
          I am primarily responsible for the strategic planning of the projects
          sector, identifying the feasibility of new projects, and introducing
          new technologies into Comp Júnior through training and documentation.
          I also structured a platform for technical documentation and internal
          management of the Projects Department. Additionally, I organize squads
          for project development and ensure the quality of deliveries, mainly
          through Code Review.
          <br />
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">IT Technician</h2>
        <p className="text-gray-600">
          Jan 2022 - Dec 2022 | 1 year | Amparo, São Paulo, Brazil
        </p>
        <p className="prose prose-neutral dark:prose-invert mb-1">
          This was my first practical experience after completing the technical
          course, applying theoretical concepts such as design patterns,
          database modeling, state management with React Context, and web
          development in general.
        </p>
        <p className="prose prose-neutral dark:prose-invert mb-1">
          I was responsible for structuring the migration of a legacy system in
          Delphi to the web.
        </p>
        <p className="prose prose-neutral dark:prose-invert mb-1">
          Played a crucial role in selecting technologies for the web system,
          especially on the front-end.
        </p>
        <p className="prose prose-neutral dark:prose-invert">
          Worked with Typescript, React.js, MantineUI, React Context, Zod,
          TanStack Query, etc.
        </p>
      </div>
    </section>
  );
}
