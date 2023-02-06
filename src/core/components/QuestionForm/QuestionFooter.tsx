import {
  handleCoppyQuestion,
  handleRemoveQuestion,
} from "../../helpers/question.helper";

interface QuestionFooterProps {
  question?: any;
  values?: any;
  setFieldValue?: any;
}
const QuestionFooter = ({
  question = {},
  values = {},
  setFieldValue,
}: QuestionFooterProps) => {
  return (
    <div className="question__footer">
      <p
        className="coppy__icon"
        onClick={() => handleCoppyQuestion(question, values, setFieldValue)}
      ></p>
      <p
        className="delete__icon"
        onClick={() =>
          handleRemoveQuestion(question?.id, values, setFieldValue)
        }
      ></p>
    </div>
  );
};
export default QuestionFooter;
