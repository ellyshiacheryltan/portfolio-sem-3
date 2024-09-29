import Header from "../components/Header";
import WorksSection from "../components/WorksSection";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.location.hash = "#home";
  }, []);

  return (
    <>
      <header className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </header>

      <section className="w-full inline-flex justify-center p-10 lg:pt-[8rem]">
        <WorksSection />
      </section>
    </>
  );
};

export default HomePage;
