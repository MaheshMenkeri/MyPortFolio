import "./App.css";

const services = [
  {
    icon: "▦",
    title: "SharePoint Development",
    description:
      "SharePoint site setup, page customization, lists, libraries, permissions and structured content experiences.",
    tags: ["SharePoint", "Lists", "Libraries"],
  },
  {
    icon: "↗",
    title: "Workflow & Automation",
    description:
      "Practical workflow design and automation support to help teams streamline repetitive business processes.",
    tags: ["Workflows", "Approvals*", "Power Automate*"],
  },
  {
    icon: "⌘",
    title: "Website Development",
    description:
      "Responsive business websites and landing pages with clean layouts, clear messaging and user-friendly navigation.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const projects = [
  {
    number: "01",
    title: "Team Collaboration Hub",
    description:
      "A SharePoint-style workspace concept for organizing team resources, documents and key updates in one place.",
    tags: ["SharePoint", "Information architecture", "UI"],
    note: "Demo concept — not presented as paid client work.",
    variant: "mint",
  },
  {
    number: "02",
    title: "Business Landing Page",
    description:
      "A responsive landing page concept with a clear service story, strong calls to action and a mobile-friendly layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    note: "Add a live URL and repository when ready.",
    variant: "blue",
  },
  {
    number: "03",
    title: "Document Request Tracker",
    description:
      "A sample request-tracking experience showing how teams could submit, organize and monitor document requests.",
    tags: ["Process design", "SharePoint Lists"],
    note: "Demo concept — replace with a real build or remove.",
    variant: "green",
  },
  {
    number: "04",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal brand website designed to explain services, showcase work and make it easy for clients to get in touch.",
    tags: ["Web design", "Responsive", "SEO basics"],
    note: "This portfolio itself can become one of your live samples.",
    variant: "purple",
  },
];

const skills = [
  "Microsoft SharePoint",
  "SharePoint Online*",
  "Site Pages & Libraries",
  "Lists & Permissions",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Responsive Design",
  "Web Development",
  "Problem Solving",
  "Client Communication",
];

function TagList({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectVisual({ variant }) {
  return (
    <div className={`project-art ${variant}`} aria-hidden="true">
      <div className="mock-window">
        <div className="mock-sidebar" />
        <div className="mock-content">
          <div className="mock-line" />
          <div className="mock-boxes">
            <i />
            <i />
            <i />
          </div>
          <div className="mock-line short" />
        </div>
      </div>
    </div>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Mahesh home">
            MAHESH<span>.</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button-small" href="#contact">
            Let&apos;s talk ↗
          </a>
        </div>
      </header>

      <main>
        <section className="container hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">Freelance SharePoint &amp; Web Developer</div>
            <h1>
              I build digital tools that make <em>work simpler.</em>
            </h1>
            <p className="lead">
              I help teams improve the way they work with SharePoint solutions,
              practical workflow improvements and clean, responsive websites.
              From an idea to a reliable delivery, let&apos;s build something useful.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Start a project ↗
              </a>
              <a className="button button-ghost" href="#work">
                Explore my work ↓
              </a>
            </div>
            <div className="availability">
              <span className="status-dot" />
              Available for freelance projects · India (IST)
            </div>
          </div>

          <aside className="code-card">
            <div className="mini-label">A little about my work</div>
            <div className="code-lines">
              <div>
                <b>const</b> developer = {"{"}
              </div>
              <div>&nbsp;&nbsp;experience: &quot;3.6+ years&quot;,</div>
              <div>&nbsp;&nbsp;focus: &quot;SharePoint&quot;,</div>
              <div>
                &nbsp;&nbsp;alsoBuilds: [&quot;Websites&quot;, &quot;UI&quot;],
              </div>
              <div>&nbsp;&nbsp;approach: &quot;Clear &amp; reliable&quot;</div>
              <div>{"};"}</div>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>3.6+</strong>
                <span>Years experience</span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span>Core services</span>
              </div>
              <div className="stat">
                <strong>1:1</strong>
                <span>Direct communication</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">What I can do</div>
                <h2>Services built around your goals.</h2>
              </div>
              <p className="section-intro">
                Focused technical support for businesses, teams and individuals
                who need dependable delivery.
              </p>
            </div>
            <div className="three-grid">
              {services.map((service) => (
                <article className="info-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <TagList items={service.tags} />
                </article>
              ))}
            </div>
            <p className="small-note">
              *Keep only the tools and services you can confidently deliver.
            </p>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Selected work</div>
                <h2>Projects that show how I think.</h2>
              </div>
              <p className="section-intro">
                Replace these concept examples with your own approved screenshots,
                links and project details before publishing.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="info-card project-card" key={project.number}>
                  <ProjectVisual variant={project.variant} />
                  <div className="project-content">
                    <div className="eyebrow">Concept project {project.number}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <TagList items={project.tags} />
                    <div className="small-note">{project.note}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">A bit about me</div>
              <h2>Practical thinking. Thoughtful execution.</h2>
            </div>
            <div className="about-panel">
              <p>
                I&apos;m a SharePoint professional with 3.6 years of experience
                and training in web development. I enjoy turning requirements
                into clear, usable digital experiences — whether that&apos;s
                improving a SharePoint workspace or building a responsive website.
              </p>
              <p>
                I value clear communication, realistic timelines and solutions
                that are easy for people to use. Tell me what you&apos;re trying
                to achieve, and I&apos;ll help map out a sensible way to build it.
              </p>
              <a className="button button-ghost button-small" href="#contact">
                Discuss your project ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">My toolkit</div>
                <h2>Skills &amp; technologies.</h2>
              </div>
              <p className="section-intro">
                A concise overview. Remove or adjust any item that doesn&apos;t
                reflect your hands-on skill level.
              </p>
            </div>
            <div className="skill-list">
              {skills.map((skill) => (
                <span className="skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
            <p className="small-note">
              *Confirm the exact SharePoint versions and tools you have used.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">How we&apos;ll work</div>
                <h2>A straightforward process.</h2>
              </div>
            </div>
            <div className="steps-grid">
              {[
                ["01", "Understand", "We discuss your goals, requirements and priorities."],
                ["02", "Plan", "I outline the scope, deliverables and timeline."],
                ["03", "Build", "I share progress and refine the solution with your feedback."],
                ["04", "Deliver", "You receive the agreed work and handover notes."],
              ].map(([number, title, description]) => (
                <article className="step-card" key={number}>
                  <strong>{number}</strong>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <div className="eyebrow">Have a project in mind?</div>
                <h2>Let&apos;s make your next idea work better.</h2>
                <p>
                  Share a little about your project. I&apos;ll get back to you
                  to discuss the next steps.
                </p>
              </div>
              <div className="contact-actions">
                {/* Replace this address and LinkedIn URL before publishing. */}
                <a
                  className="button"
                  href="mailto:YOUR_EMAIL@example.com?subject=Freelance%20project%20enquiry"
                >
                  Email me ↗
                </a>
                <a
                  className="button button-ghost"
                  href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {year} Mahesh. Built with care.</span>
          <span>SharePoint Developer · Web Developer · India</span>
        </div>
      </footer>
    </>
  );
}

export default App;
