import React from "react";

const ListItem = ({ title, author }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
    </tr>
  );
};

export default ListItem;
