import React, { useEffect, useState } from "react";
import PaginatedTable from "../../componenet/paginatedTable";
import { deleteBrandService, getAllBrandsService } from "../../services/Brand";
import Actions from "./BrdAction";
import { apiPah } from "../../services/httpsService";
import AddBrands from "./AddBrand";
import { Alert , Confirm } from "../../assets/utils/alert";

const BrandTabele = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editBrand, seteditBrand] = useState(null);
  const [forceRender , setforceRender] = useState(0)
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },
  ];

  const additionField = [
    {
      title: "لوگو",
      element: (rowData) =>
        rowData.logo ? (
          <img src={apiPah + "/" + rowData.logo} width="40" />
        ) : null,
    },
    {
      title: "عملیات",
      element: (rowData) => (
        <Actions
          rowData={rowData}
          setBrandToEdit={seteditBrand}
          handelDeleteBrand={handelDeleteBrand}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchFields: "original_name",
  };

  const handleGetAllBrands = async () => {
    setLoading(true);
    const res = await getAllBrandsService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };
  const handelDeleteBrand = async (brand) => {
    if (
      await Confirm(
        "حذف دسته بندی",
        `آیا از حذف ${brand.title} اطمینان دارید؟`
      )
    ) {
      const res = await deleteBrandService(brand.id);
      if (res.status == 200) {
        Alert("success", res.data.message, "انجام شد");
        setData((lastdata=>lastdata.filter((d)=>d.id !=brand.id)))
      }
    }
  };
  useEffect(() => {
    handleGetAllBrands();
  }, [forceRender]);

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        Searchparams={searchParams}
        numOfPAge={8}
        loading={loading}
      >
        <AddBrands setData={setData} editBrand={editBrand} seteditBrand={seteditBrand} />
      </PaginatedTable>
    </>
  );
};

export default BrandTabele;

