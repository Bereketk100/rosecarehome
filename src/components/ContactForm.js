import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const messageInput = document.querySelector('#message');
    if (messageInput && messageInput.value !== message) {
      setMessage(messageInput.value);
    }
  }, [message]);

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    fetch("https://formcarry.com/s/6ke1FR2Sql5", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
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
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-xl border border-sky-100">
        <svg className="w-16 h-16 text-sky-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-light mb-4 text-slate-800">Thank You!</h3>
        <p className="text-slate-600">Your message has been sent successfully. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl">
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
          {error}
        </div>
      )}
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full px-4 py-3 bg-white border-b border-slate-200 focus:border-sky-500 transition-colors duration-300 outline-none font-light text-slate-800 placeholder-slate-400"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-4 py-3 bg-white border-b border-slate-200 focus:border-sky-500 transition-colors duration-300 outline-none font-light text-slate-800 placeholder-slate-400"
        />
      </div>
      <div>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="w-full px-4 py-3 bg-white border-b border-slate-200 focus:border-sky-500 transition-colors duration-300 outline-none font-light text-slate-800 placeholder-slate-400"
        />
      </div>
      <div>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          rows="4"
          required
          className="w-full px-4 py-3 bg-white border-b border-slate-200 focus:border-sky-500 transition-colors duration-300 outline-none font-light text-slate-800 placeholder-slate-400 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sky-500 text-white py-4 font-light tracking-wider hover:bg-sky-600 transition-colors duration-300 disabled:opacity-50 shadow-lg shadow-sky-200/50"
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  );
};

export default ContactForm;
