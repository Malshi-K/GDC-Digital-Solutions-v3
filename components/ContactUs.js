"use client";
import { React, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import Image from "next/image";
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
    <section
      className="flex justify-center items-center min-h-screen p-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/contact-bg.webp')" }}
    >
      <div id="move-down" className="py-20 w-full">
        <div className="bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl p-8 w-full max-w-5xl mx-auto flex flex-col md:flex-row relative overflow-hidden">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-10 bg-white rounded-l-lg">
            <p className="text-2xl md:text-3xl font-bold mb-6 text-customGray">
              We are here for you! How can we help?
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">
                    89 Church Road, Pukete, Hamilton 3200
                  </p>
                  <p className="text-gray-600">NZ</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div>
                  <Link
                    href="tel:+64212463988"
                    className="text-gray-900 font-semibold hover:text-customYellow transition-colors"
                    onClick={handlePhoneClick}
                  >
                    +64 21 246 3988
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <Link
                    href="mailto:digital@gdcgroup.co.nz"
                    className="text-gray-900 font-semibold hover:text-customYellow transition-colors"
                  >
                    digital@gdcgroup.co.nz
                  </Link>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaFacebookF className="text-white text-lg" />
                </div>
                <div>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL"
                    className="text-gray-900 font-semibold hover:text-customYellow transition-colors"
                    onClick={handleFacebookClick}
                  >
                    Follow us on Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8 md:p-10 bg-gray-50 rounded-r-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-customGray mb-6">
              Get In Touch
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Go ahead, we're listening..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow h-32 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-customYellow text-white rounded-lg font-semibold hover:bg-customGray transition duration-300"
              >
                Submit
              </button>
            </form>

            {formStatus === "error" && (
              <p className="mt-4 font-semibold text-center text-red-600">
                {formMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;