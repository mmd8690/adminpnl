import React, { useEffect, useState } from "react";
import PaginatedTable from "../../componenet/paginatedTable";
import AddCategory from "./AddCategory";
import { getCategoryService } from "../../services/category";
import { Alert } from "../../assets/utils/alert";
import ShowInMenu from "./tableaddition/ShowInMenu";
import Actions from "./tableaddition/Actions";
import jMOment from "moment-jalaali"
import { Outlet, useLocation, useParams } from "react-router-dom";
import { ConvertdatatoJalali } from "../../assets/utils/ConvertData";
const CategoryTabele = () => {
  const param = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [forceRender , setforceRender] = useState(0)
  const handelGetCategoris = async () => {
    try {
      const res = await getCategoryService(param.categorieId);
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        Alert("error", " مشکلی از سمت سرور رخ داده ", " مشکل ");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => { 
    handelGetCategoris();
  }, [param , forceRender]);
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "show_in_menu", title: " نمایش در منو" },
    { field: "parent_id", title: " والد " },
  ];
  const additionField = [
    {
      title: " تاریخ ",
      element: (rowData) => ConvertdatatoJalali(rowData.created_at) ,
    },
    {
      title: "نمایش در منو",
      element: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      element: (rowData) => <Actions rowData={rowData} />,
    },
  ];
  const Searchparams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را مشخص کنید ",
    searchFields: "title",
  };
  return (
    <>
     <Outlet/>
      {data.length ?
      <PaginatedTable
      data={data}
      dataInfo={dataInfo}
      additionField={additionField}
      Searchparams={Searchparams}
      numofPage={4}
    >
      <AddCategory  setforceRender={setforceRender}/>
    </PaginatedTable>
    :<h5 className="text-center my-5 text-danger"> دسته بندی یافت نشد </h5>
      }
    </>
  );
};

export default CategoryTabele;
