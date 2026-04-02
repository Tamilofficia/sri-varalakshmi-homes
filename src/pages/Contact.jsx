import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailto = `mailto:info@srivaralakshmihomes.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-gray-100)] pt-24 pb-20">
      
      {/* Contact Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">We're here to help you find your perfect plot. Reach out to us for detailed inquiries, site visits, or brochure requests.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
          
          {/* Form */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input name="name" type="text" required className="w-full p-4 bg-[var(--color-brand-gray-100)] rounded-xl border-transparent focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input name="phone" type="tel" className="w-full p-4 bg-[var(--color-brand-gray-100)] rounded-xl border-transparent focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-20 outline-none transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input name="email" type="email" className="w-full p-4 bg-[var(--color-brand-gray-100)] rounded-xl border-transparent focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-20 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" rows="4" className="w-full p-4 bg-[var(--color-brand-gray-100)] rounded-xl border-transparent focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-20 outline-none transition-all resize-none" placeholder="I am interested in..."></textarea>
              </div>
              <button type="submit" className="bg-black hover:bg-gray-800 text-white w-full py-4 rounded-xl text-lg font-medium transition-all shadow-md">
                Send Message via Email
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:w-2/5 bg-[var(--color-brand-green)] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-10 text-white">Contact Info</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <FiMapPin size={24} className="mr-5 mt-1 text-green-200" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white opacity-90">Office Address</h4>
                    <p className="text-green-50 leading-relaxed font-light">
                      123, Real Estate Avenue,<br/>Ambattur, Chennai<br/>Tamil Nadu 600053
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone size={24} className="mr-5 mt-1 text-green-200" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white opacity-90">Call Us</h4>
                    <p className="text-green-50 font-light">
                      <a href="tel:+919176692377" className="hover:underline block">+91 91766 92377</a>
                      <a href="tel:+919841468054" className="hover:underline block">+91 98414 68054</a>
                      <a href="tel:+919884220050" className="hover:underline block">+91 98842 20050</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiMail size={24} className="mr-5 mt-1 text-green-200" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white opacity-90">Email</h4>
                    <a href="mailto:info@srivaralakshmihomes.com" className="text-green-50 font-light hover:underline">info@srivaralakshmihomes.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMessageCircle size={24} className="mr-5 mt-1 text-green-200" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white opacity-90">WhatsApp</h4>
                    <a href="https://wa.me/919176692377" target="_blank" rel="noreferrer" className="text-green-50 font-light hover:underline">+91 91766 92377 (24/7 Support)</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    
      {/* Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 rounded-3xl overflow-hidden h-96 shadow-sm">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.5938837279!2d80.1299385!3d13.118021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a2cb1eacd5%3A0xe5a3f292fa1f77d3!2sAmbattur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711812853245!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
