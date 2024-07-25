import { Box, Button, TextField, Typography, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kzc5cnl', 'template_wwdb0mq', e.target, 'yybG_fARe7aI9Jbyp')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the message. Please try again.");
            });
        setFormData({ name: '', email: '', message: '' }); // Clear the form
    };

    return (
        <Box sx={{ width: "80%", margin: "10% auto", padding: "0 10px" }}>
            <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "600", color: "#00FF41", fontFamily: "Poppins" }}>
                Contact Me
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <InputLabel htmlFor="name" sx={{ color: "#00FF41", marginBottom: "5px" }}>Name</InputLabel>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ mb: 3, backgroundColor: 'white' }}
                />
                <InputLabel htmlFor="email" sx={{ color: "#00FF41", marginBottom: "5px" }}>Email</InputLabel>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    sx={{ mb: 3, backgroundColor: 'white' }}
                />
                <InputLabel htmlFor="message" sx={{ color: "#00FF41", marginBottom: "5px" }}>Message</InputLabel>
                <TextField
                    fullWidth
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    sx={{ mb: 3, backgroundColor: 'white' }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ display: "block", margin: "auto" }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Contact;
