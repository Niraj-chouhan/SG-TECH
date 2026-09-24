import './Services.css'

const services = [
  ['IT Products', 'I provide a range of IT products designed to meet your business needs and enhance operational efficiency.'],
  ['IT Services', 'I offer IT services tailored to optimize your systems, streamline processes, and support your business growth.'],
  ['IT Consulting', 'I provide IT consulting services to help you strategize and implement technology solutions that drive your business success.'],
  ['IT Training', 'I offer comprehensive IT training to develop your skills in the latest technologies and boost your career prospects.'],
  ['Mini Projects', 'We provide practical videos showcasing our projects to help you explore products and their uses, ensuring a better understanding of the tools.'],
  ['Designing', 'We build imaginative designs that showcase our business strategies, help you elevate your brand globally through a strong digital presence.'],
  ['Development', 'We focus on profit-driven growth through e-commerce, utilizing technology like mobile phones and tablets to safely expand your business from home.'],
  ['Graphic Designing', 'We create visually compelling designs to enhance brand identity and communicate your message effectively across digital and print platforms.'],
  ['Digital Marketing', 'We promote our business through various concepts like production, marketing, and selling to advertise and sell products both online and offline.']
]

function ServiceCard({ title, description, index }) {
  return <article className="service-card" id={index === 3 ? 'edtech-savers' : undefined}>
    <span className={'service-icon icon-' + index} aria-hidden="true"><i/><b/></span>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
}

export default function Services() {
  return <section className="services-section" id="services" aria-labelledby="services-heading">
    <h2 className="section-heading" id="services-heading"><span>Expertise</span></h2>
    <div className="service-grid">{services.map(([title, description], index) => <ServiceCard key={title} title={title} description={description} index={index}/>)}</div>
  </section>
}
