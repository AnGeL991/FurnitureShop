import React from "react";
import Header from "../../common/headerTitle/header";
import TableData from '../../features/tableData/tableDataContainer';

const Order =()=>{

    return (
      <section className="page">
        <Header
          fontSize="34px"
          textAlign="left"
          fontWeight="300"
          margin="20px 140px "
        >
          Koszyk
        </Header>
        <TableData/>
      </section>
    );
  
}

export default Order;
