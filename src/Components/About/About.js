import { Box, Button, Grid, Slide, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./About.css"
import profilePic from '../../media/profilePic.jpg'
import LinearDeterminate from '../MiniComponent/ProgressComp';
import resume from '../../media/Gaurav-resume.pdf'
const About = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [scrolled, setScrolled] = useState(0);

    window.addEventListener("scroll", () => {
        setScrolled(document.documentElement.scrollTop);
    })

    if (scrolled >= 56) {
        setTimeout(() => {
            setChecked1(true)
        }, 600)
        setTimeout(() => {
            setChecked2(true)
        }, 800)
    }

    const openResume = () => {
        window.open(
            "https://drive.google.com/file/d/1Aci7_rSP3SLTU8my0pHRmMFdSakmlZht/view?usp=sharing",
            "_blank"
        );
    };

    // id="about" class="about section" 

    // id="aboutDiv" className='aboutContainer'
    return (
        // <Box id="about" className='about section' sx={{ width: "80%", margin: "10% auto", padding: "0% 10px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "25px" }}>
        //     <Box sx={{ borderTop: "2px solid rgb(35,53,84)", position: "relative" }} >
        //         <Zoom in={checked1}>
        //             <Typography className='aboutHeading' variant='h4' sx={{ color: "#00FF41", backgroundColor: "rgb(11,24,47)", position: "absolute", top: "-25px", padding: "0% 5% 0% 0%", fontFamily: "Poppins" }} >About Me</Typography>
        //         </Zoom>
        //         <Zoom in={checked2}>

        //             <Typography id="user-detail-intro" className='aboutText' sx={{ marginTop: "8%", color: "#008F11", fontFamily: "Poppins" }}>
        //                 Hello! My name is <span style={{ color: "#00FF41" }}>Faizan</span> and I enjoy creating things that live on the internet. My interest in computers and technology started back in  when I was in my 6th grade and my father brought me a computer and after that day i kept doing lot of new things on that.
        //                 <br />
        //                 <br />
        //                 After my graduation i was finding something to start my carrer in tech field and gratefully i came into know about <span style={{ color: "#00FF41" }}>Web Development</span> and started my journey from there.
        //                 Fast-forward to today, and I’ve worked in many projects with lot of tech stacks like JavaScript, Node.js, Express.js, MongoDB. My main focus these days is building accessible, inclusive products. An enthusiastic Full Stack Developer, a lifelong learner, skilled in front-end Web Development. High adaptability to learn new technologies and pay attention to details.
        //             </Typography>



        //         </Zoom>
        //         <Box onClick={openResume} marginTop='1.5rem'>
        //             <Button variant="outlined"
        //                 href="https://drive.google.com/uc?export=download&id=10TNuZZeJbtnzHW0oCSiJ5I7f1n0MMbqf"
        //                 download="Faizan-Resume"
        //                 id="resume-button-2"
        //                 sx={{
        //                     border: "1px solid #008F11",
        //                     color: "#00FF41",
        //                     fontSize: "0.8rem",
        //                     fontFamily: "Poppins",

        //                 }}>Resume</Button>

        //             <LinearDeterminate color={"transparent"} />
        //         </Box>
        //     </Box>

        //     {/* <section id="about" class="about section">
        //         <h2>About Me</h2>
        //         <p id="user-detail-intro">Hello, I'm Faizan, a highly skilled Full-Stack web developer based in Gorakhpur,
        //             Uttar Pradesh. I recently completed a comprehensive full-stack web development program at Masai School. Prior to
        //             that, I obtained a B.A. degree and an Electrician Diploma. During my time as an Electrician in Gorakhpur, Uttar
        //             Pradesh, I developed a strong foundation in problem-solving and attention to detail.

        //             I have expertise in various programming languages, including Java and JavaScript, which I utilize to create
        //             dynamic and interactive web applications. Additionally, I am proficient in HTML, CSS, and React, enabling me to
        //             design and develop modern user interfaces with a focus on responsiveness and user experience.

        //             With my passion for web development and dedication to continuous learning, I strive to stay updated with the
        //             latest industry trends and technologies. I am committed to delivering high-quality solutions that meet client
        //             requirements and exceed expectations.

        //             If you have any inquiries or would like to collaborate, please feel free to reach out. Thank you!</p>
        //         <a href={Faizan_Resume} download="resume 2"><button
        //             id="resume-button-2">Resume</button></a>
        //     </section> */}

        //     {/* <Zoom in={checked2}> */}

        //         <Box className='imageContainer' sx={{ display: "grid", justifyContent: "right" }}>

        //             <img className='home-img' style={{ display: "block", margin: "auto", borderRadius: "5px" }} width={"60%"} src={profilePic} />

        //         </Box>
        //     {/* </Zoom> */}

        //     <div id="About"></div>

        // </Box>
        // 151951

        <Grid container id="about" className='about section' sx={{ width: "80%", margin: "10% auto", padding: "0% 10px" }} spacing={2}>
            <Grid item xs={12} sm={6} md={6} sx={{ margin: "auto" }}>
                <Box sx={{ borderTop: "2px solid rgb(35, 53, 84)", position: "relative" }}>
                    <Typography className='aboutHeading' variant='h4' sx={{ color: "#00FF41", backgroundColor: "rgb(11, 24, 47)", position: "absolute", top: "-25px", padding: "0% 5% 0% 0%", fontFamily: "Poppins" }}>About Me</Typography>
                    <Typography id="user-detail-intro" className='aboutText' sx={{ marginTop: "8%", color: "#008F11", fontFamily: "Poppins" }}>
                        Hello! My name is <span style={{ color: "#00FF41" }}>Gaurav Roy</span> and I enjoy creating things that live on the internet. My interest in computers and technology started back when I was in my 6th grade and my father brought me a computer, and since then, I've been exploring various aspects of it.
                        <br /><br />
                        After my graduation, I discovered <span style={{ color: "#00FF41" }}>Web Development</span> and started my journey from there. Fast-forward to today, and I've worked on many projects with various tech stacks like JavaScript, Node.js, Express.js, and MongoDB. My main focus these days is building accessible and inclusive products. I'm an enthusiastic Full Stack Developer, a lifelong learner, and skilled in front-end Web Development with high adaptability to learn new technologies and attention to detail.
                    </Typography>
                    <Box id="resumeBtn" onClick={openResume} marginTop='1.5rem' sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="outlined" href={resume} download="Gaurav-Resume" id="resume-button-2" sx={{ border: "1px solid #008F11", color: "#00FF41", fontSize: "0.8rem", fontFamily: "Poppins", margin: "auto" }}>Resume</Button>
                        <LinearDeterminate color={"transparent"} />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
                <Box className='imageContainer' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img className='home-img' style={{ display: "block", margin: "auto", borderRadius: "5px" }} width={"60%"} src={profilePic} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default About