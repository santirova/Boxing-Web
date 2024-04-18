import Breadcrumb from "../utils/Breadcrumb";
import TitleComponent from "../components/TitleComponent";
import data from "../json/titles.json";

const Trainning = () => {
  return (
    <>
      <section className="title__section">
        <TitleComponent
          title={data.training.title}
          description={data.training.description}
        />
        <div className="subtitle__section">
          <Breadcrumb />
        </div>
      </section>
    </>
  );
};

export default Trainning;
