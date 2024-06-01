import React, { useEffect, useState } from "react";
let numofPage = 2;
const PaginatedTable = ({ data, dataInfo, addiconeField , children , Searchparams , numofPage}) => {
  const [initData, setinitData] = useState(data);
  const [tabaleData, setTabaleData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [page, setPage] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [searchChar , setsearchChar] = useState("");
  useEffect(()=>{
    setinitData(data.filter(d=>d[Searchparams.searchFields].includes(searchChar)))
    setcurrentPage(1)
  },[searchChar])
  useEffect(() => {
    let pCount =Math.ceil( initData.length / numofPage);
    setpageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPage(pArr);
  }, [initData]);
  useEffect(() => {
    let start = currentPage * numofPage - numofPage;
    let end = currentPage * numofPage;
    setTabaleData(initData.slice(start, end));
  }, [currentPage , initData]);
  return (
    <>
          <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir-ltr">
            <input
              type="text"
              className="form-control"
              placeholder={Searchparams.placeholder}
              onChange={(e)=>setsearchChar(e.target.value)}            />
            <span className="input-group-text">{Searchparams.title}</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}
            {addiconeField ? <th>{addiconeField.title}</th> : null}
          </tr>
        </thead>
        <tbody>
          {tabaleData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id}>{d[i.field]}</td>
              ))}
              {addiconeField ? <th>{addiconeField.element(d.id)}</th> : null}
            </tr>
          ))}
        </tbody>
      </table>
      {
        page.length >1 ? (
               <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <span
              className={`page-link  pointer${
                currentPage == 1 ? "disabel" : ""
              }`}
              href="#"
              aria-label="Previous"
              onClick={() => setcurrentPage(currentPage - 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
          {page.map((page) => (
            <li key={page} className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == page ? "alert-success" : ""
                }`}
                href="#"
                onClick={() => setcurrentPage(page)}
              >
                {page}
              </span>
            </li>
          ))}

          <li className="page-item">
            <a
              className={`page-link   pointer${
                currentPage == pageCount ? "disabel" : ""
              }`}
              href="#"
              aria-label="Next"
              onClick={() => setcurrentPage(currentPage + 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        </ul>
      </nav> 
        ):null
      }

    </>
  );
};

export default PaginatedTable;
