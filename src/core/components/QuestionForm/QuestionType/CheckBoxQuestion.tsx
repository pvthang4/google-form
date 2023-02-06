import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import link from "../../../../assets/Icons/drap__option_icon.png";
import {
  handleOnDragOptionEnd,
  handleRemoveOption,
} from "../../../helpers/question.helper";

const CheckBoxQuestion = ({
  Field,
  index = 0,
  values = {},
  setFieldValue,
  handleChange,
  question = {},
}: any) => {
  return (
    <DragDropContext
      onDragEnd={(result: any) =>
        handleOnDragOptionEnd(
          result,
          question?.options,
          index,
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
            {question?.options?.map((option: any, indexOption: number) => {
              return (
                <Draggable
                  key={option?.id}
                  draggableId={option?.id}
                  index={indexOption}
                >
                  {(provided) => (
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
                            className="drap__checkbox__option_icon"
                          />
                          <input disabled type="checkbox" name={option?.id} />
                          <Field
                            type="text"
                            placeholder="Option"
                            className="option__checkbox__filed"
                            name={`questions.${index}.options.${indexOption}.option`}
                            onChange={handleChange}
                          />
                        </div>
                        {question?.options?.length > 1 ? (
                          <span
                            className="remove__icon"
                            onClick={() =>
                              handleRemoveOption(
                                option?.id,
                                index,
                                values,
                                setFieldValue
                              )
                            }
                          ></span>
                        ) : null}
                      </div>
                    </div>
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
export default CheckBoxQuestion;
