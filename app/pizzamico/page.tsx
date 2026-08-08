import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/app/components/ui/Reveal";
import { TechBlock } from "@/app/components/ui/TechBlock";
import { ProjectNav } from "@/app/components/project/ProjectNav";
import { ProjectMeta } from "@/app/components/project/ProjectMeta";
import { DotPattern } from "@/app/components/ui/DotPattern";
import { LightboxProvider, LightboxTrigger } from "@/app/components/ui/Lightbox";
import { HardDrivesIcon, UsersIcon, DevicesIcon } from "@/app/components/ui/icons";

export const metadata: Metadata = {
  title: "Pizzamico",
  description: "A branded online ordering platform for restaurants.",
};

const screens = [
  { label: "Cart", src: "/images/projects/pizzamico/iphone-cart.png" },
  { label: "Edit Item", src: "/images/projects/pizzamico/iphone-edit-item.png" },
  { label: "Menu", src: "/images/projects/pizzamico/iphone-menu.png" },
  { label: "Checkout", src: "/images/projects/pizzamico/iphone-checkout.png" },
  { label: "POS", src: "/images/projects/pizzamico/iphone-pos-index.png" },
  { label: "Order", src: "/images/projects/pizzamico/iphone-pos-order.png" },
  { label: "Dashboard", src: "/images/projects/pizzamico/iphone-dashboard.png" },
  { label: "Settings", src: "/images/projects/pizzamico/iphone-settings.png" },
  { label: "Reports", src: "/images/projects/pizzamico/iphone-reports.png" },
];

const gallery = screens.map((s) => ({
  src: s.src,
  alt: `Pizzamico ${s.label} screen`,
  width: 1570,
  height: 2932,
}));

const stats = [
  { value: "500K+", label: "Users reached" },
  { value: "Millions", label: "Orders processed" },
  { value: "iOS · Android · Web", label: "Platforms shipped" },
];

export default function PizzamicoPage() {
  return (
    <LightboxProvider images={gallery}>
    <article className="content-container py-16">
      {/* Meta eyebrow (outside the band) */}
      <Reveal className="mb-6">
        <ProjectMeta items={["Pizzamico", "Senior Software Engineer", "Jan 2017 – Feb 2024", "Remote"]} />
      </Reveal>

      {/* Hero band */}
      <Reveal>
        <section className="relative overflow-hidden rounded-3xl border border-[rgba(var(--border))] bg-[rgb(var(--surface))] p-8 md:p-12 lg:p-14">
          {/* Left color clip */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-2/5"
            style={{ background: "linear-gradient(to right, rgba(16,185,129,0.10), transparent)" }}
            aria-hidden="true"
          />
          <DotPattern />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="header-font text-4xl leading-tight md:text-6xl">
                Meet <span className="text-emerald-500">Pizzamico.</span>
              </h1>
              <p className="text-lg leading-relaxed opacity-80">
                The powerhouse to simplify restaurant ecommerce, blending GrubHub,
                Shopify, and DoorDash into one beautiful branded solution. I built the
                full platform from the ground up with Laravel, Python, and React.
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="header-font text-2xl text-emerald-500 md:text-3xl">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider opacity-60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <LightboxTrigger src="/images/projects/pizzamico/iphone-menu.png" className="-rotate-6">
                <Image
                  src="/images/projects/pizzamico/iphone-menu.png"
                  alt="Pizzamico ordering app menu screen"
                  width={1570}
                  height={2932}
                  className="h-auto w-[220px] drop-shadow-2xl md:w-[250px]"
                  priority
                />
              </LightboxTrigger>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Screen gallery: 3D fan of devices on a spotlit stage */}
      <section className="relative my-16 overflow-hidden rounded-3xl bg-neutral-900 px-6 py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(65% 55% at 50% 0%, rgba(16,185,129,0.20), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-2 justify-items-center gap-x-6 gap-y-14 [perspective:1600px] md:grid-cols-3 md:gap-y-16">
          {screens.map((screen, i) => {
            const tilt = ["tilt-l", "tilt-mid", "tilt-r"][i % 3];
            return (
              <Reveal key={screen.label} delay={(i % 3) * 80} className="flex flex-col items-center gap-4">
                <div
                  className={`phone-tilt ${tilt}`}
                  style={{
                    WebkitBoxReflect:
                      "below 4px linear-gradient(to bottom, transparent 62%, rgba(255,255,255,0.16))",
                  }}
                >
                  <LightboxTrigger src={screen.src}>
                    <Image
                      src={screen.src}
                      alt={`Pizzamico ${screen.label} screen`}
                      width={1570}
                      height={2932}
                      className="h-auto w-[150px] drop-shadow-2xl md:w-[190px]"
                    />
                  </LightboxTrigger>
                </div>
                <span className="text-sm font-medium uppercase tracking-wider text-white/70">
                  {screen.label}
                </span>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Tech / platforms / roles */}
      <section className="grid gap-6 pt-12 md:grid-cols-3">
        <Reveal>
          <TechBlock
            name="Technology"
            icon={<HardDrivesIcon className="h-6 w-6" />}
            items={["Laravel", "Node", "React", "Next.js", "Ionic", "Angular*", "Vue*"]}
          />
        </Reveal>
        <Reveal delay={80}>
          <TechBlock
            name="Platforms"
            icon={<DevicesIcon className="h-6 w-6" />}
            items={["iOS", "Android", "Web"]}
          />
        </Reveal>
        <Reveal delay={160}>
          <TechBlock
            name="Roles"
            icon={<UsersIcon className="h-6 w-6" />}
            items={["Full Stack Developer", "Team Lead · led 3 engineers"]}
          />
        </Reveal>
      </section>

      <p className="py-10 text-center text-sm opacity-60">
        *Technologies used in previous builds of the app.
      </p>

      <ProjectNav
        prev={{ label: "Previous", title: "Amazon", href: "/amazon" }}
        next={{ label: "Next", title: "Contact", href: "/#contact" }}
      />
    </article>
    </LightboxProvider>
  );
}
