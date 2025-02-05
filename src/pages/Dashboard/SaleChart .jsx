import React, { useEffect, useState } from 'react';
import { getThisYearOrdersService } from '../../services/Order';
import { destroyChart, setDashboardChart } from "../../assets/utils/dashbordChart";
import moment from "moment-jalaali";
import { object } from 'yup';
import SpinnerLoad from '../../componenet/SpinnerLoad';

const labels = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const SaleChart = () => {
  const [loading, setLoading] = useState(false)
  const handleGetChartInfo = async ()=>{
    setLoading(true)
    const res = await getThisYearOrdersService()
    setLoading(false)
    if (res.status === 200) {

      const monthsOrdersArr = []
      const now = moment()
      let  thisMonth = now.moment();
      for (let i = 0; i < 12; i++) {
        if(thisMonth == -1) thisMonth = 11
        monthsOrdersArr.push({month:thisMonth, amount: 0})
        thisMonth --
      }

      const orders = res.data.data
      for (const order of orders) {
        const moment = moment(order.pay_at)
        const monthIndex = moment.moment()
        const index = monthsOrdersArr.findIndex(o=>o.month == monthIndex)
        monthsOrdersArr[index].amount = monthsOrdersArr[index].amount + parseInt(order.pay_amount)
      }
      
      monthsOrdersArr.reverse()
      setDashboardChart(monthsOrdersArr.map(o=>labels[o.month]), monthsOrdersArr.map(o=>o.amount/1000000));
    }
  }
    useEffect(() => {
      handleGetChartInfo();
    }, []); 
    return (
      <>
          {loading && <SpinnerLoad colorClass={"text-primary"}/>}
          <div className={`col-12 col-lg-6 ${loading && 'd-none'}`}>
            <canvas id="myChart" height="195"></canvas> 
          </div>
      </>
    );
}

export default SaleChart;