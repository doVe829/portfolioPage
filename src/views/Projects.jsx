import ItemGallery from '../components/ItemGallery';

const Projects = () => {
  const privateProjects = [
    {
      name: 'Svelte Playstation 5 Scraper',
      link: '',
      additionalInfos: 'The reason bla',
      hasLink: true,
    },
    {
      name: 'Kotlin Advent of code',
      link: '',
      additionalInfos: 'The reason bla',
      hasLink: true,
    },
    {
      name: 'Mood Diary',
      link: '',
      additionalInfos: 'The reason bla',
      hasLink: true,
    },
    {
      name: 'API Test',
      link: '',
      additionalInfos: 'Bla',
      hasLink: true,
    },
  ];

  const workRelatedProjects = [
    {
      name: 'Covid Info EU/GER',
      additionalInfos: 'Bla',
      hasLink: false,
    },
    {
      name: 'Print View',
      additionalInfos: 'Bla',
      hasLink: false,
    },
    {
      name: 'Request',
      additionalInfos: 'Bla',
      hasLink: false,
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
