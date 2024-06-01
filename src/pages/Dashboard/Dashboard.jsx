import React, { useEffect } from "react";
import  Chart  from "chart.js/auto";
import { setDashbordChart } from "../../assets/utils/dashbordChart";
import Card from "./Card";
const Dashboard = () => {
  useEffect(() => {
    // const labels = [
    //     "فروردین",
    //     "اردیبهشت",
    //     "خرداد",
    //     "تیر",
    //     "مرداد",
    //     "شهریور",
    //     "مهر",
    //     "آبان",
    //     "آذر",
    //     "دی",
    //     "بهمن",
    //     "اسفند",
    //   ];
  
    //   const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
    //   setDashbordChart(labels , datapoints)
  }, []);
  return (
    <section id="content_section" className="bg-light py-2 px-3">
      {/* <!-- #region(collapsed) dashboard section start --> */}
      <div id="dashboard_section" className="dashboard_section main_section">
        <div className="row">
            <Card
            currentValue={7}
            title="سبد خرید امروز"
            dest="سبد های خرید مانده امروز"
            icone="fas fa-shopping-basket"
            lastMontValue={13}
            lastweekValue={18} 
            />
            <Card
            currentValue={5}
            title="سفارشات مانده امروز "
            dest="سفارشات معلق و فاقد پرداختی"
            icone="fas fa-dolly"
            lastMontValue={9}
            lastweekValue={16} 
            />
            <Card
            currentValue={45}
            title="سفارشات امروز"
            dest="سفارشات کامل و دارای پرداختی "
            icone="fas fa-shopping-basket"
            lastMontValue={263}
            lastweekValue={1038} 
            />
            <Card
            currentValue={1500000}
            title=" ارامد امروز"
            dest="جمع مبالغ پرداختی (تومان)"
            icone="fas fa-shopping-basket"
            lastMontValue={6380000}
            lastweekValue={22480000} 
            />
{/* 
          <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
            <div className="card text-dark bg-info mb-3 dashboard_card">
              <div className="card-body row">
                <div className="col-9">
                  <h4>1,500,000</h4>
                  <h6 className="card-title text_truncate"> </h6>
                  <small className="card-title text_truncate">
                    جمع مبالغ پرداختی (تومان)
                  </small>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <i className="fas fa-money-check-alt card_icon"></i>
                </div>
              </div>
            </div>
            <div className="card text-dark bg-info mb-3 dashboard_card d-flex flex-row">
              <div className="card-body py-1 row">
                <small className="m-0 d-block text_truncate">
                  {" "}
                  <b>6,380,000</b> در هفته گذشته{" "}
                </small>
                <small className="m-0 d-block text_truncate">
                  {" "}
                  <b>22,480,000</b> در ماه گذشته{" "}
                </small>
              </div>
            </div>
          </div>*/}
        </div> 
        <div className="row">
          <div className="col-12 col-lg-6">
            <p className="text-center mt-3 text-dark">محصولات رو به اتمام</p>

            <table className="table table-responsive text-center table-hover table-bordered no_shadow_back_table font_08">
              <thead className="table-secondary">
                <tr>
                  <th>#</th>
                  <th>دسته</th>
                  <th>عنوان</th>
                  <th>وضعیت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>دسته شماره فلان</td>
                  <td>محصول فلان</td>
                  <td>پایان یافته</td>
                  <td>
                    <i
                      className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                      title="نادیده گرفتن"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>دسته شماره فلان</td>
                  <td>محصول فلان</td>
                  <td>رو به اتمام - 4</td>
                  <td>
                    <i
                      className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                      title="نادیده گرفتن"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>دسته شماره فلان</td>
                  <td>محصول فلان</td>
                  <td>پایان یافته</td>
                  <td>
                    <i
                      className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                      title="نادیده گرفتن"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>دسته شماره فلان</td>
                  <td>محصول فلان</td>
                  <td>پایان یافته</td>
                  <td>
                    <i
                      className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                      title="نادیده گرفتن"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>دسته شماره فلان</td>
                  <td>محصول فلان</td>
                  <td>رو به اتمام - 2</td>
                  <td>
                    <i
                      className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                      title="نادیده گرفتن"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-12 col-lg-6">
            <canvas id="myChart" height="195"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
