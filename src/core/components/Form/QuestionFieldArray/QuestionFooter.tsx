import {
  handleCoppyQuestion,
  handleRemoveQuestion,
} from "../../../helpers/question.helper";
import ToggleButton from "../../Common/ToggleButton";

interface QuestionFooterProps {
  question?: any;
  questionArrayHelpers?: any;
  questionIndex?: number;
  sectionIndex?: number;
}
const QuestionFooter = ({
  question = {},
  questionArrayHelpers,
  questionIndex = 0,
  sectionIndex = 0,
}: QuestionFooterProps) => {
  return (
    <div className="question__footer">
      <p
        className="coppy__icon"
        onClick={() =>
          handleCoppyQuestion(question, questionArrayHelpers, questionIndex)
        }
      ></p>
      <p
        className="delete__icon"
        onClick={() =>
          handleRemoveQuestion(questionIndex, questionArrayHelpers)
        }
      ></p>
      <ToggleButton
        name={`sections.${sectionIndex}.questions.${questionIndex}.isRequired`}
        status={question?.isRequired}
      />
    </div>
  );
};
export default QuestionFooter;
