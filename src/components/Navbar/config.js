const email = [
    "mailto:",
    "webmaster",
    "@",
    "micetf.fr",
    "?",
    "subject=",
    `Au sujet de ${window.location.pathname}`,
].join("");

export const brand = {
    className: "navbar-brand",
    href: "#",
    title: "Recherche sur le site par mots clés",
    link: "Chercher un outil",
};

export const menu = [
    {
        className: "nav-link",
        href: "https://micetf.fr/",
        title: "Accueil",
        link: "MiCetF",
    },
    {
        className: "nav-link",
        href: "https://micetf.fr/index/",
        title: "Liste des outils rangés par ordre alphabétique",
        link: "Liste des outils",
    },
    {
        className: "nav-link",
        href: "https://micetf.fr/blog/",
        target: "_blank",
        link: "Blog",
    },
    {
        className: "nav-link",
        href: "https://www.youtube.com/user/MiCetF/videos",
        target: "_blank",
        title: "Chaîne Youtube",
        link: "Vidéos",
    },
    {
        className: "nav-link",
        href: email,
        title: "Pour contacter le webmaster...",
        link: "Contact",
    },
];
