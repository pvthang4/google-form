import styled from "styled-components";
import {
  handleCoppyQuestion,
  handleRemoveQuestion,
  handleSwapQuestion,
} from "../../../helpers/question.helper";
import ToggleButton from "../../Common/ToggleButton";
import iconSwap from "../../../../assets/Icons/Icon_swap.svg";
import iconCoppy from "../../../../assets/Icons/Icon_coppy.svg";
import iconDelete from "../../../../assets/Icons/Icon_delete.svg";

interface QuestionFooterProps {
  question?: any;
  questions?: any;
  questionArrayHelpers?: any;
  questionIndex?: number;
  sectionIndex?: number;
}
const QuestionFooter = ({
  question = {},
  questions = [],
  questionArrayHelpers,
  questionIndex = 0,
  sectionIndex = 0,
}: QuestionFooterProps) => {
  const requiredFormikName: string = `items.${sectionIndex}.questionGroupItem.questions.${questionIndex}.required`;
  const checkQuestion = questions[questionIndex + 1];
  const endQuestion: boolean = !!checkQuestion;
  return (
    <Footer>
      {endQuestion ? (
        <IconSwap
          src={iconSwap}
          onClick={() =>
            handleSwapQuestion(questions, questionArrayHelpers, questionIndex)
          }
          type="image"
          alt={""}
          height="24px"
          width="24px"
        />
      ) : null}

      <IconCoppy
        src={iconCoppy}
        onClick={() =>
          handleCoppyQuestion(question, questionArrayHelpers, questionIndex)
        }
        type="image"
        alt={""}
        height="24px"
        width="24px"
      />
      <IconRemove
        src={iconDelete}
        onClick={() =>
          handleRemoveQuestion(questionIndex, questionArrayHelpers)
        }
        type="image"
        alt={""}
        height="24px"
        width="24px"
      />
      <Line />
      <Text>必須</Text>
      <ToggleButtonStyle>
        <ToggleButton name={requiredFormikName} status={question?.required} />
      </ToggleButtonStyle>
    </Footer>
  );
};

const Footer = styled.div`
  border-top: 1px solid #e0e0e0;
  margin-top: 40px;
  height: 53px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const IconSwap = styled.input`
  margin-right: 16px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 37px;
    height: 0px;
    left: 10;
    top: 0;
    border: 1px solid #e0e0e0;
    transform: rotate(90deg);
  }
`;

const IconCoppy = styled.input`
  margin-right: 16px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 37px;
    height: 0px;
    left: 10;
    top: 0;
    border: 1px solid #e0e0e0;
    transform: rotate(90deg);
  }
`;

const IconRemove = styled.input`
  margin-right: 23px;
`;

const Line = styled.div`
  height: 30px !important;
  height: 0px;
  border: 1px solid #e0e0e0;
  margin-right: 16px;
`;

const Text = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-right: 10px;
  width: 44px;
  height: 20px;
`;

const ToggleButtonStyle = styled.div`
  padding: 21px 0 20px 0;
  height: 100%;
`;

export default QuestionFooter;
