import React, { useState } from 'react';
import './PricingTab.scss';

const PricingTab = () => {
  const [activeTab, setActiveTab] = useState('agent');
  const [billingCycle, setBillingCycle] = useState('annual');

  const agentBasedPricing = [
    {
      id: 'basic',
      name: 'Basic',
      pricing: {
        monthly: 29,
        annual: 24,
        '2year': 21
      },
      period: 'Per agent/mo',
      features: [
        'Unlimited Tickets',
        'Omnichannel Ticket Creation',
        'SLA Management',
        'Knowledge Base',
        'SSO (GSuite/SAML/Azure)',
        'Up to 5 Agents'
      ]
    },
    {
      id: 'team',
      name: 'Team',
      pricing: {
        monthly: 79,
        annual: 49,
        '2year': 59
      },
      period: 'Per agent/mo',
      features: [
        'Everything in Basic, and:',
        'Multi-brand Helpdesk',
        'Custom Email',
        'Custom Domain',
        'Custom Roles and Permissions',
        'Custom Ticket Queues',
        '24/5 Email Support',
        'Optional EU Data Center'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      pricing: {
        monthly: 119,
        annual: 99,
        '2year': 89
      },
      period: 'Per agent/mo',
      isPopular: true,
      features: [
        'Everything in Team, and:',
        'Proactive Agent Collision',
        'Task Management',
        'Asset Management',
        'Scheduled Tickets',
        'Load Balanced Ticket Assignment',
        'Password Policy Management',
        '24/7 Email Support',
        'Uptime SLA'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise PRO',
      isContactSales: true,
      features: [
        'Everything in Pro, and:',
        'Agent Scripting',
        '2 TB Attachment Store',
        'All-time Reporting History',
        'Advanced Audit Logs',
        '24/7 Phone Support',
        'Customer Success Manager'
      ]
    }
  ];

  const unlimitedAgentsPricing = [
    {
      id: 'growth',
      name: 'Growth',
      pricing: {
        annual: 1999,
        '2year': 1599
      },
      period: '/ month',
      features: [
        'Unlimited Agents',
        '20,000 Tickets / year',
        '20 Custom Fields'
      ]
    },
    {
      id: 'scale',
      name: 'Scale',
      pricing: {
        annual: 3999,
        '2year': 3199
      },
      period: '/ month',
      features: [
        'Unlimited Agents',
        '150,000 Tickets / year',
        '100 Custom Fields'
      ]
    },
    {
      id: 'scale-plus',
      name: 'Scale Plus',
      pricing: {
        annual: 5999,
        '2year': 4799
      },
      period: '/ month',
      isPopular: true,
      features: [
        'Unlimited Agents',
        '300,000 Tickets / year',
        '200 Custom Fields'
      ]
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      isContactSales: true,
      features: [
        'Unlimited Agents',
        '1,000,000 Tickets / year',
        '300 Custom Fields'
      ]
    }
  ];

  const getCurrentPricingData = () => {
    return activeTab === 'agent' ? agentBasedPricing : unlimitedAgentsPricing;
  };

  const getCurrentPrice = (plan) => {
    if (plan.isContactSales) return null;
    return plan.pricing[billingCycle];
  };

  const getAvailableBillingOptions = () => {
    if (activeTab === 'unlimited') {
      return ['annual', '2year']; 
    }
    return ['monthly', 'annual', '2year']; 
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'unlimited' && billingCycle === 'monthly') {
      setBillingCycle('annual'); 
    }
  };

  const availableBillingOptions = getAvailableBillingOptions();

  return (
    <>
      <div className="pricing-header-section">
        <div className="pricing-header-content">
          <h1 className="pricing-title">Plans & Pricing</h1>
          
          <div className="pricing-tabs">
            <button 
              className={`tab-button ${activeTab === 'agent' ? 'active' : ''}`}
              onClick={() => handleTabChange('agent')}
            >
              Agent-based pricing
            </button>
            <button 
              className={`tab-button ${activeTab === 'unlimited' ? 'active' : ''}`}
              onClick={() => handleTabChange('unlimited')}
            >
              Unlimited Agents
            </button>
          </div>
        </div>
      </div>

      <div className="pricing-content-section">
        <div className={`billing-toggle ${activeTab === 'unlimited' ? 'unlimited-layout' : ''}`}>
          {availableBillingOptions.includes('monthly') && (
            <button 
              className={`billing-button ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
          )}
          
          <button 
            className={`billing-button ${billingCycle === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual
          </button>
          
          <div className="savings-plan-container">
            <button 
              className={`billing-button ${billingCycle === '2year' ? 'active' : ''}`}
              onClick={() => setBillingCycle('2year')}
            >
              <span className="plan-text">2-Year Savings Plan</span>
              <span className="paid-label">Paid Up-Front</span>
            </button>
          </div>
        </div>

        <div className={`pricing-cards ${activeTab === 'unlimited' ? 'unlimited-layout' : ''}`}>
          {getCurrentPricingData().map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'featured' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              
              {plan.isContactSales ? (
                <div className="contact-sales">
                  <a href="#" className="contact-link">Contact Sales</a>
                </div>
              ) : (
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{getCurrentPrice(plan)}</span>
                  <span className="period">{plan.period}</span>
                </div>
              )}

              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {((plan.id === 'pro' || plan.id === 'team') && index === 0) || 
                     ((plan.id === 'scale' || plan.id === 'scale-plus') && index === 0) ? (
                      <span className="feature-header">{feature}</span>
                    ) : (
                      feature
                    )}
                  </li>
                ))}
              </ul>

              <button className="demo-button">
                Get a Demo
                <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className='note'>
          <div className='note-text'>
          <p>
            {activeTab === 'agent' 
              ? (
                  <>
                    Number of agents is capped at 5 for Basic plan. No limit on agents for other <br/> plans. Non-profit and educational organizations are eligible for a discount.
                  </>
                )
              : (
                <>
                All plans come with SSL security, unlimited agents, smart rules, knowledge base, multilingual support, <br/> rich text formatting in tickets and iOS & Android apps.
                </>
              )
            }
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTab;