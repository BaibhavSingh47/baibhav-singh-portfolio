import { motion } from 'framer-motion';
import { services } from '../constants';

const About = () => <section id="about" className="section-shell section-pad">
  <div className="section-kicker">01 · About me</div><h2 className="section-title">Building with <span className="gradient-text">curiosity</span> and code.</h2>
  <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
    <div className="glass-card p-7"><p className="leading-8 text-white/65">I'm Baibhav Singh, a fresher and Full Stack Developer focused on building responsive, user-friendly web applications. I work with React.js, Node.js, Express.js, MongoDB, Java, Python and JavaScript. I also have hands-on experience from my Full Stack Developer internship at Codveda Technologies.</p></div>
    <div className="grid grid-cols-2 gap-4">{services.map((s) => <div className="mini-card" key={s.title}><img src={s.icon} alt=""/><span>{s.title}</span></div>)}</div>
  </div>
</section>;
export default About;
