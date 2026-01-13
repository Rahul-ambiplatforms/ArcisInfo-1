// Navbar Dropdown Data - Easy to maintain, add, update, delete items

export const dropdownData = {
  solutions: {
    title: "SOLUTIONS",
    items: [
      {
        label: "Edge AI",
        link: "/solution/edge-ai",
      },
      {
        label: "Cloud AI",
        link: "/solution/cloud-ai",
      },
      {
        label: "Generative AI",
        link: "/solution/generative-ai",
      },
    ],
  },
  products: {
    title: "PRODUCTS",
    items: [
      {
        group: "S-Series",
        groupLink: "/s-series",
        items: [
          {
            label: "AI Bullet Camera",
            link: "/s-series/ai-bullet-cctv-camera",
            icon: "camera",
          },
          {
            label: "AI PTZ Camera",
            link: "/s-series/ai-ptz-cctv-camera",
            icon: "video",
          },
          {
            label: "AI Dome Camera",
            link: "/s-series/ai-dome-cctv-camera",
            icon: "eye",
          },
        ],
      },
      {
        group: "Eco Series",
        groupLink: "/eco-series",
        items: [
          {
            label: "Bullet CCTV Camera",
            link: "/eco-series/bullet-cctv-camera",
            icon: "camera",
          },
          {
            label: "PTZ CCTV Camera",
            link: "/eco-series/ptz-cctv-camera",
            icon: "video",
          },
          {
            label: "Dome CCTV Camera",
            link: "/eco-series/dome-cctv-camera",
            icon: "eye",
          },
        ],
      },
      {
        label: "Arcis Bridge Device",
        link: "/arcis-bridge-device",
      },
      {
        label: "Cloud Video Management system",
        link: "/cloud-vms",
      },
      {
        label: "Network Video Recorder",
        link: "/arcis-nvr",
      },
    ],
  },
  company: {
    title: "COMPANY",
    items: [
      {
        label: "About Us",
        link: "/about-us",
      },
      {
        label: "Why ArcisAI",
        link: "/why-choose-arcisai",
      },
      {
        label: "Event",
        link: "/event",
      },
      {
        label: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        label: "Terms and Conditions",
        link: "/terms-of-service",
      },
      // {
      //   label: "Careers",
      //   link: "/careers",
      // },
      // {
      //   label: "News",
      //   link: "/news",
      // },
    ],
  },
  resources: {
    title: "RESOURCES",
    items: [
      // {
      //   label: "Documentation",
      //   link: "/documentation",
      // },
      // {
      //   label: "Support",
      //   link: "/support",
      // },
      {
        label: "Blog",
        link: "/blog",
      },
      // {
      //   label: "Downloads",
      //   link: "/downloads",
      // },
    ],
  },
};

export const actionLinks = [
  {
    label: "PARTNER WITH US",
    link: "/partner-with-us",
  },
  {
    label: "CONTACT US",
    link: "/contact-us",
  },
];

export const loginButton = {
  label: "Login",
  link: "https://view.arcisai.io/",
};
