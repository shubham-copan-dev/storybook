import React, { useState } from "react";
import CustomDropdown from "../stories/Dropdown";

const Home = () => {

  const [selectedList, setViewList] = useState("selected default list");
  const setSelectedList = (value) => {
    setViewList(value);
    console.log(value);
  };
  const lists = [
    "list one",
    "list two",
    "list three",
    "list four",
    "list five",
  ];

  return (
    <div>
      <CustomDropdown
        setSelectedList={setSelectedList}
        selectedList={selectedList}
        lists={lists}
        showCheck={true}
      />
    </div>
  );
};

export default Home;
