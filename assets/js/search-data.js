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
        },{id: "news-paper-accepted-at-micro-2024-introducing-tea-titan-for-efficient-gpu-design-space-exploration",
          title: 'Paper accepted at MICRO 2024 introducing Tea+ + Titan for efficient GPU design-space...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-micro-2024-introducing-tao-for-throughput-and-accuracy-oriented-gpu-simulation",
          title: 'Paper accepted at MICRO 2024 introducing TAO for throughput- and accuracy-oriented GPU simulation....',
          description: "",
          section: "News",},{id: "news-paper-accepted-in-isca-2025",
          title: 'Paper accepted in ISCA 2025.',
          description: "",
          section: "News",},{id: "news-pricipal-investigator-santosh-pandey-awarded-rutgers-ece-graduate-leadership-and-service-award",
          title: 'Pricipal Investigator Santosh Pandey awarded Rutgers ECE Graduate Leadership and Service Award.',
          description: "",
          section: "News",},{
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
