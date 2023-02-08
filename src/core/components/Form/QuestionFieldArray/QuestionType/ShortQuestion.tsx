const ShortQuestion = ({
  Field,
  handleChange,
  sectionIndex = 0,
  questionIndex = 0,
}: any) => {
  return (
    <div className="question__filed">
      <Field
        type="text"
        name={`sections.${sectionIndex}.questions.${questionIndex}.short__question`}
        className="option__short__filed"
        onChange={handleChange}
      />
    </div>
  );
};
export default ShortQuestion;
