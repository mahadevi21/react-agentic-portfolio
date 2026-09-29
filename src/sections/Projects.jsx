import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects, projectFilters } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // Only show filters that have at least one project.
  const filters = useMemo(
    () => projectFilters.filter((f) => f === "All" || projects.some((p) => p.categories.includes(f))),
    []
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="section section--tint" aria-labelledby="projects-title">
      <Reveal className="container">
        <SectionHeading
          id="projects-title"
          title="Projects"
          intro="Projects I built while learning and practising. Each one lists what it actually does."
        />

        <div className="filters" role="group" aria-label="Filter projects by type">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className="filter"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="visually-hidden" role="status" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
          {filter !== "All" ? ` in ${filter}` : ""}
        </p>

        <div className="grid grid--3">
          {visible.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
