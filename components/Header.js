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
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-2 sm:px-4 md:px-6 lg:px-10 ${
          isScrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-2 sm:px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/Digital Solution Logo.webp"
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
            className="menu-button text-white hover:text-customYellow focus:outline-none"
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
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 bg-customGray z-50 overflow-y-auto shadow-xl transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-customGray">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-customYellow focus:outline-none"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <nav className="p-4 sm:p-6">
          <ul className="space-y-4 sm:space-y-6">
            {navItems.map((item, index) => (
              <li key={item.name} className="py-1">
                {item.hasDropdown ? (
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`text-left text-base sm:text-lg ${
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/")
                            ? "text-customYellow font-medium"
                            : "text-white"
                        } hover:text-customYellow transition-colors`}
                      >
                        {item.name}
                      </button>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="text-white hover:text-customYellow focus:outline-none transition-transform duration-200"
                        aria-expanded={expandedItems[index]}
                      >
                        {expandedItems[index] ? (
                          <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems[index]
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-3 sm:pl-4 pt-1 sm:pt-2 space-y-2 sm:space-y-3 border-l border-gray-700">
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              href={dropdownItem.href}
                              className={`block text-xs sm:text-sm ${
                                pathname === dropdownItem.href
                                  ? "text-customYellow font-medium"
                                  : "text-gray-300"
                              } hover:text-customYellow transition-colors`}
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
                    className={`text-base sm:text-lg ${
                      pathname === item.href
                        ? "text-customYellow font-medium"
                        : "text-white"
                    } hover:text-customYellow transition-colors`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links or Additional Info */}
        <div className="p-4 sm:p-6 border-t border-gray-700 mt-4 sm:mt-6">
          <div className="mb-4">
            <p className="text-gray-400 text-base sm:text-lg mb-1 sm:mb-2 font-normal">
              Contact Us
            </p>
            <a
              href="mailto:digital@gdcgroup.co.nz"
              className="block text-white text-base sm:text-lg font-normal hover:text-customYellow transition-colors mb-1"
            >
              digital@gdcgroup.co.nz
            </a>
            <a
              href="tel:+64212463988"
              className="block text-white text-base sm:text-lg font-normal hover:text-customYellow transition-colors"
            >
              (+64) 21 246 3988
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;