import './journeysection.css'
import freelanceWork from '../../../assets/images/home/journey/freelance-work-illustration.webp'
import ibmLogo from '../../../assets/images/home/journey/ibm-networking-logo.webp'
import digitalSaversLogo from '../../../assets/images/home/journey/digital-savers-logo.png'
import edtechSaversLogo from '../../../assets/images/home/journey/edtech-savers-logo.png'
import governmentOfIndiaLogo from '../../../assets/images/home/journey/government-of-india-logo.png'
import intelioTechnologiesLogo from '../../../assets/images/home/journey/intelio-technologies-logo.png'
import sevaBharatiEmblem from '../../../assets/images/home/journey/seva-bharati-emblem.png'
import rssAshagramFlag from '../../../assets/images/home/journey/rss-ashagram-flag.png'
import rashtriyaSevaBharatiEmblem from '../../../assets/images/home/journey/rashtriya-seva-bharati-emblem.jfif'

const milestones = [
  { year: '2017', image: freelanceWork, alt: 'Freelance work illustration', text: 'Freelanced with Indian and US clients, gaining expertise in web and app development, content writing, graphic design, and digital marketing across diverse markets.' },
  { year: '2020', image: ibmLogo, alt: 'IBM logo', text: 'Worked at IBM in the Networking Domain, gaining expertise in advanced networking technologies, system optimization, and ensuring high performance and reliability.' },
  { year: '2021', image: digitalSaversLogo, alt: 'Digital Savers logo', text: 'Founder and Director of Digital Savers, leading a team to deliver innovative solutions in web and app development, digital marketing, and IT consulting, with a focus on strategy and client satisfaction.' },
  { year: '2021', image: edtechSaversLogo, alt: 'EdTech Savers logo', text: 'Director, IT Trainer, and Career Coach at EdTechSavers, empowering rural students with quality IT education, hands-on training, and career guidance for tech industry success.' },
  { year: '2024', image: governmentOfIndiaLogo, alt: 'Government of India logo for National Informatics Centre experience', text: 'District Rollout Manager at NIC, Khargone Collector Office, overseeing digital initiatives, coordinating technology rollouts, and enhancing e-governance services.' },
  { year: '2024', image: intelioTechnologiesLogo, alt: 'Intelio Technologies corporate experience logo', text: 'Worked at Intelio Technologies in Mobile App Development & Testing, focusing on creating and testing apps to ensure seamless functionality and user experience.' },
  { year: '2024', image: sevaBharatiEmblem, alt: 'Ashagram Trust emblem', text: 'Coordinator at Ashagram Trust, and other NGOs, managing social initiatives focused on education, empowerment, and community welfare.' },
  { year: '2024', image: rssAshagramFlag, alt: 'RSS Ashagram Trust flag', text: 'Coordinator at RSS Ashagram Trust, and other NGOs, managing social initiatives focused on education, empowerment, and community welfare.' },
  { year: '2024', image: rashtriyaSevaBharatiEmblem, alt: 'Rashtriya Seva Bharati emblem', text: 'Coordinator at Rashtriya Seva Bharati and other NGOs, managing social initiatives focused on education, empowerment, and community welfare.' }
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
