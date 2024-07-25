// import React from "react";
// import {
//   Box,
//   Heading,
//   Input,
//   Textarea,
//   Button,
//   SimpleGrid,
// } from "@chakra-ui/react";

// const ContactForm = () => {
//   const handleEmailClick = () => {
//     window.location.href = "mailto:shyamolroy12353@gmail.com";
//   };

//   return (
//     <Box
//       id="contact"
//       p={{ base: "5%", md: "10%" }}
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       fontWeight={500}
//     >
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         mb="10%"
//       >
//         <Heading as="h1" size="2xl">
//           <Box>CONTACT</Box>
//           <Box color="red.500" ml="0.5rem">
//             ME
//           </Box>
//         </Heading>
//       </Box>

//       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
//         <Box>
//           <Box mb="1rem"></Box>
//           <Box mb="1rem"></Box>
//           <Box display="flex" mt="1rem" alignItems="center"></Box>
//         </Box>

//         <Box
//           boxShadow="lg"
//           p="2rem"
//           borderRadius="md"
//           bg="white"
//           _dark={{ bg: "gray.700" }}
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//         >
//           <Input
//             placeholder="Name"
//             mb="1rem"
//             color="red.500"
//             _focus={{ borderColor: "red.500" }}
//           />
//           <Input
//             placeholder="Email"
//             mb="1rem"
//             color="red.500"
//             _focus={{ borderColor: "red.500" }}
//           />
//           <Textarea
//             placeholder="Message"
//             mb="1rem"
//             color="red.500"
//             _focus={{ borderColor: "red.500" }}
//           />
//           <Button
//             bg="red.500"
//             width="100%"
//             _hover={{ bg: "red.400" }}
//             onClick={handleEmailClick}
//           >
//             Send
//           </Button>
//         </Box>
//       </SimpleGrid>

//       <Box
//         mt="3rem"
//         textAlign="center"
//         fontSize="md"
//       >
//         Created By GauravRoy | © 2024
//       </Box>
//     </Box>
//   );
// };

// export default ContactForm;
