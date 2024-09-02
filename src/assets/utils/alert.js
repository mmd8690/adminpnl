import Swal from "sweetalert2"

export const Alert=(icon , text , title)=>{
Swal.fire({
    title : title,
    icon: icon , 
    text : text ,
    confirmButtonText : "متوجه شدم"
})
}
export const Confirm = (title, text)=>{
  return Swal.fire({
      title,
      text,
      icon:"warning",
      confirmButtonText: ["بله"],
      dangerMode: true
  })
}