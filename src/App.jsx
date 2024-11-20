import { useState } from 'react';
import Content from './components/Content';
import Skill from './components/Skill';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative">
            <img 
              src="/pexels-kenzhar-sharap-125323072-9999451.jpg" 
              alt="Hero" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">Welcome to My Portfolio</h1>
            </div>
          </div>

          {/* Content and Skills Section */}
          <div className="p-6">
            <div className="mb-6">
              <Content />
            </div>
            <div>
              <Skill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
