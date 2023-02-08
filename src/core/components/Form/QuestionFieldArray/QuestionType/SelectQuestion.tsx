import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  handleOnDragOptionEnd,
  handleRemoveOption,
} from "../../../../helpers/question.helper";
import link from "../../../../../assets/Icons/drap__option_icon.png";
import { FieldArray } from "formik";

const SelectQuestion = ({
  Field,
  sectionIndex = 0,
  questionIndex = 0,
  values = {},
  setFieldValue,
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
                            <div className="question__checkbox__field">
                              <img
                                src={link}
                                alt=""
                                className="drap__select__option_icon"
                              />
                              <span className="select__option__no">
                                {`${optionIndex + 1}.`}
                              </span>
                              <Field
                                type="text"
                                placeholder="Option"
                                className="option__checkbox__filed"
                                name={`sections.${sectionIndex}.questions.${questionIndex}.options.${optionIndex}.option`}
                                onChange={handleChange}
                              />
                            </div>
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
export default SelectQuestion;
