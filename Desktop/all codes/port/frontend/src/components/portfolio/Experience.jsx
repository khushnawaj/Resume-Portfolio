import ExperienceItem from './ExperienceItem';

const Experience = ({ experience, isOwner = false }) => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      {experience.length === 0 ? (
        <p>No experience information available.</p>
      ) : (
        <div className="experience-list">
          {experience.map((exp) => (
            <ExperienceItem key={exp._id} experience={exp} isOwner={isOwner} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;