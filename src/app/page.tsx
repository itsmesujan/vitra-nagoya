import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ConceptSection from "@/components/home/ConceptSection";
import MenuPreview from "@/components/home/MenuPreview";
import EventsPreview from "@/components/home/EventsPreview";
import GoogleReviews from "@/components/home/GoogleReviews";
import ReservationCTA from "@/components/home/ReservationCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ConceptSection />
        <MenuPreview />
        <GoogleReviews />
        <EventsPreview />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
