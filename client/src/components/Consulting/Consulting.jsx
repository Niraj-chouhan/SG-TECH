import './Consulting.css'

const topics = [
  ['purpose', 'Training Purpose'],
  ['mentorship', 'Mentorship'],
  ['seminar', 'Seminar'],
  ['startup', 'Startup Idea discussion'],
  ['career', 'Career Counseling'],
  ['workshop', 'Workshop'],
  ['consulting', 'Consulting'],
  ['infrastructure', 'IT Infrastructure']
]
const icons = { purpose: '▣', mentorship: '♙', seminar: '▱', startup: '☼', career: '♧', workshop: '▣', consulting: '◎', infrastructure: '▦' }

function TopicCard({ type, title }) {
  return <article className={`consult-card ${type}`}>
    <span className="consult-icon" aria-hidden="true">{icons[type]}</span>
    <h3>{title}</h3>
  </article>
}

export default function Consulting() {
  return <section className="consulting-section" aria-labelledby="consulting-heading">
    <div className="consulting-grid">
      {topics.map(([type, title]) => <TopicCard key={type} type={type} title={title} />)}
      <div className="consult-intro">
        <h2 id="consulting-heading">Step Into Success –<br/>Secure Your Session Today!</h2>
        <span className="intro-rule" />
        <p>Unlock new opportunities with expert guidance! Whether it’s seminars, workshops, mentorship, consulting, or career counseling, we’re here to help you succeed. Secure your spot now and take the first step towards achieving your goals!</p>
      </div>
    </div>
  </section>
}
