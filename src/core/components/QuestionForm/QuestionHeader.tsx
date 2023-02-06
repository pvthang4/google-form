import QuestionTypeDropdown from "../Common/QuestionTypeDropdown";
interface QuestionHeaderProps {
  Field: any;
  index: number;
  handleChange: () => any;
  values: any;
  setFieldValue: any;
  questionType: any;
}

const QuestionHeader = ({
  Field,
  index = 0,
  handleChange,
  values = {},
  setFieldValue,
  questionType,
}: QuestionHeaderProps) => {
  return (
    <div className="question__header">
      <Field
        type="text"
        placeholder="Question"
        className="question__input"
        name={`questions.${index}.question__title`}
        onChange={handleChange}
      />
      <QuestionTypeDropdown
        index={index}
        values={values}
        setFieldValue={setFieldValue}
        questionType={questionType}
      />
    </div>
  );
};
export default QuestionHeader;
