'use client';
import ProjectOnboardingForm from '../../components/ProjectOnboardingForm';

export default function ProjectOnboarding() {

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Start Your Project
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your project and let&apos;s bring your vision to life.
          </p>
        </div>
        <ProjectOnboardingForm />

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need help or have questions? Contact us at{' '}
            <a href="mailto:contact@gstech.com" className="text-indigo-600 hover:text-indigo-500">
              info@gstechhub.com.ng
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}