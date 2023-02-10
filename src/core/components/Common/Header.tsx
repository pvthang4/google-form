import imageLogo from "../../../assets/Images/Image_logo.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderInfor>
          <HeaderUserName>ラクビル　太郎　様</HeaderUserName>
        </HeaderInfor>

        <HeaderLogo>
          <input type="image" src={imageLogo} alt="picture" />
          <HeaderTitle>ラクビル東京ビル　利用状況に係るアンケート</HeaderTitle>
        </HeaderLogo>

        <HeaderButton>
          <HeaderSaveButton>
            <HeaderSaveButtonTitle>下書きとして保存</HeaderSaveButtonTitle>
          </HeaderSaveButton>
          <HeaderSendButton>
            <HeaderSendButtonTitle>送信</HeaderSendButtonTitle>
          </HeaderSendButton>
        </HeaderButton>

        <HeaderTab>
          <HeaderTab1>質問</HeaderTab1>
          <HeaderSpace></HeaderSpace>
          <HeaderTab2>回答</HeaderTab2>
        </HeaderTab>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
`;

const HeaderContainer = styled.div`
  // height: 140px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  position: relative;
  // @media (max-width: 425px) {
  //   margin-left: 0;
  //   margin-top: 16px;
  // }
`;

const HeaderInfor = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 6px;
`;

const HeaderUserName = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  width: 275px;
`;

const HeaderLogo = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.span`
  margin-left: 21px;
  height: 70px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #3c3b47;
`;

const HeaderButton = styled.div`
  display: flex;
  width: 100%;
  padding: 0 222px;
  justify-content: end;
  align-items: center;
`;

const HeaderSaveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  gap: 10px;
  width: 224px;
  height: 24px;
  background: #e0e0e0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 0;
  margin-right: 35px;
  cursor: pointer;
`;

const HeaderSaveButtonTitle = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const HeaderSendButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 30px;
  gap: 10px;
  width: 96px;
  height: 24px;
  background: #00a0e9;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: 0;
  cursor: pointer;
`;

const HeaderSendButtonTitle = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const HeaderTab = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 19px;
`;

const HeaderTab1 = styled.span`
  display: flex;
  padding: 0px;
  height: 24px;
  width: 31px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: inset 0px -2px 0px #00a0e9;
  cursor: pointer;
`;

const HeaderSpace = styled.span`
  width: 51px;
`;

const HeaderTab2 = styled.span`
  display: flex;
  padding: 0px;
  gap: 10px;
  height: 24px;
  background: rgba(255, 255, 255, 0.01);
  cursor: pointer;
`;

export default Header;
