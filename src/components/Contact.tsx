"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

type FormField = "firstName" | "lastName" | "email" | "subject" | "message";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<FormField, string>>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors: Record<FormField, string> = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Thanks! We will contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for any questions, support, or collaboration. We're here to help and would love to hear from you.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-primary">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Whether you're planning your dream vacation or just have a question, we’d love to hear from you.
          </p>

          <div className="space-y-4">
            {/* Liaison Office */}
            <div className="flex items-start gap-4">
              <FiMapPin className="text-orange-500 text-xl mt-1" />
              <div>
                <p className="font-semibold text-primary"> Office</p>
                <p className="text-gray-600">Software Technology Park Skardu Near Army Public School Skardu</p>
                <p className="text-gray-600">WhatsApp: +92 3442309271</p>
                <p className="text-gray-600">Email: qaximy1214@gmail.com</p>
           
              </div>
              
            </div>

            {/* Head Office */}
            

            {/* Malaysia Office */}
           
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-3xl shadow-xl p-6 w-full max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div>
            <textarea
              rows={5}
              placeholder="Tell us about your travel needs..."
              className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 bg-orange-500 text-white rounded-lg font-semibold transition-all shadow-lg"
          >
            Submit Message
          </motion.button>
        </form>
      </div>
    </div>
  );
}
