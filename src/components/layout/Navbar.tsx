import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/about" },
    // { label: "Courses", href: "/courses" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ];

  const IconMenu = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
  const IconXMark = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "shadow-[0_2px_24px_rgba(0,0,0,0.10)]"
            : "border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 no-underline">
            <div className="w-9 h-9  rounded-2xl flex items-center justify-center shadow-md shadow-red-200">
              {/* <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg> */}
              <img src="/usclogo.png" alt="" />
            </div>
            <div>
              <div className="font-['Sora'] font-extrabold text-[15px] text-[#0D1836] leading-tight">
                Unique Science Classes
              </div>
              <div className="font-['Sora'] text-[10px] text-[#8A96AB] font-medium tracking-widest uppercase">
                · Dhaka, Bihar
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`font-['Sora'] text-[14px] font-medium transition-colors duration-200 no-underline ${
                    l.active
                      ? "text-[#E5232E] font-semibold"
                      : "text-[#0D1836] hover:text-[#E5232E]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:inline-flex bg-[#E5232E] hover:bg-[#C41920] text-white text-[13px] font-semibold font-['Sora'] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200 no-underline"
            >
              Get Free Counselling
            </a>
            <button
              className="md:hidden p-1 text-[#0D1836]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <IconXMark /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl px-6 py-5">
          <ul className="list-none flex flex-col gap-4 m-0 p-0">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-['Sora'] text-[16px] font-semibold no-underline transition-colors ${
                    l.active
                      ? "text-[#E5232E]"
                      : "text-[#0D1836] hover:text-[#E5232E]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex bg-[#E5232E] text-white text-[14px] font-semibold font-['Sora'] px-6 py-3 rounded-full no-underline mt-1"
              >
                Get Free Counselling
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
