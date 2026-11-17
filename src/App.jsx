import React from "react";
import "./App.css";

const services = [
  {
    icon: "▦",
    title: "SharePoint & SPFx Development",
    description:
      "Custom SharePoint Online solutions, SPFx web parts, extensions, forms, dashboards and employee-facing intranet experiences.",
    tags: ["SharePoint Online", "SPFx", "React.js", "CSOM"],
  },
  {
    icon: "↗",
    title: "Workflow & Business Automation",
    description:
      "Role-based approval workflows, request management, notifications and process automation for HR, procurement and operations teams.",
    tags: ["Power Automate", "Approvals", "Business workflows"],
  },
  {
    icon: "⌘",
    title: ".NET & Full Stack Development",
    description:
      "Business applications and responsive interfaces built with React, JavaScript, .NET Core and SQL-based data solutions.",
    tags: [".NET Core", "React.js", "SQL", "REST APIs"],
  },
];

const projects = [
  {
    number: "01",
    title: "Vehicle Tracking Portal",
    period: "May 2026 – August 2026",
    description:
      "Developed a role-based vehicle procurement portal supporting Requestor, Vendor, Approver, Accounts and Admin workflows. The solution manages multi-vendor quotations, compares bids, automates lowest-quote selection and vendor assignment, and supports placement, dispatch and invoice documents.",
    tags: ["React.js", "SPFx", "JavaScript", "Power Automate"],
    variant: "mint",
  },
  {
    number: "02",
    title: "Crompton ESS Intranet",
    period: "January 2026 – March 2026",
    description:
      "Built an Employee Self-Service intranet with role-based access and intuitive navigation. Used CSOM to read employee master data from Excel files in SharePoint libraries and synchronize details such as designation, department, date of birth and contact information with SharePoint user profiles and lists.",
    tags: ["SharePoint Online", "SPFx", "React.js", "CSOM"],
    variant: "blue",
  },
  {
    number: "03",
    title: "GIS Portal",
    period: "October 2025 – November 2025",
    description:
      "Developed a role-based request portal for MLL users, Lead Approvers, Managers and Admins. Implemented request submission, category-based approvals, send-back handling, manager approval, bulk request creation through Excel upload and automated email notifications.",
    tags: ["React.js", "SPFx", "Power Automate", "Role-based access"],
    variant: "green",
  },
  {
    number: "04",
    title: "VTOutbound",
    period: "December 2024 – February 2025",
    description:
      "Created a workflow-driven vendor quotation solution for stockyard operations. Implemented role-based workflows for MLL, Outbound Officer, Manager and HOD, including automated approvals, exception handling based on should-cost validation and operational reporting.",
    tags: ["React.js", "SPFx", "JavaScript", "Power Automate"],
    variant: "purple",
  },
];

const skills = [
  "SharePoint Online",
  "SharePoint Framework (SPFx)",
  "React.js",
  "JavaScript",
  "TypeScript",
  "CSOM",
  ".NET Core",
  "REST APIs",
  "SQL / MySQL",
  "Power Automate",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "jQuery",
  "AJAX",
  "Git",
];

const experience = [
  {
    role: "Software Developer",
    company: "Prosares Solutions Pvt. Ltd.",
    period: "May 2023 – October 2026 · 3 years 7 months",
    details:
      "Developed and maintained SharePoint Online intranet portals and ESS applications using SPFx and React.js. Built custom web parts, extensions, forms and dashboards; automated HR and administrative processes with Power Automate; and worked with stakeholders to translate business requirements into usable solutions.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Xeon Multi Media",
    period: "February 2023 – May 2023 · 3 months",
    details:
      "Developed web applications using PHP, MySQL, HTML and CSS, and built responsive pages based on client requirements.",
  },
  {
    role: "Data Entry Executive",
    company: "G.G Export",
    period: "November 2021 – January 2023 · 1 year 3 months",
    details:
      "Maintained daily inventory and sales records and prepared consolidated quarterly reports for management. This role forms part of my overall professional experience.",
  },
];

