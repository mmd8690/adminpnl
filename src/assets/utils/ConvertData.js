import jMoment from "moment-jalaali"
export const ConvertdatatoJalali=(data)=>{
   return jMoment(data) . format("jYYYY/jM/jD")  
}