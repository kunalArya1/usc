function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
  ];
  const IconLinkedIn = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 no-underline">
            <div className="w-9 h-9  rounded-2xl flex items-center justify-center">
              {/* <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg> */}
              <img src="/usclogo.png" alt="" />
            </div>
            <div>
              <div className="font-['Sora'] font-extrabold text-[15px] leading-tight">
                Unique Science Classes
              </div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase">
                Dhaka, Bihar, India
              </div>
            </div>
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`font-['Sora'] text-[14px] no-underline transition-colors ${
                    l.href === "/about"
                      ? "text-[#E5232E] font-semibold"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                label: "Instagram",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                icon: <IconLinkedIn />,
              },
              {
                label: "YouTube",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="white"
                    />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 bg-white/10 hover:bg-[#E5232E] rounded-[8px] flex items-center justify-center text-white transition-colors duration-200 no-underline"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-7 text-center">
          <p className="text-[13px] text-white/35">
            © 2025 Unique Science Classes, Dhaka, Bihar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
