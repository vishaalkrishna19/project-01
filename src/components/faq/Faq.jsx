import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Faq.scss';

const Faq = () => {
  const [openQuestions, setOpenQuestions] = useState([]);
  const [shouldInitAOS, setShouldInitAOS] = useState(false);

  useEffect(() => {
    const handleCompareScrollComplete = () => {
      setShouldInitAOS(true);
    };

    
    window.addEventListener('compareScrollComplete', handleCompareScrollComplete);

    const compareSection = document.querySelector('.compare-section');
    if (compareSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          
            setShouldInitAOS(true);
            observer.disconnect();
          }
        },
        { threshold: 0 }
      );
      observer.observe(compareSection);

      return () => {
        observer.disconnect();
        window.removeEventListener('compareScrollComplete', handleCompareScrollComplete);
      };
    }

    return () => {
      window.removeEventListener('compareScrollComplete', handleCompareScrollComplete);
    };
  }, []);

  useEffect(() => {
    if (shouldInitAOS) {
     
      setTimeout(() => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100
        });
        AOS.refresh();
      }, 300);
    }
  }, [shouldInitAOS]);

  const faqData = [
    {
      question: "Who are help desk agents?",
      answer: "Support agents (help desk staff) who will be actively managing and responding to tickets raised by contacts."
    },
    {
      question: "What are Categories?",
      answer: "Categories help organize tickets by type, department, or topic, making it easier to route and manage customer inquiries efficiently."
    },
    {
      question: "How can I change my plan?",
      answer: "You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately and billing is prorated."
    },
    {
      question: "Do you offer a trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial."
    },
    {
      question: "Do you offer discounts for non-profits or educational institutes?",
      answer: "Yes, we provide special pricing for non-profit organizations and educational institutions. Contact our sales team for more information."
    },
    {
      question: "What are the available billing cycles?",
      answer: "We offer monthly, annual, and 2-year plans come with significant discounts compared to monthly billing."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section className="faq-section" data-aos="fade-up">
      <div className="faq-container">
        <h2 className="faq-title" data-aos="fade-down">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openQuestions.includes(index) ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <span className="question-text">{item.question}</span>
                <span className={`faq-icon ${openQuestions.includes(index) ? 'open' : ''}`}>
                  <img 
                    src="//assets.www.happyfox.com/v2/images/down-arrow.svg" 
                    alt="Toggle FAQ" 
                    className="arrow-icon"
                  />
                </span>
              </button>
              
              <div className={`faq-answer ${openQuestions.includes(index) ? 'open' : ''}`}>
                <div className="answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;