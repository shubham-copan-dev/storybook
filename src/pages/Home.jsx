import React, { useState } from "react";
import CustomDropdown from "../stories/Dropdown";

const Home = () => {

  const [selectedList, setViewList] = useState("selected default list");
  const setSelectedList = (event,value) => {
    setViewList(value.name);
    console.log(event,value);
  };
  // const parent = {
  //   lists : [
  //     {name:"list one",icontype:"$",id:1},
  //     {name:"list two",id:2,rightIcon:"*"},
  //     {name:"list three",icontype:"$",id:3},
  //    { name:"list four",id:4},
  //    { name:"list five",icontype:"$",id:5},
  //   ],

  // }
  const parent = {
    lists : [
      {name:"list one"},
      {name:"list two"},
      {name:"list three"},
     { name:"list four"},
     { name:"list five"},
    ],

  }

  console.log(parent?.lists?.map(item=> ({ name: item?.name, id: item?.id })),"lll");

  return (
    <div>
      <CustomDropdown
        setSelectedList={setSelectedList}
        selectedList={selectedList}
        lists={parent?.lists}
        // leftIcon={parent?.lists?.map(item=>({icon: item?.icontype,  id:item?.id}))}
        isMultiDropdown={true}
      />
    </div>
  );
};

export default Home;
