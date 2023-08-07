import React from "react";

const TableOrders = (props) => {
  return (
    <div>
      <h2>{props.table}</h2>
      {props.orders.length === 0 ? (
        <p>No orders to display</p>
      ) : (
        <ul>
          {props.orders.map((order) => (
            <li key={order.id}>
              {order.price} - {order.dishName} - {order.table}{" "}
              <button
                style={{ cursor: "pointer" }}
                onClick={() => props.clearList(order.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TableOrders;
