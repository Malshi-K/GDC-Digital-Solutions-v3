"use client";
import { React, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  // Lazy load Facebook SDK only when user clicks the Facebook link
  const handleFacebookClick = (e) => {
    e.preventDefault();
    const loadFacebookAndRedirect = async () => {
      // Load the SDK
      await new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.onload = resolve;
        document.body.appendChild(script);
      });

      // After SDK loads, redirect to Facebook page
      window.location.href =
        "https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL";
    };

    loadFacebookAndRedirect();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Track phone call conversion when phone number is clicked
  const handlePhoneClick = () => {
    // Trigger Google Ads phone call conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16917143672/qxkRCPqN0qsaEPjA3II_",
      });
      console.log("[Tracking] Phone call conversion tracked");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://api.hsforms.com/submissions/v3/integration/submit/6187835/c9e0a8dc-5c29-43c1-9667-0f826c715d77";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "full_name", value: formData.full_name },
            { name: "email", value: formData.email },
            { name: "message", value: formData.message },
          ],
        }),
      });

      if (response.ok) {
        // Track form submission conversion
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-16917143672/LaiLCKf31asaEPjA3II_",
          });
          console.log("[Tracking] Form submission conversion tracked");
        }

        // Redirect to success page
        router.push("/success");
      } else {
        setFormStatus("error");
        setFormMessage(
          "There was an issue with your submission. Please try again."
        );
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        "There was an error submitting the form. Please check your internet connection and try again."
      );
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen p-6 relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-customPurple/10 to-customLightPurple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-customLightPurple/10 to-customPurple/10 rounded-full blur-3xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-customPurple/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-customLightPurple/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-customPurple/30 rotate-45"></div>
      </div>

      <div id="move-down" className="py-20 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-customPurple to-customLightPurple rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-customPurple via-customLightPurple to-customPurple bg-clip-text text-transparent">
              GET IN TOUCH
            </h1>
            <div className="w-8 h-1 bg-gradient-to-r from-customLightPurple to-customPurple rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-0 w-full max-w-6xl mx-auto flex flex-col md:flex-row relative overflow-hidden border border-customPurple/10">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-customPurple to-customLightPurple text-white rounded-l-2xl relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                We are here for you!
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                How can we help transform your business?
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4 flex items-center justify-center w-12 h-12 group-hover:bg-white/30 transition-all duration-300">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      89 Church Road, Pukete
                    </p>
                    <p className="text-white/80">Hamilton 3200, New Zealand</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4 flex items-center justify-center w-12 h-12 group-hover:bg-white/30 transition-all duration-300">
                    <FaPhoneAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <Link
                      href="tel:+64212463988"
                      className="text-white font-semibold text-lg hover:text-white/80 transition-colors duration-300 block"
                      onClick={handlePhoneClick}
                    >
                      +64 21 246 3988
                    </Link>
                    <p className="text-white/80 text-sm">Call us directly</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4 flex items-center justify-center w-12 h-12 group-hover:bg-white/30 transition-all duration-300">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <Link
                      href="mailto:digital@gdcgroup.co.nz"
                      className="text-white font-semibold text-lg hover:text-white/80 transition-colors duration-300 block"
                    >
                      digital@gdcgroup.co.nz
                    </Link>
                    <p className="text-white/80 text-sm">Send us an email</p>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4 flex items-center justify-center w-12 h-12 group-hover:bg-white/30 transition-all duration-300">
                    <FaFacebookF className="text-white text-lg" />
                  </div>
                  <div>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL"
                      className="text-white font-semibold text-lg hover:text-white/80 transition-colors duration-300 block"
                      onClick={handleFacebookClick}
                    >
                      Follow us on Facebook
                    </Link>
                    <p className="text-white/80 text-sm">Stay connected with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white rounded-r-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-customPurple to-customLightPurple bg-clip-text text-transparent mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-customPurple focus:ring-2 focus:ring-customPurple/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-customPurple focus:ring-2 focus:ring-customPurple/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or ask any questions..."
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-customPurple focus:ring-2 focus:ring-customPurple/20 h-32 resize-none transition-all duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="group w-full py-4 bg-gradient-to-r from-customPurple to-customLightPurple hover:from-customLightPurple hover:to-customPurple text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-customPurple/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            {formStatus === "error" && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="font-semibold text-center text-red-600">
                  {formMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;