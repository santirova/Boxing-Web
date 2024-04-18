import Breadcrumb from "../utils/Breadcrumb";
import TitleComponent from "../components/TitleComponent";
import data from "../json/titles.json";

const Contact = () => {
  return (
    <>
      <section className="title__section">
        <TitleComponent
          title={data.contact.title}
          description={data.contact.description}
        />
        <div className="subtitle__section">
          <Breadcrumb />
        </div>
      </section>
    </>
  );
};

export default Contact;
