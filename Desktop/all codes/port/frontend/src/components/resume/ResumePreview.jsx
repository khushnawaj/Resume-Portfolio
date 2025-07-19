const ResumePreview = ({ data, template }) => {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <div className={`resume-template ${template?.name || 'default'}`}>
        <div className="resume-header">
          <h1>{data.name}</h1>
          {data.title && <h2>{data.title}</h2>}
          {data.contact && (
            <div className="contact-info">
              {data.contact.email && <span>{data.contact.email}</span>}
              {data.contact.phone && <span>{data.contact.phone}</span>}
              {data.contact.linkedin && <span>{data.contact.linkedin}</span>}
              {data.contact.github && <span>{data.contact.github}</span>}
            </div>
          )}
        </div>

        {data.summary && (
          <div className="resume-section">
            <h3>Summary</h3>
            <p>{data.summary}</p>
          </div>
        )}

        {data.experience?.length > 0 && (
          <div className="resume-section">
            <h3>Experience</h3>
            {data.experience.map((exp) => (
              <div key={exp._id} className="experience-item">
                <div className="experience-header">
                  <h4>{exp.position}</h4>
                  <div className="experience-meta">
                    <span>{exp.company}</span>
                    <span>
                      {new Date(exp.startDate).toLocaleDateString()} -{' '}
                      {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                    </span>
                  </div>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.education?.length > 0 && (
          <div className="resume-section">
            <h3>Education</h3>
            {data.education.map((edu) => (
              <div key={edu._id} className="education-item">
                <h4>{edu.degree}</h4>
                <div className="education-meta">
                  <span>{edu.institution}</span>
                  <span>
                    {new Date(edu.startDate).toLocaleDateString()} -{' '}
                    {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : 'Present'}
                  </span>
                </div>
                {edu.fieldOfStudy && <p>Field: {edu.fieldOfStudy}</p>}
              </div>
            ))}
          </div>
        )}

        {data.skills?.length > 0 && (
          <div className="resume-section">
            <h3>Skills</h3>
            <div className="skills-list">
              {data.skills.map((skill) => (
                <div key={skill._id} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                    <span className="skill-percent">{skill.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;