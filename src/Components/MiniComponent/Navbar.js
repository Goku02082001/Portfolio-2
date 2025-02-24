import { Box, Button, Drawer, List, ListItem, ListItemText, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinearDeterminate from "./ProgressComp";
import logo from "../../media/logo.png";
import "./Navbar.css";
import { details } from "../../details";
// import resume from '../../media/Gaurav-resume.pdf'
import resume from '../../media/Gaurav-resume.pdf'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-scroll';

const Navbar = ({ scrollHandle }) => {
  const [checked, setChecked] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(0);
  const [scrolled, setScrolled] = useState(0);
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  }

  const introLoaded = () => {
    setTimeout(() => {
      setChecked(true);
    }, 600)
  }

  useEffect(() => {
    introLoaded();
  }, [])

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1kaIg7dSKihnCciYLPZB_NM6-kP9lC9iX/view?usp=sharing", "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      id="nav-menu"
      className={scrolled >= 100 ? "navbarboxShadow" : ""}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "5px 1%",
        position: "sticky",
        top: "0%",
        zIndex: "10"
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0% 25px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "white",
        }}
      >
        <Typography sx={{ color: "#008F11", fontFamily: "Poppins", fontSize: "2rem", fontWeight: '500', textShadow: "0 10px 10px white" }} variant='h1'></Typography>
      </Box>
      <Box className="logoBox" sx={{ display: "none" }}>
      </Box>
      <Box
        className="navbar-part-2"
        p='1rem'
        sx={{
          display: "flex",
          width: "80%",
          color: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {
          details.navList.map((ele, index) => (
            <Link
              key={index}
              to={details.className[index]}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <Slide direction="down" in={checked}>
                <Box
                  className="navbarList"
                  sx={{ cursor: "pointer" }}
                  onMouseOut={() => setHoverEffect(0)}
                  onMouseOver={() => setHoverEffect(index + 1)}
                >
                  <Typography className={ele?.val2} variant="h5" sx={{ fontSize: "1.1rem", fontFamily: "Poppins", color: '#00FF41' }}>{ele.val1}</Typography>
                  {hoverEffect === index + 1 ? (
                    <LinearDeterminate color={"white"} />
                  ) : (
                    <Box sx={{ height: "4px" }}></Box>
                  )}
                </Box>
              </Slide>
            </Link>
          ))
        }

        <Box className='nav-link resume' onClick={openResume}>
          <a href={resume} download='Gaurav-Resume'>
            <Button variant="outlined"
              download={resume}
              id="resume-button-1"
              sx={{
                border: "1px solid #008F11",
                color: "#00FF41",
                fontSize: "0.8rem",
                fontFamily: "Poppins",
              }}>Resume</Button>
          </a>

          <LinearDeterminate color={"transparent"} />
        </Box>

        <Box className="ham" sx={{ display: "none", color: "#00FF41" }} >
          <MenuOutlinedIcon onClick={handleDrawerToggle} />
          <Drawer
            sx={{
              width: 300, // Set the desired width
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 300, // Set the desired width
                backgroundColor: '#07160f', // Set the desired background color
                color: '#00FF41',
              },
            }}
            variant="temporary"
            anchor="right"
            open={open}
            onClose={handleDrawerToggle}
          >
            <List sx={{ marginTop: '50px' }}>
              {details.navList.map((ele, index) => (
                <ListItem button key={index}>
                  <Link
                    activeClass="active"
                    to={details.className[index]}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={ele.val1} sx={{ textAlign: 'center' }} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
