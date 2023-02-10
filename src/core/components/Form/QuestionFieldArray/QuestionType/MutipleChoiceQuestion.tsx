import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  getValueFromFormikName,
  handleOnDragOptionEnd,
  handleRemoveOption,
  handleSortOptions,
} from "../../../../helpers/question.helper";
import { FieldArray } from "formik";
import iconUpload from "../../../../../assets/Images/Image_upload.svg";
import iconRemove from "../../../../../assets/Icons/Icon_remove.svg";
import styled from "styled-components";
import EditQuestionInput from "../../../Common/EditQuestionInput";

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
  const optionsSort = handleSortOptions(question?.options);
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
          <Option {...provided.droppableProps} ref={provided.innerRef}>
            {optionsSort?.map((option: any, optionIndex: number) => {
              const optionFormikName: string = `items.${sectionIndex}.questionGroupItem.questions.${questionIndex}.choiceQuestion.options.${optionIndex}.value`;
              const optionFormikValue =
                getValueFromFormikName(optionFormikName, values) || "";
              return (
                <Draggable
                  key={option?.optionId}
                  draggableId={option?.optionId}
                  index={optionIndex}
                >
                  {(provided) => (
                    <FieldArray
                      name={`items.${sectionIndex}.questionGroupItem.questions.${questionIndex}.choiceQuestion.options`}
                      render={(optionArrayHelpers) => (
                        <OptionGroup
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={option?.optionId}
                        >
                          {!option?.isOther ? (
                            <OptionItem>
                              <OptionLeftItem>
                                <RadioItem />
                                <EditQuestionInput
                                  handleChange={handleChange}
                                  value={optionFormikValue}
                                  name={optionFormikName}
                                  width="85%"
                                  size="18px"
                                  fontWeight="400"
                                  padding="0"
                                  height="44px"
                                />
                              </OptionLeftItem>
                              <ActionOption>
                                {option?.option !== "Other" ? (
                                  <IconUploadFile
                                    // onClick={() => setIsOpen(true)}
                                    src={iconUpload}
                                    alt={""}
                                    height="36px"
                                    width="36px"
                                  />
                                ) : null}

                                {question?.options?.length > 1 ? (
                                  <IconRemove
                                    src={iconRemove}
                                    alt={""}
                                    height="25px"
                                    width="25px"
                                    onClick={() =>
                                      handleRemoveOption(
                                        optionArrayHelpers,
                                        optionIndex
                                      )
                                    }
                                  />
                                ) : null}
                              </ActionOption>
                            </OptionItem>
                          ) : null}
                        </OptionGroup>
                      )}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Option>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const OptionGroup = styled.div`
  position: relative;
  outline: none;
  margin-top: 20px;
  // &:first-child {

  // }
`;

const Option = styled.div``;

const OptionItem = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
`;

const OptionLeftItem = styled.div`
  display: flex;
  width: 100%;
`;

const RadioItem = styled.div`
  width: 43px;
  height: 43px;
  margin-right: 19px;
  border-radius: 50%;
  border: 3px solid #807e93;
`;

const ActionOption = styled.div`
  display: flex;
  position: relative;
`;

const IconUploadFile = styled.img`
  margin-right: 55px;
  margin-top: 7px;
  cursor: pointer;
`;

const IconRemove = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default MutipleChoiceQuestion;
