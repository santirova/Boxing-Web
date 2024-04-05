import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      <ol>
        <li className="link-home">
          <Link to="/">Inicio</Link>
        </li>
        <span>/</span>
        {pathnames.map((name, index) => (
          <li key={name}>
            {index === pathnames.length - 1 ? (
              name
            ) : (
              <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
                {name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
