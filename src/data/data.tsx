import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import calander_image from '../images/calander_image.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  TestimonialSection,
  TimelineItem,
  CalanderSection
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Asafs Meizner's resume",
  description: "Asaf Meizner's resume website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Calander: 'calander'
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Asaf Meizner.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student from Israel im a <strong className="text-stone-100">Full Stack Developer</strong>, currently in the robotics team <strong className="text-stone-100">Makers Assemble 5951</strong> making and programming an frc robot
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">Coding</strong>,
        and building <strong className="text-stone-100">Robots</strong>, or working{' '}
        <strong className="text-stone-100"> </strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '#resume',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, my name is Asaf and I'm from Tel Aviv. I'm currently a high school student with a passion for computers, robotics, computer games, planes, and weapons. In my free time, I enjoy exploring these interests through hands-on projects and activities.
  
  I have been fortunate enough to have the opportunity to volunteer and lead in various organizations and teams. Through these experiences, I have gained valuable skills in teaching, mentorship, and teamwork and have had the chance to make a positive impact on the lives of others.
  
  I am always looking for new ways to learn and grow, and I am excited to see what the future holds. If you have any questions or opportunities, feel free to reach out to me via the form below.`,
  aboutItems: [
    {label: 'Location', text: 'Tel Aviv, Israel', Icon: MapIcon},
    {label: 'Age', text: '15', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Israeli', Icon: FlagIcon},
    {label: 'Interests', text: 'Computers, Robotics, Cad, Lighting, Sound Design', Icon: SparklesIcon},
    {label: 'Study', text: 'Tichonet Highschool', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Non', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hebrew',
        level: 10,
      },
      {
        name: 'German',
        level: 0.5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'Javascript',
        level: 2,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'C#',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'css / javascript',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Frc team',
    description: 'The Frc Robotics Team im a part of, Makers Assemble 5951',
    url: 'https://makersassemble5951.com/',
    image: porfolioImage1,
  },
  {
    title: 'Frc robot 2022',
    description: 'The robot we built for the 2022 season',
    url: 'https://grabcad.com/library/frc-5951-2022-season-robot-1',
    image: porfolioImage2,
  },
  {
    title: 'Open Soruce Project',
    description: 'ROSI - Robotics Open Source Israel is an Ofen Sores project whose goal is to create a common infrastructure between all FIRST groups in Israel. You can upload presentations, CAD files, code snippets, video lectures and more to our website. So that each group can learn from the other groups while sharing their knowledge When the situation that the site aims to promote is raising the level of all the groups in the country In all subjects, from establishing community and media projects, through software and code to mechanical engineering and engineering.',
    url: 'https://www.firstopensource.org/',
    image: porfolioImage3,
  },
  {
    title: 'Python fun code',
    description: 'The code i wrote in python for fun - puzzles, games, and more',
    url: 'https://github.com/AsafMeizner/Fun-Code',
    image: porfolioImage4,
  },
  {
    title: 'Ftc Robot 2021',
    description: 'The robot we built for the 2021 season',
    url: 'https://grabcad.com/library/ftc-13146-2022-season-robot-1',
    image: porfolioImage5,
  },
  {
    title: 'FTC 2021-2022 code',
    description: 'the code for the robot we built for the 2021-2022 season',
    url: 'https://github.com/AsafMeizner/FTC-13146-2021-2022-NEW',
    image: porfolioImage6,
  },
  {
    title: 'Frc code library',
    description: 'the library we built to use for our robots',
    url: 'https://github.com/MA5951/MAutils',
    image: porfolioImage7,
  },
  {
    title: 'countdown',
    description: 'When Afk it will open up a window with a countdown in fullscreen',
    url: 'https://github.com/AsafMeizner/frc-countdown',
    image: porfolioImage8,
  },
  {
    title: 'Frc robot code 2022',
    description: 'The code for the robot we built for the 2022 season',
    url: 'https://github.com/MA5951/RapidReact',
    image: porfolioImage9,
  },
  {
    title: 'bday card',
    description: 'A birthday card website for my friend',
    url: 'https://asafmeizner.github.io/Birthday-card/',
    image: porfolioImage10,
  },
  {
    title: 'Prank virus',
    description: 'A library i made of fake viruses and pranks',
    url: 'https://github.com/AsafMeizner/viruses',
    image: porfolioImage11,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'present',
    location: 'Tichonet High School',
    title: 'High school diploma',
    content: <p>
    I am currently a high school student in Tel Aviv and am working towards my diploma. My course of study includes 5 units of math, 5 units of physics, 10 units of computer science, 5 units of English.
    <br />
    <br />
    I am passionate about these subjects and enjoy learning and exploring them through hands-on projects and activities. I have gained a strong foundation in these areas and am always looking for new opportunities to learn and grow.
    <br />
    <br />
    In addition to my coursework, I have also had the opportunity to participate in various extracurricular activities and organizations that have allowed me to develop leadership and teamwork skills and to make a positive impact on my community.
    </p>,
  },
  {
    date: 'september 2019 - Present',
    location: 'Makers Assemble Ftc, Frc and Fll teams',
    title: 'Robotics',
    content: <p> 
    I am currently a high school student in Tel Aviv and am working towards my diploma. In addition to my coursework, I have also had the opportunity to participate in various robotics programs through FIRST (For Inspiration and Recognition of Science and Technology).
    <br />
    <br />
    I have been a member of a FIRST LEGO League (FLL) team for 2 years, a FIRST Tech Challenge (FTC) team for 1 year, and a FIRST Robotics Competition (FRC) team for 1 year. These experiences have allowed me to develop technical skills, leadership skills, and teamwork skills and to work on complex projects. I have also gained valuable experience in teaching, mentorship, and community service through my involvement in these programs.
    <br />
    <br />
    I am passionate about robotics and technology and enjoy learning and exploring these areas through hands-on projects and activities. I am excited to continue my involvement in FIRST robotics programs and to see what the future holds.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2022 - Present',
    location: 'Frc robotics team Makers Assemble 5951',
    title: 'Programmer, Builder, Driver, Graphics award lead',
    content: (
      <p>
        "As a member of an FRC robotics team, I have had the opportunity to develop a range of technical and leadership skills through my roles as a programmer, builder, driver, and graphics award lead. As a programmer, I have been responsible for developing and maintaining the code that powers our robot, using languages such as Java, Python and Typescript. As a builder, I have participated in the construction and maintenance of our robot and have designed and fabricated custom parts and components. As a driver, I have operated our robot during competitions, requiring strong hand-eye coordination and quick decision-making under pressure. In my role as graphics award lead, I have created and presented our team's graphics award submission, showcasing my design skills and ability to communicate the impact and significance of our team's work. Through these roles, I have gained valuable experience in working on complex technical projects, developing problem-solving and critical thinking skills, and leading and collaborating with a team.
      </p>
    ),
  },
  {
    date: 'october 2019 - Present',
    location: '5 schools; 4 special needs schools, 1 regular school, a hackaton, 2 Fll robotics teams and 1 Ftc robotics team',
    title: 'Volenteer',
    content: (
      <p>
        As a volunteer, I have dedicated my time to sharing my knowledge and passion for STEM subjects with students at various schools and organizations. At 5 schools, I have taught STEM subjects to students through hands-on activities and projects, helping them develop critical thinking and problem-solving skills and an appreciation for the role of technology in our world. At 4 of these schools, I worked with special needs students and was able to adapt my teaching methods to meet their unique needs and abilities. In addition to my work at schools, I have also served as a mentor for 2 FLL teams, an FTC team, and a hackathon. Through these experiences, I have gained valuable skills in teaching, mentorship, and teamwork, and have had the opportunity to make a positive impact on the lives of others.
      </p>
    ),
  },
  {
    date: 'June 2021 - April 2022',
    location: 'Ftc robotics team Makers Assemble 13146',
    title: 'Lead programmer, Build team lead, Driver',
    content: (
      <p>
        As a member of an FTC robotics team, I have held a variety of leadership roles that have allowed me to develop a range of technical and teamwork skills. As lead programmer, I have been responsible for developing and maintaining the code that powers our robot and for managing the programming team. As build team lead, I have overseen the construction and maintenance of our robot and have designed and fabricated custom parts and components. As a driver, I have operated our robot during competitions, requiring strong hand-eye coordination and quick decision-making under pressure. As a CAD modeler, I have created 3D models of our robot and its components to aid in the design and fabrication process. As lead media and awards, I have created and presented our team's media and award submissions, showcasing my design and communication skills. As lead strategy, I have developed and implemented strategies for our team's participation in competitions, requiring strong problem-solving and critical thinking skills. Through these roles, I have gained valuable experience in leading technical projects and teamwork.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Joe biden',
      text: 'You know, theres a uhl during World War II, uh, you know, where Roosevelt came up with a thing uh, that uh, you knowq was totally different than a, than the, the, its called, he called it the, you knowq the World War II, he had the war — the War Production Board.',
      image: 'https://www.shutterstock.com/image-photo/new-york-ny-january-7-600w-1608793423.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Calandar section
  */
export const calendar: CalanderSection = {
  headerText: 'My availability.',
  // picture of calandar src\images\calander.png
  imageSrc: calander_image,
  actions: []
};



/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me with any questions or opportunities via the form to the left.',
  items: [
    {
      type: ContactType.Email,
      text: 'asaf.m@tichonet.com',
      href: 'mailto:asaf.m@tichonet.com',
    },
    {
      type: ContactType.Location,
      text: 'Tel Aviv, Israel',
      href: 'https://www.google.ca/maps/place/Tel+Aviv',
    },
    {
      type: ContactType.Instagram,
      text: '@asafmeizner',
      href: 'https://www.instagram.com/asafmeizner/',
    },
    {
      type: ContactType.Github,
      text: 'AsafMeizner',
      href: 'https://github.com/AsafMeizner',
    },
  ],
};