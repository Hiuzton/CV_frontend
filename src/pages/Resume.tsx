import {
  educations,
  workExperiences,
  skills,
  languages,
} from "../data/resumeData";

export default function Resume() {
  return (
    <div className="space-y-12">
      <h1>Resume</h1>
      {/* Work Experience Section */}
      <div className="container mt-5">
        <section className="row">
          <h2 className="col-8">Work Experience</h2>
          <div className="col-4">
            {workExperiences.map((exp, index) => (
              <div key={index} className="row">
                <div className="col-12 col-md-6 text-end">
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <div className="col-12 col-md-6 text-right">
                  <h5 className="text-lg font-semibold">{exp.position}</h5>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr />
      </div>

      {/* Education Section */}
      <div className="container">
        <section className="row">
          <h2 className="col-8">Education</h2>
          <div className="col-4">
            {educations.map((edu, index) => (
              <div key={index} className="row">
                <div className="col-12 col-md-6 text-end">
                  <span className="text-gray-500">{edu.period}</span>
                </div>
                <div className="col-12 col-md-6 text-right">
                  <h5 className="text-lg font-semibold">{edu.institution}</h5>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr />
      </div>

      {/* Skills & Expertise Section */}
      <div className="container">
        <section className="row">
          <h2 className="col-10">Skills & Expertise</h2>
          <div className="col-2 text-right">
            <ul className="list-disc list-inside text-gray-600">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
        <hr />
      </div>

      {/* Language */}
      <div className="container">
        <section className="row">
          <h2 className="col-10">Languages</h2>
          <div className="col-2 text-right">
            <ul className="list-disc list-inside text-gray-600">
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        </section>
        <hr />
      </div>
    </div>
  );
}
