import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <div className="space-y-12">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`grid md:grid-cols-2 gap-8 items-center ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          <div className="container row mt-5">
            {/* Text Section */}
            <div className="col-12 col-md-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 m-2 mt-4 text-sm bg-blue-100 text-blue-800 border rounded-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="m-2 px-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {project.title}{" "}
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-100 w-md-[100px] h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
