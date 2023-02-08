import styled from "styled-components";

const DropdownWrapper = styled.div`
  height: 47px;
  padding: 8px;
  border: 1px solid #dadce0;
  margin-left: 35px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 32px;
  color: #202124;
  width: 180px;
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
  & > span {
    margin-left: 10px;
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
  width: 50px;
  height: 24px;
  margin: 0 16px 0 12px;
  padding: 3px 3px 3px 8.5px;
`;
const InputStyled = styled.input`
  display: none;
`;
const SliderStyled = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dddddd;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  ${InputStyled}:focus+& {
    box-shadow: 0 0 1px #efb850;
  }
  ${InputStyled}:checked+&:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  ${InputStyled}:checked+& {
    background-color: #efb850;
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
};
