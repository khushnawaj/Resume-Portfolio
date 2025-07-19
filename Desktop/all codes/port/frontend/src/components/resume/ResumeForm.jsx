import { useState } from 'react';
import Button from '../ui/Button';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import SkillForm from './SkillForm';

const ResumeForm = ({ initialData, onSubmit, onBack }) => {
  const [formData, setFormData] = useState(initialData);
  const [activeSection, setActiveSection] = useState('basic');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactChange = (e) => {
    setFormData({
      ...formData,
      contact: {
        ...formData.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleAddEducation = (education) => {
    setFormData({
      ...formData,
      education: [...formData.education, education],
    });
  };

  const handleAddExperience = (experience) => {
    setFormData({
      ...formData,
      experience: [...formData.experience, experience],
    });
  };

  const handleAddSkill = (skill) => {
    setFormData({
      ...formData,
      skills: [...formData.skills, skill],
    });
  };

  const handleRemoveItem = (section, id) => {
    setFormData({
      ...formData,
      [section]: formData[section].filter((item) => item._id !== id),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="resume-form">
      <h2>Build Your Resume</h2>
      <div className="form-sections">
        <div className="section-nav">
          <Button
            variant={activeSection === 'basic' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveSection('basic')}
          >
            Basic Info
          </Button>
          <Button
            variant={activeSection === 'education' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveSection('education')}
          >
            Education
          </Button>
          <Button
            variant={activeSection === 'experience' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </Button>
          <Button
            variant={activeSection === 'skills' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeSection === 'basic' && (
            <div className="form-section">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Professional Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Summary</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
              <h3>Contact Information</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.contact.email || ''}
                  onChange={handleContactChange}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.contact.phone || ''}
                  onChange={handleContactChange}
                />
              </div>
              <div className="form-group">
                <label>LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.contact.linkedin || ''}
                  onChange={handleContactChange}
                />
              </div>
              <div className="form-group">
                <label>GitHub</label>
                <input
                  type="url"
                  name="github"
                  value={formData.contact.github || ''}
                  onChange={handleContactChange}
                />
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <EducationForm
              education={formData.education}
              onAdd={handleAddEducation}
              onRemove={handleRemoveItem}
            />
          )}

          {activeSection === 'experience' && (
            <ExperienceForm
              experience={formData.experience}
              onAdd={handleAddExperience}
              onRemove={handleRemoveItem}
            />
          )}

          {activeSection === 'skills' && (
            <SkillForm
              skills={formData.skills}
              onAdd={handleAddSkill}
              onRemove={handleRemoveItem}
            />
          )}

          <div className="form-actions">
            {activeSection !== 'basic' && (
              <Button type="button" onClick={onBack}>
                Back
              </Button>
            )}
            <Button type="submit" variant="primary">
              {activeSection === 'skills' ? 'Preview Resume' : 'Continue'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;