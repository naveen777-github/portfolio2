import { useState } from "react";

const projects = [
  {
    title: "Machine Translation with Transformers",
    desc: "Developed an end-to-end neural machine translation pipeline using Hugging Face Transformers (T5) on the IWSLT 2017 English–French dataset (100K samples, 10 epochs). Implemented preprocessing, tokenization, training, hyperparameter tuning, and evaluation using Precision, Recall, F1, and METEOR, achieving F1 = 0.8972 and METEOR = 0.516.",
    stack: ["Python", "Hugging Face", "Transformers", "NLP"],
    github: "#",
    demo: "#",
    category: "ML",
  },
  {
    title: "Machine-Generated Text Detection",
    desc: "Designed and evaluated deep learning models (Uni-LSTM, Bi-LSTM) to distinguish machine-generated text from human-written text. Preprocessed and trained on a 610K+ sample dataset, achieving 70.18% accuracy (Uni-LSTM) and 70.11% accuracy (Bi-LSTM) with comparative loss analysis. Conducted evaluation and error analysis to assess generalization challenges and detection limitations in LLM-generated content.",
    stack: ["Python", "PyTorch", "NLP", "Deep Learning"],
    github: "#",
    demo: "#",
    category: "ML",
  },
  {
    title: "Stock Market Time-Series Analysis",
    desc: "Engineered and validated a large-scale financial time-series dataset spanning 12+ years (2010–2022), including normalization, anomaly detection, and missing-value handling. Built and evaluated Regression and LSTM pipelines with a 70/30 train–test split focusing on robustness and validation. Developed an interactive analytics dashboard using Streamlit and SQL (SQLite) to visualize trends.",
    stack: ["Python", "Pandas", "SQL", "Machine Learning", "Streamlit"],
    github: "#",
    demo: "#",
    category: "Software",
  },
  {
    title: "Sentimental Data Analysis",
    desc: "Performed large-scale data profiling and quality assessment on textual datasets, identifying noise, sparsity, and 70K+ low-frequency features. Implemented and evaluated sentiment classification using Multinomial Naive Bayes, achieving up to 86.4% F1 score through systematic preprocessing and parameter tuning. Conducted misclassification analysis to evaluate model assumptions, statistical behavior, and data limitations.",
    stack: ["Python", "NLP", "Scikit-learn", "Data Analysis"],
    github: "#",
    demo: "#",
    category: "ML",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

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

          {/* Filter buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("All")}
              className={`rounded-full px-4 py-2 text-sm border ${
                filter === "All"
                  ? "bg-cyan-400/20 text-cyan-200 border-cyan-400/30"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("ML")}
              className={`rounded-full px-4 py-2 text-sm border ${
                filter === "ML"
                  ? "bg-cyan-400/20 text-cyan-200 border-cyan-400/30"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200"
              }`}
            >
              ML
            </button>

            <button
              onClick={() => setFilter("Software")}
              className={`rounded-full px-4 py-2 text-sm border ${
                filter === "Software"
                  ? "bg-cyan-400/20 text-cyan-200 border-cyan-400/30"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200"
              }`}
            >
              Software
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm transition
                         hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-slate-900/60 hover:shadow-xl"
            >
              <h2 className="text-lg font-semibold group-hover:text-cyan-200">
                {p.title}
              </h2>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-300">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
