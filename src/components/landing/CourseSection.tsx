import React from "react";
import "./CourseSection.css";

const CourseSection: React.FC = () => {
  return (
    <section className="course-section">

      <div className="section-header">
        <p className="subtitle">
          Here’s Who Can Benefit from Our Course :
        </p>

        <h2 className="main-title">
          Made for Students, Professionals & Entrepreneurs Alike
        </h2>
      </div>

      <div className="card-grid">

        <div className="card">
          <h3>Students & Freshers</h3>
          <p>
            Kickstart your career in digital marketing with hands-on skills that make you industry-ready.
          </p>
           <a 
  href="https://wa.me/918470079475" 
  target="_blank" 
  rel="noopener noreferrer"
  className="connect-btn"
>
  Connect With Us →
</a>
        </div>

        <div className="card">
          <h3>Working Professionals</h3>
          <p>
            Upgrade your profile and open new career opportunities with advanced digital marketing knowledge.
          </p>
                  <a 
  href="https://wa.me/918470079475" 
  target="_blank" 
  rel="noopener noreferrer"
  className="connect-btn"
>
  Connect With Us →
</a>
        </div>

        <div className="card">
          <h3>Entrepreneurs</h3>
          <p>
            Grow your business online, generate leads, and boost sales with proven marketing strategies.
          </p>
                   <a 
  href="https://wa.me/918470079475" 
  target="_blank" 
  rel="noopener noreferrer"
  className="connect-btn"
>
  Connect With Us →
</a>
        </div>

        <div className="card">
          <h3>Freelancers</h3>
          <p>
            Master digital marketing and start your freelancing journey with high-income potential.
          </p>
                  <a 
  href="https://wa.me/918470079475" 
  target="_blank" 
  rel="noopener noreferrer"
  className="connect-btn"
>
  Connect With Us →
</a>
        </div>

        <div className="card">
          <h3>Job Seekers</h3>
          <p>
            Stand out in interviews with practical digital marketing expertise and certifications.
          </p>
                  <a 
  href="https://wa.me/918470079475" 
  target="_blank" 
  rel="noopener noreferrer"
  className="connect-btn"
>
  Connect With Us →
</a>
        </div>

        <div className="card">
          <h3>Business Owners</h3>
          <p>
            Expand your brand visibility and manage digital campaigns effectively to scale your business.
          </p>
                   <a 
  href="https://wa.me/918470079475" 
  target="_blank" 
  rel="noopener noreferrer"
  className="connect-btn"
>
  Connect With Us →
</a>
        </div>

      </div>

    </section>
  );
};

export default CourseSection;
