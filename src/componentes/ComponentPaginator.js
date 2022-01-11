import Pagination from "@mui/material/Pagination";
import { Fragment, useEffect, useState } from "react";

export const ComponentPaginator = ({
  components,
  RenderComponent,
  perPage = 3
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(components.length / perPage);

  /*
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "1px" });
  }, [currentPage]);
  */

  const getPageComponente = () => {
    const startIndex = currentPage * perPage - perPage;
    const endIndex = startIndex + perPage;
    return components.slice(startIndex, endIndex);
  };
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <Fragment>
      {getPageComponente().map((element) => (
        <RenderComponent key={element.id} {...element} />
      ))}
      <Pagination
        className="paginator  animate__animated animate__fadeIn"
        onChange={handleChange}
        count={pageCount}
      />
      <style jsx>{`
        .paginator {
          justify-content: center;
          display: flex;
          padding: 20px;
        }
      `}</style>
    </Fragment>
  );
};
