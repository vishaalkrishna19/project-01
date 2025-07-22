import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Compare.scss';
import comparisonData from '../../data/compareData.json';

const Compare = () => {
  const [data, setData] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  useEffect(() => {
    setData(comparisonData.categories);
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

const handleScrollComplete = () => {
 
  window.dispatchEvent(new CustomEvent('compareScrollComplete'));
};

  const renderCell = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="checkmark">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20">
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="arrow">
                <rect id="Rectangle-3" x="0" y="0" width="20" height="20"/>
                <path d="M16.66983,6.89507105 L8.59505595,14.6814237 C8.15092589,15.1101054 7.4200347,15.1055546 6.97065901,14.671412 L6.96978474,14.671412 C6.90451448,14.6069845 6.84456154,14.5369596 6.79055903,14.462077 L3.34068264,10.4373837 C3.12585383,10.2390538 3.00202551,9.95508673 3.00002463,9.65617586 C2.99802374,9.35726499 3.11803851,9.07152895 3.33019138,8.87010147 C3.77432144,8.4423299 4.5060869,8.44688066 4.95546259,8.88011314 L7.95071766,11.2856456 L15.0349418,5.31868733 C15.4790718,4.89000562 16.209963,4.89455638 16.6593387,5.32778886 C17.1095887,5.76193149 17.11396,6.46638934 16.66983,6.89507105 Z" id="Arrow" fill="#17B978" fillRule="nonzero"/>
              </g>
            </g>
          </svg>
        </span>
      ) : (
        <span className="dash">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">

            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="arrow-dash">
                    <g>
                        <rect id="Rectangle-3" x="0" y="0" width="20" height="20"/>
                        <path d="M3,10 L17,10" id="dash" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </g>
            </g>
        </svg>
        </span>
        
      );
    }
    return value;
  };

  const toggleCategory = (categoryIndex) => {
    const newExpandedCategories = new Set(expandedCategories);
    if (newExpandedCategories.has(categoryIndex)) {
      newExpandedCategories.delete(categoryIndex);
    } else {
      newExpandedCategories.add(categoryIndex);
    }
    setExpandedCategories(newExpandedCategories);
  };

  const renderFeatures = (features, categoryIndex, isExtra = false) => {
    return features.map((feature, featureIndex) => (
      <tr 
        key={`${isExtra ? 'extra-' : ''}${featureIndex}`} 
        className={`feature-row ${isExtra ? 'extra-feature fade-in' : ''}`}
      >
        <td className="feature-name">
          {feature.isLink ? (
            <a href="#" className="feature-link">{feature.name}</a>
          ) : (
            feature.name
          )}
        </td>
        
        <td 
          data-pro-value={typeof feature.pro === 'boolean' ? 
            (feature.pro ? '✓' : 'no') : feature.pro}
        >
          {renderCell(feature.basic)}
        </td>
        
        <td>{renderCell(feature.team)}</td>
        <td>{renderCell(feature.pro)}</td>
        
        <td 
          data-team-value={typeof feature.team === 'boolean' ? 
            (feature.team ? '✓' : 'no') : feature.team}
        >
          {renderCell(feature.enterprise)}
        </td>
      </tr>
    ));
  };

  return (
    <div data-aos="fade-up">
      <h2 className="compare-title" data-aos="fade-down">Compare Help Desk Plans</h2>
      
      <div className="compare-container" data-aos="fade-up" data-aos-delay="200">
        <div className="comparison-table-wrapper">
          
          <div className="header-table-container" data-aos="slide-down" data-aos-delay="300">
            <table className="header-table">
              <thead>
                <tr>
                  <th className="feature-column"></th>
                  <th className="plan-header-spacing mobile-combined-left">
                    <div className="mobile-plan-group">
                      <span className="plan-name">Basic</span>
                      <span className="plan-name">Pro</span>
                    </div>
                    <div className="plan-header-spacing desktop-only">Basic</div>
                  </th>
                  <th className="plan-header-spacing desktop-only">Team</th>
                  <th className="plan-header-spacing desktop-only">Pro</th>
                  <th className="mobile-combined-right">
                    <div className="mobile-plan-group">
                      <span className="plan-name">Team</span>
                      <span className="plan-name">Enterprise PRO</span>
                    </div>
                    <div className="desktop-plan-name">Enterprise PRO</div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          
          <div className="body-table-container" data-aos="fade-up" data-aos-delay="400">
            <table className="body-table">
              <tbody>
                {data.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    {category.category && (
                      <tr className="category-row">
                        <td className="category-name" colSpan="5">{category.category}</td>
                      </tr>
                    )}
                    
                    {renderFeatures(category.features, categoryIndex)}
                    
                    {expandedCategories.has(categoryIndex) && category.extraFeatures && 
                      renderFeatures(category.extraFeatures, categoryIndex, true)
                    }
                    
                    {category.extraFeatures && category.extraFeatures.length > 0 && (
                      <tr className="view-all-row">
                        <td colSpan="5" className="view-all-container">
                          <button 
                            className="view-all-button"
                            onClick={() => toggleCategory(categoryIndex)}
                          >
                            {expandedCategories.has(categoryIndex) ? 'VIEW LESS -' : 'VIEW ALL +'} 
                          </button>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="comparison-footnotes" data-aos="fade-in" data-aos-delay="600">
          <p className="footnote">* Planned</p>
          <p className="footnote"># Only with custom domain</p>
        </div>
      </div>
    </div>
  );
};

export default Compare;