import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

function InputForm({ formData, setFormData, updateFinalData }) {
  const [isDisplayed, setIsDisplayed] = useState({
    personal: false,
    education: false,
    experience: false,
    experience2: false,
    skills: false,
  });

  function toggleVisibility(section) {
    setIsDisplayed((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function handleChange(event, section) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [name]: value },
    }));
  }

  function handleAdd(section) {
    updateFinalData(section, formData[section]);
    toggleVisibility(section);
  }

  return (
    <div>
      <form>
        {/* Personal Info */}
        <div className="form-section">
          <h2 className="section-title">Personal Information</h2>
          <div className="input-field-personal">
            <input
              onChange={(e) => handleChange(e, "personal")}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.personal.name}
            />
            <div
              style={{ display: isDisplayed.personal ? "flex" : "none" }}
              className="input-field-component"
            >
              <input
                onChange={(e) => handleChange(e, "personal")}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.personal.email}
              />
              <input
                onChange={(e) => handleChange(e, "personal")}
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.personal.phone}
              />
              <Fab
                onClick={() => handleAdd("personal")}
                color="primary"
                size="small"
                aria-label="add"
                className="action-button"
              >
                <AddIcon />
              </Fab>
            </div>
            <Fab
              onClick={() => toggleVisibility("personal")}
              style={{ display: isDisplayed.personal ? "none" : "inline-flex" }}
              color="primary"
              size="small"
              aria-label="edit"
              className="edit-button"
            >
              <EditIcon />
            </Fab>
          </div>
        </div>

        {/* Education */}
        <div className="form-section">
          <h2 className="section-title">Education</h2>
          <div className="input-field-education">
            <input
              onChange={(e) => handleChange(e, "education")}
              type="text"
              name="college"
              placeholder="University/College"
              value={formData.education.college}
            />
            <div
              style={{ display: isDisplayed.education ? "flex" : "none" }}
              className="input-field-component"
            >
              <input
                onChange={(e) => handleChange(e, "education")}
                type="text"
                name="degree"
                placeholder="Degree"
                value={formData.education.degree}
              />
              <input
                onChange={(e) => handleChange(e, "education")}
                type="text"
                name="cgpa"
                placeholder="CGPA / Grade"
                value={formData.education.cgpa}
              />
              <div className="date-fields">
                <label>Start Date</label>
                <input
                  onChange={(e) => handleChange(e, "education")}
                  type="date"
                  name="startDate"
                  value={formData.education.startDate}
                />
              </div>
              <div className="date-fields">
                <label>End Date</label>
                <input
                  onChange={(e) => handleChange(e, "education")}
                  type="date"
                  name="endDate"
                  value={formData.education.endDate}
                />
              </div>
              <Fab
                onClick={() => handleAdd("education")}
                color="primary"
                size="small"
                aria-label="add"
                className="action-button"
              >
                <AddIcon />
              </Fab>
            </div>
            <Fab
              onClick={() => toggleVisibility("education")}
              style={{ display: isDisplayed.education ? "none" : "inline-flex" }}
              color="primary"
              size="small"
              aria-label="edit"
              className="edit-button"
            >
              <EditIcon />
            </Fab>
          </div>
        </div>

        {/* Experience */}
        <div className="form-section">
          <h2 className="section-title">Experience</h2>
          <div className="input-field-experience">
            <input
              onChange={(e) => handleChange(e, "experience")}
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.experience.jobTitle}
            />
            <div
              style={{
                display: isDisplayed.experience ? "flex" : "none",
              }}
              className="input-field-component"
            >
              <input
                onChange={(e) => handleChange(e, "experience")}
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.experience.company}
              />
              <textarea
                onChange={(e) => handleChange(e, "experience")}
                name="jobDescription"
                placeholder="Describe your responsibilities and achievements..."
                value={formData.experience.jobDescription}
              ></textarea>
              <div className="date-fields">
                <label>Start Date</label>
                <input
                  onChange={(e) => handleChange(e, "experience")}
                  type="date"
                  name="startDate"
                  value={formData.experience.startDate}
                />
              </div>
              <div className="date-fields">
                <label>End Date</label>
                <input
                  onChange={(e) => handleChange(e, "experience")}
                  type="date"
                  name="endDate"
                  value={formData.experience.endDate}
                />
              </div>
              <Fab
                onClick={() => handleAdd("experience")}
                color="primary"
                size="small"
                aria-label="add"
                className="action-button"
              >
                <AddIcon />
              </Fab>
            </div>
            <Fab
              onClick={() => toggleVisibility("experience")}
              style={{ display: isDisplayed.experience ? "none" : "inline-flex" }}
              color="primary"
              size="small"
              aria-label="edit"
              className="edit-button"
            >
              <EditIcon />
            </Fab>
          </div>
        </div>

        {/* 2nd Experience */}
        <div className="form-section">
          <h2 className="section-title">Additional Experience</h2>
          <div className="input-field-experience">
            <input
              onChange={(e) => handleChange(e, "experience2")}
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.experience2.jobTitle}
            />
            <div
              style={{
                display: isDisplayed.experience2 ? "flex" : "none",
              }}
              className="input-field-component"
            >
              <input
                onChange={(e) => handleChange(e, "experience2")}
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.experience2.company}
              />
              <textarea
                onChange={(e) => handleChange(e, "experience2")}
                name="jobDescription"
                placeholder="Describe your responsibilities and achievements..."
                value={formData.experience2.jobDescription}
              ></textarea>
              <div className="date-fields">
                <label>Start Date</label>
                <input
                  onChange={(e) => handleChange(e, "experience2")}
                  type="date"
                  name="startDate"
                  value={formData.experience2.startDate}
                />
              </div>
              <div className="date-fields">
                <label>End Date</label>
                <input
                  onChange={(e) => handleChange(e, "experience2")}
                  type="date"
                  name="endDate"
                  value={formData.experience2.endDate}
                />
              </div>
              <Fab
                onClick={() => handleAdd("experience2")}
                color="primary"
                size="small"
                aria-label="add"
                className="action-button"
              >
                <AddIcon />
              </Fab>
            </div>
            <Fab
              onClick={() => toggleVisibility("experience2")}
              style={{
                display: isDisplayed.experience2 ? "none" : "inline-flex",
              }}
              color="primary"
              size="small"
              aria-label="edit"
              className="edit-button"
            >
              <EditIcon />
            </Fab>
          </div>
        </div>

        {/* Skills */}
        <div className="form-section">
          <h2 className="section-title">Skills & Achievements</h2>
          <div className="input-skills-achievements">
            <div
              style={{
                display: isDisplayed.skills ? "block" : "none",
              }}
              className="input-field-component"
            >
              <textarea
                onChange={(e) => handleChange(e, "skills")}
                name="skills"
                placeholder="List your skills (separate with spaces)..."
                value={formData.skills.skills}
              ></textarea>
              <textarea
                onChange={(e) => handleChange(e, "skills")}
                name="achievements"
                placeholder="Describe your key achievements..."
                value={formData.skills.achievements}
              ></textarea>
              <Fab
                onClick={() => handleAdd("skills")}
                color="primary"
                size="small"
                aria-label="add"
                className="action-button"
              >
                <AddIcon />
              </Fab>
            </div>
            <Fab
              onClick={() => toggleVisibility("skills")}
              style={{ display: isDisplayed.skills ? "none" : "inline-flex" }}
              color="primary"
              size="small"
              aria-label="edit"
              className="edit-button"
            >
              <EditIcon />
            </Fab>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputForm;