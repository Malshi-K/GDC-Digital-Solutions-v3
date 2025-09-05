"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".menu-button")
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle dropdown in sidebar
  const toggleDropdown = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Navigation links with dropdown items
  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About Us", href: "/about", hasDropdown: false },
    {
      name: "Digital Marketing",
      href: "/digital-marketing",
      hasDropdown: true,
      dropdownItems: [
        { name: "Google Ads", href: "/services/google-ads" },
        { name: "Facebook Ads", href: "/services/facebook-ads" },
        { name: "SEO/ Copywriting", href: "/services/seo" },
      ],
    },
    {
      name: "Web & App Development",
      href: "/development",
      hasDropdown: true,
      dropdownItems: [
        { name: "Website development", href: "/services/development" },
        { name: "App development", href: "/services/app-development" },
      ],
    },
    {
      name: "Consulting & Strategy",
      href: "/consulting",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Business Analysis & Consulting",
          href: "/services/business-consulting",
        },
      ],
    },
    {
      name: "Case Studies",
      href: "/case-studies",
      hasDropdown: true,
      dropdownItems: [
        { name: "Website development", href: "/case-studies/web-development" },
        { name: "Google Ads", href: "/case-studies/google-ads" },
      ],
    },
    { name: "Contact Us Now", href: "/contact-us", hasDropdown: false },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-2 sm:px-4 md:px-6 lg:px-10 ${
          isScrolled 
            ? "backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
        style={{
          background: isScrolled 
            ? "linear-gradient(135deg, rgba(116, 7, 200, 0.9) 0%, rgba(194, 3, 157, 0.9) 100%)"
            : "transparent"
        }}
      >
        <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-2 sm:px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <Image
              src="/assets/images/Digital Solution Logo.png"
              alt="GDC Digital Solutions Logo"
              width={240}
              height={60}
              className="h-auto w-auto max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px]"
              priority={true}
              loading="eager"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, (max-width: 1024px) 200px, 240px"
              quality={85}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="menu-button text-white hover:scale-110 focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <Bars3Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>
        </div>
      </header>

      {/* Overlay when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 z-50 overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(180deg, #7407c8 0%, #c2039d 100%)"
        }}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-white/20">
          <button
            onClick={toggleSidebar}
            className="text-white hover:bg-white/10 focus:outline-none p-2 rounded-lg transition-all duration-300"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <nav className="p-4 sm:p-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.name} className="py-1">
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <div 
                      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "bg-white/20 text-white"
                          : "hover:bg-white/10 text-white/90"
                      }`}
                    >
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="text-left text-base sm:text-lg font-medium flex-1"
                      >
                        {item.name}
                      </button>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="text-white/70 hover:text-white focus:outline-none transition-all duration-300 p-1"
                        aria-expanded={expandedItems[index]}
                      >
                        <div className={`transition-transform duration-300 ${expandedItems[index] ? 'rotate-90' : ''}`}>
                          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems[index]
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-4 space-y-1 border-l-2 border-white/30 pl-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              href={dropdownItem.href}
                              className={`block text-sm p-2 rounded-lg transition-all duration-300 ${
                                pathname === dropdownItem.href
                                  ? "text-white bg-white/20 font-medium"
                                  : "text-white/80 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block p-3 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-white/20 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="p-4 sm:p-6 border-t border-white/20 mt-4 sm:mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="text-white text-lg font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:digital@gdcgroup.co.nz"
                className="flex items-center text-white/90 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm break-all">digital@gdcgroup.co.nz</span>
              </a>
              <a
                href="tel:+64212463988"
                className="flex items-center text-white/90 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">(+64) 21 246 3988</span>
              </a>
            </div>
            
            {/* CTA Button */}
            <div className="mt-4">
              <Link
                href="/contact-us"
                className="w-full bg-white text-customPurple hover:bg-gray-50 font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center group"
                onClick={() => setIsSidebarOpen(false)}
              >
                Get Started Today
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;