import Graduation from "../assets/graduation hats.gif";

export default function EducationAndCertifications() {
  return (
    <div className="page">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[60%_40%] gap-8 items-start">
        {/* LEFT: Degree Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm
                      transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">
              Master’s in Applied Computer Science
            </h3>
            <p className="text-sm text-zinc-400 mb-1">Concordia University</p>
            <p className="text-sm text-zinc-300">
              Focused on software engineering, distributed systems, and machine
              learning.
            </p>

            <a
              href="https://www.concordia.ca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700"
            >
              Concordia University
            </a>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm
                      transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">
              B.Tech in Computer Science Engineering
            </h3>
            <p className="text-sm text-zinc-400 mb-1">Undergraduate Degree</p>
            <p className="text-sm text-zinc-300">
              Strong foundation in data structures, algorithms, and core CS
              concepts.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img
            src={Graduation}
            alt="Graduation"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>

      <section>
        <h3>Certifications</h3>
        <ul>
          <li>AWS Cloud Practitioner</li>
          <li>AWS Solutions Architect Associate</li>
          <li>Tableau / SQL / Python Certifications</li>
        </ul>
      </section>
    </div>
  );
}
