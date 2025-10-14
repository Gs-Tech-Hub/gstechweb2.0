'use client';
import { useState } from 'react';
import { ProjectOnboardingSchema } from '../lib/utils/validation';
import PopUpMessage from './PopUpMessage';
import { handleResponse } from '../helperFunction/popUp';


const ProjectOnboardingForm = () => {
  const [displayPopUp, setdisplayPopUp] = useState(false)
  const [popUpMsg, setpopUpMsg] = useState('')
  const [popUpType, setpopUpType] = useState('')
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    projectType: '',
    requirements: '',
    budget: 0,
    timeline: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'budget' ? parseFloat(value) || '' : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (formData.companyName === '' || formData.projectType === '' || formData.requirements === '' || formData.email === '') {
        handleResponse('fill in all required fields', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
        return;
      }
      const validated = ProjectOnboardingSchema.safeParse(formData);

      if (!validated.success) {
        handleResponse(validated.error.errors[0].message || 'an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
        return;
      }

      const response = await fetch('/api/project-onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(response)
      if (!response.ok) {
        handleResponse(data?.error || 'an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
      } else {
        handleResponse('Project onboarding submitted successfully!', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          projectType: '',
          requirements: '',
          budget: 0,
          timeline: '',
          notes: ''
        });
      }
    } catch (error) {
      handleResponse(error?.message || 'an error occured, try again later', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Custom Software',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
            Contact Person *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            // className="mt-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
          // required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
          // required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
          // required
          >
            <option value="">Select a project type</option>
            {projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
            Budget (USD)
          </label>
          <input
            type="tel"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
            min="0"
            step="1000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
          Project Requirements *
        </label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows={4}
          className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '

        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
          Timeline
        </label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          placeholder="e.g., 3 months, Q4 2025"
          className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '

        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className='mt-2 outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 cursor-pointer primaryColor font-bold text-white rounded-md focus:outline-none   focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          {loading ? 'Submitting...' : 'Submit Project'}
        </button>
      </div>
      <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />

    </form>
  );
};

export default ProjectOnboardingForm;