import '../styles/Home.scss';
import { useEffect, useState } from 'react';

const Home = () => {
  const [showTest, setShowTest] = useState('web');
  const wordList = ['the web.', 'the desktop.', 'the moon?', 'the phone.'];
  const word = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTest(word);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="home">
      <h1>Hi, my name is</h1>
      <h2 className="accent-color">doVe</h2>
      {/* ADD ANIMATION */}
      <h3>I sometimes build stuff for {showTest}</h3>
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
