import '../styles/Home.scss';
import { useEffect, useState } from 'react';

const Home = () => {
  const [platform, setPlatform] = useState('web');
  const platformList = [
    'the web.',
    'the desktop.',
    'the moon?',
    'mobile.',
    'myself.',
  ];
  const randomPlatform = () => {
    return platformList[Math.floor(Math.random() * platformList.length)];
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setPlatform(randomPlatform);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="home">
      <h1>Hi, my name is</h1>
      <div className="row">
        <h2 className="accentColor">doVe</h2>
        <sup>(well, not really.)</sup>
      </div>
      {/* ADD ANIMATION */}
      <h3>
        I sometimes build stuff for{' '}
        <span className="accentColor platformText">{platform}</span>
      </h3>
      <p className="col-sm-3">
        I'm a web developer based in germany, that is currently working on great
        tourism experiences at WORKNAME
      </p>
      <a className="btn" href="#section-about">
        Get to know me!
      </a>
    </section>
  );
};

export default Home;
