import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Remove the problematic useEffect hook entirely

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    fetch("https://formcarry.com/s/6ke1FR2Sql5", {
      method: 'POST',
      body: formDataToSend
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          resume: null,
        });
      } else {
        setError(response.message);
      }
    })
    .catch(error => {
      setError(error.message ? error.message : error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center p-6 md:p-8 bg-white rounded-lg shadow-xl border border-rose-200">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-green-600 mx-auto mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-green-800">Thank You!</h3>
        <p className="text-green-700">Your message has been sent successfully. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-xl border border-rose-200">
      {error && (
        <div className="bg-red-500 text-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 text-sm md:text-base">
          {error}
        </div>
      )}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Full Name"
          required
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border-b border-green-200 focus:border-rose-400 transition-colors duration-300 outline-none font-light text-green-800 placeholder-green-400 text-base md:text-lg"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email Address"
          required
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border-b border-green-200 focus:border-rose-400 transition-colors duration-300 outline-none font-light text-green-800 placeholder-green-400 text-base md:text-lg"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border-b border-green-200 focus:border-rose-400 transition-colors duration-300 outline-none font-light text-green-800 placeholder-green-400 text-base md:text-lg"
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we assist you?"
          rows="4"
          required
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border-b border-green-200 focus:border-rose-400 transition-colors duration-300 outline-none font-light text-green-800 placeholder-green-400 resize-none text-base md:text-lg"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Attach Resume (Optional)</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border-b border-green-200 focus:border-rose-400 transition-colors duration-300 outline-none font-light text-green-800 placeholder-green-400 text-sm md:text-base"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-rose-400 text-white py-3 md:py-4 font-light tracking-wider hover:bg-rose-500 transition-colors duration-300 disabled:opacity-50 shadow-lg shadow-rose-200/50 rounded-lg text-base md:text-lg"
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  );
};

export default ContactForm;
