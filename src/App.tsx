import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  CircleArrowOutUpRight,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Phone,
  Send,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import {
  type CSSProperties,
  type FormEvent,
  type ReactNode,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Project = {
  name: string;
  domain: string;
  category: string;
  number: string;
  description: string;
  role: string;
  stack: string[];
  accent: string;
  accentSoft: string;
  pattern: string;
  outcome: string;
  challenge: string;
  solution: string;
  href: string;
  image?: string;
};

const projects: Project[] = [
  {
    name: "Tech It Done",
    domain: "techitdone.com",
    category: "Digital Services",
    number: "01",
    description:
      "A clear, conversion-focused home for a technology partner that makes complex digital work feel simple.",
    role: "Strategy · Design · Development",
    stack: ["Next.js", "Tailwind", "Vercel"],
    accent: "#5e7dff",
    accentSoft: "rgba(94, 125, 255, .22)",
    pattern: "grid",
    outcome: "Sharper positioning and a more direct path from interest to enquiry.",
    challenge:
      "The offer was broad, but the experience did not quickly communicate what the team could solve.",
    solution:
      "I shaped the information around outcomes first, then designed a modular system that could grow with the service catalogue.",
    href: "https://techitdone.com",
    image: "/assets/project-techitdone.webp",
  },
  {
    name: "Big Marketing Secret",
    domain: "bmsecret.com",
    category: "Marketing & Growth",
    number: "02",
    description:
      "A sharper digital presence for a marketing brand built around practical growth, not empty noise.",
    role: "Creative Direction · Web",
    stack: ["WordPress", "SEO", "Content"],
    accent: "#b28dff",
    accentSoft: "rgba(178, 141, 255, .22)",
    pattern: "rings",
    outcome: "A confident brand surface that makes the strategy feel tangible.",
    challenge:
      "The brand had insight, but needed a more memorable visual language to stand apart from generic agency websites.",
    solution:
      "I created a high-contrast editorial rhythm where proof, perspective, and calls-to-action are allowed to breathe.",
    href: "https://bmsecret.com",
    image: "/assets/project-big-marketing-secret.webp",
  },
  {
    name: "CRM Tech It Done",
    domain: "crm.techitdone.com",
    category: "Systems & Operations",
    number: "03",
    description:
      "A focused CRM environment that brings daily client work, follow-up, and visibility into one place.",
    role: "Product Thinking · Implementation",
    stack: ["CRM", "Automation", "Workflows"],
    accent: "#8de5cc",
    accentSoft: "rgba(141, 229, 204, .18)",
    pattern: "nodes",
    outcome: "Less context switching, clearer ownership, and a system people can actually use.",
    challenge:
      "Important relationship data was spread across disconnected tools and informal processes.",
    solution:
      "I translated the work into a calmer operational flow with clear signals for what matters next.",
    href: "https://crm.techitdone.com",
    image: "/assets/project-crm.webp",
  },
  {
    name: "Academic Explore",
    domain: "academicexplore.com",
    category: "Education Platform",
    number: "04",
    description:
      "A more approachable way to discover academic opportunities, resources, and next steps.",
    role: "Web Development · UX",
    stack: ["JavaScript", "UX", "CMS"],
    accent: "#f0bc77",
    accentSoft: "rgba(240, 188, 119, .2)",
    pattern: "lines",
    outcome: "A friendlier bridge between information overload and confident action.",
    challenge:
      "Students needed a clear starting point, not another dense directory of disconnected links.",
    solution:
      "I focused the interface on orientation: where you are, what is relevant, and what you can do now.",
    href: "https://academicexplore.com",
  },
  {
    name: "VistaMare Cyprus",
    domain: "vistamarecyprus.com",
    category: "Property & Place",
    number: "05",
    description:
      "A polished digital window into a destination where the feeling of the place is part of the offer.",
    role: "Digital Experience · Web",
    stack: ["Webflow", "Photography", "SEO"],
    accent: "#78b9ff",
    accentSoft: "rgba(120, 185, 255, .2)",
    pattern: "waves",
    outcome: "A warmer, more considered experience for exploring the opportunity.",
    challenge:
      "The digital presence needed to carry trust and atmosphere at the same time.",
    solution:
      "I balanced useful property information with a visual pace that lets the destination do some of the selling.",
    href: "https://vistamarecyprus.com",
    image: "/assets/project-vistamare.webp",
  },
];

const timeline = [
  {
    year: "NOW",
    company: "Independent Digital Projects",
    title: "Web Development · AI Solutions · Digital Products",
    copy: "Building focused web experiences and useful systems for people with something meaningful to move forward.",
  },
  {
    year: "2023 —",
    company: "Yumedev LTD",
    title: "Founder · CEO · Digital Marketer",
    copy: "Leading digital strategy, marketing, product development, and web projects from first idea to shipped experience.",
  },
  {
    year: "2021 —",
    company: "Parvista Mare Development LTD",
    title: "IT Support Junior · Digital Solutions",
    copy: "Supporting people, managing websites, and turning day-to-day technical friction into dependable digital solutions.",
  },
  {
    year: "EARLIER",
    company: "LAPFED NGO",
    title: "Digital Marketing",
    copy: "Creating digital communication and social media work that helps important messages reach the people who need them.",
  },
];

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Web / Product",
    copy: "Interfaces that are clear enough to use and distinctive enough to remember.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    icon: Bot,
    number: "02",
    title: "AI / Automation",
    copy: "Practical systems that remove friction and give good ideas more leverage.",
    tags: ["AI tools", "AI-assisted development", "Automation", "Workflows"],
  },
  {
    icon: Zap,
    number: "03",
    title: "Digital Growth",
    copy: "Digital strategy, content, and SEO shaped around real action rather than vanity metrics.",
    tags: ["SEO", "Social Media", "Strategy", "Content"],
  },
  {
    icon: Wrench,
    number: "04",
    title: "Platforms",
    copy: "Comfortable moving between the tools that make a digital operation work.",
    tags: ["WordPress", "WooCommerce", "Supabase", "Vercel", "Figma", "Webflow"],
  },
];

