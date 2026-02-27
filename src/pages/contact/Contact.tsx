// Contact.tsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Билдирүүңүз жөнөтүлдү! Рахмат.");
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Байланыш</h2>
        <p style={{color: '#94a3b8'}}>Суроолоруңуз же сунуштарыңыз барбы? Бизге жазыңыз!</p>
      </div>

      <div className="contact-wrapper">
        {/* Сол тарап: Байланыш маалыматтары */}
        <div className="contact-info">
          <div className="info-item">
            <h4>Дарек</h4>
            <p>Бишкек ш., Чүй проспектиси 123</p>
          </div>
          <div className="info-item">
            <h4>Электрондук почта</h4>
            <p>support@kinodunyo.kg</p>
          </div>
          <div className="info-item">
            <h4>Телефон</h4>
            <p>+996 (555) 00 11 22</p>
          </div>
          <div className="info-item">
            <h4>Жумуш убактысы</h4>
            <p>24/7 Онлайн колдоо</p>
          </div>
        </div>

        {/* Оң тарап: Кайтарым байланыш формасы */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Атыңыз</label>
            <input type="text" placeholder="Атыңызды жазыңыз..." required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Почтаңызды жазыңыз..." required />
          </div>
          <div className="form-group">
            <label>Билдирүү</label>
            <textarea rows={5} placeholder="Кандай сурооңуз бар?..." required></textarea>
          </div>
          <button type="submit" className="submit-btn">Жөнөтүү</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;