"use client";
import { React, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RequestQuoteForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    services: [], // New services field
    business_type: "", // New business type field
    is_new_business: "",
    business_name: "",
    firstname: "",
    email: "",
    phone: "",
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
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "services") {
      // Handle multiple service selections
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Updated handleSubmit function with better debugging and validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug: Log form data before submission
    console.log("Form data being submitted:", formData);

    // Validate that business_type is selected
    if (!formData.business_type || formData.business_type.trim() === "") {
      setFormStatus("error");
      setFormMessage("Please select a business type before submitting.");
      return;
    }

    // Validate that at least one service is selected
    if (!formData.services || formData.services.length === 0) {
      setFormStatus("error");
      setFormMessage("Please select at least one service before submitting.");
      return;
    }

    const endpoint =
      "https://api.hsforms.com/submissions/v3/integration/submit/6187835/0e3fc4ca-001d-49fa-b667-d53b20ed1fc4";

    // Prepare fields for submission - ensure business_type is included
    const submissionFields = [
      { name: "services", value: formData.services.join(";") },
      { name: "business_type", value: formData.business_type }, // Make sure this is always included
      { name: "is_new_business", value: formData.is_new_business },
      { name: "business_name", value: formData.business_name },
      { name: "firstname", value: formData.firstname },
      { name: "email", value: formData.email },
      { name: "phone", value: formData.phone },
      { name: "message", value: formData.message },
    ].filter((field) => {
      // Don't filter out business_type even if it's empty (but we validated above)
      if (field.name === "business_type" || field.name === "services") {
        return field.value !== null && field.value !== "";
      }
      return (
        field.value !== null && field.value !== "" && field.value.length !== 0
      );
    });

    console.log("Fields being sent to HubSpot:", submissionFields);

    // Double-check business_type is in the submission
    const businessTypeField = submissionFields.find(
      (field) => field.name === "business_type"
    );
    console.log("Business type field:", businessTypeField);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: submissionFields,
        }),
      });

      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Response body:", responseText);

      if (response.ok) {
        router.push("/success");
      } else {
        setFormStatus("error");
        setFormMessage(
          `There was an issue with your submission. Status: ${response.status}. Please try again.`
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
      setFormMessage(
        "There was an error submitting the form. Please check your internet connection and try again."
      );
    }
  };

  // Service options with their internal names as values
  const serviceOptions = [
    { label: "Total Business Branding", value: "total_business_branding" },
    { label: "Logo Design", value: "logo_design" },
    { label: "Brand Awareness Strategy", value: "brand_awareness_strategy" },
    {
      label: "Promotional Materials (Flyers, Business Cards, etc.)",
      value: "promotional_materials",
    },
    { label: "Website Development", value: "website_development" },
    { label: "Digital Marketing", value: "digital_marketing" },
    {
      label: "Increase Visitors to Current Website",
      value: "increase_visitors",
    },
    { label: "Rank on Top 10 in Google Search", value: "google_search" },
    { label: "Custom Web Application", value: "custom_web_application" },
    { label: "Other Digital Solutions for Your Business", value: "other" },
  ];

  // Business type options with their internal names as values
  const businessTypeOptions = [
    { label: "Restaurant / Cafe", value: "restaurant_cafe" },
    { label: "Retail / E-commerce", value: "retail_ecommerce" },
    { label: "Food / Catering", value: "food_catering" },
    { label: "Health & Wellness", value: "health_wellness" },
    { label: "Education / Coaching", value: "education_coaching" },
    { label: "Construction / Trades", value: "construction_trades" },
    { label: "Beauty / Salon", value: "beauty_salon" },
    { label: "Real Estate", value: "real_estate" },
    {
      label: "Professional Services (Legal, Finance, etc.)",
      value: "professional_services",
    },
    { label: "Other (please specify)", value: "other" },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen relative">
      <div id="move-down" className="py-20 w-full">
        <div className="bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl p-8 w-full max-w-6xl mx-auto flex flex-col lg:flex-row relative overflow-hidden">
          {/* Contact Info Section */}
          <div className="w-full lg:w-1/3 p-8 md:p-10 bg-white rounded-l-lg">
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
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-customYellow mb-2">
              Get a Free Quote for Your Business
            </h1>
            <p className="font-bold text-center text-customGray mb-10">
              Please fill out the form below to help us understand your needs.
              Our team will get back to you promptly with a customized solution.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 md:p-10 rounded-r-lg">
              {/* Services Selection - NEW FIELD */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What services are you looking for? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {serviceOptions.map((service) => (
                    <label
                      key={service.value}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service.value}
                        checked={formData.services.includes(service.value)}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-customYellow focus:ring-customYellow"
                      />
                      <span className="text-sm text-gray-700">
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Business Type Selection - NEW FIELD */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What is your business type? (Select one) *
                </label>
                <div className="space-y-2">
                  {businessTypeOptions.map((type) => (
                    <label
                      key={type.value}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                    >
                      <input
                        type="radio"
                        name="business_type"
                        value={type.value}
                        checked={formData.business_type === type.value}
                        onChange={handleChange}
                        className="border-gray-300 text-customYellow focus:ring-customYellow"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
                {/* Add error message for business type */}
                {formStatus === "error" && !formData.business_type && (
                  <p className="text-red-600 text-sm mt-1">
                    Please select a business type
                  </p>
                )}
              </div>

              {/* New Business Question */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Are you starting a new business?
                </label>
                <select
                  name="is_new_business"
                  value={formData.is_new_business}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                  required
                >
                  <option value="">Please select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  placeholder="Enter your registered or planned business name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                />
              </div>

              {/* Contact Person Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter a valid email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <select
                    className="px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-customYellow bg-gray-100"
                    defaultValue="NZ"
                  >
                    <option value="LK">LK</option>
                    <option value="NZ">NZ</option>
                    <option value="AU">AU</option>
                    <option value="US">US</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+64"
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Go ahead, we're listening..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow h-32 resize-none"
                  required
                />
              </div>

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

export default RequestQuoteForm;
