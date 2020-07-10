import React from "react";
import MainMenu from "../mainMenu/mainMenu";

const MainLayout = ({ children }) => <div>
    <MainMenu/>
    {children}
    </div>;

export default MainLayout;
