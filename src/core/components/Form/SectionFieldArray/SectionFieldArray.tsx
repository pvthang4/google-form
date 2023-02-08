import { FieldArray } from "formik";
import { handleAddSection } from "../../../helpers/question.helper";
import EditQuestionInput from "../../Common/EditQuestionInput";
import QuestionFieldArray from "../QuestionFieldArray";

const SectionFieldArray = ({ values, setFieldValue, handleChange }: any) => {
  const renderSectionFieldArray = (arrayHelpers: any) => {
    return (
      <>
        <p
          className="add__question__button"
          onClick={() => handleAddSection(values, arrayHelpers)}
        >
          Add section
        </p>
        {values?.sections.map((section: any, sectionIndex: number) => (
          <div className="form" key={sectionIndex}>
            <div className="title__block">
              <EditQuestionInput
                name={`sections.${sectionIndex}.title__section`}
                handleChange={handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Description of the form"
                className="description__information"
                name={`sections.${sectionIndex}.description__section`}
                onChange={handleChange}
              />
            </div>

            <FieldArray
              name={`sections.${sectionIndex}.questions`}
              render={(questionArrayHelpers) => (
                <QuestionFieldArray
                  questionArrayHelpers={questionArrayHelpers}
                  values={values}
                  sectionIndex={sectionIndex}
                  section={section}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
            />
          </div>
        ))}
      </>
    );
  };

  return <FieldArray name="sections" render={renderSectionFieldArray} />;
};

export default SectionFieldArray;
