'use client';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiCheck, FiX, FiClock, FiUser, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ setActiveSection }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailJSConfigured, setIsEmailJSConfigured] = useState(false);

  // Check if EmailJS is configured
  useEffect(() => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey && 
        serviceId !== 'your_service_id' && 
        templateId !== 'your_template_id' && 
        publicKey !== 'your_public_key') {
      emailjs.init(publicKey);
      setIsEmailJSConfigured(true);
    }
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (isEmailJSConfigured) {
        // Send email using EmailJS
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'benedickcervantes@gmail.com',
          reply_to: formData.email
        };

        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        if (response.status === 200) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setFormErrors({});
          setIsFormValid(false);
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        // Original working behavior - simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormErrors({});
        setIsFormValid(false);
        
        // Open email client with pre-filled content
        const emailSubject = encodeURIComponent(formData.subject);
        const emailBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:benedickcervantes@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        
        // Open email client
        window.open(mailtoLink, '_blank');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      value: "benedickcervantes@gmail.com",
      link: "mailto:benedickcervantes@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      value: "San Juan City, Philippines",
      link: null,
      description: "Available for remote work"
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      value: "+63 (917) 843-2759",
      link: "tel:+639178432759",
      description: "Call or WhatsApp me"
    },
    {
      icon: <FiClock className="text-xl" />,
      title: "Response Time",
      value: "Within 24 hours",
      link: null,
      description: "I'll get back to you quickly"
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/benedickcervantes", name: "GitHub", color: "hover:text-gray-900 dark:hover:text-gray-100" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/benedickcervantes", name: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <FiTwitter />, url: "https://twitter.com/benedickcervantes", name: "Twitter", color: "hover:text-blue-400" },
    { icon: <FiDribbble />, url: "https://dribbble.com/benedickcervantes", name: "Dribbble", color: "hover:text-pink-500" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50/30 dark:bg-gray-800/30 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-[#2C98A0] filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-[#4CC8A3] filter blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="text-[#2C98A0] dark:text-[#4CC8A3]">Touch</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#2C98A0] dark:bg-[#4CC8A3] mx-auto mb-6 transform origin-left"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6 flex-1">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-600/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3] flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-700 dark:text-gray-200 hover:text-[#2C98A0] dark:hover:text-[#4CC8A3] transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-200 font-medium">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100/80 dark:bg-gray-600/50 rounded-full transition-all duration-300 text-gray-700 dark:text-gray-200 ${social.color} hover:scale-110`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Send Me a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                >
                  <FiCheck className="text-green-600 dark:text-green-400 text-xl" />
                  <div>
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      {isEmailJSConfigured ? 'Message sent successfully!' : 'Thank you for your message!'}
                    </p>
                    <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                      {isEmailJSConfigured 
                        ? "I'll get back to you within 24 hours."
                        : "I'll get back to you soon. Your email client should open with a pre-filled message."
                      }
                    </p>
                  </div>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3"
                >
                  <FiX className="text-red-600 dark:text-red-400 text-xl" />
                  <div>
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Something went wrong
                    </p>
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                      Please try again or contact me directly at benedickcervantes@gmail.com
                    </p>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">
                      <FiUser className="inline w-4 h-4 mr-2" />
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-all text-gray-900 dark:text-gray-200 ${
                        formErrors.name 
                          ? 'border-red-300 dark:border-red-600 bg-red-50/50 dark:bg-red-900/10' 
                          : 'border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent'
                      }`}
                      placeholder="Full Name"
                      disabled={isSubmitting}
                    />
                    {formErrors.name && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1 flex items-center">
                        <FiAlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.name}
                      </p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">
                      <FiMail className="inline w-4 h-4 mr-2" />
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-all text-gray-900 dark:text-gray-200 ${
                        formErrors.email 
                          ? 'border-red-300 dark:border-red-600 bg-red-50/50 dark:bg-red-900/10' 
                          : 'border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent'
                      }`}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1 flex items-center">
                        <FiAlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.email}
                      </p>
                    )}
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">
                    <FiMessageSquare className="inline w-4 h-4 mr-2" />
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all text-gray-900 dark:text-gray-200 ${
                      formErrors.subject 
                        ? 'border-red-300 dark:border-red-600 bg-red-50/50 dark:bg-red-900/10' 
                        : 'border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent'
                    }`}
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                  {formErrors.subject && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.subject}
                    </p>
                  )}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col"
                >
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">
                    <FiMessageSquare className="inline w-4 h-4 mr-2" />
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className={`w-full px-4 py-3 rounded-lg border transition-all text-gray-900 dark:text-gray-200 resize-none flex-1 ${
                      formErrors.message 
                        ? 'border-red-300 dark:border-red-600 bg-red-50/50 dark:bg-red-900/10' 
                        : 'border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent'
                    }`}
                    placeholder="Hi Benedick, I'd like to talk about..."
                    disabled={isSubmitting}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.message}
                    </p>
                  )}
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="group relative w-full px-6 py-3.5 bg-gradient-to-r from-[#2C98A0] to-[#4CC8A3] text-white rounded-lg font-medium overflow-hidden flex items-center justify-center gap-2 shadow-[0_4px_20px_-5px_rgba(44,152,160,0.5)] hover:shadow-[0_4px_25px_-2px_rgba(44,152,160,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  onHoverStart={() => setIsButtonHovered(true)}
                  onHoverEnd={() => setIsButtonHovered(false)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FiSend className="ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#2C98A0] to-[#38B2A3] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                  />
                  {isButtonHovered && !isSubmitting && (
                    <>
                      <motion.span
                        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0, 0.7, 0],
                          transition: { 
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.2
                          }
                        }}
                      />
                      <motion.span
                        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-70"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ 
                          y: [0, -8, 0],
                          opacity: [0, 0.7, 0],
                          transition: { 
                            duration: 1.8,
                            repeat: Infinity,
                            delay: 0.4
                          }
                        }}
                      />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
