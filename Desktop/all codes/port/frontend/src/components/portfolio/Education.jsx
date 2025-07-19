import EducationItem from './EducationItem';

const Education = ({ education, isOwner = false }) => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      {education.length === 0 ? (
        <p>No education information available.</p>
      ) : (
        <div className="education-list">
          {education.map((edu) => (
            <EducationItem key={edu._id} education={edu} isOwner={isOwner} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Education;