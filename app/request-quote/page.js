// pages/contact-us.js
import ServicesBar from "@/components/home/ServicesBar";
import PageTitle from "@/components/request-quote/PageTitle";
import RequestQuoteForm from "@/components/request-quote/RequestQuoteForm";

// Main Component
export default function RequestQuotePage() {
  return (
    <>
      <PageTitle />
      <ServicesBar />
      <section className="relative bg-cover bg-center bg-no-repeat min-h-screen">
        <RequestQuoteForm />
      </section>
    </>
  );
}
