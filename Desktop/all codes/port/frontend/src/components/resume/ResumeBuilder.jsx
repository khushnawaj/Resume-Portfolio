import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import TemplateSelector from './TemplateSelector';
import Button from '../ui/Button';
import resumeService from '../../api/resume';

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    name: '',
    title: '',
    contact: {},
    summary: '',
    experience: [],
    education: [],
    skills: [],
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { user } = useAuth();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setStep(2);
  };

  const handleResumeDataChange = (data) => {
    setResumeData(data);
    setStep(3);
  };

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      const pdf = await resumeService.generateResume(
        resumeData,
        selectedTemplate?._id,
        user.token
      );
      // Create a blob URL for the PDF
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="resume-builder">
      {step === 1 && (
        <TemplateSelector onSelect={handleTemplateSelect} />
      )}
      {step === 2 && (
        <ResumeForm
          initialData={resumeData}
          onSubmit={handleResumeDataChange}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <>
          <ResumePreview data={resumeData} template={selectedTemplate} />
          <div className="resume-actions">
            <Button onClick={() => setStep(2)}>Edit Resume</Button>
            <Button
              variant="primary"
              onClick={handleGeneratePDF}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Download PDF'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResumeBuilder;