import React from "react";
import MainMenu from "../mainMenu/mainMenu";
import Footer from '../footer/footer';

const MainLayout = ({ children }) => <div>
    <MainMenu/>
    {children}
    <Footer/>
    </div>;

export default MainLayout;
