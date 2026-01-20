import Graduation from "../assets/graduation hats.gif";
import Lbrce from "../assets/lbrce-mylavaram-management-quota.avif";
import concordia from "../assets/maxresdefault.jpg";
import { motion } from "framer-motion";
import solutionsArchitec from "../assets/image.png";
import cloudPractitioner from "../assets/cloudpractitioner.png";
import Hackerrank from "../assets/HackerRank.png";

const Card = ({ img, alt, title, school, link }) => (
  <motion.div
    className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-slate-900/100
               transition hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-slate-900/70 hover:shadow-xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Image */}
    <div className="h-[300px] sm:h-[220px] w-full overflow-hidden">
      <img src={img} alt={alt} className="w-full h-full object-cover" />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{school}</p>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
      >
        Visit Website →
      </a>
    </div>
  </motion.div>
);

export default function EducationAndCertifications() {
  return (
    <div className="page">
      {/* Top Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-[40%_28%_28%] gap-6 items-start">
        <div className="w-full">
          <img
            src={Graduation}
            alt="Graduation"
            className="w-full h-[270px] sm:h-[420px] lg:h-[620px] object-cover"
          />
        </div>
        <Card
          img={concordia}
          alt="Concordia University"
          title="Master’s in Applied Computer Science"
          school="Concordia University"
          link="https://www.concordia.ca"
        />

        <Card
          img={Lbrce}
          alt="Laki Reddy Balireddy College of Engineering"
          title="B.Tech in Computer Science Engineering"
          school="Laki Reddy Balireddy College of Engineering"
          link="https://lbrce.ac.in/"
        />

        <section
          className="
              col-span-1 order-last 
              sm:order-none sm:mt-10
              lg:-mr-[50.75rem]
              lg:-mt-[70.75rem]
              justify-self-end self-end
              w-full rounded-2xl border border-zinc-800 bg-slate-900/80 p-6
              hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-slate-900/70 hover:shadow-xl
            "
        >
          <h3 className="flex justify-center  text-xl font-semibold text-zinc-100">
            Certifications
          </h3>

          <ul className="mt-4 flex flex-row items-center  justify-center flex-wrap gap-6 text-zinc-300">
            <li className="flex gap-3">
              <a
                href="https://www.credly.com/earner/earned/badge/1bf81830-938b-4040-9143-b1878c78e498"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={cloudPractitioner}
                  className="sm:h-[100px] lg:h-[100px]"
                />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a
                href="https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={solutionsArchitec}
                  alt="AWS Solutions Architect badge"
                  className="sm:h-[100px] lg:h-[100px] cursor-pointer"
                />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a
                href="https://www.hackerrank.com/certificates/47cc97720837"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img src={Hackerrank} className="sm:h-[400px] lg:h-[90px]" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
