import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.scss';
import compareData from '../../data/compareData.json'; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your HappyFox Pricing AI assistant. I can help you find the perfect plan for your needs. Tell me about your business requirements - how many agents do you need, what features are important to you, and what's your budget range?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const GEMINI_API_KEY = 'AIzaSyDcEs8KsWe34PXngJnOKKL4_TpOO_-E7ek';

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
        '2year': 39
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    if (isOpen) {
      setIsClosing(true);
      
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); 
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const callGeminiAPI = async (userMessage) => {
    const prompt = `
You are a HappyFox pricing consultant. Based on the user's requirements, recommend the best pricing plan from the available options below.

AGENT-BASED PRICING PLANS:
${JSON.stringify(agentBasedPricing, null, 2)}

UNLIMITED AGENTS PRICING PLANS:
${JSON.stringify(unlimitedAgentsPricing, null, 2)}

DETAILED FEATURE COMPARISON DATA:
${JSON.stringify(compareData, null, 2)}

User's message: "${userMessage}"

Analyze the user's requirements and provide a personalized recommendation. Consider:
- Number of agents needed
- Budget constraints
- Required features
- Business size/type
- Growth expectations

Please format your response with:
1. Use **bold text** for plan names and important points
2. Use bullet points (•) for feature lists
3. Include clear pricing information with $ symbols
4. Keep paragraphs short and readable
5. Use conversational tone

first say you can get an idea from the compare section of the website, then provide a recommendation based on the user's needs.
Always recommend the pro plan which is the most popular, but also consider the basic and team plans for smaller teams. If the user has complex needs, suggest the enterprise plan.

Provide a clear recommendation with:
1. Which plan(s) you recommend and why
2. Key benefits for their specific use case
3. Cost breakdown if relevant
4. Alternative options if applicable
5. If compare or features are asked, give response utilising the DETAILED FEATURE COMPARISON DATA compareData

Always say at the end they can get a demo by clicking at the button on the header.

Keep the response conversational, helpful, and under 200 words. Focus on value proposition.
`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I apologize, but I'm having trouble connecting to my AI service right now. However, I can still help!\n\n**Here are my general recommendations:**\n\n• **Basic Plan** - Perfect for small teams (up to 5 agents) with standard support needs\n• **Team Plan** - Great for growing businesses needing custom branding and advanced features  \n• **Pro Plan** - Ideal for established companies requiring task management and asset tracking\n• **Enterprise** - Best for large organizations with complex requirements\n\nWould you like me to help you narrow down the options based on your specific needs?";
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() && !isLoading) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
      setIsLoading(true);

      try {
        const aiResponse = await callGeminiAPI(inputMessage);
        
        const botResponse = {
          id: messages.length + 2,
          text: aiResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        const errorResponse = {
          id: messages.length + 2,
          text: "I apologize for the technical difficulty. Let me help you manually - could you tell me more about your team size and what features are most important to you?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const formatBotMessage = (text) => {

    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    formatted = formatted.replace(/•\s*(.*?)(?=\n|$)/g, '<li>$1</li>');
    
    formatted = formatted.replace(/(<li>.*?<\/li>)(\s*<li>.*?<\/li>)*/g, '<ul>$&</ul>');
    
    formatted = formatted.replace(/\*\*(Basic|Team|Pro|Enterprise|Growth|Scale|Scale Plus|Ultimate)( Plan)?\*\*/g, 
      '<span class="plan-name-highlight">$1$2</span>');
    
    formatted = formatted.replace(/\$(\d+,?\d*)\/agent\/month/g, '<span class="price-highlight">$$$1</span><span class="period-text"> per agent/month</span>');
    formatted = formatted.replace(/\$(\d+,?\d*)\/month/g, '<span class="price-highlight">$$$1</span><span class="period-text"> per month</span>');
    formatted = formatted.replace(/\$(\d+,?\d*)\s*per\s*agent\/month/gi, '<span class="price-highlight">$$$1</span><span class="period-text"> per agent/month</span>');
    formatted = formatted.replace(/\$(\d+,?\d*)\s*per\s*month/gi, '<span class="price-highlight">$$$1</span><span class="period-text"> per month</span>');
    
    formatted = formatted.replace(/\$(\d+,?\d*)/g, '<span class="price-highlight">$$$1</span>');
    
    formatted = formatted.replace(/\(monthly\)/gi, '<span class="billing-period">monthly</span>');
    formatted = formatted.replace(/\(annually\)/gi, '<span class="billing-period">annually</span>');
    formatted = formatted.replace(/\(annual\)/gi, '<span class="billing-period">annually</span>');
    formatted = formatted.replace(/\(2-year\)/gi, '<span class="billing-period">2-year plan</span>');
    
    formatted = formatted.replace(/(\d+)\s*\/\s*agent\s*\/\s*mo/g, '$1 per agent/month');
    formatted = formatted.replace(/(\d+)\s*\/\s*month/g, '$1 per month');
    
    formatted = formatted.split('\n\n').map(paragraph => 
      paragraph.trim() ? `<p>${paragraph.replace(/\n/g, '<br>')}</p>` : ''
    ).join('');
    
    if (!formatted.includes('<p>')) {
      formatted = formatted.replace(/\n/g, '<br>');
    }
    
    return formatted;
  };

  const MessageContent = ({ message }) => {
    if (message.sender === 'bot') {
      return (
        <div className="bot-message-wrapper">
          <div className="bot-avatar">
            <img 
              src="https://assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" 
              alt="HappyFox AI" 
              className="ai-logo-image"
            />
          </div>
          <div className="bot-content">
            <div 
              className="message-content bot-formatted"
              dangerouslySetInnerHTML={{ __html: formatBotMessage(message.text) }}
            />
          </div>
        </div>
      );
    }
    
    return (
      <div className="user-message-wrapper">
        <div className="message-content user-formatted">
          {message.text}
        </div>
        <div className="user-avatar">
          <span>👤</span>
        </div>
      </div>
    );
  };

  return (
    <div className="chatbot-container">
     
      {(isOpen || isClosing) && (
        <div className={`chatbot-popup ${isClosing ? 'slide-out' : ''}`}>
          <div className="chatbot-header">
            <div className="header-content">
              <div className="bot-info">
                <div className="bot-avatar-header">
                  <img 
                    src="https://assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" 
                    alt="HappyFox AI" 
                    className="ai-logo-image"
                  />
                </div>
                <div>
                  <h3>HappyFox AI Assistant</h3>
                  <span className="status-indicator">Online</span>
                </div>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              ×
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <MessageContent message={message} />
                <div className={`message-time ${message.sender === 'user' ? 'user-time' : 'bot-time'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message">
                <div className="bot-message-wrapper">
                  <div className="bot-avatar">
                    <img 
                      src="https://assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" 
                      alt="HappyFox AI" 
                      className="ai-logo-image bot-avatar-image"
                    />
                  </div>
                  <div className="bot-content">
                    <div className="message-content typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chatbot-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me about pricing plans..."
              className="message-input"
              disabled={isLoading}
            />
            <button type="submit" className="send-btn" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <span>
                  <img src="https://www.pikpng.com/pngl/b/84-844736_white-paper-plane-send-icon-white-png-clipart.png" alt="" width='20px'/>
                </span>
              )}
            </button>
          </form>

          <div className="chatbot-footer">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 18 24"
              className="happyfox-logo"
            >
              <defs>
                <clipPath id="hf-logo_svg__a">
                  <path d="M2199 0v1230H0V0h2199Z"></path>
                </clipPath>
                <clipPath id="hf-logo_svg__b">
                  <path d="M16.999 9.45 17 12.935 8.498 19.45 0 12.935V9.45l4.467 1.184 4.035 5.432 3.898-5.432 4.599-1.184ZM17 1.594v7.31L12.11 10 8.497 15l-3.604-5L.001 8.904l8.517-4.769S14.868.458 15.413.24C16.436-.175 17-.236 17 1.594ZM1.587.24c.237.095 1.463.79 2.77 1.543l.464.267c1.547.894 3.058 1.781 3.058 1.781L0 8.236V1.594C0-.236.564-.175 1.587.24Z"></path>
                </clipPath>
              </defs>
              <g clipPath="url(#hf-logo_svg__a)" transform="translate(-884 -896)">
                <g clipPath="url(#hf-logo_svg__b)" transform="translate(887 898.55)">
                  <path fill="#ff6b35" d="M0 0h17v19.45H0V0z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      )}
      
     
      <button className="chatbot-fab" onClick={toggleChat}>
        <div className={`fab-icon ${isOpen ? 'fab-icon-close' : ''}`}>
          {isOpen ? '×' : (
            <img 
              src="https://assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" 
              alt="HappyFox AI" 
              className="ai-logo-image fab-logo"
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default Chatbot;