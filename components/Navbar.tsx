"use client";

import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import BrandMark from "@/components/BrandMark";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu as MenuIcon, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FC } from "react";

const aboutLinks = [
  { name: "About TGA Handyman", href: "/pages/about-us" },
  { name: "Our Mission", href: "/pages/about-us/mission" },
  { name: "Why Use Us", href: "/pages/about-us/why-use-us" },
];

const serviceLinks = [
  { name: "Handyman Services", href: "/pages/services/handyman" },
  { name: "Electrical & Lighting", href: "/pages/services/home-improve" },
  { name: "Plumbing & Leaks", href: "/pages/services/bathroom-repairs" },
  { name: "Fixture Installs", href: "/pages/services/bathroom" },
  { name: "Kitchen Repairs", href: "/pages/services/kitchen-repairs" },
  { name: "Cabinet Repairs", href: "/pages/services/kitchen-cabinets" },
  { name: "Drywall & Paint", href: "/pages/services/drywall" },
  { name: "Interior Repairs", href: "/pages/services/interior" },
  { name: "Doors & Exterior", href: "/pages/services/exterior" },
  { name: "Cleanup & Punch-list", href: "/pages/services/clean-up" },
  { name: "Selective Removal", href: "/pages/services/demolitions" },
  { name: "Small Repairs", href: "/pages/services/construction" },
  { name: "Emergency Service", href: "/pages/services/emergency" },
  { name: "Service Areas", href: "/pages/services/areas" },
];

const dropdownLinkClass =
  "block rounded-sm px-3 py-2.5 font-body text-sm font-medium tracking-wide text-brand-navy transition-all duration-200 hover:translate-x-0.5 hover:bg-brand-mist hover:text-brand-green";

