import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <>
      <Typography className='contactheading' sx={{ textAlign: "center", fontWeight: "600", color: "#00FF41", marginBottom: "2%", fontFamily: "Poppins" }} variant='h2' >My Contributions</Typography>
      <Box sx={{ textAlign: "center", width: "fit-content", margin: "auto auto 0% auto", color: "#00FF41", borderRadius: "8px", padding: "3% 1%", border: "2px solid #008F11" }}>
        <GitHubCalendar
          className="react-activity-calendar"
          color="#00FF41"
          username="Goku02082001" />
          
      </Box>

      <Box sx={{ textAlign: "left", width: "fit-content", margin: "auto", padding: "3% 1%" }}>
        <Box sx={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
          <img id="github-top-langs" width='100%' src="https://github-readme-stats.vercel.app/api/top-langs?username=Goku02082001&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=00FF41&text_color=008F11" />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "400px", margin: "2rem auto" }}>
          <img id="github-stats-card" width='100%' src="https://github-readme-stats.vercel.app/api?username=Goku02082001&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=00FF41&text_color=008F11" />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "400px", margin: "2rem auto" }}>
          <img id="github-streak-stats" width='100%' src='https://github-readme-streak-stats.herokuapp.com/?user=Goku02082001&theme=transparent&hide_border=true&title_color=00FF41&text_color=008F11&sideNums=00FF41&sideLabels=00FF41&ring=00FF41&fire=00FF41&currStreakLabel=00FF41&currStreakNum=00FF41' alt="" />
        </Box>
      </Box>
    </>
  );
}