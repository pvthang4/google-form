import "./styled.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Formik, Field } from "formik";
import { QuestionType } from "../../enums";
import {
  handleAddOption,
  handleAddQuestion,
  handleOnDragEnd,
  handleRemoveOption,
} from "../../helpers/question.helper";
import QuestionHeader from "./QuestionHeader";
import QuestionFooter from "./QuestionFooter";
import ShortQuestion from "./QuestionType/ShortQuestion";
import ParagraphQuestion from "./QuestionType/ParagraphQuestion";
import MutipleChoiceQuestion from "./QuestionType/MutipleChoiceQuestion";
import CheckBoxQuestion from "./QuestionType/CheckBoxQuestion";
import SelectQuestion from "./QuestionType/SelectQuestion";
import FormEditQuestionInput from "../Common/EditQuestionInput";

const QuestionForm: React.FC = () => {
  return (
    <div className="main">
      <Formik
        initialValues={{ questions: [] }}
        onSubmit={() => alert(123)}
        validateOnChange={false}
        validateOnBlur
        enableReinitialize
      >
        {({ handleSubmit, values, setFieldValue, handleChange }: any) => {
          console.log(values.questions);
          
          return (
            <div className="form">
              <div className="title__block">
                {/* <input
                  type="text"
                  placeholder="Contact Info"
                  defaultValue="Contact Info"
                  className="title__information"
                /> */}
                <FormEditQuestionInput />

                <br />
                <input
                  type="text"
                  placeholder="Description of the form"
                  className="description__information"
                />
              </div>
              <button
                className="add__question__button"
                onClick={() => handleAddQuestion(values, setFieldValue)}
              >
                Add question
              </button>
              <DragDropContext
                onDragEnd={(result: any) =>
                  handleOnDragEnd(result, values, setFieldValue)
                }
              >
                <Droppable droppableId="questions" type={"type"}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {values?.questions?.map(
                        (question: any, index: number) => {
                          return (
                            <Draggable
                              key={question?.id}
                              draggableId={question?.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="question__block"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                >
                                  <p
                                    className="drag__icon"
                                    {...provided.dragHandleProps}
                                  ></p>
                                  <QuestionHeader
                                    Field={Field}
                                    index={index}
                                    handleChange={handleChange}
                                    values={values}
                                    setFieldValue={setFieldValue}
                                    questionType={question?.question__type}
                                  />
                                  <div className="question">
                                    {question?.question__type ===
                                    QuestionType.SHORT_ANSWER ? (
                                      <ShortQuestion
                                        Field={Field}
                                        index={index}
                                        handleChange={handleChange}
                                      />
                                    ) : question?.question__type ===
                                      QuestionType.PARAGRAPH ? (
                                      <ParagraphQuestion
                                        Field={Field}
                                        index={index}
                                        handleChange={handleChange}
                                      />
                                    ) : question?.question__type ===
                                      QuestionType.MULTIPLE_CHOICE ? (
                                      <MutipleChoiceQuestion
                                        Field={Field}
                                        index={index}
                                        values={values}
                                        setFieldValue={setFieldValue}
                                        handleChange={handleChange}
                                        question={question}
                                        handleRemoveOption={() =>
                                          handleRemoveOption(
                                            question.id,
                                            index,
                                            values,
                                            setFieldValue
                                          )
                                        }
                                      />
                                    ) : question?.question__type ===
                                      QuestionType.CHECK_BOX ? (
                                      <CheckBoxQuestion
                                        Field={Field}
                                        index={index}
                                        values={values}
                                        setFieldValue={setFieldValue}
                                        handleChange={handleChange}
                                        question={question}
                                        handleRemoveOption={() =>
                                          handleRemoveOption(
                                            question.id,
                                            index,
                                            values,
                                            setFieldValue
                                          )
                                        }
                                      />
                                    ) : (
                                      <SelectQuestion
                                        Field={Field}
                                        index={index}
                                        values={values}
                                        setFieldValue={setFieldValue}
                                        handleChange={handleChange}
                                        question={question}
                                        handleRemoveOption={() =>
                                          handleRemoveOption(
                                            question.id,
                                            index,
                                            values,
                                            setFieldValue
                                          )
                                        }
                                      />
                                    )}
                                    <div className="add__question__filed">
                                      {question?.question__type ===
                                        QuestionType.MULTIPLE_CHOICE ||
                                      question?.question__type ===
                                        QuestionType.CHECK_BOX ||
                                      question?.question__type ===
                                        QuestionType.DROP_DOWN_MENU ? (
                                        <>
                                          <span>
                                            {question?.question__type ===
                                            QuestionType.DROP_DOWN_MENU ? (
                                              <span className="select__option__no">
                                                {`${
                                                  question?.options?.length + 1
                                                }.`}
                                              </span>
                                            ) : (
                                              <input
                                                type={
                                                  question?.question__type ===
                                                  QuestionType.MULTIPLE_CHOICE
                                                    ? "radio"
                                                    : "checkbox"
                                                }
                                                disabled
                                              />
                                            )}
                                          </span>
                                          <span
                                            className="add__option"
                                            onClick={() =>
                                              handleAddOption(
                                                index,
                                                values,
                                                setFieldValue
                                              )
                                            }
                                          >
                                            More options
                                          </span>
                                        </>
                                      ) : null}
                                    </div>
                                  </div>
                                  <QuestionFooter
                                    question={question}
                                    values={values}
                                    setFieldValue={setFieldValue}
                                  />
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                      )}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default QuestionForm;
