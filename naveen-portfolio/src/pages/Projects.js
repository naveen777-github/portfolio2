const projects = [
  {
    title: "Machine-Generated Text Detection",
    desc: "Built deep learning models to distinguish AI-generated text from human-written content using large-scale datasets. Trained Uni-LSTM and Bi-LSTM models on 610K+ samples with comparative evaluation and error analysis to study generalization limits of LLM-generated text.",
    stack: ["Python", "PyTorch", "NLP", "Deep Learning"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Neural Machine Translation with Transformers",
    desc: "Developed an end-to-end English–French neural machine translation pipeline using Hugging Face T5 on the IWSLT 2017 dataset. Implemented preprocessing, tokenization, training, hyperparameter tuning, and evaluation with strong METEOR and F1 scores.",
    stack: ["Python", "Hugging Face", "Transformers", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Stock Market Time-Series Analysis",
    desc: "Engineered a 12+ year financial time-series dataset and built ML pipelines using regression and LSTM models. Developed an interactive Streamlit dashboard with SQL-backed analytics to visualize trends and model predictions.",
    stack: ["Python", "Pandas", "SQL", "LSTM", "Streamlit"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sentiment Analysis on Large-Scale Text Data",
    desc: "Designed sentiment classification pipelines using Multinomial Naive Bayes on large textual datasets. Achieved up to 86.4% F1 score through systematic preprocessing, feature analysis, and misclassification evaluation.",
    stack: ["Python", "Scikit-learn", "NLP", "Data Analysis"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Selected work</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              A few projects showcasing software engineering, data, and ML work.
            </p>
          </div>

          {/* Simple filter UI (static for now) */}
          <div className="flex gap-2">
            <button className="rounded-full bg-cyan-400/15 text-cyan-200 border border-cyan-400/25 px-4 py-2 text-sm hover:bg-cyan-400/20">
              All
            </button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300 border border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200">
              ML
            </button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300 border border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200">
              Software
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm transition
                         hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-slate-900/60 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold leading-snug group-hover:text-cyan-200">
                  {p.title}
                </h2>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-300">{p.desc}</p>

              {/* Stack pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800/70 border border-slate-700 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <a
                  href={p.github}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2 text-sm
                             text-slate-200 hover:border-cyan-400/35 hover:bg-slate-800"
                >
                  GitHub
                </a>

                <a
                  href={p.demo}
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium
                             text-slate-950 hover:bg-cyan-300"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
