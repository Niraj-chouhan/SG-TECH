import './About.css'

export default function About() {
  return <section className="about-section" id="about" aria-labelledby="about-heading">
    <svg className="about-decoration about-decoration-top" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 0H1440V18C1280 16 1160 37 1010 55C830 77 680 96 500 72C310 47 155 23 0 12Z" fill="#fff" />
      <path d="M0 12C155 23 310 47 500 72C680 96 830 77 1010 55C1160 37 1280 16 1440 18" fill="none" stroke="#222124" strokeWidth="2" />
      <path d="M0 36C105 40 190 52 286 66M606 101C700 105 812 95 898 83M1320 8C1360 6 1400 10 1440 12" fill="none" stroke="#fff" strokeWidth="1.5" />
    </svg>
    <div className="about-content">
      <div className="about-image-wrap">
        <img src="/assets/about-training.webp" alt="Dr. Sharad Gawali training a group in a computer lab" />
      </div>
      <div className="about-copy">
        <p className="about-label">About Me</p>
        <h2 id="about-heading">Driven By Passion And<br/>Fueled By Expertise’s</h2>
        <p>Driven by a profound desire to make a meaningful impact, I aspire to ascend to the pinnacle of leadership in the tech arena. My vision is to inspire and empower others, fostering a culture of innovation, collaboration, and excellence. I firmly believe that visionary leadership has the power to transform organizations and shape a brighter future for all.</p>
      </div>
    </div>
    <svg className="about-decoration about-decoration-bottom" viewBox="0 0 1440 36" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 24C180 30 330 31 500 27C700 22 825 30 1000 25C1170 20 1305 20 1440 25V36H0Z" fill="#fff" />
      <path d="M0 24C180 30 330 31 500 27C700 22 825 30 1000 25C1170 20 1305 20 1440 25" fill="none" stroke="#222124" strokeWidth="2" />
    </svg>
  </section>
}
