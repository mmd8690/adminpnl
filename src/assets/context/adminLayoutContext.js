import { createContext, useState } from "react";

export const AdminContext=createContext({
    showSidebar:false,
    setShowsidebar:()=>{}
});
const AdminContextContiner=({children})=>{
    const [showSidebar,setShowsidebar]=useState(false)
    return(
    <AdminContext.Provider value={{
        showSidebar,
        setShowsidebar
    }}>
        {children}
    </AdminContext.Provider>   
    )
}
export default AdminContextContiner;