import React from 'react';
import { TrendingUp, Shield, BarChart2, Users, ArrowRight } from 'lucide-react';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 hero-text">
              <h1 className="display-4 fw-bold text-white">
                WHERE<br />INVESTMENT<br />MEETS<br />TRUST
              </h1>
              <p className="lead text-white mt-4">
                Your Trusted Financial Partner Since 1986
              </p>
              <a href="#" className="btn btn-cta mt-4">
                BOOK A CALL WITH US <ArrowRight size={20} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Our Investment Services</h2>
              <p className="section-subtitle">Comprehensive solutions tailored to your financial goals</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <TrendingUp size={32} />
                </div>
                <h3>Growth Funds</h3>
                <p>Maximize your returns with our carefully selected growth-oriented mutual funds.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <Shield size={32} />
                </div>
                <h3>Secure Investments</h3>
                <p>Protect your capital with our low-risk investment options designed for stability.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <BarChart2 size={32} />
                </div>
                <h3>Portfolio Management</h3>
                <p>Expert management of your investment portfolio for optimal performance.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <Users size={32} />
                </div>
                <h3>Retirement Planning</h3>
                <p>Secure your future with our specialized retirement investment plans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Financial advisor meeting with client" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Roy's Invest?</h2>
              <p className="mb-4">With over 35 years of experience in the financial market, we've helped thousands of clients achieve their investment goals.</p>
              
              <div className="feature-item d-flex align-items-start mb-4">
                <div className="feature-icon me-3">
                  <div className="icon-circle">1</div>
                </div>
                <div>
                  <h4>Expert Advisors</h4>
                  <p>Our team consists of certified financial experts with decades of combined experience.</p>
                </div>
              </div>
              
              <div className="feature-item d-flex align-items-start mb-4">
                <div className="feature-icon me-3">
                  <div className="icon-circle">2</div>
                </div>
                <div>
                  <h4>Personalized Strategy</h4>
                  <p>We create customized investment plans based on your unique financial situation and goals.</p>
                </div>
              </div>
              
              <div className="feature-item d-flex align-items-start">
                <div className="feature-icon me-3">
                  <div className="icon-circle">3</div>
                </div>
                <div>
                  <h4>Transparent Approach</h4>
                  <p>We believe in complete transparency with no hidden fees or complicated jargon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="text-white mb-4">Ready to Start Your Investment Journey?</h2>
              <p className="text-white mb-4">Schedule a free consultation with our expert advisors to discuss your financial goals.</p>
              <a href="#" className="btn btn-light btn-lg">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;