const About = () => {
  const texts = [
    `My name is Dominik and I build stuff. Mostly on the web. I always had
          an interest for coding, or, to be more precise on tech related things.
          My first contact with coding/scripting came with a game named World of
          Warcraft, some of you might know it! I liked writing my own
          scripts/macros and dabbled a bit with LUA to create my own add ons.`,
    `I then started to study biomedical engineering, which was pretty fun
          until it lasted. Overall i wasn't too happy with the lectures and the
          worst thing - it killed my passion for tech related things. Which led
          me to think about other options and pretty quickly came to the
          conclusion that I always liked programming things.`,
    ` So I started to look for an apprenticeship as an IT Specialist with a
          focus on application developement, which I luckily found pretty
          quickly. Since then I've been working mostly with Vue and PHP on work
          related tasks. In my free time I like to checkout other Frameworks and
          languages (you can see some of my work HERE). As an example this site
          is build on react, since I always wanted to try it and I thought this
          would be a great oppertunity`,
  ];
  return (
    <section id="section-about">
      <h2>About me.</h2>
      <div className="columns">
        <div className="column is-half">
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
