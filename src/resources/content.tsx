import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jean",
  lastName: "Muyeyi",
  name: `Jean Muyeyi`,
  role: "Creative Technologist",
  avatar: "/images/avatar.jpg",
  email: "jeanmuyeyi@gmail.com",
  location: "Africa/Kinshasa", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["French", "English", "Lingala"], // optional: Leave the array empty if you don't want to display languages
  locale: "fr", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jean1mpayi",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jean-muyeyi",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/jeanmpayi",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/243992850240",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Jean Muyeyi | Portfolio`,
  description: `Portfolio de Jean Muyeyi, créatif technologique polyvalent en développement, multimédia et IoT.`,
  headline: (
    <>Je crée, je développe, j'expérimente — entre technologie et créativité.</>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Portfolio</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projets phares
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Je suis {person.firstName}, un{" "}
      <Text as="span" size="xl" weight="strong">
        software • multimedia • technology • creativity
      </Text>{" "}
      builder. <br /> Je conçois, je développe et je transforme des idées en
      projets concrets.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrez ${person.name}, ${person.role} basé à ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/243992850240",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} est un profil hybride à la croisée du développement
        logiciel, du multimédia, de l'électronique et de la création de contenu.
        Son parcours part de l'électricité et de l'électronique pour évoluer
        vers le numérique, le web, l'IoT et la communication digitale. Il aime
        transformer des idées en projets concrets, à la fois utiles, créatifs et
        techniquement solides.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "La Marge",
        timeframe: "2023 - Aujourd'hui",
        role: "Réalisation / production audiovisuelle",
        achievements: [
          <>
            Coordonner des productions audiovisuelles, la création de contenu et
            la mise en ligne des projets média.
          </>,
          <>
            Contribuer à la direction artistique et à la réalisation de contenus
            numériques inspirés par la créativité et la communication.
          </>,
        ],
        images: [],
      },
      {
        company: "ABSSEA",
        timeframe: "2026 ",
        role: "Community Manager / support digital",
        achievements: [
          <>
            Participer à la communication digitale, à la promotion des solutions
            solaires et à la mise en valeur des services de l'entreprise.
          </>,
          <>
            Assurer une meilleure diffusion des offres et des projets autour de
            l'énergie durable et des solutions technologiques.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance / projets personnels",
        timeframe: "2024 - Aujourd'hui",
        role: "Développeur & créatif technologique",
        achievements: [
          <>
            Développer des applications web, des API et des outils numériques
            pour transformer des idées en solutions concrètes.
          </>,
          <>
            Créer des projets mêlant technologie, multimédia et innovation, en
            particulier dans le domaine de l'IoT, du web et de l'automatisation.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "Diplôme d'État en électricité",
        description: (
          <>Formation technique en électricité et installations électriques.</>
        ),
      },
      {
        name: "Licence en électronique",
        description: (
          <>
            Approfondissement en systèmes électroniques, électronique et
            automatismes.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences clés",
    skills: [
      {
        title: "Développement logiciel",
        description: (
          <>
            Conception de solutions web, API REST, back-end et applications
            utiles au quotidien.
          </>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Multimédia & création",
        description: (
          <>
            Production numérique, storytelling visuel, création de contenus et
            réalisation audiovisuelle.
          </>
        ),
        tags: [
          {
            name: "Video",
            icon: "video",
          },
          {
            name: "Design",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "IoT & systèmes embarqués",
        description: (
          <>
            Réalisation de projets connectés et de systèmes électroniques
            intelligents.
          </>
        ),
        tags: [
          {
            name: "ESP8266",
            icon: "microchip",
          },
          {
            name: "IoT",
            icon: "chip",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Écrire sur la technologie, le design et l'innovation",
  description: `Lecture des idées et projets récents de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets numériques, multimédia et technologiques de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Une sélection visuelle de projets et réalisations créatives par ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
