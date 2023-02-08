import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  handleOnDragOptionEnd,
  handleRemoveOption,
} from "../../../../helpers/question.helper";
import link from "../../../../../assets/Icons/drap__option_icon.png";
import { FieldArray } from "formik";
import imageUpload from "../../../../../assets/Images/Image_upload.svg";

const MutipleChoiceQuestion = ({
  Field,
  values = {},
  setFieldValue,
  sectionIndex = 0,
  questionIndex = 0,
  handleChange,
  question = {},
  questionArrayHelpers,
}: any) => {
  return (
    <DragDropContext
      onDragEnd={(result: any) =>
        handleOnDragOptionEnd(
          result,
          questionArrayHelpers,
          questionIndex,
          values,
          setFieldValue
        )
      }
    >
      <Droppable droppableId="option">
        {(provided) => (
          <div
            className="option"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {question?.options?.map((option: any, optionIndex: number) => {
              return (
                <Draggable
                  key={option?.id}
                  draggableId={option?.id}
                  index={optionIndex}
                >
                  {(provided) => (
                    <FieldArray
                      name={`sections.${sectionIndex}.questions.${questionIndex}.options`}
                      render={(optionArrayHelpers) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="radio__type"
                          key={option?.id}
                        >
                          <div className="question__group">
                            <div className="question__field">
                              <img
                                src={link}
                                alt=""
                                className="drap__option_icon"
                              />
                              <input
                                disabled
                                type="radio"
                                className="radio__field"
                              />
                              <Field
                                type="text"
                                name={`sections.${sectionIndex}.questions.${questionIndex}.options.${optionIndex}.option`}
                                placeholder="Option"
                                className="option__radio__filed"
                                onChange={handleChange}
                                disabled={option?.option === "Other"}
                              />
                            </div>
                            <div>
                              {option?.option !== "Other" ? (
                                <input
                                  type="image"
                                  // onClick={() => setIsOpen(true)}
                                  src={imageUpload}
                                  alt="picture"
                                />
                              ) : null}

                              {question?.options?.length > 1 ? (
                                <span
                                  className="remove__icon"
                                  onClick={() =>
                                    handleRemoveOption(
                                      optionArrayHelpers,
                                      optionIndex
                                    )
                                  }
                                ></span>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      )}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default MutipleChoiceQuestion;
