import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1000);
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the Verxtal team. We'd love to hear from you!"
      url="/contact"
    >
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="page-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Contact Information */}
          <div>
            <h2 style={{ color: '#2c3e50', marginBottom: '2rem', fontSize: '2rem' }}>
              Let's Connect
            </h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>
                Email Us
              </h3>
              <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
                For general inquiries, partnerships, or collaboration opportunities:
                <br />
                <strong>hello@Verxtal.com</strong>
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>
                Write for Us
              </h3>
              <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Interested in contributing to Verxtal? We're always looking for fresh perspectives:
                <br />
                <strong>writers@Verxtal.com</strong>
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>
                Follow Us
              </h3>
              <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Stay updated with our latest stories and insights:
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a 
                  href="#" 
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  Twitter
                </a>
                <a 
                  href="#" 
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              padding: '2rem',
              borderRadius: '15px',
              marginTop: '2rem'
            }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Response Time</h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>
                We typically respond to all inquiries within 24-48 hours during business days. 
                For urgent matters, please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitStatus === 'success' && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '2rem',
                border: '1px solid #c3e6cb'
              }}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div> 

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section style={{ 
          marginTop: '4rem', 
          paddingTop: '3rem',
          borderTop: '2px solid #e9ecef'
        }}>
          <h2 style={{ 
            color: '#2c3e50', 
            marginBottom: '2rem', 
            fontSize: '2rem',
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
                How can I contribute to Verxtal?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                We welcome guest contributors! Send us your pitch along with writing samples to 
                writers@Verxtal.com. We're looking for unique perspectives and high-quality content.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
                Do you offer sponsored content?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                Yes, we work with brands that align with our values. All sponsored content is 
                clearly marked. Contact us for partnership opportunities and media kit.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
                Can I republish Verxtal content?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                Please contact us for permission before republishing our content. We're usually 
                happy to grant permission with proper attribution and linking.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}