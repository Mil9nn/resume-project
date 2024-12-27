import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

function InputForm() {
  const [isDisplayed, setIsDisplayed] = useState({
    personal: false,
    education: false,
    experience: false,
    experience2: false,
    skills: false,
  });

  const [formData, setFormData] = useState({
    personal: {
      name: "John Doe",
      email: "Johndoe83@gmail.com",
      phone: "1237894560",
    },
    education: {
      college: "Hogwart's University of Magic",
      degree: "Bachelor's of Magic",
      cgpa: "8.9",
      startDate: "2015-01-02",
      endDate: "2019-03-09",
    },
    experience: {
      jobTitle: "Senior Magic Developer",
      company: "Black Hand Organization",
      jobDescription:
        "Worked on various spells like lightning, rage, and invisible potion.",
      startDate: "2020-01-01",
      endDate: "2021-02-01",
    },
    experience2: {
      jobTitle: "Junior Front End Developer",
      company: "Black Hand Organization",
      jobDescription:
        "Worked on various spells like lightning, rage, and invisible potion.",
      startDate: "2022- 08-09",
      endDate: "2023-08-09",
    },
    skills: {
      skills: "HTML  CSS  JavaScript  React",
      achievements: "Won a Gold at the Black Hand Championship Rem",
    },
  });

  const [finalData, setFinalData] = useState({
    personal: { name: "", email: "", phone: "" },
    education: {
      college: "",
      degree: "",
      cgpa: "",
      startDate: "",
      endDate: "",
    },
    experience: {
      jobTitle: "",
      company: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    },
    experience2: {
      jobTitle: "",
      company: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    },
    skills: { skills: "", achievements: "" },
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
    setFinalData((prev) => ({
      ...prev,
      [section]: formData[section],
    }));
    toggleVisibility(section);
  }

  return (
    <div>
      <form>
        {/* Personal Info */}
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
              placeholder="Phone No"
              value={formData.personal.phone}
            />
            <Fab
              onClick={() => handleAdd("personal")}
              color="primary"
              size="small"
              aria-label="add"
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
          >
            <EditIcon />
          </Fab>
        </div>

        {/* Education */}

        <div className="input-field-education">
          <input
            onChange={(e) => handleChange(e, "education")}
            type="text"
            name="college"
            placeholder="College Name"
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
              placeholder="Degree Name"
              value={formData.education.degree}
            />
            <input
              onChange={(e) => handleChange(e, "education")}
              type="number"
              name="cgpa"
              placeholder="CGPA"
              value={formData.education.cgpa}
            />
            <input
              onChange={(e) => handleChange(e, "education")}
              type="date"
              name="startDate"
              value={formData.education.startDate}
            />
            <input
              onChange={(e) => handleChange(e, "education")}
              type="date"
              name="endDate"
              value={formData.education.endDate}
            />
            <Fab
              onClick={() => handleAdd("education")}
              color="primary"
              size="small"
              aria-label="add"
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
          >
            <EditIcon />
          </Fab>
        </div>

        {/* Experience */}

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
              placeholder="Write your experience..."
              value={formData.experience.jobDescription}
            ></textarea>
            <input
              onChange={(e) => handleChange(e, "experience")}
              type="date"
              name="startDate"
              value={formData.experience.startDate}
            />
            <input
              onChange={(e) => handleChange(e, "experience")}
              type="date"
              name="endDate"
              value={formData.experience.endDate}
            />
            <Fab
              onClick={() => handleAdd("experience")}
              color="primary"
              size="small"
              aria-label="add"
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
          >
            <EditIcon />
          </Fab>
        </div>

        {/* 2nd Experience */}

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
              placeholder="Write your experience..."
              value={formData.experience2.jobDescription}
            ></textarea>
            <input
              onChange={(e) => handleChange(e, "experience2")}
              type="date"
              name="startDate"
              value={formData.experience2.startDate}
            />
            <input
              onChange={(e) => handleChange(e, "experience2")}
              type="date"
              name="endDate"
              value={formData.experience2.endDate}
            />
            <Fab
              onClick={() => handleAdd("experience2")}
              color="primary"
              size="small"
              aria-label="add"
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
          >
            <EditIcon />
          </Fab>
        </div>

        {/* Skills */}

        <div className="input-skills-achievements">
          <p className="skills-input-title">Skills and Achievements</p>
          <div
            style={{
              display: isDisplayed.skills ? "block" : "none",
            }}
          >
            <textarea
              onChange={(e) => handleChange(e, "skills")}
              name="skills"
              placeholder="Write skills..."
              value={formData.skills.skills}
            ></textarea>
            <br />
            <textarea
              onChange={(e) => handleChange(e, "skills")}
              name="achievements"
              placeholder="Write achievements..."
              value={formData.skills.achievements}
            ></textarea>
            <Fab
              onClick={() => handleAdd("skills")}
              color="primary"
              size="small"
              aria-label="add"
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
          >
            <EditIcon />
          </Fab>
        </div>
      </form>
      <div className="resume-container">
        <div className="personal-info">
          <h3>Personal Info</h3>
          <div className="namePlusEmail">
            <p>{finalData.personal.name}</p>
            <p>{finalData.personal.email}</p>
          </div>
          <p>{finalData.personal.phone}</p>
        </div>
        <h3>Education</h3>
        <div className="education">
          <p>{finalData.education.college}</p>
          <div className="degreePlusCgpa">
            <p>{finalData.education.degree}</p>
            <p>CGPA: {finalData.education.cgpa}</p>
          </div>
          <p className="date">
            {finalData.education.startDate} to {finalData.education.endDate}
          </p>
        </div>
        <div>
          <h3>Experience</h3>
          <div className="experience-section">
            <div className="experience">
              <p className="jobTitle">{finalData.experience.jobTitle}</p>
              <p>{finalData.experience.company}</p>
              <p>{finalData.experience.jobDescription}</p>
              <p className="date">
                {finalData.experience.startDate} to{" "}
                {finalData.experience.endDate}
              </p>
            </div>
            <div className="experience">
              <p className="jobTitle">{finalData.experience2.jobTitle}</p>
              <p>{finalData.experience2.company}</p>
              <p>{finalData.experience2.jobDescription}</p>
              <p className="date">
                {finalData.experience2.startDate} to{" "}
                {finalData.experience2.endDate}
              </p>
            </div>
          </div>
        </div>
        <h3>Skills</h3>
        <div>{finalData.skills.skills}</div>
        <h3>Achievements</h3>
        <div>{finalData.skills.achievements}</div>
      </div>
    </div>
  );
}

export default InputForm;