const links = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/pages/reviews" },
  { name: "Gallery", href: "/pages/gallery" },
  { name: "Contact", href: "/pages/contact-us" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type MenuKey = "about" | "services";

const Navbar: FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(!isHome);
  const primaryPhone = siteConfig.phones[0];

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setActive(null);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const light = isHome && !scrolled && !open;
  const close = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  const toggleMenu = (key: MenuKey) => {
    setOpenMenu((current) => (current === key ? null : key));
  };

  const aboutOpen = openMenu === "about";
  const servicesOpen = openMenu === "services";

  const navLinkClass = (href: string) =>
    cn(
      "relative z-20 px-3 py-2 font-body text-sm font-medium transition-colors",
      light
        ? isActive(pathname, href)
          ? "text-white"
          : "text-white/80 hover:text-white"
        : isActive(pathname, href)
          ? "text-brand-green"
          : "text-brand-navy hover:text-brand-green"
    );

  return (
    <>
      <ResizableNavbar className="pointer-events-none" forceVisible={!isHome || scrolled}>
        <NavBody
          className={cn(
            "pointer-events-auto gap-4 px-5 py-2.5",
            !scrolled && isHome && "bg-transparent"
          )}
        >
          <Link href="/" className="relative z-20 shrink-0" onClick={close}>
            <BrandMark priority />
          </Link>

          <Menu
            setActive={setActive}
            className="absolute inset-0 hidden items-center justify-center gap-1 bg-transparent lg:flex"
          >
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
              className={cn(
                "cursor-pointer px-3 py-2 font-body text-sm font-medium transition-colors",
                light
                  ? "text-white/80 hover:text-white"
                  : pathname.startsWith("/pages/about-us")
                    ? "text-brand-green"
                    : "text-brand-navy hover:text-brand-green"
              )}
            >
              <div className="flex min-w-[14rem] flex-col">
                {aboutLinks.map((item) => (
                  <HoveredLink key={item.href} href={item.href} className={dropdownLinkClass}>
                    {item.name}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item="Services"
              className={cn(
                "cursor-pointer px-3 py-2 font-body text-sm font-medium transition-colors",
                light
                  ? "text-white/80 hover:text-white"
                  : pathname.startsWith("/pages/services")
                    ? "text-brand-green"
                    : "text-brand-navy hover:text-brand-green"
              )}
            >
              <div className="grid min-w-[18rem] grid-cols-1 gap-0.5 overflow-hidden sm:min-w-[28rem] sm:grid-cols-2">
                {serviceLinks.map((item) => (
                  <HoveredLink key={item.href} href={item.href} className={dropdownLinkClass}>
                    {item.name}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>

            {links.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                {item.name}
              </Link>
            ))}
          </Menu>

          <div className="relative z-20 flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.tel}`}
              className={cn(
                "hidden items-center gap-1.5 font-body text-sm xl:inline-flex",
                light ? "text-white/90 hover:text-white" : "text-brand-navy hover:text-brand-green"
              )}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {primaryPhone.display}
            </a>
            <NavbarButton
              as={Link}
              href="/pages/contact-us"
              variant="dark"
              className="rounded-sm bg-brand-green px-4 py-2.5 font-body text-sm font-semibold text-white shadow-none hover:bg-brand-green-bright"
            >
              Book Now
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav
          className={cn(
            "pointer-events-auto",
            (!scrolled && isHome && !open) || open
              ? open
                ? "border border-black/5 bg-white/95"
                : "bg-transparent"
              : undefined
          )}
        >
          <MobileNavHeader className="px-3">
            <Link href="/" onClick={close}>
              <BrandMark priority className="h-9" />
            </Link>

            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center",
                light ? "text-white" : "text-brand-navy"
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-sheet"
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent
                id="mobile-nav-sheet"
                side="right"
                className="w-[min(100%,22rem)] border-l border-black/5 bg-white p-0"
              >
                <SheetHeader className="border-b border-black/5 px-5 py-4">
                  <SheetTitle className="font-display text-lg uppercase tracking-wide text-brand-ink">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto px-3 py-4">
                  <Link
                    href="/"
                    onClick={close}
                    className={cn(
                      "rounded-md px-3 py-3 font-body text-base font-medium",
                      isActive(pathname, "/") ? "text-brand-green" : "text-brand-navy"
                    )}
                  >
                    Home
                  </Link>

                  <div>
                    <button
                      type="button"
                      onClick={() => toggleMenu("about")}
                      aria-expanded={aboutOpen}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 font-body text-base font-medium text-brand-navy"
                    >
                      About
                      <ChevronDown className={cn("h-5 w-5 transition", aboutOpen && "rotate-180")} />
                    </button>
                    {aboutOpen && (
                      <div className="mb-1 ml-3 space-y-0.5 border-l-2 border-brand-green/40 pl-2">
                        {aboutLinks.map((item) => (
                          <Link key={item.href} href={item.href} onClick={close} className={dropdownLinkClass}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => toggleMenu("services")}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 font-body text-base font-medium text-brand-navy"
                    >
                      Services
                      <ChevronDown
                        className={cn("h-5 w-5 transition", servicesOpen && "rotate-180")}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="mb-1 ml-3 space-y-0.5 overflow-hidden border-l-2 border-brand-green/40 pl-2">
                        {serviceLinks.map((item) => (
                          <Link key={item.href} href={item.href} onClick={close} className={dropdownLinkClass}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {links.slice(1).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className={cn(
                        "rounded-md px-3 py-3 font-body text-base font-medium",
                        isActive(pathname, item.href) ? "text-brand-green" : "text-brand-navy"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="mt-3 space-y-3 border-t border-black/5 px-2 pt-4">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="flex items-center gap-2 font-body text-sm font-medium text-brand-navy"
                      >
                        <Phone className="h-4 w-4 text-brand-green" />
                        {phone.display}
                      </a>
                    ))}
                    <Link
                      href="/pages/contact-us"
                      onClick={close}
                      className="flex w-full items-center justify-center bg-brand-green px-5 py-3 font-body text-sm font-semibold text-white"
                    >
                      Book Now
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </MobileNavHeader>
        </MobileNav>
      </ResizableNavbar>

      {!isHome && <div className="h-[4.75rem]" aria-hidden />}
    </>
  );
};

export default Navbar;
