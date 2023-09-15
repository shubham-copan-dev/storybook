import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Form from "react-bootstrap/Form";

const CustomDropdown = ({ selectedList = "", lists, ...props }) => {
  const getSelectedList = (value) => {
    console.log(value);
    return value
  };
  const setSelectedList = (value) => {
    return value
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
                setSelectedList(value);
              }}
            >
              {props.showCheck && (
                <input
                  type="checkbox"
                  onClick={(event) => {
                    event.stopPropagation();
                    getSelectedList(value);
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
