const Skills = ({ skills }) => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      {skills.length === 0 ? (
        <p>No skills information available.</p>
      ) : (
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill._id} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                >
                  {skill.proficiency}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;