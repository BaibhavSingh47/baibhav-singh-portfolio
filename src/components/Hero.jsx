import { motion } from 'framer-motion';

const Hero = () => (
  <section id="top" className="hero-section section-shell pt-32 lg:pt-40">
    <div className="hero-grid" />
    <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <div className="status-pill"><span /> Available for opportunities</div>
        <p className="mt-8 text-lg text-white/60">Hi, I'm 👋</p>
        <h1 className="mt-2 text-5xl font-black tracking-tight text-white sm:text-7xl">Baibhav <span className="gradient-text">Singh</span></h1>
        <h2 className="mt-4 text-2xl font-semibold text-violet-300 sm:text-4xl">Full Stack Developer</h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">Fresher passionate about building scalable, responsive web applications with the MERN stack, Python and Java. I enjoy turning ideas into practical digital products.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="primary-btn">View Projects →</a>
          <a href="#contact" className="secondary-btn">Let's Connect</a>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/50"><span className="stat-chip">2+ Projects</span><span className="stat-chip">MERN Stack</span><span className="stat-chip">B.Tech CSE · 2027</span></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative mx-auto w-full max-w-xl">
        <div className="photo-glow" />
        <div className="photo-card"><img src="/profile-photo.png" alt="Baibhav Singh" className="profile-photo" /></div>
        <div className="floating-card floating-one"><b>MERN</b><span>Stack</span></div>
        <div className="floating-card floating-two"><b>Fresher</b><span>Always learning</span></div>
      </motion.div>
    </div>
  </section>
);
export default Hero;
