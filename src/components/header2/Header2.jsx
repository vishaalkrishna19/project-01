import React, { useState, useEffect } from 'react';
import './Header2.scss';
import Translate from '../translate/Translate';

const Header2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      
      setMobileMenuVisible(false);
      
      setTimeout(() => {
        setMobileMenuOpen(false);
        document.body.classList.remove('mobile-menu-open');
      }, 400);
    } else {
     
      setMobileMenuOpen(true);
      document.body.classList.add('mobile-menu-open');
      
      setTimeout(() => {
        setMobileMenuVisible(true);
      }, 10);
    }
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header className="header">

    <div className={`mega-menu-overlay ${activeDropdown ? 'active' : ''}`}></div>

      <div className={`header-container ${isScrolled ? 'hidden' : ''}`}>
        <div className="logo-container">
          <a href="/">
            <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/hf-logo.svg" alt="HappyFox" className="logo" />
          </a>
        </div>
        
        <nav className={`main-nav ${activeDropdown ? 'has-active-dropdown' : ''}`}>
          <ul className="nav-list">
            <li 
              className={`nav-item dropdown ${activeDropdown === 'products' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                Products 
                <span className="dropdown-arrow">
                  <img 
                    src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/menu-arrow-down.png" 
                    alt="Dropdown arrow" 
                    className="arrow-img"
                  />
                </span>
              </a>
              
              {activeDropdown === 'products' && (
                <div 
                  className={`mega-menu ${isAnimating ? 'slide-in-from-right' : 'slide-out-to-right'}`}
                  onMouseEnter={() => setActiveDropdown('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mega-menu-container">
                    <div className="mega-menu-section">
                      <h4 className="section-title">Explore</h4>
                      
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/HD.original.svg" alt="Help Desk" />
                        </div>
                        <div className="menu-content">
                          <h5>Help Desk</h5>
                          <p>Intuitive ticketing system & knowledge base</p>
                        </div>
                      </div>
                      
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Workflows_qhQsm2a.original.svg" alt="Workflows" />
                        </div>
                        <div className="menu-content">
                          <h5>Workflows</h5>
                          <p>End to end process automation</p>
                        </div>
                      </div>
                      
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/AI_dK1wXHc.original.svg" alt="HappyFox AI" />
                        </div>
                        <div className="menu-content">
                          <h5>HappyFox AI</h5>
                          <p>Superior support experiences with gen AI</p>
                        </div>
                      </div>
                      
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Livechat.original.svg" alt="Live Chat" />
                        </div>
                        <div className="menu-content">
                          <h5>Live Chat</h5>
                          <p>Real-time chat support</p>
                        </div>
                      </div>
                      
                      <button className="view-all-btn">View All Products</button>
                    </div>
                    
                    <div className="mega-menu-section second">
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/SD_vG376Cn.original.svg" alt="Service Desk" />
                        </div>
                        <div className="menu-content">
                          <h5>Service Desk</h5>
                          <p>ITSM with speed and efficiency</p>
                        </div>
                      </div>
                      
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Assist_AI_F5XV86I.original.svg"   alt="Assist AI" />
                        </div>
                        <div className="menu-content">
                          <h5>Assist AI</h5>
                          <p>Enhanced employee support with AI Assistant</p>
                        </div>
                      </div>
                      
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Chatbot.original_cGyCHkU.svg" alt="Chatbot" />
                        </div>
                        <div className="menu-content">
                          <h5>Chatbot</h5>
                          <p>Personalized & scalable self-service</p>
                        </div>
                      </div>
                      
                      <div className="menu-item">
                        <div className="menu-icon">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/BI.original_sYNwXPM.svg"  alt="Business Intelligence" />
                        </div>
                        <div className="menu-content">
                          <h5>Business Intelligence</h5>
                          <p>Advanced insights with custom dashboards</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mega-menu-section integrations">
                      <h4 className="section-title">Integrations</h4>
                      
                      <div className="integration-grid">
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Ms_teams.original.svg" alt="MS Teams" />
                          <span>MS Teams</span>
                        </div>
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Slack.original.svg" alt="Slack" />
                          <span>Slack</span>
                        </div>
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/jira-logo-FD39F795A7-seeklogo.com.original.png" alt="Jira" />
                          <span>Jira</span>
                        </div>
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/226579.original.png" alt="Shopify" />
                          <span>Shopify</span>
                        </div>
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Salesforce.com_logo.svg.original.png" alt="Salesforce" />
                          <span>Salesforce</span>
                        </div>
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/png-transparent-aircall-logo-thumbnail-tech-com.original.png"  alt="Aircall" />
                          <span>Aircall</span>
                        </div>
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/whatsapp-icon-free-png.original.png" alt="WhatsApp" />
                          <span>WhatsApp</span>
                        </div>
                        <div className="integration-item">
                          <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Azure_AD.original.svg" alt="Azure AD" />
                          <span>Azure AD</span>
                        </div>
                      </div>
                      
                      <button className="view-all-btn">View All Integrations</button>
                    </div>
                    
                    <div className="mega-menu-footer">
                      <div className="support-center">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/help-circle.original.svg" alt="Support" />
                        <div className='support-content'>
                          <strong>Support Center</strong>
                          <p>What can we help you with? Talk to our customer support.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link">Solutions <span className="dropdown-arrow">
  <img 
    src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/menu-arrow-down.png" 
    alt="Dropdown arrow" 
    className="arrow-img"
  />
</span></a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Enterprise</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link">Resources <span className="dropdown-arrow">
  <img 
    src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/menu-arrow-down.png" 
    alt="Dropdown arrow" 
    className="arrow-img"
  />
</span></a>
            </li>
          </ul>
        </nav>
        
        {/* <div className='translate-btn'>
          <Translate />
        </div> */}
        <div className="cta-button">
          <a href="#" className="demo-btn">Get A Demo</a>
        </div>
      </div>
      
      <div className={`sub-header ${isScrolled ? 'scrolled' : ''} ${activeDropdown ? 'hidden' : ''}`}>
        <div className="sub-header-container">
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg viewBox="0 0 24 24" className="menu-icon-mobile">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </button>
          <div className="sub-header-title">
            <div className={`mini-logo ${isScrolled ? 'visible' : ''}`}>
              <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/hf-logo-mini.svg" alt="HappyFox" className="mini-logo-img" />
            </div>
            <a href="" className="title">Help Desk</a>
          </div>
          <div className="sub-header-links">
            <a href="#" className="sub-nav-link">Help Desk Tour</a>
            <a href="#" className="sub-nav-link">Integrations</a>
            <a href="#" className="sub-nav-link">Pricing</a>
          </div>
          <div className={`cta-button-sub ${isScrolled ? 'visible' : ''}`}>
            <a href="#" className="demo-btn">Get A Demo</a>
          </div>
        </div>
      </div>

   
        {mobileMenuOpen && (
          <div className={`mobile-menu-fullscreen ${mobileMenuVisible ? 'slide-in' : 'slide-out'}`}>
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/hf-logo-mini.svg"  alt="HappyFox" className="logo" />
              </div>
              <button className="mobile-close-button" onClick={toggleMobileMenu}>
                <svg viewBox="0 0 24 24" className="close-icon">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
            </div>

          
          <div className="mobile-menu-content">
            <nav className="mobile-main-nav">
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu(0); }}>
                    Products
                    <span className={`mobile-arrow-icon ${openSubmenu === 0 ? 'open' : ''}`}>
                      <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/arrow-black.svg"  alt="Arrow" />
                    </span>
                  </a>
               
                  <ul className={`mobile-submenu ${openSubmenu === 0 ? 'open' : ''}`}>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/HD.original.svg" alt="Help Desk" className="mobile-submenu-icon" />
                        Help Desk
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Workflows_qhQsm2a.original.svg" alt="Workflows" className="mobile-submenu-icon" />
                        Workflows
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/AI_dK1wXHc.original.svg" alt="HappyFox AI" className="mobile-submenu-icon" />
                        HappyFox AI
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Livechat.original.svg" alt="Live Chat" className="mobile-submenu-icon" />
                        Live Chat
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/SD_vG376Cn.original.svg" alt="Service Desk" className="mobile-submenu-icon" />
                        Service Desk
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Assist_AI_F5XV86I.original.svg" alt="Assist AI" className="mobile-submenu-icon" />
                        Assist AI
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/Chatbot.original_cGyCHkU.svg" alt="Chatbot" className="mobile-submenu-icon" />
                        Chatbot
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/media/images/BI.original_sYNwXPM.svg" alt="Business Intelligence" className="mobile-submenu-icon" />
                        Business Intelligence
                      </a>
                    </li>
                    <li>
                      <a href="">
                        All Products
                      </a>
                    </li>
                  </ul>

                </li>
                
                <li className="mobile-nav-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu(1); }}>
                    Solutions
                    <span className={`mobile-arrow-icon ${openSubmenu === 1 ? 'open' : ''}`}>
                      <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/arrow-black.svg" alt="Arrow" />
                    </span>
                  </a>
                  <ul className={`mobile-submenu ${openSubmenu === 1 ? 'open' : ''}`}>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Ecommerce</a></li>
                    <li><a href="#">Telecom</a></li>
                    <li><a href="#">Non-Profit Organizations</a></li>
                  </ul>
                </li>
                
                <li className="mobile-nav-item">
                  <a href="#">Enterprise</a>
                </li>
                
                <li className="mobile-nav-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu(2); }}>
                    Resources
                    <span className={`mobile-arrow-icon ${openSubmenu === 2 ? 'open' : ''}`}>
                      <img src="https://s3.us-west-2.amazonaws.com/assets.www.happyfox.com/images/arrow-black.svg" alt="Arrow" />
                    </span>
                  </a>
                  <ul className={`mobile-submenu ${openSubmenu === 2 ? 'open' : ''}`}>
                    <li><a href="#">Customer Stories</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Ebooks</a></li>
                  </ul>
                </li>

                <li className="mobile-nav-item">
                  <a href="#">Help Desk Tour</a>
                </li>

                <li className="mobile-nav-item">
                  <a href="#">Integrations</a>
                </li>

                <li className="mobile-nav-item">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </nav>
            
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;