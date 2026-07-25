'use client';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheck,
  FiX,
  FiClock,
  FiAlertCircle,
} from 'react-icons/fi';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailJSConfigured, setIsEmailJSConfigured] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [submitViaMailto, setSubmitViaMailto] = useState(false);

  const getEmailJSErrorMessage = (error) => {
    if (typeof error === 'string') return error;
    if (error?.text) return error.text;
    if (error?.message) return error.message;
    if (error?.status) return `Request failed with status ${error.status}`;
    return 'Failed to send message';
  };

  const openMailtoFallback = (data) => {
    const emailSubject = encodeURIComponent(data.subject);
    const emailBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.open(
      `mailto:benedickcervantes@gmail.com?subject=${emailSubject}&body=${emailBody}`,
      '_blank'
    );
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormErrors({});
    setIsFormValid(false);
    setTouchedFields({});
  };

  useEffect(() => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== 'your_service_id' &&
      templateId !== 'your_template_id' &&
      publicKey !== 'your_public_key'
    ) {
      emailjs.init(publicKey);
      setIsEmailJSConfigured(true);
    }
  }, []);

  useEffect(() => {
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
    setIsFormValid(Object.keys(errors).length === 0);
  }, [formData]);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    else if (formData.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Please enter a valid email address';

    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    else if (formData.subject.trim().length < 5)
      errors.subject = 'Subject must be at least 5 characters';

    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10)
      errors.message = 'Message must be at least 10 characters';

    setFormErrors(errors);
    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouchedFields({ name: true, email: true, subject: true, message: true });

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitViaMailto(false);

    const submissionData = { ...formData };

    try {
      if (isEmailJSConfigured) {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const templateParams = {
          name: submissionData.name,
          email: submissionData.email,
          subject: submissionData.subject,
          message: submissionData.message,
          time: new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short',
          }),
          from_name: submissionData.name,
          from_email: submissionData.email,
          reply_to: submissionData.email,
        };

        try {
          await emailjs.send(serviceId, templateId, templateParams, {
            publicKey,
            blockHeadless: false,
          });

          setSubmitStatus('success');
          resetForm();
          return;
        } catch (emailError) {
          console.error('EmailJS error:', getEmailJSErrorMessage(emailError));
        }
      }

      openMailtoFallback(submissionData);
      setSubmitViaMailto(true);
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('Form submission error:', getEmailJSErrorMessage(error));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-lg" />,
      title: 'Email',
      value: 'benedickcervantes@gmail.com',
      link: 'mailto:benedickcervantes@gmail.com',
    },
    {
      icon: <FiMapPin className="text-lg" />,
      title: 'Location',
      value: 'San Juan City, Philippines',
      link: null,
    },
    {
      icon: <FiPhone className="text-lg" />,
      title: 'Phone',
      value: '+63 (917) 843-2759',
      link: 'tel:+639178432759',
    },
    {
      icon: <FiClock className="text-lg" />,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/benedickcervantes', name: 'GitHub' },
    {
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/benedick-cervantes-1375a9111',
      name: 'LinkedIn',
    },
    { icon: <FiMail />, url: 'mailto:benedickcervantes@gmail.com', name: 'Email' },
  ];

  const fieldClass = 'form-input';

  return (
    <section
      id="contact"
      className="section-pad section-atmosphere section-band relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">
            Get In <span>Touch</span>
          </h2>
          <div className="section-underline" />
          <p className="section-lead">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 mb-10">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="mt-0.5 text-[var(--primary)]">{info.icon}</div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)] mb-0.5">{info.title}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-medium text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-[var(--text-primary)]">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-medium text-[var(--text-muted)] mb-3">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-6">
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-5 p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 flex items-start gap-3">
                <FiCheck className="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-emerald-700 dark:text-emerald-300">
                    {submitViaMailto || !isEmailJSConfigured
                      ? 'Thank you for your message!'
                      : 'Message sent successfully!'}
                  </p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                    {submitViaMailto || !isEmailJSConfigured
                      ? 'Your email client should open with a pre-filled message.'
                      : "I'll get back to you within 24 hours."}
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-5 p-4 rounded-lg border border-red-500/30 bg-red-500/10 flex items-start gap-3">
                <FiX className="text-red-600 dark:text-red-400 text-xl mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-red-700 dark:text-red-300">Something went wrong</p>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                    Please try again or email benedickcervantes@gmail.com
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-[var(--text-primary)]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {touchedFields.name && formErrors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-[var(--text-primary)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass}
                    placeholder="you@email.com"
                    disabled={isSubmitting}
                  />
                  {touchedFields.email && formErrors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle className="w-3.5 h-3.5" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1.5 text-sm font-medium text-[var(--text-primary)]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass}
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                />
                {touchedFields.subject && formErrors.subject && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3.5 h-3.5" />
                    {formErrors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-[var(--text-primary)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="5"
                  className={`${fieldClass} resize-none`}
                  placeholder="Hi Benedick, I'd like to talk about..."
                  disabled={isSubmitting}
                />
                {touchedFields.message && formErrors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3.5 h-3.5" />
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
