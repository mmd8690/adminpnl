import React from 'react';
import { useEffect } from 'react';

const Action = (gallery , handleDeleteProductImage) => {
    useEffect(() => {
        
      console.log(gallery);
    }, []);
    return (
        <div>
          <i className="fas fa-clipboard-check text-success pointer hoverable_text mx-2 font_1_2" title="انتخاب به عنوان اصلی"
          onClick={()=>{
            handleDeleteProductImage(gallery.id)
          }}
          > </i>

        </div>
    );
}

export default Action;
