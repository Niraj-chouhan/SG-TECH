import { useState } from 'react'
import './contactsection.css'

const services = [
  'Web Development',
  'App Development',
  'Digital Marketing',
  'IT Consulting',
  'Training',
  'Career Counselling',
  'Other',
]

const contactDetails = [
  {
    label: 'Email Address',
    value: 'Email placeholder',
    href: 'mailto:',
    icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  },
  {
    label: 'Call Us',
    value: '+91 9855106094',
    href: 'tel:+919855106094',
    icon: <path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 2a14 14 0 0 1-5-5l2-2-2-5H7Z" />,
  },
  {
    label: 'Address',
    value: 'Address to be added',
    icon: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  },
] 

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/sharadgawalii/', icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" /></> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sharad-gawalii-3b272b77/', icon: <><path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 10v9" /><circle cx="5" cy="5" r="1" /></> },
  { name: 'WhatsApp', href: 'https://wa.me/919855106094', icon: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.5 2.3 2.2 4 4.5 4.5l1-1 2 1c-.3 1.5-1.2 2-2.5 2-3.5-.7-6.3-3.5-7-7-.1-1.3.5-2.2 2-2.5l1 2-1 1Z" /></> },
  { name: 'Facebook', href: 'https://www.facebook.com', icon: <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h1.7V1.4C17 1.2 15.8 1 14.5 1 11.6 1 10 2.7 10 6v3H7v4h3v8Z" /> },
]

function ContactInfo({ label, value, icon, href }) {
  return (
    <article className="contact-info-item">
      <span className="contact-info-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">{icon}</svg>
      </span>
      <div>
        <h3>{label}</h3>
        <p>{href ? <a href={href}>{value}</a> : value}</p>
      </div>
    </article>
  )
}

const requiredMessage = 'This field is required.'
const initialValues = { name: '', email: '', phone: '', service: '', message: '' }

export default function ContactSection() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    Object.entries(values).forEach(([name, value]) => {
      if (!value.trim()) nextErrors[name] = requiredMessage
    })
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    // Replace this frontend-only success state with an API or email service when configured.
    setSubmitted(true)
    setValues(initialValues)
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: updateField,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  })

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="contact-eyebrow">LET'S CONNECT</p>
          <h2 id="contact-heading">Let's Get in Touch</h2>
          <span className="contact-heading-rule" aria-hidden="true" />
          <p className="contact-intro">Have a question or an idea? Send a message and let’s start a conversation.</p>
          <div className="contact-info-list">
            {contactDetails.map((detail) => <ContactInfo key={detail.label} {...detail} />)}
          </div>
          <nav className="contact-socials" aria-label="Social media">
            {socialLinks.map(({ name, href, icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
              </a>
            ))}
          </nav>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form-heading">
            <h3>Send a Message</h3>
            <p>Share a few details and we’ll be in touch.</p>
          </div>

          <div className="contact-field-grid">
            <div className="contact-field">
              <label htmlFor="contact-name">Your Name</label>
              <input {...fieldProps('name')} type="text" placeholder="Enter your name" autoComplete="name" />
              {errors.name && <small id="contact-name-error">{errors.name}</small>}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Your Email</label>
              <input {...fieldProps('email')} type="email" placeholder="Enter your email" autoComplete="email" />
              {errors.email && <small id="contact-email-error">{errors.email}</small>}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-phone">Phone No</label>
              <input {...fieldProps('phone')} type="tel" placeholder="Enter your phone number" autoComplete="tel" />
              {errors.phone && <small id="contact-phone-error">{errors.phone}</small>}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-service">Service to Get Started</label>
              <select {...fieldProps('service')}>
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service} value={service}>{service}</option>)}
              </select>
              {errors.service && <small id="contact-service-error">{errors.service}</small>}
            </div>
            <div className="contact-field contact-message-field">
              <label htmlFor="contact-message">Message</label>
              <textarea {...fieldProps('message')} placeholder="Tell me about your requirements..." rows="3" />
              {errors.message && <small id="contact-message-error">{errors.message}</small>}
            </div>
          </div>

          <div className="contact-form-footer">
            <button type="submit" className="contact-submit">
              Send Message
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
            </button>
            {submitted && <p className="contact-success" role="status">Thank you! Your message was received in this demo. No email was sent.</p>}
          </div>
          <p className="contact-form-note">Demo form: your message hasn’t been sent to an inbox.</p>
        </form>
      </div>
    </section>
  )
}
