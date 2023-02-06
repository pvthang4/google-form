const ParagraphQuestion = ({ Field, index = 0, handleChange }: any) => {
  return (
    <div className="question__filed">
      <Field
        as="textarea"
        name={`questions.${index}.paragraph`}
        className="option__paragraph__filed"
        onChange={handleChange}
      />
    </div>
  );
};
export default ParagraphQuestion;
