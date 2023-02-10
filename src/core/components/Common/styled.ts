import { MdArrowDropDown } from "react-icons/md";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  display: flex;
  height: 47px;
  padding: 8px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 32px;
  color: #807e93;
  background-color: #ffffff;
  width: 232px;
  border: 1px solid #807e93;
  border-radius: 3px;
  position: relative;
  @media (max-width: 425px) {
    margin-left: 0;
    margin-top: 16px;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  z-index: 10;
  top: 46px;
  left: 0;
  min-width: 190px;
  width: 100%;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  & > div {
    padding: 8px;
  }
`;

const DropdownListItem: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${(props: any) => {
    if (props.isListOpen) {
      return props.isSelected ? "rgba(26,115,232,0.078)" : "white";
    } else {
      return "white";
    }
  }};
  &:hover {
    background-color: ${(props: any) => {
      if (props.isListOpen) {
        return props.isSelected ? "rgba(26,115,232,0.039)" : "#eeeeee";
      } else {
        return "white";
      }
    }};
  }
`;

const DropdownListItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  & > span {
    margin-left: 10px;
  }
  &:after {
    position: absolute;
    content: "";
    width: 200px;
    height: 45px;
    background: transparent;
  }
`;

const DropdownListHorizontalLine = styled.div`
  width: 100%;
  margin: 8px 0;
  padding: 0 !important;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

const LabelStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 24px;
`;

const InputStyled = styled.input`
  display: none;
`;

const MdArrowDropDownStyle = styled(MdArrowDropDown)`
  position: absolute;
  right: 0;
`;

const SliderStyled = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  width: 32px;
  height: 12px;
  background: #d9d9d9;
  border-radius: 16px;
  &:before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 2px 2px 0.5px rgba(0, 0, 0, 0.25);
    left: -3px;
    bottom: -4px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  ${InputStyled}:focus+& {
    box-shadow: 0 0 1px #0080c1;
  }
  ${InputStyled}:checked+&:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
  }
  ${InputStyled}:checked+& {
    background-color: #0080c1;
  }
`;

export {
  DropdownWrapper,
  DropdownList,
  DropdownListItem,
  DropdownListItemContent,
  DropdownListHorizontalLine,
  LabelStyled,
  InputStyled,
  SliderStyled,
  MdArrowDropDownStyle,
};
