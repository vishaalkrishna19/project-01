import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './More.scss';

const More = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200, 
      easing: 'ease-in-out',
      delay: 0
    });
  }, []);

  return (
    <section className="more-section" data-aos="fade-up">
      <div className="more-container">
        <h2 className="more-title" data-aos="fade-down">More from HappyFox</h2>
        
        <div className="more-grid" data-aos="fade-up" data-aos-delay="200">
          <div className="more-card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-icon">
              <img src="//assets.www.happyfox.com/v2/images/pricing-lc.svg" alt="" srcset="" />
            </div>
            <h3 className="card-title">Live Chat</h3>
            <p className="card-description">
              Chat with your customers instantly on mobile, desktop, and web.
            </p>
            <a href="#" className="card-link">
              Start free trial <span className="arrow">›</span>
            </a>
          </div>

          <div className="more-card" data-aos="fade-up" data-aos-delay="200">
          <div className="card-icon">
              <img src="//assets.www.happyfox.com/v2/images/pricing-cb.svg" alt="" srcset="" />
            </div>
            <h3 className="card-title">Chatbot</h3>
            <p className="card-description">
              Engage and reach your customers 24x7 with ready-to-go chatbots.
            </p>
            <a href="#" className="card-link">
              Get a demo <span className="arrow">›</span>
            </a>
          </div>

          <div className="more-card" data-aos="fade-up" data-aos-delay="300">
          <div className="card-icon">
              <img src="//assets.www.happyfox.com/v2/images/pricing-ai.svg" alt="" srcset="" />
            </div>
            <h3 className="card-title">Assist AI</h3>
            <p className="card-description">
              Provide IT support directly from Slack and Microsoft Teams.
            </p>
            <a href="#" className="card-link">
              Get a demo <span className="arrow">›</span>
            </a>
          </div>

          <div className="more-card" data-aos="fade-up" data-aos-delay="400">
          <div className="card-icon">
              <img src="//assets.www.happyfox.com/v2/images/pricing-bi.svg" alt="" srcset="" />
            </div>
            <h3 className="card-title">Business Intelligence</h3>
            <p className="card-description">
              Turn insight into advantage with cross-platform analytics and reporting.
            </p>
            <a href="#" className="card-link">
              Get a demo <span className="arrow">›</span>
            </a>
          </div>

          <div className="more-card" data-aos="fade-up" data-aos-delay="500">
          <div className="card-icon">
              <img src="//assets.www.happyfox.com/v2/images/pricing-wa.svg" alt="" srcset="" />
            </div>
            <h3 className="card-title">Workflow Automation</h3>
            <p className="card-description">
              Reduce the grunt work with end-to-end workflow automation.
            </p>
            <a href="#" className="card-link">
              Get a demo <span className="arrow">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;