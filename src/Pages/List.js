import React from "react";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";
const List = () => {
  return (
    <>
      <NavBar />
      <div className="list">
        <h1>Available topic</h1>
        <table className="list-table">
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {[
            { title: "Test", author: "test" },
            { title: "Test", author: "test" },
          ].map((topic, index) => (
            <ListItem
              key={`${index}_list_item`}
              title={topic.title}
              author={topic.author}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default List;
