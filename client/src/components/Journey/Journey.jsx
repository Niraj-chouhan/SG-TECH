import './Journey.css'

const milestones = [
  { year: '2017', image: '/assets/journey-01.webp', alt: 'Freelance work illustration', text: 'Freelanced with Indian and US clients, gaining expertise in web and app development, content writing, graphic design, and digital marketing across diverse markets.' },
  { year: '2020', image: '/assets/journey-02.webp', alt: 'IBM logo', text: 'Worked at IBM in the Networking Domain, gaining expertise in advanced networking technologies, system optimization, and ensuring high performance and reliability.' },
  { year: '2021', image: '/assets/journey-digital-savers.png', alt: 'Digital Savers logo', text: 'Founder and Director of Digital Savers, leading a team to deliver innovative solutions in web and app development, digital marketing, and IT consulting, with a focus on strategy and client satisfaction.' },
  { year: '2021', image: '/assets/brand/edtech-savers-logo.png', alt: 'EdTech Savers logo', text: 'Director, IT Trainer, and Career Coach at EdTechSavers, empowering rural students with quality IT education, hands-on training, and career guidance for tech industry success.' },
  { year: '2024', image: '/assets/journey-government-of-india.png', alt: 'Government of India logo for National Informatics Centre experience', text: 'District Rollout Manager at NIC, Khargone Collector Office, overseeing digital initiatives, coordinating technology rollouts, and enhancing e-governance services.' },
  { year: '2024', image: '/assets/journey-corporate-experience.png', alt: 'Intelio Technologies corporate experience logo', text: 'Worked at Intelio Technologies in Mobile App Development & Testing, focusing on creating and testing apps to ensure seamless functionality and user experience.' },
  { year: '2024', image: '/assets/journey-ashagram-trust.png', alt: 'Ashagram Trust emblem', text: 'Coordinator at Ashagram Trust, and other NGOs, managing social initiatives focused on education, empowerment, and community welfare.' },
  { year: '2024', image: '/assets/journey-ashagram-flag.png', alt: 'RSS Ashagram Trust flag', text: 'Coordinator at RSS Ashagram Trust, and other NGOs, managing social initiatives focused on education, empowerment, and community welfare.' },
  { year: '2024', image: '/assets/journey-rashtriya-seva-bharati.jfif', alt: 'Rashtriya Seva Bharati emblem', text: 'Coordinator at Rashtriya Seva Bharati and other NGOs, managing social initiatives focused on education, empowerment, and community welfare.' }
]

function Milestone({ year, image, alt, text, index }) {
  return <article className="milestone" id={index === 2 ? 'digital-savers' : undefined}>
    <div className="milestone-year"><span>{year}</span></div>
    <img className="milestone-logo" src={image} alt={alt} />
    <p>“{text}”</p>
  </article>
}

export default function Journey() {
  return <section className="journey-section" id="journey">
    <p className="journey-eyebrow">Inner Strength</p>
    <h2>Experience Through the Journey</h2>
    <div className="milestone-grid">{milestones.map((item, index) => <Milestone key={`${item.year}-${index}`} {...item} index={index} />)}</div>
  </section>
}
