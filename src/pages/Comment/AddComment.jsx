import React from "react";
import ModalsContiner from "../../componenet/ModalsContiner";

const AddComment = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_comment_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContiner
        fullScreen={false}
        id={"add_comment_modal"}
        title={"افزودن نظر برای محصول"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="input-group my-3 dir-ltr" >
                <textarea rows="5" className="form-control"></textarea>
                <span className="input-group-text w_8rem justify-content-center">
                  متن نظر
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-2 dir-ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="قسمتی از نام محصول مورد نظر را وارد کنید"
                  list="productList"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  برای
                </span>
                <datalist id="productList">
                  <option value="محصول شماره 1" />
                  <option value="محصول شماره 2" />
                  <option value="محصول شماره 3" />
                </datalist>
              </div>
            </div>
            <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
              <button className="btn btn-primary ">ذخیره</button>
            </div>
          </div>
        </div>
      </ModalsContiner>
    </>
  );
};

export default AddComment;
