import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Form from "react-bootstrap/Form";

const CustomDropdown = ({ selectedList = "Selected Default List", lists,setSelectedList, ...props }) => {
  const getSelectedList = (value) => {
    setSelectedList(value)
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedList}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {lists.map((value, index) => {
          return (
            <Dropdown.Item
              key={index}
              style={{ display: "flex", gap: "1rem" }}
              onClick={() => {
                getSelectedList(value);
                // setSelectedList(value);
              }}
            >
              {props.showCheck && (
                <input
                  type="checkbox"
                  onClick={(event) => {
                    event.stopPropagation();
                    // getSelectedList(value); //uncomment this function if required list value on click
                  }}
                />
              )}
              {value}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
