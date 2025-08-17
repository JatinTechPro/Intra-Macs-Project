import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import CameraCapture from './components/CameraCapture';
import ResultCard from './components/ResultCard';
import './styles/App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showResult, setShowResult] = useState(false);
  
  // Dummy data for nutrition analysis
  const dummyResult = {
    food: "Biryani",
    nutrition: {
      carbs: "High",
      protein: "Medium", 
      fat: "High"
    }
  };

  const handleImageSelect = (imageData) => {
    setSelectedImage(imageData);
    setShowResult(false);
  };

  const handleCheckNutrition = () => {
    if (selectedImage) {
      setShowResult(true);
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setSelectedImage(null);
    setShowResult(false);
  };

  const hasImage = selectedImage && 
    ((activeTab === 'upload' && selectedImage.type === 'upload') ||
     (activeTab === 'camera' && selectedImage.type === 'camera'));

  return (
    <div className="app">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <h1 className="app-title">NutriSnap 🍽️</h1>
          <p className="app-subtitle">What's On My Plate?</p>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            onClick={() => handleTabSwitch('upload')}
            className={`tab-button ${activeTab === 'upload' ? 'active' : ''}`}
          >
            📁 Upload Photo
          </button>
          <button
            onClick={() => handleTabSwitch('camera')}
            className={`tab-button ${activeTab === 'camera' ? 'active' : ''}`}
          >
            📱 Take Photo
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'upload' && (
            <ImageUpload
              onImageSelect={handleImageSelect}
              selectedImage={selectedImage}
            />
          )}
          
          {activeTab === 'camera' && (
            <CameraCapture
              onImageCapture={handleImageSelect}
              capturedImage={selectedImage}
            />
          )}

          {/* Check Nutrition Button */}
          <div className="nutrition-button-container">
            <button
              onClick={handleCheckNutrition}
              disabled={!hasImage}
              className={`nutrition-button ${hasImage ? 'enabled' : 'disabled'}`}
            >
              {hasImage ? '🔍 Check Nutrition' : '🔍 Select Image First'}
            </button>
          </div>

          {/* Result Card */}
          <ResultCard result={dummyResult} isVisible={showResult} />
        </div>
      </div>
    </div>
  );
};

export default App;
