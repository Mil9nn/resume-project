import {useState} from "react";

function InputForm () {

    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [educationInfo, setEducationInfo] = useState({
        collegeName: "",
        degree: "",
        edField: "",
        startDate: "",
        endDate: "",
        cgpa: "",
    })

    const [experienceInfo, setExperienceInfo] = useState({
        jobTitle: "",
        company: "",
        exField: "",
        startDate: "",
        endDate: "",
    })

    function handlePersonalChange(event) {
        const {name, value} = event.target;
        setPersonalInfo((prevValue) => {
            return {
                ...prevValue,
                [name] : value,
            }
        } )
    }

    function handleEducationChange(event) {
        const {name, value} = event.target;
        setEducationInfo((prevValue) => {
            return {
                ...prevValue,
                [name] : value,
            }
        } )
    }

    function handleExperienceChange(event) {
        const {name, value} = event.target;
        setExperienceInfo((prevValue) => {
            return {
                ...prevValue,
                [name] : value,
            }
        } )
    }



    return <div>
        <form>
            <input onChange={handlePersonalChange} type="text" name="name" placeholder="Name" value={personalInfo.name} />
            <input onChange={handlePersonalChange} type="email" name="email" placeholder="Email" value={personalInfo.email} />
            <input onChange={handlePersonalChange} type="tel" name="phone" placeholder="Phone" value={personalInfo.phone} />

            <div className="Education-Input" >
                <div className="title-company" >
                    <input onChange={handleEducationChange} type="text" name="collegeName" placeholder="College Name" value={educationInfo.collegeName} />
                    <input onChange={handleEducationChange} type="text" name="degree" placeholder="Degree" value={educationInfo.degree} />
                </div>
            <textarea onChange={handleEducationChange} name="edField" placeholder="Write your Education details..." value={educationInfo.edField} ></textarea>
            <div className="education-date" >
                <input onChange={handleEducationChange} type="date" name="startDate" value={educationInfo.startDate} />
                <input onChange={handleEducationChange} type="date" name="endDate" value={educationInfo.endDate} />
                <input onChange={handleEducationChange} style={{width: "80px"}} type="number" name="cgpa" max="10" min="1" placeholder="CGPA" value={educationInfo.cgpa} />
            </div>
            </div>

            <div className="Experience-Input" >
                <div className="title-company" >
                    <input onChange={handleExperienceChange} type="text" name="jobTitle" placeholder="Job Title" />
                    <input onChange={handleExperienceChange} type="text" name="company" placeholder="Company" />
                </div>
                <textarea name="ex-field" placeholder="Write your Experience..." onChange={handleExperienceChange} ></textarea>
                <div className="education-date" >
                    <input onChange={handleExperienceChange} type="date" name="start-date" placeholder="started at" />
                    <input onChange={handleExperienceChange} type="date" name="end-date" placeholder="ended at" />
                </div>
            </div>


            <input type="text" name="skills" placeholder="Skills" />
            <input type="text" name="hobbies" placeholder="Hobbies" />
        </form>
        <section className="resume" >
            <div className="personal" >
                <p>{personalInfo.name}</p>
                <div className="contact" >
                    <p>{personalInfo.email}</p>
                    <p>{personalInfo.phone}</p>
                </div>
            </div>
            <div className="education" >
                <p>{educationInfo.collegeName}</p>
                <div className="degree-with-cgpa" >
                    <p>{educationInfo.degree}</p>
                    <p>CGPA: {educationInfo.cgpa}</p>
                </div>
                <p>{educationInfo.startDate} to {educationInfo.endDate}</p>
            </div>
            <div className="experience" >
                <p>Senior Cloud Architect</p>
                <p>Paulo Alto Technologies</p>
                <p className="experience-des" >Worked on Remote Repositaries, collaborated with multiple MNC's lead team achieve development and optimization.</p>
                <p className="experience-date" >2019 - 2021</p>
            </div>
            <aside>
                <p>Skills</p>
                <div className="skills" >
                <p>React</p>
                <p>JavaScript</p>
                <p>Responsive Design</p>
                <p>Node Js</p>
                <p>Version Control</p>
                <p>Postgre SQL</p>
                <p>API</p>
                </div>
            </aside>
            <div className="hobbies" >
                
            </div>
        </section>
    </div>
}

export default InputForm;