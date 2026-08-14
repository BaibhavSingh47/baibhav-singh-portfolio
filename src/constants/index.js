import { backend, frontend, ux, prototyping, javascript, html, css, reactjs, nodejs, git, komikult, leaderboard, math, movie, nyeusi, space, whiteabstract } from '../assets';

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'work', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const services = [
  { title: 'Frontend Development', icon: frontend },
  { title: 'Backend & REST APIs', icon: backend },
  { title: 'MERN Stack', icon: ux },
  { title: 'Problem Solving', icon: prototyping },
];

export const technologies = [
  { name: 'React.js', icon: reactjs }, { name: 'Node.js', icon: nodejs },
  { name: 'MongoDB', icon: backend }, { name: 'JavaScript', icon: javascript },
  { name: 'HTML5', icon: html }, { name: 'CSS3', icon: css },
  { name: 'Git & GitHub', icon: git },
  { name: 'Python', icon: null, badge: 'PY' }, { name: 'Java', icon: null, badge: 'JA' },
  { name: 'Express.js', icon: backend }, { name: 'REST APIs', icon: backend }, { name: 'Postman', icon: javascript },
];

export const experiences = [
  {
    title: 'Full Stack Developer Intern', company_name: 'Codveda Technologies', date: 'Mar 2026 - Apr 2026',
    points: ['Worked on real-world web development projects using MERN Stack technologies.', 'Developed responsive and user-friendly web applications.', 'Implemented backend functionality, API integration, and authentication systems.', 'Strengthened frontend and backend development skills through hands-on tasks.'],
  },
];

const personalProjects = [
  { id: 'personal-1', name: 'Accommodation Booking Platform', description: 'Full-stack accommodation booking application with responsive UI, secure authentication, REST APIs, booking and user management functionality.', tags: ['React', 'Node.js', 'MongoDB'], image: whiteabstract, repo: '', demo: '' },
  { id: 'personal-2', name: 'Resume Builder Web Application', description: 'Responsive resume builder that generates professional resumes dynamically with interactive UI components and a clean user experience.', tags: ['React.js', 'Node.js', 'JavaScript'], image: whiteabstract, repo: '', demo: '' },
];

const templateProjects = [
  {
    id: "template-1",
    name: "KomiKult",
    description: "Comic characters list app displaying Marvel characters.",
    tags: ["React", "MongoDB", "Tailwind"],
    image: komikult,
    repo: "",
    demo: "",
    template: true,
  },
  {
    id: "template-2",
    name: "Leaderboard",
    description:
      "Leaderboard list app that displays scores submitted by different players.",
    tags: ["React", "REST API", "SCSS"],
    image: leaderboard,
    repo: "",
    demo: "",
    template: true,
  },
  {
    id: "template-3",
    name: "Math Magicians",
    description: "Single-page calculator application built with React.",
    tags: ["React", "CSS"],
    image: math,
    repo: "",
    demo: "",
    template: true,
  },
  {
    id: "template-4",
    name: "Movie Metro",
    description:
      "Single-page application for searching movie and show ratings and details.",
    tags: ["React", "API", "CSS"],
    image: movie,
    repo: "",
    demo: "",
    template: true,
  },
  {
    id: "template-5",
    name: "Nyeusi Fest Site",
    description: "Demo concert website for a music festival called Nyeusi.",
    tags: ["React", "CSS"],
    image: nyeusi,
    repo: "",
    demo: "",
    template: true,
  },
  {
    id: "template-6",
    name: "Space Hub",
    description:
      "Space exploration themed web experience from the original portfolio template.",
    tags: ["React", "UI"],
    image: space,
    repo: "",
    demo: "",
    template: true,
  },
];

export const projects = [...personalProjects, ...templateProjects];
