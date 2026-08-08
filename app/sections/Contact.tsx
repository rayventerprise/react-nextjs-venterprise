import { Reveal } from "@/app/components/ui/Reveal";
import { ContactModal } from "@/app/components/contact/ContactModal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-24">
      <div className="content-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary px-8 py-20 text-center text-white shadow-2xl md:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="header-font text-4xl leading-tight md:text-6xl">
                Are you thinking what I&apos;m thinking?
              </h2>
              <p className="mt-6 text-xl text-white/90">
                Let&apos;s make something{" "}
                <span className="relative inline-block">
                  amazing
                  <svg
                    className="absolute -bottom-3 left-0 h-3 w-full text-white/90"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 6 Q 10 2 20 6 T 40 6 T 60 6 T 80 6 T 100 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </span>{" "}
                together!
              </p>
              <ContactModal className="mt-10 inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 font-semibold uppercase tracking-wide text-primary shadow-lg transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
