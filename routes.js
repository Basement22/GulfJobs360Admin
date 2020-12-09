var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    layout: "/admin",
    subLinks: null
  },
  {
    path: "/stats",
    name: "Statistics",
    icon: "ni ni-chart-bar-32 text-teal",
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Users",
    path: "/users",
    icon: "fas fa-user text-purple",
    state: "users",
    layout: "/admin",
    views: [
      {
        path: "/users",
        name: "All Users",
        icon: "fas fa-users",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Candidates",
        icon: "fas fa-user-friends",
        layout: "/admin",
      },
      {
        path: "/employers",
        name: "Employers",
        icon: "fas fa-user-friends",
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    path: "/admins",
    name: "Manage Admins",
    icon: "fas fa-users-cog text-red",
    layout: "/admin",
    views: [
      {
        path: "/users",
        name: "All Admins",
        icon: "fas fa-user-shield",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Create New",
        icon: "far fa-plus-square",
        layout: "/admin",
      },
    ],    
  },
  {
    collapse: true,
    path: "/adds",
    name: "Manage Ads",
    icon: "fab fa-adversal text-yellow",
    layout: "/admin",
    views: [
      {
        path: "/users",
        name: "All Ads",
        icon: "fab fa-buysellads",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Create New",
        icon: "far fa-plus-square",
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    path: "/location",
    name: "Location",
    icon: "ni ni-pin-3 text-orange",
    layout: "/admin",
    views: [
      {
        path: "/users",
        name: "All Locations",
        icon: "ni ni-pin-3",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Add New",
        icon: "far fa-plus-square",
        layout: "/admin",
      },
    ],
  },
  {
    path: "/jobs",
    name: "Jobs",
    icon: "fas fa-briefcase text-pink",
    layout: "/admin",
  },
  {
    collapse: true,
    path: "/packages",
    name: "Packages",
    icon: "fab fa-buffer text-cyan",
    layout: "/admin",
    views: [
      {
        path: "/users",
        name: "All Packages",
        icon: "fab fa-buffer",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Booked Packages",
        icon: "far fa-bookmark",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Add New",
        icon: "far fa-plus-square",
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cogs text-blue",
    layout: "/admin",
    views: [
      {
        path: "/users",
        name: "Services",
        icon: "fab fa-buffer",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Layout",
        icon: "fas fa-arrows-alt",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Account",
        icon: "far fa-address-card",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "FAQs",
        icon: "far fa-question-circle",
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    path: "/pages",
    name: "Pages",
    icon: "fas fa-file-alt text-purple",
    layout: "/admin",
    views: [
      {
        path: "/users",
        name: "All Pages",
        icon: "fas fa-file-alt",
        layout: "/admin",
      },
      {
        path: "/candidates",
        name: "Create New",
        icon: "far fa-plus-square",
        layout: "/admin",
      },
    ],
  },
  // {
  //   path: "/profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   layout: "/admin",

  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   layout: "/admin",

  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   layout: "/auth",

  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   layout: "/auth",

  // },
];
export default routes;
