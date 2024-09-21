import React, { useState } from 'react';
import './DynamicTabs.css'; 

const DynamicTabs = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <div>
            <h2>About Us</h2>
            <p>
            We are a forward-thinking digital agency dedicated to crafting high-quality websites, mobile applications, and digital marketing solutions. Our talented team provides customized services that align with the unique goals of our clients, ensuring impactful results and sustainable growth. Since our founding, we’ve collaborated with a wide range of industries, delivering tailored software solutions, enhancing brand visibility, and designing seamless, user-focused experiences that resonate with audiences.


            </p>
            
          </div>
        );
      case 'Image Source':
        return (
          <div>
            <h2>Image Source</h2>
            <p>
            The image displayed is sourced from Unsplash, a high-resolution image platform. Captured by professional photographer John Doe, the photo depicts a bustling urban environment with dynamic lighting, symbolizing the energy of modern digital transformations. The image was chosen for its vibrant colors and composition, which aligns with the brand's focus on innovation and forward-thinking solutions. The balance between the architectural elements and the motion of people highlights the agency's ability to harmonize technology with human-centered design.
            </p>
          </div>
        );
      case 'Portfolio':
        return (
          <div>
            <h2>Purchased</h2>
            <p>
            The services and products featured in our portfolio are carefully curated to meet the diverse needs of our clients. With each purchase, customers receive tailored solutions designed to enhance their operations and drive growth. From our web development packages to digital marketing services, each offering is backed by extensive industry expertise and a commitment to delivering measurable results. Our customers have access to ongoing support, ensuring they can maximize the value of their investment long after the initial purchase. Every project we undertake is built around the client’s goals, providing a seamless, high-impact experience.
            </p>
            
          </div>
        );
      default:
        return <p>Select a tab to display content.</p>;
    }
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        <li
          className={activeTab === 'About' ? 'active' : ''}
          onClick={() => setActiveTab('About')}
        >
          About
        </li>
        <li
          className={activeTab === 'Image Source' ? 'active' : ''}
          onClick={() => setActiveTab('Image Source')}
        >
          Image Source
        </li>
        <li
          className={activeTab === 'Portfolio' ? 'active' : ''}
          onClick={() => setActiveTab('Portfolio')}
        >
          Purchased
        </li>
      </ul>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default DynamicTabs;
