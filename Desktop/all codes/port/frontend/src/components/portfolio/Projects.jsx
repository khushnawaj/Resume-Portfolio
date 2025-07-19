import ProjectItem from './ProjectItem';

const Projects = ({ projects, isOwner = false }) => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects information available.</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectItem key={project._id} project={project} isOwner={isOwner} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;