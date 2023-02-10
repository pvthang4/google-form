import styled from "styled-components";

const ShortQuestion = () => {
  return <OptionInput>Short answer text</OptionInput>;
};

const OptionInput = styled.p`
  margin: 16px 0 0 0;
  padding: 0 0 8px 0;
  color: #3c3b47;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  border-bottom: 1px dashed #3c3b47;
  width: 40%;
`;

export default ShortQuestion;
