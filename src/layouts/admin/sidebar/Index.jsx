import React, { useCallback, useContext } from 'react';
import { AdminContext } from '../../../assets/context/adminLayoutContext';
import Avatar from './Avatar';
import SidebarGrouptitle from './SidebarGrouptitle';
import Sidebaritem from './SidebarItem';

const Index = () => {
  const {showSidebar}=useContext(AdminContext)
    return (
        <section id="sidebar_section">
        <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? "expanded" : null}`}>
          <div className="p-0 m-0">
           <Avatar name="محمد رضاخواه" imagepath="/assets/images/avatar/user4.jpg"/>
           <Sidebaritem targetPath={"/"} title="داشبورد" icone="fas fa-tachometer-alt"/>
            {/* <!-- =================================== --> */}
            <SidebarGrouptitle title="فروشگاه"/>
            <Sidebaritem targetPath={"/categories"} title="مدیریت گروه محصول" icone="fas fa-stream" />
            <Sidebaritem targetPath={"/Product"} title="مدیریت  محصول" icone="fas fa-stream"/>
            <Sidebaritem targetPath={"/brands"} title=" مدیریت برند ها " icone="fas fa-copyright"/>
            <Sidebaritem targetPath={"/gurantis"} title=" مدیریت گارانتی ها " icone="fab fa-pagelines"/>
            <Sidebaritem targetPath={"/colors"} title=" مدیریت  رنگ ها " icone="fas fa-palette"/>
            <Sidebaritem targetPath={"/discounts"} title=" مدیریت تخفیف ها " icone="fas fa-percentage"/>
            {/* <!-- =================================== --> */}
            <SidebarGrouptitle title="سفارش و سبد"/>
            <Sidebaritem targetPath={"/carts"} title="مدیریت سبد ها" icone="fas fa-shopping-basket"/>
            <Sidebaritem targetPath={"/order-section"} title="مدیریت سفارشات" icone="fas fa-luggage-cart"/>
            <Sidebaritem targetPath={"/delivery"} title="مدیریت نحوه ارسال" icone="fas fa-truck-loading"/>
            {/* <!-- =================================== --> */}
            <SidebarGrouptitle title="کاربران و همکاران"/>
            <Sidebaritem targetPath={"/users"} title="مشاهده کاربران" icone="fas fa-users"/>
            <Sidebaritem targetPath={"/roles"} title="نقش ها" icone="fas fa-user-tag"/>
            <Sidebaritem targetPath={"/permissions"} title="مجوز ها" icone="fas fa-shield-alt"/>

            {/* <!-- =================================== --> */}
            <SidebarGrouptitle title="ارتباطات"/>
            <Sidebaritem targetPath={"/question"} title="سوال ها " icone="fas fa-question-circle"/>
            <Sidebaritem targetPath={"/comments"} title="نظرات " icone="fas fa-comment"/>
          </div>
        </div>
      </section>
    );
}

export default Index;
