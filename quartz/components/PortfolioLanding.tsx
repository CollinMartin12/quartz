import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const PortfolioLanding: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="portfolio-landing">
      <div class="hero-section">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Collin Martin | <span class="highlight">Data Engineer</span>
            </h1>
            <p class="hero-subtitle">
              Experienced in designing and building scalable data pipelines, cloud 
              infrastructure (AWS, Azure), and big data solutions with Spark and Kafka. 
              Transforming complex data into actionable insights.
            </p>
          </div>
          <div class="hero-image">
            <div class="profile-container">
              <div class="profile-placeholder"></div>
            </div>
          </div>
        </div>
        <div class="hero-background"></div>
      </div>
      
      <nav class="portfolio-nav">
        <div class="nav-container">
          <div class="nav-brand">
            <span>Collin Martin's Personal Website</span>
          </div>
          <div class="nav-links">
            <a href="/" class="nav-link active">Home</a>
            <a href="/projects" class="nav-link">Projects</a>
            <a href="/Welcome" class="nav-link">Blog</a>
          </div>
        </div>
      </nav>

      <section class="about-section">
        <div class="container">
          <h2>About Me</h2>
          <div class="about-content">
            <p>
              Currently studying Data Science & Engineering in Madrid, Spain, I have seen what the tech 
              scene has to offer and what it takes to enter it. Pursuing data for the past 3 years has 
              built me a foundation in the world of tech.
            </p>
            <p>
              I am passionate about building scalable data solutions and transforming complex datasets 
              into actionable insights. My experience spans across data engineering, machine learning, 
              and cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section class="skills-section">
        <div class="container">
          <h2>Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Data Engineering</h3>
              <ul>
                <li>Apache Spark</li>
                <li>Apache Kafka</li>
                <li>ETL/ELT Pipelines</li>
                <li>Data Warehousing</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Cloud Platforms</h3>
              <ul>
                <li>AWS (EC2, S3, Lambda, EMR)</li>
                <li>Microsoft Azure</li>
                <li>Docker & Kubernetes</li>
                <li>Infrastructure as Code</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Programming</h3>
              <ul>
                <li>Python</li>
                <li>SQL</li>
                <li>Scala</li>
                <li>JavaScript/TypeScript</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Machine Learning</h3>
              <ul>
                <li>MLOps</li>
                <li>Model Deployment</li>
                <li>Data Science</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <h2>Let's Connect</h2>
          <p>
            Interested in data engineering, machine learning, or just want to chat about tech? 
            Feel free to reach out or explore my projects and blog posts.
          </p>
          <div class="cta-buttons">
            <a href="/projects" class="cta-button primary">View Projects</a>
            <a href="/Welcome" class="cta-button secondary">Read Blog</a>
          </div>
        </div>
      </section>
    </div>
  )
}

PortfolioLanding.displayName = "PortfolioLanding"

export default (() => PortfolioLanding) satisfies QuartzComponentConstructor
