import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "./Core";
import FormikControle from "../../componenet/form/FormikControle";
import { getCategoryService } from "../../services/Category";
import SubmitButton from "../../componenet/form/SumitButton";
import PrevpageButton from "../../componenet/PrevpageButton";
import SpinnerLoad from "../../componenet/SpinnerLoad";
import { getAllBrandsService } from "../../services/Brand";
import { getColorService } from "../../services/Color";
import { getGuaranteesService } from "../../services/Guranti";
import { useLocation } from "react-router-dom";
import AddBrands from "../Brand/AddBrand";
const AddProduct = () => {
  const [parentCategories, setparentCategories] = useState([]);
  const [mainCategories, setmainCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]); // used in editting
  const [selectedGuarantees, setSelectedGuarantees] = useState([]); // used in editting
  const [selectedCategories, setSelectedCategories]=useState([]); // used in editting
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [guarantees, setGuarantees] = useState([]);
  const [reInitialValues , setreInitialValues ] = useState(null)
  const location = useLocation()

  const productToEdite=location.state?.productToEdite

  const getAllParentCategories = async () => {
    const res = await getCategoryService();
    if (res.status === 200) {
      setparentCategories(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };
  const handelSetMainCategories = async (value) => {
    setmainCategories("waiting");
    if (value > 0) {
      const res = await getCategoryService(value);
      if (res.status == 200) {
        setmainCategories(
          res.data.data.map((d) => {
            return { id: d.id, value: d.title };
          })
        );
      }
    } else {
      setmainCategories([]);
    }
  };
  const getAllBrands = async () => {
    const res = await getAllBrandsService();
    if (res.status === 200) {
      setBrands(
        res.data.data.map((d) => {
          return { id: d.id, value: d.original_name };
        })
      );
    }
  };
  const getAllColors = async () => {
    const res = await getColorService();
    if (res.status === 200) {
      setColors(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };
  const getAllGuarantees = async () => {
    const res = await getGuaranteesService();
    if (res.status === 200) {
      setGuarantees(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };
  const setInitialSelectedValues = ()=>{
    if (productToEdite) {
      setSelectedCategories(productToEdite.categories.map(c=>{return {id:c.id, value:c.title}}))
      setSelectedColors(productToEdite.colors.map(c=>{return {id:c.id, value:c.title}}))
      setSelectedGuarantees(productToEdite.guarantees.map(c=>{return {id:c.id, value:c.title}}))
    }
  }
  useEffect(() => {
    getAllParentCategories();
    getAllBrands();
    getAllColors();
    getAllGuarantees();
    setInitialSelectedValues();
    for (const key in productToEdite) {
      if (productToEdite[key] === null) productToEdite[key] = ""
    }
    if(productToEdite){
      setreInitialValues({
        ...productToEdite,
        category_ids:productToEdite.categories.map(c=>c.id).join("-"),
        color_ids : productToEdite.colors.map(c=>c.id).join("-"),
        guarantee_ids: productToEdite.guarantees.map(c=>c.id).join("-"),
      });
    }else setreInitialValues(null)
  }, []);
  return (
    <Formik
      initialValues={reInitialValues ||initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions , productToEdite)}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <div className="container mb-5">
            <h4 className="text-center my-3">{productToEdite ? (
                <>
                  ویرایش محصول :  
                  <span className="text-primary">{productToEdite.title}</span> 
                </>
              ) : "افزودن محصول جدید"}</h4>
                <div className="text-left col-md-6 col-lg-8 m-auto my-3">
              </div>
            
                <PrevpageButton/>
              
              <div className="row justify-content-center">
                <FormikControle
                  className="col-md-6 col-lg-8"
                  control="select"
                  options={parentCategories}
                  name="parentCats"
                  label="دسته والد"
                  firstItem="دسته مورد نظر را انتخاب کنبد..."
                  handleOnchange={handelSetMainCategories}
                />

                {mainCategories === "waiting" ? (
                  <SpinnerLoad isSmall={true} colorClass="text-primary" />
                ) : null}
                <FormikControle
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={
                    typeof mainCategories == "object" ? mainCategories : []
                  }
                  name="category_ids"
                  label="دسته اصلی"
                  firstItem="دسته مورد نظر را انتخاب کنبد..."
                  resultType="string"
                  initialItems={selectedCategories}   
                />

                <FormikControle
                  label="عنوان *"
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  placeholder="فقط از حروف و اعداد استفاده کنید"
                />

                <FormikControle
                  label="قیمت *"
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="price"
                  placeholder="فقط از اعداد استفاده کنید(تومان)"
                />

                <FormikControle
                  label="وزن "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="weight"
                  placeholder="فقط از اعداد استفاده کنید(گِرم)"
                />

                <FormikControle
                  label="برند"
                  className="col-md-6 col-lg-8"
                  control="select"
                  options={brands}
                  name="brand_id"
                  firstItem="برند مورد نظر را انتخاب کنبد..."
                  />

                <FormikControle
                  label="رنگ"
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={colors}
                  name="color_ids"
                  firstItem="رنگ مورد نظر را انتخاب کنبد..."
                  resultType="string"
                  initialItems={selectedColors}
                />

                <FormikControle
                  label="گارانتی"
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={guarantees}
                  name="guarantee_ids"
                  firstItem="گارانتی مورد نظر را انتخاب کنبد..."
                  resultType="string"
                  initialItems={selectedGuarantees}
                />

                <FormikControle
                  label="توضیحات"
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="descriptions"
                  placeholder="فقط از حروف واعداد استفاده شود"
                />

                <FormikControle
                  label="توضیحات"
                  className="col-md-6 col-lg-8"
                  control="ckeditor"
                  name="descriptions"
                  placeholder="فقط از حروف واعداد استفاده شود"
                />

                <FormikControle
                  label="توضیحات کوتاه"
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="short_descriptions"
                  placeholder="فقط از حروف واعداد استفاده شود"
                />

                <FormikControle
                  label="توضیحات  سبد"
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="cart_descriptions"
                  placeholder="فقط از حروف واعداد استفاده شود"
                />


                <FormikControle
                  label="کلمات کلیدی "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="keywords"
                  placeholder="مثلا: تست1-تست2-تست3"
                />

                <FormikControle
                  label="موجودی "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="stock"
                  placeholder="فقط از اعداد استفاده کنید(عدد)"
                />

                <FormikControle
                  label="درصد تخفیف "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="discount"
                  placeholder="فقط از اعداد استفاده کنید(درصد)"
                />

                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <SubmitButton />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
