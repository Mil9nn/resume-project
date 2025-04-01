function ResumePreview({ data }) {
    // Format date to be more readable
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };
  
    // Format skills as individual items
    const renderSkills = (skillsString) => {
      if (!skillsString) return null;
      
      return skillsString.split(/\s+/).filter(Boolean).map((skill, index) => (
        <span key={index} className="skill-item">
          {skill}
        </span>
      ));
    };
  
    return (
      <div className="resume-container">
        <div className="personal-info">
          <h3>Personal Information</h3>
          <div className="namePlusEmail">
            <p>{data.personal.name}</p>
            <p>{data.personal.email}</p>
          </div>
          <p>{data.personal.phone}</p>
        </div>
  
        <div className="education">
          <h3>Education</h3>
          {data.education.college && (
            <>
              <p className="college-name">{data.education.college}</p>
              <div className="degreePlusCgpa">
                <p>{data.education.degree}</p>
                <p>CGPA: {data.education.cgpa}</p>
              </div>
              <p className="date">
                {formatDate(data.education.startDate)} - {formatDate(data.education.endDate)}
              </p>
            </>
          )}
        </div>
  
        <div className="experience-section">
          <h3>Professional Experience</h3>
          {data.experience.jobTitle && (
            <div className="experience">
              <p className="jobTitle">{data.experience.jobTitle}</p>
              <p className="company-name">{data.experience.company}</p>
              <p className="job-description">{data.experience.jobDescription}</p>
              <p className="date">
                {formatDate(data.experience.startDate)} - {formatDate(data.experience.endDate)}
              </p>
            </div>
          )}
          
          {data.experience2.jobTitle && (
            <div className="experience">
              <p className="jobTitle">{data.experience2.jobTitle}</p>
              <p className="company-name">{data.experience2.company}</p>
              <p className="job-description">{data.experience2.jobDescription}</p>
              <p className="date">
                {formatDate(data.experience2.startDate)} - {formatDate(data.experience2.endDate)}
              </p>
            </div>
          )}
        </div>
  
        {data.skills.skills && (
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-list">
              {renderSkills(data.skills.skills)}
            </div>
          </div>
        )}
  
        {data.skills.achievements && (
          <div className="achievements-section">
            <h3>Achievements</h3>
            <div>{data.skills.achievements}</div>
          </div>
        )}
      </div>
    );
  }
  
  export default ResumePreview;