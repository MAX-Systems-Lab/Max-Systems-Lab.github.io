// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Research directions and active themes at Max Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Papers, preprints, and technical reports from the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Open-source code, tools, and research artifacts from the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members of Max Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-join",
          title: "Join",
          description: "Openings and collaboration opportunities at Max Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "news-one-paper-concorde-fast-and-accurate-cpu-performance-modeling-with-compositional-analytical-ml-fusion-led-by-arash-accepted-at-isca-25-a-great-collaborative-work-during-my-time-at-google",
          title: 'One paper Concorde: Fast and Accurate CPU Performance Modeling with Compositional Analytical-ML Fusion,...',
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
