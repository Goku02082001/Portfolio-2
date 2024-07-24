import Jwellery from './media/Jwellery.png'
import CodeFlow from './media/CodeFlow.png'
import BuildHub from './media/BuildHub.png'
export const details={
    firstname:"Gaurav",
    lastname:"Roy",
    // navList:["Home","About","Skills","Work","Contact"],
    navList:[{
        val1:"Home",
        val2:"nav-link home"
      },{
        val1:"About",
        val2:"nav-link about"
      },{
        val1:"Skills",
        val2:"nav-link skills"
      },{
        val1:"Work",
        val2:"nav-link projects"
      },{
        val1:"Contact",
        val2:"nav-link contact"
      }],
    scrollPosition:[0,545,1070,1730,3400],
    className:["introDiv","about section","skillContainer","workDiv","contactDiv"],
    // className:["nav-link home","nav-link about","nav-link skills","nav-link projects"],
    linkedInLink:"https://www.linkedin.com/in/gaurav-roy-61588128a/",
    githubLink:"https://github.com/Goku02082001",
    phone: '8700629297',
    mailLink:'shyamolroy12353@gmail.com',
    techStack:[
            {
                name:"HTML",
                img:"https://img.icons8.com/color/512/html-5--v1.png"
            },
            {
                name:"CSS",
                img:"https://img.icons8.com/fluency/512/css3.png"
            },
            {
                name:"JavaScript",
                img:"https://img.icons8.com/color/512/javascript.png"
            },
            {
                name:"Java",
                img:"https://img.icons8.com/?size=512&id=Pd2x9GWu9ovX&format=png"
            },
            {
                name:"React",
                img:"https://img.icons8.com/office/512/react.png"
            },
            {
                name:"Material UI",
                img:"https://img.icons8.com/color/512/material-ui.png"
            },
            {
                name:"Chakra UI",
                img:"https://img.icons8.com/color/512/chakra-ui.png"
            },
            {
                name:"Node JS",
                img:"https://img.icons8.com/fluency/512/node-js.png"
            },
            {
                name:"BootStrap",
                img:"https://img.icons8.com/color/512/bootstrap.png",

            },
            {
                name:"Github",
                img:"https://img.icons8.com/glyph-neue/512/github.png"
            },
            {
                name:"Express JS",
                img:"https://img.icons8.com/ios/512/express-js.png"
            },
            {
                name:"Mongo DB",
                img:"https://img.icons8.com/color/512/mongodb.png"
            },
            {
                name:"Redux",
                img:"https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
            }

    ],
    projects:[

        {
            name:"Jwellery",
            github:"https://github.com/shivanijpatil/Pixel-Prerana-2345",
            live:"https://pixel-prerana.vercel.app/Frontend/home.html",
            type:"Colaborative",
            tech:["JavaScript","HTML","CSS"],
            img: Jwellery,
            description:"This is a Jwellery Website."
        },
        
        {
            name:"Build-Hub",
            github:"https://github.com/babureddyg2308/BuildHub_Rct104",
            live:"https://rctapp-dien.vercel.app/",
            type:"Collaborative",
            tech:["React","Redux","Chakra UI"],
            img: BuildHub,
            description:"This is a Fitness Website"
        },

        {
            name:"CodeFlow",
            github:"https://github.com/babureddyg2308/CodeFlow",
            live:"https://code-flow-woy3.vercel.app/",
            type:"Collaborative",
            tech:["React","Chakra UI",'Node JS','Express JS'],
            img: CodeFlow,
            description:"It's a Online Code Editor"
        }
        
    ]

}