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
          description: "We use machine learning to model, explain, and optimize computer systems across the stack.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Papers from the lab. Filter by type or research area, search, or change the order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "People",
          description: "The researchers of MAX Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Papers, awards, talks, and lab updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-funding",
          title: "Funding",
          description: "We are grateful to the agencies and companies that support our research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/funding/";
          },
        },{id: "nav-join-us",
          title: "Join Us",
          description: "Openings for PhD students, master&#39;s students, and undergraduate researchers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "news-concorde-isca",
          title: 'Concorde Isca',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-21-concorde-isca.html";
            },},{id: "news-leadership-award",
          title: 'Leadership Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-15-leadership-award.html";
            },},{id: "news-ieee-micro-top-picks",
          title: 'Ieee Micro Top Picks',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-10-ieee-micro-top-picks.html";
            },},{id: "news-insyde-eurosys",
          title: 'Insyde Eurosys',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-15-insyde-eurosys.html";
            },},{id: "news-mlarchsys-isca",
          title: 'Mlarchsys Isca',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-05-mlarchsys-isca.html";
            },},{id: "news-yarch-isca",
          title: 'Yarch Isca',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-10-yarch-isca.html";
            },},{id: "news-zyad-uarch-isca",
          title: 'Zyad Uarch Isca',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-15-zyad-uarch-isca.html";
            },},{id: "news-new-phd-students",
          title: 'New Phd Students',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-08-17-new-phd-students.html";
            },},{id: "news-nadika-sc26",
          title: 'Nadika Sc26',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-11-10-nadika-sc26.html";
            },},{id: "news-nadika-wiml-neurips",
          title: 'Nadika Wiml Neurips',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-12-01-nadika-wiml-neurips.html";
            },},{id: "research-ai-driven-program-amp-compiler-optimization",
          title: 'AI-Driven Program &amp;amp; Compiler Optimization',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/compiler-optimization/";
            },},{id: "research-explainable-amp-generalizable-performance-modeling",
          title: 'Explainable &amp;amp; Generalizable Performance Modeling',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/performance-modeling/";
            },},{id: "research-systems-for-large-scale-retrieval-amp-graph-analytics",
          title: 'Systems for Large-Scale Retrieval &amp;amp; Graph Analytics',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/retrieval-graph-systems/";
            },},{id: "research-representative-benchmarks-amp-workload-characterization",
          title: 'Representative Benchmarks &amp;amp; Workload Characterization',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/workload-characterization/";
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
