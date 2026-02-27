
import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: "15k+", label: "Фильмдер" },
    { number: "8k+", label: "Сериалдар" },
    { number: "4K", label: "Сапат (Ultra HD)" },
    { number: "24/7", label: "Түз Эфир" }
  ];

  return (
    <section className="about-container">
      <div className="about-content">
        
        {/* Текст бөлүмү */}
        <div className="about-text">
          <h2>Биздин Кино Дүйнө</h2>
          <p>
            Сиздин сүйүктүү тасмаларыңыз жана сериалдарыңыз эми бир жерде! 
            Биз сизге дүйнөлүк премьераларды эң жогорку сапатта жана кыргыз тилиндеги 
            котормолору менен сунуштайбыз. Кинону жөн эле көрбөстөн, аны менен бирге жашаңыз.
          </p>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <h4>{stat.number}</h4>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Сүрөт/Визуал бөлүмү */}
        <div className="about-visual">
          <div className="main-visual-box">
             <div className="floating-badge">PREMIUM</div>
          </div>
          {/* Бул жерге кааласаңыз декоративдик элементтерди кошсо болот */}
        </div>

      </div>
    </section>
  );
};

export default About;