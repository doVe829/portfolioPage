import ItemGallery from '../components/ItemGallery';
import parse from 'html-react-parser';

const Projects = () => {
  const workIntro = parse(
    `<p> I did my apprenticeship at this company. e-domizil is a company that works in the touristm industry and offers multiple platforms for vacation rentals.</p> 
    <p> I was lucky enough to start my apprenticeship here, when we started to relaunch the page with a new tech stack, so I was involved from the very beginning which gave me many helpful insights in how to set up a new big project </p>
    <p> There were many things I worked on this page but here are some components I'd like to point out`
  );
  const privateProjects = [
    {
      name: 'PS 5 Scraper',
      link: 'https://github.com/doVe829/sveltePs5Scraper',
      additionalInfos:
        'Things I learned building this, was a bit of svelte and the use of puppeteer to scrape pages',
      stack: 'svelte',
    },
    {
      name: 'Advent of code',
      link: 'https://github.com/doVe829/KotlinAOC2021',
      additionalInfos:
        'I really like AoC to try out new languages and I thougth it was time to try kotlin. I really like kotlin over vanilla Java ',
      stack: 'kotlin',
    },
    {
      name: 'Mood Diary',
      link: 'https://github.com/doVe829/desktopApp',
      additionalInfos:
        'I wanted to build a desktop app so I used this project to use vue and elctron.js. Originally it was planned to be a headache diary and it actually fullfills this purpose.',
      stack: 'vue',
    },
    {
      name: 'API Test',
      link: 'https://github.com/doVe829/APITest',
      additionalInfos:
        'This was one of my earliest projects, I tried to learn more about the vuex store and communications with the backend. So I built this rudimentaty blog site with a login with Lumen ',
      hasLink: true,
      stack: 'vue',
    },
  ];

  const workRelatedProjects = [
    {
      name: 'Docker-Builder',
      additionalInfos:
        "Here I've build a tool that builds docker images for all our plattforms. This was act",
      stack: 'vue',
      link: '',
    },
    {
      name: 'Print View',
      additionalInfos:
        'There was need for a customizable print view for the product page, as most our content is lazy loaded I had to come up with a solution that incorporates that logic so I worked a lot with asnychronity here. This was actually quite fun!',
      hasLink: false,
      stack: 'vue',
    },
    {
      name: 'Request',
      additionalInfos:
        "This was my first project in my apprenticeship, it's a request page for customers, that's communicating with the backend",
      stack: 'vue',
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ItemGallery itemList={privateProjects} title="private projects" />
      <ItemGallery
        itemList={workRelatedProjects}
        title="e-domizil"
        introText={workIntro}
      />
    </section>
  );
};

export default Projects;
