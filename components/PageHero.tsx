import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <header className="relative isolate overflow-hidden bg-brand-ink">
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-green/25 via-transparent to-brand-navy/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-sm text-white/50">
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 ? <span className="text-white/25">/</span> : null}
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href} className="transition-colors hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-white/80" : undefined}>{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green-bright">
            {eyebrow}
          </p>
        ) : null}

        <h1
          className={`font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[0.04em] text-white ${
            eyebrow ? "mt-3" : ""
          }`}
        >
          {title}
        </h1>
        <div className="mt-5 h-0.5 w-20 origin-left bg-brand-green-bright" aria-hidden />
        {description ? (
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
