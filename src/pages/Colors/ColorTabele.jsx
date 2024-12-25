import React, { useEffect, useState } from "react";
import PaginatedTable from "../../componenet/paginatedTable";
import Actions from "./Action";
import { deleteColorService, getColorService } from "../../services/Color";
import AddColor from "./AddColor";
import { Alert, Confirm } from "../../assets/utils/alert";
const ColorTabele = () => {
  const [data, setData] = useState([]);
  const [editcolor, seteditcolor] = useState(null);
  const [loading, setloading] = useState(false);
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد رنگ" },
  ];
  const additionField = [
    {
      title: "رنگ",
      element: (rowData) => (
        <div
          className="w-100 h-100 d-block"
          style={{ background: rowData.code, color: rowData.code }}
        >
          ...
        </div>
      ),
    },
    {
      title: " عملیات ",
      element: (rowData) => <Actions rowData={rowData} seteditcolor={seteditcolor} handleDeleteColor={handleDeleteColor}/>,
    },
  ];
  const Searchparams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را مشخص کنید ",
    searchFields: "title",
  };
  const handelgetColors = async () => {
    setloading(true);
    const res = await getColorService();
    res && setloading(false);
    if (res.status == 200) {
      setData(res.data.data);
    }
  };
  const handleDeleteColor = async (color) => {
    if (await Confirm("حذف برند",`آیا از حذف ${color.title} اطمینان دارید؟`)) {
      const res = await deleteColorService(color.id);
      if (res.status === 200) {
        Alert( "success", res.data.message,"انجام شد");
        setData((lastData) => lastData.filter((d) => d.id != color.id));
      }
    }
  };
  useEffect(() => {
    handelgetColors();
  }, [editcolor]);
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
        <AddColor editcolor={editcolor} setData={setData} seteditcolor={seteditcolor}/>
      </PaginatedTable>
    </>
  );
};

export default ColorTabele;