function TagList({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span className="tag" key={item}>{item}</span>
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
          <div className="mock-boxes"><i /><i /><i /></div>
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
          <a className="brand" href="#home" aria-label="Mahesh home">MAHESH<span>.</span></a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button-small" href="#contact">Let&apos;s connect ↗</a>
        </div>
      </header>

      <main>
        <section className="container hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">SharePoint · SPFx · React · .NET Developer</div>
            <h1>I build business applications that make <em>work simpler.</em></h1>
            <p className="lead">
              I&apos;m Mahesh Menkeri, a developer with 5 years of overall professional experience, including 3 years 10 months in software development. I build SharePoint Online portals, SPFx solutions, workflow automation and full-stack business applications that turn business requirements into practical, user-friendly digital solutions.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">View my projects ↗</a>
              <a className="button button-ghost" href="#contact">Contact me ↓</a>
            </div>
            <div className="availability">
              <span className="status-dot" />
              Based in Mumbai, India · Open to opportunities
            </div>
          </div>

          <aside className="code-card">
            <div className="mini-label">Developer profile</div>
            <div className="code-lines">
              <div><b>const</b> mahesh = {'{'}</div>
              <div>&nbsp;&nbsp;overallExperience: &quot;5 years&quot;,</div>
              <div>&nbsp;&nbsp;speciality: &quot;SharePoint &amp; SPFx&quot;,</div>
              <div>&nbsp;&nbsp;frontend: [&quot;React&quot;, &quot;JavaScript&quot;],</div>
              <div>&nbsp;&nbsp;backend: [&quot;.NET Core&quot;, &quot;SQL&quot;],</div>
              <div>&nbsp;&nbsp;automation: &quot;Power Automate&quot;</div>
              <div>{'};'}</div>
            </div>
            <div className="stats">
              <div className="stat"><strong>5</strong><span>Years overall experience</span></div>
              <div className="stat"><strong>3y 10m</strong><span>Years in software development*</span></div>
              <div className="stat"><strong>4</strong><span>Featured projects</span></div>
            </div>
          </aside>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">What I work on</div><h2>Development focused on real business needs.</h2></div>
              <p className="section-intro">From SharePoint portals to full-stack applications and automated workflows.</p>
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
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">Selected work</div><h2>Projects and business solutions.</h2></div>
              <p className="section-intro">A selection of solutions delivered during my professional experience. Client-specific details can be shared where permitted.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="info-card project-card" key={project.number}>
                  <ProjectVisual variant={project.variant} />
                  <div className="project-content">
                    <div className="eyebrow">Project {project.number} · {project.period}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <TagList items={project.tags} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">Career journey</div><h2>5 years of overall professional experience.</h2></div>
              <p className="section-intro">This includes 1 year 3 months in data entry, 3 months as a Full Stack Developer Intern and 3 years 7 months as a Software Developer.</p>
            </div>
            <div className="steps-grid">
              {experience.map((item) => (
                <article className="step-card" key={item.company}>
                  <strong>{item.period}</strong>
                  <h3>{item.role}</h3>
                  <p><b>{item.company}</b></p>
                  <p>{item.details}</p>
                </article>
              ))}
            </div>
            <p className="small-note">Software development experience: approximately 3 years 10 months, including the internship. Overall professional experience also includes 1 year 3 months in data entry.</p>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div><div className="eyebrow">About me</div><h2>Bridging business requirements and technology.</h2></div>
            <div className="about-panel">
              <p>
                I&apos;m a software developer based in Mumbai with 5 years of overall professional experience. This includes 3 years 7 months as a Software Developer at Prosares Solutions, 3 months as a Full Stack Developer Intern and 1 year 3 months in data entry. My software development work focuses on SharePoint Online intranet portals, Employee Self-Service applications, role-based business workflows and responsive web applications.
              </p>
              <p>
                I enjoy understanding how a business process works, identifying where
                technology can simplify it, and building solutions that are clear,
                maintainable and easy for people to use. I graduated with a CGPA of 9.02/10.
              </p>
              <a className="button button-ghost button-small" href="#contact">Let&apos;s connect ↗</a>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">Technical toolkit</div><h2>Skills &amp; technologies.</h2></div>
              <p className="section-intro">Technologies used across my SharePoint, automation and full-stack development work.</p>
            </div>
            <div className="skill-list">
              {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading"><div><div className="eyebrow">Education</div><h2>Academic background.</h2></div></div>
            <div className="steps-grid">
              <article className="step-card"><strong>CGPA: 9.02 / 10</strong><h3>Bachelor of Science in Information Technology</h3><p>Anandibai Damodar Kale College, Mumbai</p></article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <div className="eyebrow">Get in touch</div>
                <h2>Have an opportunity or project in mind?</h2>
                <p>I&apos;d be happy to discuss SharePoint, SPFx, .NET or full-stack development opportunities.</p>
                <p><b>Email:</b> mahesh.kelkeri45@gmail.com · <b>Phone:</b> 8452079859</p>
              </div>
              <div className="contact-actions">
                <a className="button" href="mailto:mahesh.kelkeri45@gmail.com?subject=Portfolio%20Enquiry">Email me ↗</a>
                <a className="button button-ghost" href="https://www.linkedin.com/in/mahesh-menkeri-296233201" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {year} Mahesh Menkeri. Built with React.</span>
          <span>SharePoint &amp; SPFx Developer · Full Stack Developer · Mumbai, India</span>
        </div>
      </footer>
    </>
  );
}

export default App;
