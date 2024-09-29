import Header from "../components/Header";
import WorkDetail from "../components/WorkDetail";
import WorkProcess from "../components/WorkProcess";

const WorkDetailPage = () => {
  return (
    <>
      <header className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </header>

      <aside className="pt-[4.75rem] p-20 lg:pt-[5.25rem] sticky top-20">
        <WorkDetail />
      </aside>

      <section className="absolute top-20 right-0 p-20 mt-2">
        <WorkProcess />
      </section>
    </>
  );
};

export default WorkDetailPage;
