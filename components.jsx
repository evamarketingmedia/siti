/* global React, window */
const { useEffect } = React;

const Icon = ({ name, size = 16, strokeWidth = 1.6, ...rest }) => {
  const paths = {
    arrow:     <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    check:     <polyline points="20 6 9 17 4 12" />,
    close:     <path d="M6 6l12 12M18 6L6 18" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    linkedin:  <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-5M16 17v-3a2 2 0 0 0-4 0" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths[name]}
    </svg>
  );
};

/* Reveal-on-scroll */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
        });
      },
      { rootMargin: "-40px 0px -40px 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Reveal = ({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) => (
  <Tag
    className={"reveal " + className}
    style={{ transitionDelay: `${delay}ms`, ...style }}
    {...rest}
  >
    {children}
  </Tag>
);

/* Brand — masthead style. Italic capital + small subtitle. */
const Brand = () => (
  <a href="#top" className="brand" aria-label="Studio Quiet — home">
    <span className="mark">S</span>
    Studio Quiet
    <small>est. 2017</small>
  </a>
);

/* Section kicker — replaces the abstract "eyebrow".
   Shows: § 01 — Problemi reali */
const SectionKicker = ({ n, label }) => (
  <span className="kicker">
    <span className="n">§ {n}</span>
    <span>— {label}</span>
  </span>
);

Object.assign(window, { Icon, useReveal, Reveal, Brand, SectionKicker });
