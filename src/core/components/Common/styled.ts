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

export {
  DropdownWrapper,
  DropdownList,
  DropdownListItem,
  DropdownListItemContent,
  DropdownListHorizontalLine,
};
