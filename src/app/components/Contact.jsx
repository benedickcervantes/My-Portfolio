'use client';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiCheck, FiX } from 'react-icons/fi';
import { useState } from 'react';
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

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Validate environment variables
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS configuration is missing. Please check your .env.local file.');
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Benedick Cervantes',
        reply_to: formData.email,
      };

      // Send email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 dark:bg-gray-700/60 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6 flex-1">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3]">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-1">Email</h4>
                    <a 
                      href="mailto:benedickcervantes@gmail.com" 
                      className="text-gray-700 dark:text-gray-200 hover:text-[#2C98A0] dark:hover:text-[#4CC8A3] transition-colors"
                    >
                      benedickcervantes@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3]">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-1">Location</h4>
                    <p className="text-gray-700 dark:text-gray-200">San Juan City, Philippines</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-[#e6f7f5] dark:bg-[#1a3a3f] rounded-full text-[#2C98A0] dark:text-[#4CC8A3]">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-1">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-200">+63 (917) 843-2759</p>
                    <p className="text-gray-700 dark:text-gray-200">+63 (917) 149-3410</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <FiGithub />, url: "https://github.com/benedickcervantes", name: "GitHub" },
                    { icon: <FiLinkedin />, url: "https://linkedin.com/in/benedickcervantes", name: "LinkedIn" },
                    { icon: <FiTwitter />, url: "https://twitter.com/benedickcervantes", name: "Twitter" },
                    { icon: <FiDribbble />, url: "https://dribbble.com/benedickcervantes", name: "Dribbble" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100/80 dark:bg-gray-600/50 rounded-full hover:bg-[#e6f7f5] dark:hover:bg-[#1a3a3f] transition-colors text-gray-700 dark:text-gray-200 hover:text-[#2C98A0] dark:hover:text-[#4CC8A3]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
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
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3"
                >
                  <FiX className="text-red-600 dark:text-red-400 text-xl" />
                  <p className="text-red-700 dark:text-red-300 font-medium">
                    Failed to send message. Please try again or contact me directly.
                  </p>
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
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent transition-all text-gray-900 dark:text-gray-200"
                      placeholder="Full Name"
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent transition-all text-gray-900 dark:text-gray-200"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent transition-all text-gray-900 dark:text-gray-200"
                    placeholder="What's this about?"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-gray-200">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white/80 dark:bg-gray-600/50 focus:ring-2 focus:ring-[#2C98A0] focus:border-transparent transition-all text-gray-900 dark:text-gray-200 resize-none flex-1"
                    placeholder="Hi Benedick, I'd like to talk about..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
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
