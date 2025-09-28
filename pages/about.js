import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn more about Verxtal - our mission, vision, and the team behind this modern blog platform."
      url="/about"
    >
      <div className="page-header">
        <h1>About Verxtal</h1>
        <p>Discover who we are and what drives our passion for storytelling</p>
      </div>

      <div className="page-content">
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem', fontSize: '2rem' }}>
            Our Mission
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
            At Verxtal, we believe in the power of stories to connect, inspire, and transform. 
            Our mission is to create a platform where thoughtful content meets engaged readers, 
            fostering meaningful conversations and shared understanding in our digital age.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem', fontSize: '2rem' }}>
            What We Do
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1rem' }}>
            Verxtal is more than just a blog platform. We curate and publish content that matters:
          </p>
          <ul style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: '#555',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Technology Insights:</strong> Exploring the latest trends and innovations shaping our future
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Creative Stories:</strong> Celebrating human creativity and artistic expression
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Thought Leadership:</strong> Deep dives into topics that matter to modern society
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Community Voices:</strong> Amplifying diverse perspectives and experiences
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem', fontSize: '2rem' }}>
            Our Values
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              padding: '2rem',
              borderRadius: '15px'
            }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Authenticity</h3>
              <p style={{ color: '#555' }}>
                We believe in genuine, honest storytelling that resonates with real human experiences.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              padding: '2rem',
              borderRadius: '15px'
            }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Innovation</h3>
              <p style={{ color: '#555' }}>
                We embrace new technologies and creative approaches to digital storytelling.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
              padding: '2rem',
              borderRadius: '15px'
            }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Community</h3>
              <p style={{ color: '#555' }}>
                We foster an inclusive environment where diverse voices and perspectives thrive.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem', fontSize: '2rem' }}>
            Our Story
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
            Founded in 2024, Verxtal emerged from a simple observation: in our fast-paced digital world, 
            there was a growing need for a platform that prioritizes quality content over quick clicks, 
            meaningful engagement over superficial metrics.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
            What started as a small project has grown into a vibrant community of writers, thinkers, 
            and readers who share a passion for authentic storytelling. We're proud to be a platform 
            where ideas flourish and connections are made.
          </p>
        </section>

        <section style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '20px',
          textAlign: 'center',
 
        }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Join Our Journey</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Ready to be part of something meaningful? Whether you're a reader seeking inspiration 
            or a writer looking to share your voice, Verxtal welcomes you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/contact" 
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              Get In Touch
            </a>
            <a 
              href="/" 
              style={{
                background: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Read Our Stories
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}