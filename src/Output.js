import React from "react";
import TableOrders from "./TableOrders";

const Output = (props) => {

  // get filter lists (by table) From array
  const getOrdersForTable = (table) => {
    return props.data.filter((order) => order.table === table);
  };

  // For Delete the list
  const clearList = (id) => {
    const updateOrders = props.data.filter((order) => order.id !== id);
    props.set(updateOrders);
  };

  return (
    <>
      <div className="output">
        <h1>Orders</h1>
        <TableOrders table="Table 1" orders={getOrdersForTable("Table 1")} clearList={clearList}/>
        <TableOrders table="Table 2" orders={getOrdersForTable("Table 2")} clearList={clearList} />
        <TableOrders table="Table 3" orders={getOrdersForTable("Table 3")} clearList={clearList} />
      </div> 
    </>
  );
};

export default Output;
