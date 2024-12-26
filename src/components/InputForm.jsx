import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

function InputForm() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
    });

    const [educationInfo, setEducationInfo] = useState({
        collegeName: "ABC University",
        degree: "Bachelor of Science",
        edField: "Computer Science",
        startDate: "2020-01-01",
        endDate: "2024-01-01",
        cgpa: "9.0",
    });

    const [experiences, setExperiences] = useState([
        {
            jobTitle: "Software Engineer",
            company: "Tech Corp",
            exField: "Developed full-stack web applications.",
            startDate: "2022-06",
            endDate: "2023-12",
        },
        {
            jobTitle: "Intern",
            company: "Startup Inc",
            exField: "Worked on frontend components.",
            startDate: "2021-05",
            endDate: "2021-08",
        },
    ]);

    const [skillsInfo, setSkillsInfo] = useState({
        skills: ["JavaScript", "React", "Node.js"],
        hobbies: ["Reading", "Cycling", "Traveling"],
    });

    function handlePersonalChange(event) {
        const { name, value } = event.target;
        setPersonalInfo((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    }

    function handleEducationChange(event) {
        const { name, value } = event.target;
        setEducationInfo((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    }

    const handleExperienceChange = (index, event) => {
        const { name, value } = event.target;
        setExperiences((prev) =>
            prev.map((exp, i) =>
                i === index
                    ? {
                          ...exp,
                          [name]: value,
                      }
                    : exp
            )
        );
    };

    const addExperience = () => {
        if (experiences.length < 2) {
            setExperiences((prev) => [
                ...prev,
                {
                    jobTitle: "",
                    company: "",
                    exField: "",
                    startDate: "",
                    endDate: "",
                },
            ]);
        } else {
            alert("You can only add up to two experiences.");
        }
    };

    const addSkill = () => {
        setSkillsInfo((prev) => ({
            ...prev,
            skills: [...prev.skills, "New Skill"],
        }));
    };

    const formatDateRange = (start, end) => {
        const options = { year: "numeric", month: "long" };
        const startDate = new Date(start).toLocaleDateString("en-US", options);
        const endDate = new Date(end).toLocaleDateString("en-US", options);
        return `${startDate} to ${endDate}`;
    };

    return (
        <div>
            <form>
                {/* Personal Information */}
                <div className="personal-input">
                    <input
                        onChange={handlePersonalChange}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={personalInfo.name}
                    />
                    <input
                        onChange={handlePersonalChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={personalInfo.email}
                    />
                    <input
                        onChange={handlePersonalChange}
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={personalInfo.phone}
                    />
                </div>

                {/* Education Information */}
                <div className="education-input">
                    <div className="namePlusDegree">
                        <input
                            onChange={handleEducationChange}
                            type="text"
                            name="collegeName"
                            placeholder="College Name"
                            value={educationInfo.collegeName}
                        />
                        <input
                            onChange={handleEducationChange}
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={educationInfo.degree}
                        />
                    </div>
                    <textarea
                        onChange={handleEducationChange}
                        name="edField"
                        placeholder="Write your Education details..."
                        value={educationInfo.edField}
                    ></textarea>
                    <div className="dates">
                        <input
                            onChange={handleEducationChange}
                            type="date"
                            name="startDate"
                            value={educationInfo.startDate}
                        />
                        <input
                            onChange={handleEducationChange}
                            type="date"
                            name="endDate"
                            value={educationInfo.endDate}
                        />
                        <input
                            onChange={handleEducationChange}
                            style={{ width: "80px" }}
                            type="number"
                            name="cgpa"
                            max="10"
                            min="1"
                            placeholder="CGPA"
                            value={educationInfo.cgpa}
                        />
                    </div>
                </div>

                {/* Experience Information */}
                <div className="experience-input">
                    <h3>Experience</h3>
                    {experiences.map((exp, index) => (
                        <div key={index}>
                            <div className="titlePlusCompany">
                                <input
                                    type="text"
                                    name="jobTitle"
                                    placeholder="Job Title"
                                    value={exp.jobTitle}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                />
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    value={exp.company}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                />
                            </div>
                            <textarea
                                name="exField"
                                placeholder="Write your Experience..."
                                value={exp.exField}
                                onChange={(e) => handleExperienceChange(index, e)}
                            ></textarea>
                            <div className="dates">
                                <input
                                    type="month"
                                    name="startDate"
                                    value={exp.startDate}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                />
                                <input
                                    type="month"
                                    name="endDate"
                                    value={exp.endDate}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                />
                            </div>
                            <Fab
                                size="small"
                                color="primary"
                                aria-label="edit"
                                sx={{ marginRight: "10px", transform: "scale(0.8)" }}
                            >
                                <EditIcon />
                            </Fab>
                        </div>
                    ))}
                    <Fab
                        size="small"
                        color="secondary"
                        aria-label="add"
                        onClick={addExperience}
                        sx={{
                            marginTop: "10px",
                            transform: "scale(0.8)",
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </div>

                {/* Skills Section */}
                <div className="skill-input">
                    <div>
                        {skillsInfo.skills.map((skill, index) => (
                            <input
                                key={index}
                                type="text"
                                value={skill}
                                readOnly
                                style={{
                                    display: "inline-block",
                                    margin: "5px",
                                    padding: "5px",
                                }}
                            />
                        ))}
                    </div>
                    <Fab
                        onClick={addSkill}
                        size="small"
                        color="secondary"
                        aria-label="add"
                        sx={{
                            transform: "scale(0.8)",
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            </form>

            {/* Resume Section */}
            <section className="resume">
                <div className="personal">
                    <p>{personalInfo.name}</p>
                    <div className="contact">
                        <p>{personalInfo.email}</p>
                        <p>{personalInfo.phone}</p>
                    </div>
                </div>

                <div>
                    <h3>Education</h3>
                    <div className="education">
                        <p>{educationInfo.collegeName}</p>
                        <p>{educationInfo.degree}</p>
                        <p>CGPA: {educationInfo.cgpa}</p>
                        <p>{formatDateRange(educationInfo.startDate, educationInfo.endDate)}</p>
                    </div>
                </div>

                <div>
                    <h3>Experience</h3>
                    <div className="experience">
                        {experiences.map((exp, index) => (
                            <div className="job" key={index}>
                                <p className="job-title">{exp.jobTitle}</p>
                                <p>{exp.company}</p>
                                <p>{exp.exField}</p>
                                <p>{formatDateRange(exp.startDate, exp.endDate)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Skills</h3>
                    <div className="skills">
                        {skillsInfo.skills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InputForm;
