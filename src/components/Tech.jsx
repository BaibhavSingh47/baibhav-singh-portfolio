import { technologies } from '../constants';
const Tech = () => <section id="skills" className="section-shell section-pad">
  <div className="section-kicker">02 · Skills</div><h2 className="section-title">My <span className="gradient-text">toolkit</span>.</h2>
  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{technologies.map((t) => <div className="tech-card" key={t.name}>{t.icon ? <img src={t.icon} alt=""/> : <span className="tech-badge">{t.badge}</span>}<span>{t.name}</span></div>)}</div>
</section>;
export default Tech;
