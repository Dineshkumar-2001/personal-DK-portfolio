"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
    const form = useRef();
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setEmailSubmitted(false);
        setError("");

        // const formData = {
        //     user_name: form.current.user_name.value,
        //     user_email: form.current.user_email.value,
        //     subject: form.current.subject.value,
        //     message: form.current.message.value,
        //     manual_name: "DINESH" // Manually adding "DINESH"
        // };

        // console.log('formData',formData)


        emailjs
            .sendForm(
                "service_dq3p0mm", // Your EmailJS Service ID
                "template_mlohu5y", // Your EmailJS Template ID
                form.current,
                "OyoXkBfUeFx1t74JD" // Your EmailJS User ID (Public Key)
            )
            .then(
                () => {
                    console.log("Email sent successfully!");
                    setEmailSubmitted(true);
                    form.current.reset(); // Reset form after submission
                },
                (error) => {
                    console.error("Failed to send email:", error.text);
                    setError("Failed to send email. Please try again later.");
                }
            );
    };

    return (
        <div className="bg-white">
            <section id="contact" className="grid md:grid-cols-2 mx-10 py-10 pb-10 gap-4 scroll-mt-28 relative">
                <div data-aos="fade-right" className="lg:w-[70%] flex lg:justify-end justify-center items-center">
                    <img src="/Message.png" alt="Ommniverse Gem" className="w-3/4 lg:w-full object-cover rounded-lg" />
                </div>

                <div data-aos="fade-left">
                    <div className="z-0">
                        <h5 className="text-2xl font-semibold mb-3 bg-custom-text bg-clip-text text-transparent">
                            Let&apos;s Connect
                        </h5>
                        <p className="text-black font-inter mb-4 max-w-md">
                            I&apos;m currently looking for new opportunities, my inbox is always open. 
                            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                    </div>

                    {emailSubmitted ? (
                        <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                    ) : (
                        <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
                            <div className="mb-6">
                                <label htmlFor="user_name" className="text-gray-800 block mb-2 text-sm font-medium">
                                    Your Name
                                </label>
                                <input
                                    name="user_name"
                                    type="text"
                                    id="user_name"
                                    required
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none transition-all duration-150"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="user_email" className="text-gray-800 block mb-2 text-sm font-medium">
                                    Your Email
                                </label>
                                <input
                                    name="user_email"
                                    type="email"
                                    id="user_email"
                                    required
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none transition-all duration-150"
                                    placeholder="Enter your mail"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="text-gray-800 block mb-2 text-sm font-medium">
                                    Subject
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    required
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none transition-all duration-150"
                                    placeholder="Enter your subject"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="text-gray-800 block mb-2 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none transition-all duration-150"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-custom-gradient text-white hover:bg-custom-text rounded-full font-medium py-2.5 px-5 w-full"
                            >
                                Send Message
                            </button>

                            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EmailSection;
