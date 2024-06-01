import Swal from "sweetalert2"

export const Alert=(icon , text , title)=>{
Swal.fire({
    title : title,
    icon: icon , 
    text : text ,
    confirmButtonText : "متوجه شدم"
})
}