const ParagraphQuestion = ({
  Field,
  handleChange,
  sectionIndex = 0,
  questionIndex = 0,
}: any) => {
  return (
    <div className="question__filed">
      <Field
        as="textarea"
        name={`sections.${sectionIndex}.questions.${questionIndex}.paragraph`}
        className="option__paragraph__filed"
        onChange={handleChange}
      />
    </div>
  );
};
export default ParagraphQuestion;
