import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const github = "https://github.com/Ayush010-A";
const email = "ayushmahapatra2017@gmail.com";
const sectionTitle = "text-3xl font-semibold tracking-tight sm:text-4xl";
const linkStyle = "inline-flex min-h-11 items-center gap-2 font-medium underline decoration-emerald-700/40 underline-offset-4 hover:decoration-current";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans text-stone-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-white focus:p-3">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-x-6 border-b border-stone-300 py-3">
          <a href="#main" aria-label="Ayushman Mahapatra, home" className="py-2 font-mono text-lg font-semibold text-emerald-900">AM.</a>
          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 text-sm font-medium">
            <a className="py-3 hover:underline" href="#projects">Projects</a>
            <a className="py-3 hover:underline" href="#about">About</a>
            <a className="py-3 hover:underline" href="#contact">Contact</a>
          </nav>
        </header>
        <main id="main">
          <section aria-labelledby="intro" className="grid items-center gap-8 py-12 sm:py-16 md:grid-cols-[1.4fr_1fr] md:gap-12">
            <div>
              <p className="mb-4 font-mono text-sm text-emerald-900">BCA student · Bargarh, India</p>
              <h1 id="intro" className="text-5xl leading-none font-semibold tracking-tight sm:text-7xl">Ayushman<br />Mahapatra</h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-700">I’m learning to build software through problems I run into as a student. My current project helps me explore a familiar question: when should I revise a topic again?</p>
              <a href="#projects" className="mt-6 inline-flex items-center gap-3 rounded-lg bg-emerald-900 px-5 py-3 font-medium text-white hover:bg-emerald-800">
                View my projects <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>
            <Image src="/img3.jpg" alt="Ayushman Mahapatra" width={900} height={680} sizes="(min-width: 768px) 400px, 90vw" priority className="w-full max-w-md rounded-2xl object-cover" />
          </section>
          <section id="projects" aria-labelledby="project-title" className="border-t border-stone-300 py-10 sm:py-14">
            <h2 id="project-title" className={sectionTitle}>Projects</h2>
            <article className="mt-6 grid gap-6 rounded-2xl bg-emerald-950 p-6 text-white sm:p-9 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="font-mono text-sm text-emerald-200">Mobile app · In development</p>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight">SpacedX</h3>
              </div>
              <div className="space-y-3 leading-relaxed text-emerald-50">
                <p>I started SpacedX while thinking about exam revision. I wanted a way to choose when a topic comes back for review and see which reviews I’ve finished.</p>
                <p>I’m mapping out reminders, photo notes and progress tracking, and working through the app’s code to understand how the pieces fit together.</p>
              </div>
            </article>
            <article className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-stone-300 bg-white p-6 sm:px-9">
              <div>
                <h3 className="text-xl font-semibold">Personal portfolio</h3>
                <p className="mt-1 text-stone-700">The Next.js site you’re visiting, where I share my projects as I learn.</p>
              </div>
              <a href={github + "/ayush-personal-website"} className={linkStyle}>View source <ArrowUpRight size={16} aria-hidden="true" /></a>
            </article>
          </section>
          <section id="about" aria-labelledby="about-title" className="grid gap-6 border-t border-stone-300 py-10 sm:py-14 md:grid-cols-[1fr_1.4fr]">
            <h2 id="about-title" className={sectionTitle}>About me</h2>
            <div className="space-y-5 leading-relaxed text-stone-700">
              <p>I’m pursuing a Bachelor of Computer Applications. Away from the screen, I play state-level table tennis in Odisha and enjoy learning music.</p>
              <div>
                <h3 className="mb-1 font-semibold text-stone-900">Currently learning</h3>
                <p>I’m practising the basics of C and data structures for my coursework. With SpacedX, I’m learning how to read an app’s source code and test it on Windows.</p>
              </div>
            </div>
          </section>
        </main>
        <footer id="contact" className="border-t border-stone-300 py-10">
          <h2 className={sectionTitle}>Get in touch</h2>
          <div className="mt-3 flex flex-wrap gap-x-6">
            <a href={`mailto:${email}`} className={linkStyle}>{email}</a>
            <a href={github} className={linkStyle}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="tel:+916372102759" className={linkStyle}>+91 6372102759</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
