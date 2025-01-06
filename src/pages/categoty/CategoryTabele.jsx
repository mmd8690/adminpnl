import React, { useEffect, useState } from "react";
import PaginatedTable from "../../componenet/paginatedTable";
import AddCategory from "./AddCategory";
import { deleteCategoryService, getCategoryService } from "../../services/Category";
import { Alert, Confirm } from "../../assets/utils/alert";
import ShowInMenu from "./tableaddition/ShowInMenu";
import Actions from "./tableaddition/Actions";
import { Outlet, useParams } from "react-router-dom";
import { ConvertdatatoJalali } from "../../assets/utils/ConvertData";
const CategoryTabele = () => {
  const param = useParams();
  const [data, setData] = useState([]);
  const [forceRender, setforceRender] = useState(0);
  const [loading, setloading] = useState(false);
const handelDeleteCategory = async (rowData)=>{
  if (await Confirm('حذف دسته بندی', `آیا از حذف ${rowData.title} اطمینان دارید؟`)) {
 
   try {
     const res = await deleteCategoryService(rowData.id);
     if (res.status === 200) {
       Alert('success','انجام شد', res.data.message)
       setData(data.filter(d=>d.id != rowData.id))

      }
   } catch (error) {
     console.log(error); 

   }
  }
}

  const handelGetCategoris = async () => {
    setloading(true);
    try {
      const res = await getCategoryService(param.categorieId);
      setData(res.data.data);
      if (res.status === 200) {
      } else {
        Alert("error", " مشکلی از سمت سرور رخ داده ", " مشکل ");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    handelGetCategoris();
  }, [param, forceRender]);
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    // { field: "show_in_menu", title: " نمایش در منو" },
    { field: "parent_id", title: " والد " },
  ];
  const additionField = [
    {
      title: " تاریخ ",
      element: (rowData) => ConvertdatatoJalali(rowData.created_at),
    },
    {
      title: "نمایش در منو",
      element: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      element: (rowData) => <Actions rowData={rowData} handelDeleteCategory={handelDeleteCategory}/>,
    },
  ];
  const Searchparams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را مشخص کنید ",
    searchFields: "title",
  };
  return (
    <>
      <Outlet />

      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        Searchparams={Searchparams}
        numOfPAge={5}
        loading={loading}
      >
        <AddCategory setforceRender={setforceRender} />
      </PaginatedTable>
    </>
  );
};

export default CategoryTabele;