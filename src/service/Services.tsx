
// Services.tsx
import React from 'react';
import './Services.css';
import { GlobalOutlined, SaveOutlined, MobileOutlined, FireOutlined } from '@ant-design/icons';

const Services = () => {
  const servicesData = [
    {
      title: "4K Сапат",
      desc: "Бардык фильмдерди жана сериалдарды эң жогорку Ultra HD сапатта көрүү мүмкүнчүлүгү.",
      icon: <GlobalOutlined />
    },
    {
      title: "Оффлайн Көрүү",
      desc: "Кинолорду жүктөп алыңыз жана интернет жок болгондо да көрө бериңиз.",
      icon: <SaveOutlined />
    },
    {
      title: "Көп Түзмөктүүлүк",
      desc: "Бир эле учурда телефондон, планшеттен жана телевизордон көрүңүз.",
      icon: <MobileOutlined />
    },
    {
      title: "Жаңы Премьералар",
      desc: "Дүйнөлүк кино премьералары биздин платформада биринчилерден болуп чыгат.",
      icon: <FireOutlined />
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h2>Биздин Артыкчылыктар</h2>
        <p>Эмне үчүн миңдеген колдонуучулар биздин кинотеатрды тандашат? Биз сунуштаган өзгөчөлүктөр менен таанышыңыз.</p>
      </div>

      <div className="services-grid">
        {servicesData.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#" className="service-link">Кененирээк билүү ➔</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;