const process = [
  ["01", "Discover", "Understanding the problem before reaching for the obvious answer."],
  ["02", "Strategize", "Finding the clearest direction, voice, and next useful move."],
  ["03", "Build", "Turning the thinking into something people can actually use."],
  ["04", "Optimize", "Improving the details that make the experience perform better over time."],
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={reveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 25 });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 160);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const updateForm = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    if (!form.name || !form.email || !form.message) {
      setFormError("Please add your name, email, and a short message.");
      return;
    }
    const subject = encodeURIComponent(form.subject || "Portfolio enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:kabuyagraci1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.24 } }}
          >
            <div className="loader-mark">GKN<span>.</span></div>
            <div className="loader-line"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease: "easeInOut" }} /></div>
            <p>Digital solutions creator</p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="nav-wrap">
        <a href="#home" className="wordmark" onClick={() => goTo("home")}>
          GKN<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {[
            ["About", "about"],
            ["Experience", "experience"],
            ["Work", "work"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>{label}</button>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} aria-label="Mobile navigation">
              {[
                ["About", "about"],
                ["Experience", "experience"],
                ["Work", "work"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button key={id} onClick={() => goTo(id)}>{label}</button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-gridline" />
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.22, duration: 0.7 }} className="eyebrow">
              <span className="status-dot" /> Available for select projects
            </motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}>
              <motion.span variants={reveal}>Building</motion.span>
              <motion.span className="indent" variants={reveal}>digital</motion.span>
              <motion.span className="outline-word" variants={reveal}>solutions.</motion.span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.76, duration: 0.7 }}>
              A digital solutions creator working across web development, digital marketing, IT support, and practical AI automation.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
              <button className="button button-primary" onClick={() => goTo("work")}>Explore my work <ArrowUpRight size={16} /></button>
              <button className="text-link" onClick={() => goTo("contact")}>Let&apos;s talk <ArrowRight size={16} /></button>
            </motion.div>
          </div>
          <div className="hero-portrait-wrap">
            <motion.div className="portrait-orbit orbit-one" animate={shouldReduceMotion ? {} : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
            <motion.div className="portrait-orbit orbit-two" animate={shouldReduceMotion ? {} : { rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            <motion.div className="portrait-backdrop" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.26, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
            <motion.img
              src="/assets/graci-kabuya-ngoy-portrait-cropped.webp"
              alt="Graci Kabuya Ngoy in a dark suit"
              className="portrait"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="portrait-label"><span>GRACI KABUYA NGOY</span><span>01 / 05</span></div>
            <div className="portrait-note">Human<br />by design.</div>
          </div>
          <div className="hero-footer">
            <span>Scroll to explore</span>
            <motion.span animate={shouldReduceMotion ? {} : { y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ArrowDown size={16} /></motion.span>
            <span className="hero-coordinate">25°12&apos;N / 55°16&apos;E</span>
          </div>
        </section>

        <section className="marquee" aria-label="Areas of expertise">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-copy" key={copy}>
                <span>WEB DEVELOPMENT</span><i>✳</i><span>DIGITAL STRATEGY</span><i>✳</i><span>AI &amp; AUTOMATION</span><i>✳</i><span>CREATIVE THINKING</span><i>✳</i>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad about-section" id="about">
          <SectionReveal className="section-kicker"><span>01</span><span>About the work</span><span className="kicker-line" /></SectionReveal>
          <div className="about-grid">
            <SectionReveal className="about-heading"><h2>Multidisciplinary.<br /><em>Digital.</em><br />Creative.</h2></SectionReveal>
            <SectionReveal className="about-body" delay={0.1}>
              <p className="lead-copy">The best digital work usually happens in the space between disciplines.</p>
              <p>I&apos;m Graci — a Digital Solutions Creator who brings together web development, digital marketing, AI, and the practical side of technology. I like the messy beginning: the half-formed idea, the bottleneck, the thing that should be easier.</p>
              <p>Then I make it clear. Something people can understand, use, and feel good about coming back to.</p>
              <button className="text-link" onClick={() => goTo("experience")}>More about my path <ArrowRight size={16} /></button>
            </SectionReveal>
          </div>
          <div className="signal-grid">
            {[
              [Layers3, "Web development", "Structure, speed, and a sharp point of view."],
              [MessageCircle, "Digital strategy", "A useful idea deserves a way to travel."],
              [Bot, "AI & automation", "Less friction. More room for the work that matters."],
              [Sparkles, "Problem solving", "Curiosity is a technical advantage."],
            ].map(([Icon, title, copy], index) => (
              <SectionReveal key={title as string} delay={index * 0.06} className="signal-card">
                <div className="signal-icon"><Icon size={18} strokeWidth={1.5} /></div>
                <span className="signal-index">0{index + 1}</span>
                <h3>{title as string}</h3>
                <p>{copy as string}</p>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="section-pad experience-section" id="experience">
          <SectionReveal className="section-kicker"><span>02</span><span>Experience</span><span className="kicker-line" /></SectionReveal>
          <div className="experience-intro">
            <SectionReveal><h2>A path built<br />around <em>useful</em><br />work.</h2></SectionReveal>
            <SectionReveal delay={0.1}><p>I&apos;ve worked across support, marketing, product, and web — not as separate lanes, but as different ways of understanding how digital work creates momentum.</p></SectionReveal>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <SectionReveal key={item.company} delay={index * 0.06} className="timeline-row">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-node"><span /></div>
                <div className="timeline-content"><h3>{item.company}</h3><h4>{item.title}</h4><p>{item.copy}</p></div>
                <ChevronRight className="timeline-arrow" size={20} />
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="section-pad expertise-section" id="expertise">
          <SectionReveal className="section-kicker"><span>03</span><span>Expertise</span><span className="kicker-line" /></SectionReveal>
          <div className="expertise-top">
            <SectionReveal><h2>More than<br /><em>one</em> thing.</h2></SectionReveal>
            <SectionReveal delay={0.1}><p>A connected skill set for a connected world. I&apos;m most effective when the answer needs both a technical brain and a human one.</p></SectionReveal>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return <SectionReveal key={item.title} delay={index * 0.08} className="capability-card">
                <div className="capability-head"><div className="capability-icon"><Icon size={21} strokeWidth={1.4} /></div><span>{item.number}</span></div>
                <h3>{item.title}</h3><p>{item.copy}</p>
                <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ArrowUpRight className="capability-arrow" size={18} />
              </SectionReveal>;
            })}
          </div>
        </section>

        <section className="section-pad work-section" id="work">
          <SectionReveal className="section-kicker"><span>04</span><span>Selected work</span><span className="kicker-line" /></SectionReveal>
          <div className="work-heading">
            <SectionReveal><h2>Things I&apos;ve<br /><em>made</em> matter.</h2></SectionReveal>
            <SectionReveal delay={0.1}><p>A selection of digital projects where strategy became structure, and structure became something people could use.</p></SectionReveal>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} onOpen={() => setSelectedProject(project)} />
            ))}
          </div>
        </section>

        <section className="feature-break">
          <div className="feature-glow" />
          <span className="feature-label">A note on the process</span>
          <p>Good work doesn&apos;t have to shout.<br /><em>It has to land.</em></p>
          <div className="feature-mark"><CircleArrowOutUpRight size={28} strokeWidth={1} /></div>
        </section>

        <section className="section-pad process-section" id="process">
          <SectionReveal className="section-kicker"><span>05</span><span>How I work</span><span className="kicker-line" /></SectionReveal>
          <div className="process-intro"><SectionReveal><h2>From first<br />thought to <em>next</em><br />level.</h2></SectionReveal></div>
          <div className="process-grid">
            {process.map(([number, title, copy], index) => (
              <SectionReveal key={number} delay={index * 0.08} className="process-step">
                <span className="process-number">{number}</span>
                <div className="process-line"><i /></div>
                <h3>{title}</h3><p>{copy}</p>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-grid">
            <div className="contact-copy">
              <SectionReveal className="section-kicker"><span>06</span><span>Contact</span><span className="kicker-line" /></SectionReveal>
              <SectionReveal><h2>Let&apos;s build<br /><em>something</em><br />great.</h2></SectionReveal>
              <SectionReveal delay={0.1}><p>Have a thoughtful problem, a promising idea, or a digital experience that needs a better direction? I&apos;d like to hear about it.</p></SectionReveal>
              <div className="contact-details">
                <a href="mailto:kabuyagraci1@gmail.com"><Mail size={16} /> kabuyagraci1@gmail.com</a>
                <span><MapPin size={16} /> Based in Dubai · Working globally</span>
                <a href="https://wa.me/905338573903" target="_blank" rel="noreferrer"><MessageCircle size={16} /> +90 533 857 3903 · WhatsApp</a>
                <a href="https://wa.me/971586022721" target="_blank" rel="noreferrer"><Phone size={16} /> +971 58 602 2721 · WhatsApp / BOTIM</a>
              </div>
              <div className="socials">
                <a href="https://www.linkedin.com/in/graci-ngoy-7085b4273/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
                <a href="https://github.com/Graci72" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
                <a href="mailto:kabuyagraci1@gmail.com" aria-label="Email"><Mail size={17} /></a>
              </div>
            </div>
            <SectionReveal className="contact-form-wrap" delay={0.12}>
              <form className="contact-form" onSubmit={submitForm}>
                <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required value={form.name} onChange={(e) => updateForm("name", e.target.value)} placeholder="Jane Smith" /></div>
                <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => updateForm("email", e.target.value)} placeholder="jane@company.com" /></div>
                <div className="form-field"><label htmlFor="subject">Subject <span>(optional)</span></label><input id="subject" value={form.subject} onChange={(e) => updateForm("subject", e.target.value)} placeholder="A new digital direction" /></div>
                <div className="form-field"><label htmlFor="message">Tell me a little more</label><textarea id="message" name="message" rows={4} required value={form.message} onChange={(e) => updateForm("message", e.target.value)} placeholder="What are you thinking about?" /></div>
                {formError && <p className="form-error">{formError}</p>}
                {submitted ? <div className="sent-state"><Check size={18} /> Your message is ready in your email client.</div> : <button className="button button-primary submit-button" type="submit">Send message <Send size={15} /></button>}
              </form>
            </SectionReveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Graci Kabuya Ngoy</span>
        <span>Digital solutions, thoughtfully made.</span>
        <button onClick={() => goTo("home")}>Back to top <ArrowUpRight size={14} /></button>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="case-study" initial={{ opacity: 0, y: 34, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} onClick={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study"><X size={20} /></button>
              <div className="case-visual" style={{ "--case-accent": selectedProject.accent, "--case-soft": selectedProject.accentSoft } as CSSProperties}>
                <span>{selectedProject.number} / SELECTED WORK</span><h2>{selectedProject.name}</h2><a href={selectedProject.href} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16} /></a>
              </div>
              <div className="case-content">
                <div><span className="case-label">Overview</span><p className="case-overview">{selectedProject.description}</p></div>
                <div className="case-columns"><div><span className="case-label">The challenge</span><p>{selectedProject.challenge}</p></div><div><span className="case-label">The solution</span><p>{selectedProject.solution}</p></div></div>
                <div className="case-columns"><div><span className="case-label">My role</span><p>{selectedProject.role}</p></div><div><span className="case-label">Outcome</span><p>{selectedProject.outcome}</p></div></div>
                <div className="case-stack"><span className="case-label">Tech stack</span><div className="tag-list">{selectedProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);
  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <SectionReveal className="project-card-wrap" delay={index * 0.08}>
      <motion.button className={`project-card pattern-${project.pattern}`} onClick={onOpen} onMouseMove={handleMove} onMouseLeave={reset} style={{ rotateX, rotateY, "--project-accent": project.accent, "--project-soft": project.accentSoft } as CSSProperties}>
        <div className="project-card-top"><span>{project.number}</span><span>{project.category}</span><ArrowUpRight size={18} /></div>
        <div className="project-art" aria-hidden="true">
          {project.image && <img className="project-shot" src={project.image} alt="" width="1920" height="1080" loading="lazy" decoding="async" />}
          <div className="art-glow" /><div className="art-shape" />
        </div>
        <div className="project-card-bottom"><div><h3>{project.name}</h3><span>{project.domain}</span></div><div className="project-card-cta">View case study <MoveUpRight size={15} /></div></div>
      </motion.button>
    </SectionReveal>
  );
}

export default App;