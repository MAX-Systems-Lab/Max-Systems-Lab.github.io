// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Max-Systems-Lab/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Research directions and active themes at Max Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Max-Systems-Lab/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Papers, preprints, and technical reports from the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Max-Systems-Lab/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open-source code, tools, and research artifacts from the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Max-Systems-Lab/repositories/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Members of Max Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Max-Systems-Lab/people/";
          },
        },{id: "nav-join",
          title: "join",
          description: "Openings and collaboration opportunities at Max Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Max-Systems-Lab/join/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Max-Systems-Lab/books/the_godfather/";
            },},{id: "news-paper-accepted-at-micro-2024-introducing-tea-titan-for-efficient-gpu-design-space-exploration",
          title: 'Paper accepted at MICRO 2024 introducing Tea+ + Titan for efficient GPU design-space...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-micro-2024-introducing-tao-for-throughput-and-accuracy-oriented-gpu-simulation",
          title: 'Paper accepted at MICRO 2024 introducing TAO for throughput- and accuracy-oriented GPU simulation....',
          description: "",
          section: "News",},{id: "news-joining-google-this-summer-as-a-software-engineering-intern",
          title: 'Joining Google this summer as a Software Engineering intern.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-in-isca-2025",
          title: 'One paper accepted in ISCA 2025.',
          description: "",
          section: "News",},{id: "news-recipient-of-the-university-of-alabama-s-blackmon-moody-outstanding-faculty-research-award-for-this-year",
          title: 'Recipient of the University of Alabama’s Blackmon-Moody Outstanding Faculty Research Award for this...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/Max-Systems-Lab/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/Max-Systems-Lab/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/Max-Systems-Lab/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
