import React, { useState } from 'react';
import { TrendingUp, Shield, BarChart2, Users, ArrowRight } from 'lucide-react';
import './bootstrap.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="mutual-fund-app">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => setCurrentPage('home')}>
            <div className="logo-icon me-2">
              <div className="logo-line"></div>
              <div className="logo-line"></div>
              <div className="logo-line"></div>
            </div>
            <span>ROY'S INVEST</span>
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${currentPage === 'blog' ? 'active' : ''}`} 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('blog');
                  }}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Investments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' ? <HomePage /> : null}
      {currentPage === 'blog' ? <BlogPage /> : null}

      {/* Footer */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="text-white">Roy's Invest</h5>
              <p className="text-white-50">Your trusted financial partner since 1986. We help you make smart investment decisions for a secure future.</p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-white">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" onClick={() => setCurrentPage('home')} className="text-white-50">Home</a></li>
                <li><a href="#" onClick={() => setCurrentPage('blog')} className="text-white-50">Blog</a></li>
                <li><a href="#" className="text-white-50">About Us</a></li>
                <li><a href="#" className="text-white-50">Services</a></li>
                <li><a href="#" className="text-white-50">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-white">Services</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white-50">Mutual Funds</a></li>
                <li><a href="#" className="text-white-50">Retirement Planning</a></li>
                <li><a href="#" className="text-white-50">Tax-Saving Investments</a></li>
                <li><a href="#" className="text-white-50">Portfolio Management</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className="text-white">Contact Us</h5>
              <address className="text-white-50">
                123 Financial District<br />
                New York, NY 10001<br />
                <a href="tel:+1234567890" className="text-white-50">+1 (234) 567-890</a><br />
                <a href="mailto:info@roysinvest.com" className="text-white-50">info@roysinvest.com</a>
              </address>
            </div>
          </div>
          <hr className="my-4 bg-light" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-white-50 mb-0">© 2025 Roy's Invest. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="text-white-50 mb-0">
                <a href="#" className="text-white-50 me-3">Privacy Policy</a>
                <a href="#" className="text-white-50">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;