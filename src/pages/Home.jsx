import React, {useState} from "react";
import CustomDropdown from "../stories/Dropdown";

const Home = () => {
  const [selectedList , setSelectedListView] = useState('select list');
  const setSelectedList = () => {
    setSelectedListView(selectedList);
    console.log(selectedList);
  }
  const lists = [
    "swrfwsrf",
    "swhgrvjh",
    "skhrvbjhfv",
    "jnshcbvjsh",
    "qoiweoqe",
  ];
  return (
    <div>
      <CustomDropdown setSelectedList={setSelectedList} selectedList={selectedList} lists={lists} showCheck={true} />
    </div>
  );
};

export default Home;
