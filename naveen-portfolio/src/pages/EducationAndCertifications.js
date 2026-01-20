import Graduation from "../assets/graduation hats.gif";
import Lbrce from "../assets/lbrce-mylavaram-management-quota.avif";
import concordia from "../assets/download.jpeg";
import { motion } from "framer-motion";

export default function EducationAndCertifications() {
  return (
    <div className="page">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[70%_30%] gap-1 items-start">
        {/* LEFT: Degree Cards */}
        <motion.div
          className="flex flex-row justify-between w-full overflow-hidden rounded-xl 
                 bg-slate-900/100 border border-zinc-800

                hover:-translate-x-1 hover:border-cyan-400/35 hover:bg-slate-900/70 hover:shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Image */}
          <div className="h-[260px] w-auto overflow-hidden">
            <img
              src={concordia}
              alt="Concordia University"
              className="h-full w-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-zinc-100">
              Master’s in Applied Computer Science
            </h3>

            <p className="mt-2 text-sm text-zinc-400">Concordia University</p>

            <a
              href="https://www.concordia.ca"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center text-sm font-medium
                 text-cyan-400 hover:text-cyan-300"
            >
              Visit Website →
            </a>
          </div>

          {/* Image */}
          <div className="h-[260px] w-auto overflow-hidden">
            <img
              src={Lbrce}
              alt="Laki Reddy Balireddy College of Engineering"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-zinc-100">
              Master’s in Applied Computer Science
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Laki Reddy Balireddy College of Engineering
            </p>

            <a
              href="https://lbrce.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center text-sm font-medium
                 text-cyan-400 hover:text-cyan-300"
            >
              Visit Website →
            </a>
          </div>
        </motion.div>

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
