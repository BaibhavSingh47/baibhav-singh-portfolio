import { experiences } from '../constants';
const Experience = () => <section id="work" className="section-shell section-pad">
  <div className="section-kicker">03 · Experience</div><h2 className="section-title">Where I've <span className="gradient-text">grown</span>.</h2>
  <div className="mt-10 glass-card p-7 lg:p-9"><div className="flex flex-col justify-between gap-4 md:flex-row"><div><h3 className="text-2xl font-bold text-white">{experiences[0].title}</h3><p className="mt-1 text-violet-300">{experiences[0].company_name}</p></div><span className="date-pill">{experiences[0].date}</span></div><ul className="mt-7 grid gap-4 text-white/65 md:grid-cols-2">{experiences[0].points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400"/>{p}</li>)}</ul></div>
  <div className="mt-6 flex flex-wrap gap-4"><a href="/Resume.pdf" target="_blank" rel="noreferrer" className="primary-btn">Open Resume ↗</a><div className="stat-chip">B.Tech CSE · Expected 2027</div></div>
</section>;
export default Experience;
