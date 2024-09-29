import Header from "../components/Header";
import WorksListComponent from "../components/WorksListComponent";

const WorksPage = () => {
  return (
    <>
      <header className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </header>

      <section className="pt-[4.75rem] lg:pt-[6rem] flex justify-center max-w-full">
        <WorksListComponent />
      </section>
    </>
  );
};

export default WorksPage;
