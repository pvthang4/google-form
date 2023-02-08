import { Field } from "formik";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { QuestionType } from "../../../enums";
import {
  handleAddOption,
  handleAddOtherOption,
  handleAddQuestion,
  handleOnDragEnd,
} from "../../../helpers/question.helper";
import QuestionFooter from "./QuestionFooter";
import QuestionHeader from "./QuestionHeader";
import CheckBoxQuestion from "./QuestionType/CheckBoxQuestion";
import MutipleChoiceQuestion from "./QuestionType/MutipleChoiceQuestion";
import ParagraphQuestion from "./QuestionType/ParagraphQuestion";
import SelectQuestion from "./QuestionType/SelectQuestion";
import ShortQuestion from "./QuestionType/ShortQuestion";

const QuestionFieldArray = ({
  questionArrayHelpers,
  values,
  handleChange,
  setFieldValue,
  section,
  sectionIndex,
}: any) => {
  return (
    <>
      <p
        className="add__question__button"
        onClick={() => handleAddQuestion(section, questionArrayHelpers)}
      >
        Add question
      </p>

      <DragDropContext
        onDragEnd={(result: any) =>
          handleOnDragEnd(result, values, questionArrayHelpers, setFieldValue)
        }
      >
        <Droppable droppableId={`section-${sectionIndex}`} type={"type"}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {section?.questions?.map(
                (question: any, questionIndex: number) => {
                  const isOther = question?.options.some(
                    (item: any) => item?.option === "Other"
                  );

                  return (
                    <Draggable
                      key={question?.id}
                      draggableId={question?.id}
                      index={questionIndex}
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
                            sectionIndex={sectionIndex}
                            questionIndex={questionIndex}
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
                                handleChange={handleChange}
                                sectionIndex={sectionIndex}
                                questionIndex={questionIndex}
                              />
                            ) : question?.question__type ===
                              QuestionType.PARAGRAPH ? (
                              <ParagraphQuestion
                                Field={Field}
                                sectionIndex={sectionIndex}
                                questionIndex={questionIndex}
                                handleChange={handleChange}
                              />
                            ) : question?.question__type ===
                              QuestionType.MULTIPLE_CHOICE ? (
                              <MutipleChoiceQuestion
                                Field={Field}
                                index={questionIndex}
                                values={values}
                                setFieldValue={setFieldValue}
                                handleChange={handleChange}
                                question={question}
                                sectionIndex={sectionIndex}
                                questionIndex={questionIndex}
                                questionArrayHelpers={questionArrayHelpers}
                              />
                            ) : question?.question__type ===
                              QuestionType.CHECK_BOX ? (
                              <CheckBoxQuestion
                                Field={Field}
                                index={questionIndex}
                                values={values}
                                setFieldValue={setFieldValue}
                                handleChange={handleChange}
                                question={question}
                                sectionIndex={sectionIndex}
                                questionIndex={questionIndex}
                                questionArrayHelpers={questionArrayHelpers}
                              />
                            ) : (
                              <SelectQuestion
                                Field={Field}
                                index={questionIndex}
                                values={values}
                                setFieldValue={setFieldValue}
                                handleChange={handleChange}
                                question={question}
                                sectionIndex={sectionIndex}
                                questionIndex={questionIndex}
                                questionArrayHelpers={questionArrayHelpers}
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
                                        {`${question?.options?.length + 1}.`}
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
                                        questionIndex,
                                        values,
                                        setFieldValue,
                                        questionArrayHelpers
                                      )
                                    }
                                  >
                                    More options
                                  </span>
                                  {!isOther ? (
                                    <>
                                      <span>&nbsp;or</span>
                                      <span
                                        onClick={() =>
                                          handleAddOtherOption(
                                            questionIndex,
                                            values,
                                            setFieldValue,
                                            questionArrayHelpers
                                          )
                                        }
                                      >
                                        &nbsp;Add other option
                                      </span>
                                    </>
                                  ) : null}
                                </>
                              ) : null}
                            </div>
                          </div>
                          <QuestionFooter
                            question={question}
                            questionArrayHelpers={questionArrayHelpers}
                            questionIndex={questionIndex}
                            sectionIndex={sectionIndex}
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
    </>
  );
};

export default QuestionFieldArray;
