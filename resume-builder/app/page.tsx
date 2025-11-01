"use client";

import { resumeData } from "@/lib/resume-data";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Action Buttons */}
        <div className="mb-6 flex justify-end gap-4 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Download PDF
          </button>
        </div>

        {/* Resume Container */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 print:shadow-none print:rounded-none">
          {/* Header Section */}
          <header className="border-b-2 border-gray-300 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {resumeData.personalInfo.name}
            </h1>
            <h2 className="text-xl text-gray-700 mb-4">
              {resumeData.personalInfo.title}
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <span>{resumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <span>{resumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <span>{resumeData.personalInfo.location}</span>
              </div>
              {resumeData.personalInfo.linkedin && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">LinkedIn:</span>
                  <span>{resumeData.personalInfo.linkedin}</span>
                </div>
              )}
              {resumeData.personalInfo.github && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">GitHub:</span>
                  <span>{resumeData.personalInfo.github}</span>
                </div>
              )}
              {resumeData.personalInfo.website && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">Website:</span>
                  <span>{resumeData.personalInfo.website}</span>
                </div>
              )}
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {job.position}
                      </h4>
                      <p className="text-gray-700 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p className="font-medium">
                        {job.startDate} - {job.endDate}
                      </p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Education
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {edu.degree} in {edu.field}
                      </h4>
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
                      {edu.gpa && (
                        <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p className="font-medium">{edu.graduationDate}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Skills
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Technical Skills</h4>
                <p className="text-gray-700 leading-relaxed">
                  {resumeData.skills.technical.join(" • ")}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Soft Skills</h4>
                <p className="text-gray-700 leading-relaxed">
                  {resumeData.skills.soft.join(" • ")}
                </p>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          {resumeData.certifications && resumeData.certifications.length > 0 && (
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Certifications
              </h3>
              <div className="space-y-2">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">{cert.name}</h4>
                      <p className="text-gray-700 text-sm">{cert.issuer}</p>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">{cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {resumeData.projects && resumeData.projects.length > 0 && (
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Notable Projects
              </h3>
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-gray-900">{project.name}</h4>
                      {project.link && (
                        <span className="text-sm text-gray-600">{project.link}</span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{project.description}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Technologies:</span>{" "}
                      {project.technologies.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-sm text-gray-600 print:hidden">
          <p>Click &quot;Download PDF&quot; to save your resume as a PDF file</p>
          <p className="mt-2">
            To customize: Edit the data in{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">lib/resume-data.ts</code>
          </p>
        </div>
      </div>
    </div>
  );
}
