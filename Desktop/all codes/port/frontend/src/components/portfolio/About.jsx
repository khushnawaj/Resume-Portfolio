const About = ({ aboutData }) => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutData.image || '/images/default-profile.jpg'} alt="Profile" />
        </div>
        <div className="about-text">
          <p>{aboutData.bio || 'No bio information available.'}</p>
          <div className="about-details">
            <div>
              <strong>Location:</strong> {aboutData.location || 'Not specified'}
            </div>
            <div>
              <strong>Email:</strong> {aboutData.email || 'Not specified'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;