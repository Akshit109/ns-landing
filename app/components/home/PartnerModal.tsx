'use client';

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryType?: 'partner' | 'new-investor' | 'professional';
  title?: string;
  description?: string;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ 
  isOpen, 
  onClose, 
  inquiryType = 'partner',
  title = 'Partner With Us',
  description = 'Join us as a partner and explore collaboration opportunities'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    checkDarkMode();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => mediaQuery.removeEventListener('change', checkDarkMode);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/partner-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, inquiryType }),
      });

      if (response.ok) {
        setIsSuccess(true);
        
        // Close modal after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
          onClose();
        }, 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || 'Failed to submit inquiry');
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Error: ${errorMessage}. Please try again or check the console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClose}></div>
      <div className={classNames(
        'rounded-lg p-8 shadow-lg z-10 max-w-md mx-4 w-full max-h-[90vh] overflow-y-auto',
        {
          'bg-white': !isDarkMode,
          'bg-black border-2 border-white': isDarkMode,
        }
      )}>
        {isSuccess ? (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className={classNames('text-lg font-semibold mb-2', {
              'text-gray-900': !isDarkMode,
              'text-white': isDarkMode
            })}>Submitted Successfully!</h3>
            <p className={classNames({
              'text-gray-600': !isDarkMode,
              'text-gray-300': isDarkMode
            })}>Thank you for your partnership inquiry. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-6">
              <h3 className={classNames('text-xl font-semibold mb-3', {
                'text-gray-900': !isDarkMode,
                'text-white': isDarkMode
              })}>
                {title}
              </h3>
              <p className={classNames('text-sm leading-relaxed', {
                'text-gray-600': !isDarkMode,
                'text-gray-300': isDarkMode
              })}>
                {description}
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className={classNames('block text-sm font-medium mb-2', {
                'text-gray-700': !isDarkMode,
                'text-gray-300': isDarkMode
              })}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={classNames('w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ctaColor focus:border-ctaColor disabled:cursor-not-allowed', {
                  'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 disabled:bg-gray-100': !isDarkMode,
                  'border border-gray-700 bg-[#232323] text-white placeholder-gray-500 disabled:bg-[#232323]': isDarkMode
                })}
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={classNames('block text-sm font-medium mb-2', {
                'text-gray-700': !isDarkMode,
                'text-gray-300': isDarkMode
              })}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={classNames('w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ctaColor focus:border-ctaColor disabled:cursor-not-allowed', {
                  'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 disabled:bg-gray-100': !isDarkMode,
                  'border border-gray-700 bg-[#232323] text-white placeholder-gray-500 disabled:bg-[#232323]': isDarkMode
                })}
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className={classNames('block text-sm font-medium mb-2', {
                'text-gray-700': !isDarkMode,
                'text-gray-300': isDarkMode
              })}>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={classNames('w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ctaColor focus:border-ctaColor disabled:cursor-not-allowed', {
                  'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 disabled:bg-gray-100': !isDarkMode,
                  'border border-gray-700 bg-[#232323] text-white placeholder-gray-500 disabled:bg-[#232323]': isDarkMode
                })}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className={classNames('block text-sm font-medium mb-2', {
                'text-gray-700': !isDarkMode,
                'text-gray-300': isDarkMode
              })}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                disabled={isSubmitting}
                className={classNames('w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ctaColor focus:border-ctaColor disabled:cursor-not-allowed', {
                  'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 disabled:bg-gray-100': !isDarkMode,
                  'border border-gray-700 bg-[#232323] text-white placeholder-gray-500 disabled:bg-[#232323]': isDarkMode
                })}
                placeholder="Tell us about your partnership interests or any questions you have..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className={classNames('flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed', {
                  'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500': !isDarkMode,
                  'border border-gray-700 text-gray-300 hover:bg-[#232323] focus:ring-ctaColor': isDarkMode
                })}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()}
                className="flex-1 bg-ctaColor text-black px-4 py-3 rounded-md hover:bg-ctaColor/80 hover:text-black focus:outline-none focus:ring-2 focus:ring-ctaColor focus:ring-offset-2 transition-all duration-700 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Partnership Inquiry'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PartnerModal; 