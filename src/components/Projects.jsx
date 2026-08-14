import { projects } from "../constants";

const ProjectCard = ({ project }) => (
  <article className="project-card group">
    <div className="project-image-wrap">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-overlay" />
    </div>

    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-xl font-bold text-white">{project.name}</h3>
        </div>

        {project.template && <span className="template-pill">Demo</span>}
      </div>

      <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/60">
        {project.description}
      </p>
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" className="section-shell section-pad">
    <div className="section-kicker">04 · Projects</div>

    <h2 className="section-title">
      Things I've <span className="gradient-text">built</span>.
    </h2>

    <p className="mt-5 max-w-3xl text-white/60">
      My projects and applications are showcased here.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  </section>
);

export default Projects;
