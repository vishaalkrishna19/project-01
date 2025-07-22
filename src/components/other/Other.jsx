import React from 'react';
import './Other.scss';

const Other = () => {
  const aiFeatures = [
    {
      id: 1,
      title: 'Helpdesk',
      description: 'Achieve quicker responses, happier agents, and better customer experiences.',
      logoSpace: true,
      img: "https://assets.www.happyfox.com/v2/images/site-nav/helpdesk-logo-2022.svg" 
    },
    {
      id: 2,
      title: 'Service Desk',
      description: 'Service Desk is a service management solution designed to help your IT team.',
      logoSpace: true,
      img : "//assets.www.happyfox.com/v2/images/site-nav/service-desk-logo-2022.svg"
    },
    {
      id: 3,
      title: 'Workflows',
      description: 'HappyFox Workflows is a no-code platform that lets you automate any business process across your apps.',
      logoSpace: true,
      img : "//assets.www.happyfox.com/v2/images/site-nav/workflows-logo-2022.svg"
    },
    {
      id: 4,
      title: 'HappyFox AI',
      description: 'HappyFox AI allows your support teams to slash ticket volumes and response times by 50%. ',
      logoSpace: true,
      img : "//assets.www.happyfox.com/v2/images/happyfox-ai/happyfox-ai-icon.svg"
    },
    {
      id: 5,
      title: 'Assist AI',
      description: 'AI Assistant That Delivers Amazing Employee Support Experiences.',
      logoSpace: true,
      img : "//assets.www.happyfox.com/v2/images/site-nav/assist-ai-logo.svg" 
    },
    {
      id: 6,
      title: 'Chatbot',
      description: 'Deliver Amazing Support Experience With AI. 24x7.',
      logoSpace: true,
      img :"//assets.www.happyfox.com/v2/images/site-nav/chatbot-logo-2022.svg"
    },
    {
        id: 7,
        title: 'Livechat',
        description: 'Live Chat Software With Unlimited Agents On All Plans.',
        logoSpace: true,
        img : "//assets.www.happyfox.com/v2/images/site-nav/livechat-logo-2022.svg"
    },{
        id: 8,
        title: 'Business Intelligence',
        description: 'Most Advanced Analytics For Support Leaders.',
        logoSpace: true,
        img : "//assets.www.happyfox.com/v2/images/site-nav/bi-logo-2022.svg"
      },
  ];

  return (
    <section className="other-section">
      <div className="other-container">
      <div className="other-header">
          <h2 className="other-title">Looking for something else? </h2>
          <p className="other-description">
          Explore other products by HappyFox. Discover our comprehensive suite of customer support and business automation solutions designed to streamline your operations and enhance customer satisfaction.
          </p>
        </div>

        <div className="main-content">
          <div className="ai-hero-section">
            <div className="hero-visual">
              <div className="ai-logo-container">
                <div className="ai-logo-placeholder">
                  <img 
                    src="https://assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" 
                    alt="HappyFox AI" 
                    className="ai-logo-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="ai-features-grid">
            {aiFeatures.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-logo">
                  <img 
                    src={feature.img}
                    alt="HappyFox Logo" 
                    className="feature-logo-image"
                  />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="other-cta">
          <button className="explore-button">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Other;