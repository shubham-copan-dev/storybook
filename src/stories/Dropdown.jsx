import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Form from "react-bootstrap/Form";

const CustomDropdown = ({ selectedList = "Selected Default List", lists=[],setSelectedList, ...props }) => {
  const {isMultiDropdown=false,showButton=true}=props

  const getSelectedList = (event,value) => {
    setSelectedList(event,value)
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedList}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {lists.map((value, index) => {
          const {icontype="",rightIcon="",name=""} = value
          return (
            <Dropdown.Item
              key={index}
              style={{ display: "flex", gap: "1rem" }}
              onClick={(event) => {
                getSelectedList(event,value);
                // setSelectedList(value);
              }}
            >
              {isMultiDropdown && (
                <input
                  type="checkbox"
                  onClick={(event) => {
                    event.stopPropagation();
                    // getSelectedList(value); //uncomment this function if required list value on click
                  }}
                />
              )}
              {rightIcon && <span>{value?.rightIcon}</span>}
              <span>{name}</span>
              {
                showButton && <button onClick={(event) => {
                  event.stopPropagation();
                  // getSelectedList(value); //uncomment this function if required list value on click
                }}>Default</button>
              }
              {icontype && <span>{value?.icontype}</span>}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
