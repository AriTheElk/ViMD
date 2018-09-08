import styled from "styled-components";
import ReactDropdown from "react-dropdown";
// import "react-dropdown/style.css";

const Dropdown = styled(ReactDropdown)`
  position: relative;

  .Dropdown-control {
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 8px 32px 8px 10px;
    transition: all 200ms ease;
  }

  .Dropdown-arrow {
    border-color: #fff transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: " ";
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 22px;
    width: 0;
  }

  .is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .Dropdown-menu {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -3px;
    max-height: 500px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    z-index: 1000;
  }

  .Dropdown-option {
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: block;
    padding: 8px 10px;

    &::last-child {
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  }
`;

export default Dropdown;
