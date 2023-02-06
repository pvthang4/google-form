const ShortQuestion = ({ Field, index = 0, handleChange }: any) => {
  return (
    <div className="question__filed">
      <Field
        type="text"
        name={`questions.${index}.short__question`}
        className="option__short__filed"
        onChange={handleChange}
      />
    </div>
  );
};
export default ShortQuestion;
