import React from "react";
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
        <div>
          <h2>Table 1</h2>
          {getOrdersForTable("Table 1").length === 0 ? (
            <p>No orders to display</p>
          ) : (
            <ul>
              {getOrdersForTable("Table 1").map((order) => (
                <li key={order.id}>
                  {order.price} - {order.dishName} - {order.table}{" "}
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => clearList(order.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>Table 2</h2>
          {getOrdersForTable("Table 2").length === 0 ? (
            <p>No orders to display</p>
          ) : (
            <ul>
              {getOrdersForTable("Table 2").map((order) => (
                <li key={order.id}>
                  {order.price} - {order.dishName} - {order.table}{" "}
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => clearList(order.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>Table 3</h2>
          {getOrdersForTable("Table 3").length === 0 ? (
            <p>No orders to display</p>
          ) : (
            <ul>
              {getOrdersForTable("Table 3").map((order) => (
                <li key={order.id}>
                  {order.price} - {order.dishName} - {order.table}{" "}
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => clearList(order.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Output;
