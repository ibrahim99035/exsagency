import React, { useState } from 'react';
import '../CSS/Careers.css';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import Icon from "/icons/ExesLogoLatge.webp";

const jobListings = [
  {
    title: 'Job Title 1',
    location: 'Location 1',
    type: 'Remote',
    description: 'Job Description 1',
    requirements: [
      'requirement 1',
      'requirement 2',
      'requirement 3'
    ],
    benefits: [
      'benefit 1',
      'benefit 2',
      'benefit 3'
    ]
  },
  {
    title: 'Job Title 2',
    location: 'Location 2',
    type: 'Part-Time',
    description: 'Job Description 2',
    requirements: [
      'requirement 1',
      'requirement 2',
      'requirement 3'
    ],
    benefits: [
      'benefit 1',
      'benefit 2',
      'benefit 3'
    ]
  },
  {
    title: 'Job Title 3',
    location: 'Location 3',
    type: 'Full-Time',
    description: 'Job Description 3',
    requirements: [
      'requirement 1',
      'requirement 2',
      'requirement 3'
    ],
    benefits: [
      'benefit 1',
      'benefit 2',
      'benefit 3'
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (index) => {
    setSelectedJob(index === selectedJob ? null : index);
  };

  return (
    <>
      <div className="overlay-image"></div>
      <Header />
      {/* <HeroSection /> */}
      <section id="careers">
        <div className="container">
          <h2>Job Offers</h2>
          <div id='logo-container'>
            <img src={Icon} alt="Malls Logo" />
          </div>
          <div className="job-listings">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className={`job-card ${selectedJob === index ? 'expanded' : ''}`}
                onClick={() => handleJobClick(index)}
              >
                <h3>{job.title}</h3>
                <p className="location">{job.location}</p>
                <p className="type">{job.type}</p>
                <p className="description">{job.description}</p>
                {selectedJob === index && (
                  <div className="job-details">
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <h4>Benifits</h4>
                    <ul>
                      {job.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="apply-now">
            <h3>Apply To Job</h3>
            <p>If you are intersted in any job offer we have, kundly deop your resume and cover letter to <a href="mailto:jobs@example.com">jobs@example.com</a>.</p>
          </div>
        </div>
      </section>
      <Up />
      <Footer />
    </>
  );
};

export default Careers;