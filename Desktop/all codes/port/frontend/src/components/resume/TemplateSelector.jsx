import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import resumeService from '../../api/resume';

const TemplateSelector = ({ onSelect }) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await resumeService.getTemplates();
        setTemplates(data);
      } catch (err) {
        setError(err.message || 'Failed to load templates');
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  if (loading) return <div>Loading templates...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="template-selector">
      <h2>Choose a Resume Template</h2>
      <div className="templates-grid">
        {templates.map((template) => (
          <div key={template._id} className="template-card">
            <img src={template.thumbnail} alt={template.name} />
            <h3>{template.name}</h3>
            <Button onClick={() => onSelect(template)} variant="primary">
              Select
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;