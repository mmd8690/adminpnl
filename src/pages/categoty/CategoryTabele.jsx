import React, { useEffect, useState } from "react";
import PaginatedTable from "../../componenet/paginatedTable";
import AddCategory from "./AddCategory";
import { getCategoryService } from "../../services/category";
import { Alert } from "../../assets/utils/alert";
import ShowInMenu from "./tableaddition/ShowInMenu";
import Actions from "./tableaddition/Actions";
const CategoryTabele = () => {
  const [data, setData] = useState([]);
  const handelGetCategoris = async () => {
    try {
      const res = await getCategoryService();
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        Alert("error", " مشکلی از سمت سرور رخ داده ", " مشکل ");
      }
    } catch (error) {
      Alert("error", " مشکلی از سمت سرور رخ داده ", " مشکل ");
    }
  };
  useEffect(() => {
    handelGetCategoris();
  }, []);
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "show_in_menu", title: " نمایش در منو" },
    { field: "parent_id", title: " والد " },
    { field: "created_at", title: "تاریخ " },
  ];

  const additionField = [
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
    <PaginatedTable
      data={data}
      dataInfo={dataInfo}
      additionField={additionField}
      Searchparams={Searchparams}
      numofPage={4}
    >
      <AddCategory />
    </PaginatedTable>
  );
};

export default CategoryTabele;
