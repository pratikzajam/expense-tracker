import React, { useState, useEffect } from 'react';
import { DollarSign, PieChart, TrendingUp, Shield } from 'lucide-react';
import { useNavigate } from 'react-router';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

 let  Navigate=useNavigate();

  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold flex items-center">
            <DollarSign className="mr-2" />
            FinTrack
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="hover:text-gray-300 transition duration-300">Features</a>
            <a href="#pricing" className="hover:text-gray-300 transition duration-300">Pricing</a>
            <a href="#about" className="hover:text-gray-300 transition duration-300">About</a>
            <button onClick={()=>Navigate("/login")} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300">Login</button>
            <button onClick={()=>Navigate("/register")} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300">Sign Up</button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black py-2">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a href="#features" className="block hover:text-gray-300 transition duration-300">Features</a>
              <a href="#pricing" className="block hover:text-gray-300 transition duration-300">Pricing</a>
              <a href="#about" className="block hover:text-gray-300 transition duration-300">About</a>
              <button onClick={()=>Navigate("/login")}  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 w-full">Login</button>
              <button onClick={()=>Navigate("/register")} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 w-full">Sign Up</button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32 flex flex-col md:flex-row items-center">
        <div 
          className={`md:w-1/2 mb-16 md:mb-0 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Take Control of Your Finances</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">Track expenses, set budgets, and achieve your financial goals with our intuitive finance tracker.</p>
          <button onClick={()=>Navigate("/register")} className="bg-black text-white px-8 py-4 rounded text-lg font-semibold hover:bg-gray-800 transition duration-300 transform hover:scale-105">
            Start Tracking For Free
          </button>
        </div>
        <div 
          className={`md:w-1/2 flex justify-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative flex items-center justify-center w-full h-64">
            <div className="absolute w-24 h-24 bg-black rounded-full flex items-center justify-center text-white animate-pulse">
              <DollarSign size={36} />
            </div>
            <div className="absolute w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-white animate-pulse" style={{ top: '60%', left: '20%', animationDelay: '0.5s' }}>
              <PieChart size={32} />
            </div>
            <div className="absolute w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white animate-pulse" style={{ top: '20%', right: '25%', animationDelay: '1s' }}>
              <TrendingUp size={24} />
            </div>
            <div className="absolute w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white animate-pulse" style={{ bottom: '15%', right: '20%', animationDelay: '1.5s' }}>
              <Shield size={20} />
            </div>
          </div>
        </div>
      </header>
      
      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 bg-black text-white rounded-full mb-6 mx-auto">
                <DollarSign size={24} />
              </div>
              <div className="text-2xl font-bold mb-4 text-center">Expense Tracking</div>
              <p className="text-gray-700 text-center">Easily log and categorize your expenses to understand your spending habits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 bg-black text-white rounded-full mb-6 mx-auto">
                <PieChart size={24} />
              </div>
              <div className="text-2xl font-bold mb-4 text-center">Budget Management</div>
              <p className="text-gray-700 text-center">Set monthly budgets and receive alerts when you're approaching your limits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 bg-black text-white rounded-full mb-6 mx-auto">
                <TrendingUp size={24} />
              </div>
              <div className="text-2xl font-bold mb-4 text-center">Financial Insights</div>
              <p className="text-gray-700 text-center">Get personalized insights and recommendations to improve your financial health.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of users who are already saving money and achieving their financial goals.</p>
          <button className="bg-white text-black px-8 py-4 rounded text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105 animate-bounce">
            Create Your Free Account
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0 flex items-center">
              <DollarSign className="mr-2" />
              FinTrack
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition duration-300">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-black transition duration-300">Terms</a>
              <a href="#" className="text-gray-600 hover:text-black transition duration-300">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-600">
            © {new Date().getFullYear()} FinTrack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;