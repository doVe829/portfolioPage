import ItemGallery from '../components/ItemGallery';

const Projects = () => {
  const privateProjects = [
    {
      name: 'Playstation 5 Scraper',
      link: '',
      additionalInfos: 'The reason bla',
      hasLink: true,
      stack: 'svelte',
    },
    {
      name: 'Advent of code',
      link: '',
      additionalInfos: 'The reason bla',
      hasLink: true,
      stack: 'kotlin',
    },
    {
      name: 'Mood Diary',
      link: '',
      additionalInfos: 'The reason bla',
      hasLink: true,
      stack: 'vue',
    },
    {
      name: 'API Test',
      link: '',
      additionalInfos: 'Bla',
      hasLink: true,
      stack: 'vue',
    },
  ];

  const workRelatedProjects = [
    {
      name: 'Covid Info EU/GER',
      additionalInfos: 'Bla',
      hasLink: false,
      stack: 'vue',
    },
    {
      name: 'Print View',
      additionalInfos: 'Bla',
      hasLink: false,
      stack: 'vue',
    },
    {
      name: 'Request',
      additionalInfos: 'Bla',
      hasLink: false,
      stack: 'vue',
    },
  ];

  const test = [1, 2, 3];

  return (
    <section>
      <h2>Projects</h2>
      <ItemGallery itemList={privateProjects} title="private projects" />
      <ItemGallery itemList={workRelatedProjects} />
    </section>
  );
};

export default Projects;
