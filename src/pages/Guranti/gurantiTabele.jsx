import React, { useEffect, useState } from "react";
import Actions from "./Action";
import { deleteGurantiService, getGuaranteesService } from "../../services/Guranti";
import PaginatedTable from "../../componenet/paginatedTable";
import AddGuranti from "./AddGuranti";
import { Alert, Confirm } from "../../assets/utils/alert";
const GurantiTabele = () => {
  const [data, setData] = useState([]);
  const [editGuranti, seteditGuranti] = useState(null);
  const [loading, setloading] = useState(false);
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "descriptions", title: "توضیحات" },
    { field: "length", title: "مدت گارانتی" },
    { field: "length_unit", title: "واحد" },
  ];
  const additionField = [
    {
      title: " تاریخ ",
      element: (rowData) => <Actions rowData={rowData} seteditguranti={seteditGuranti} handelDeleteGuranti={handelDeleteGuranti}/>,
    },
  ];
  const Searchparams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را مشخص کنید ",
    searchFields: "title",
  };
  const handelgetGurani=async ()=>{
    setloading(true)
    const res =await getGuaranteesService()
    res && setloading(false)
    if(res.status == 200) {
      setData(res.data.data)
      setloading(false)
    }
  }
  const handelDeleteGuranti=async(guranti)=>{
    if (
      await Confirm(
        "حذف دسته بندی",
        `آیا از حذف ${guranti.title} اطمینان دارید؟`
      )
    ) {
      const res = await deleteGurantiService(guranti.id);
      if (res.status == 200) {
        Alert("success", res.data.message, "انجام شد");
        setData((lastdata=>lastdata.filter((d)=>d.id !=guranti.id)))
      }
    }
  };
  useEffect(()=>{
    handelgetGurani()
  },[ editGuranti])
  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        Searchparams={Searchparams}
        numOfPAge={5}
        loading={loading}
      >
        <AddGuranti editGuranti={editGuranti} setData={setData} seteditGuranti={seteditGuranti}/>
      </PaginatedTable>
    </>
  );
};

export default GurantiTabele;
