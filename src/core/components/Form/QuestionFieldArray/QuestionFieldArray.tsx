import { Field } from "formik";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ChoiceType } from "../../../enums";
import {
  handleAddOption,
  handleAddOtherOption,
  handleAddQuestion,
  handleAddSection,
  handleOnDragEnd,
  handleRemoveOtherOption,
} from "../../../helpers/question.helper";
import QuestionFooter from "./QuestionFooter";
import QuestionHeader from "./QuestionHeader";
import CheckBoxQuestion from "./QuestionType/CheckBoxQuestion";
import MutipleChoiceQuestion from "./QuestionType/MutipleChoiceQuestion";
import ParagraphQuestion from "./QuestionType/ParagraphQuestion";
import SelectQuestion from "./QuestionType/SelectQuestion";
import ShortQuestion from "./QuestionType/ShortQuestion";
import imageDrap from "../../../../assets/Images/Image_drap.svg";
import iconAddQuestion from "../../../../assets/Icons/Icon_add_question.svg";
import iconAddSection from "../../../../assets/Icons/Icon_add_section.svg";
import iconRemove from "../../../../assets/Icons/Icon_remove.svg";
import styled from "styled-components";

const QuestionFieldArray = ({
  sectionArrayHelpers,
  questionArrayHelpers,
  values,
  handleChange,
  setFieldValue,
  section,
  sectionIndex,
}: any) => {
  return (
    <Question>
      <ActionForm>
        <IconAddQuestion
          type="image"
          src={iconAddQuestion}
          alt="picture"
          height="35px"
          width="35px"
          onClick={() => handleAddQuestion(section, questionArrayHelpers)}
        />
        <AddQuestionTooltip />
        <IconAddSection
          type="image"
          src={iconAddSection}
          alt="picture"
          height="51px"
          width="46px"
          onClick={() => handleAddSection(values, sectionArrayHelpers)}
        />
      </ActionForm>

      <DragDropContext
        onDragEnd={(result: any) =>
          handleOnDragEnd(result, values, questionArrayHelpers, setFieldValue)
        }
      >
        <Droppable droppableId={`items-${sectionIndex}`} type={"type"}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {section?.questionGroupItem?.questions?.map(
                (question: any, questionIndex: number) => {
                  const isOther = question?.choiceQuestion?.options.find(
                    (item: any) => item?.isOther === true
                  );
                  const choiceQuestionType = question?.choiceQuestion?.type;

                  let questionTypeSelected: string;
                  let questionWithType: any;

                  if (
                    (choiceQuestionType === ChoiceType.SHORT_ANSWER ||
                      choiceQuestionType === ChoiceType.PARAGRAPH) &&
                    question?.textQuestion
                  ) {
                    questionTypeSelected = choiceQuestionType;
                  }

                  if (
                    choiceQuestionType === ChoiceType.RADIO ||
                    choiceQuestionType === ChoiceType.CHECKBOX ||
                    choiceQuestionType === ChoiceType.DROP_DOWN
                  ) {
                    questionWithType = question?.choiceQuestion;
                  }

                  return (
                    <Draggable
                      key={question?.questionId}
                      draggableId={question?.questionId}
                      index={questionIndex}
                    >
                      {(provided) => (
                        <QuestionItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <HeaderQuestion {...provided.dragHandleProps}>
                            <img
                              src={imageDrap}
                              alt={""}
                              height="18px"
                              width="42px"
                            />
                          </HeaderQuestion>
                          <QuestionHeader
                            Field={Field}
                            sectionIndex={sectionIndex}
                            questionIndex={questionIndex}
                            questionArrayHelpers={questionArrayHelpers}
                            handleChange={handleChange}
                            values={values}
                            setFieldValue={setFieldValue}
                            questionType={questionTypeSelected}
                          />
                          <Option>
                            {question?.choiceQuestion.type ===
                              ChoiceType.SHORT_ANSWER &&
                            !!question?.textQuestion?.paragraph ? (
                              <ShortQuestion />
                            ) : question?.choiceQuestion.type ===
                                ChoiceType.PARAGRAPH &&
                              !question?.textQuestion?.paragraph ? (
                              <ParagraphQuestion />
                            ) : questionWithType?.type === ChoiceType.RADIO ? (
                              <MutipleChoiceQuestion
                                Field={Field}
                                index={questionIndex}
                                values={values}
                                setFieldValue={setFieldValue}
                                handleChange={handleChange}
                                question={questionWithType}
                                sectionIndex={sectionIndex}
                                questionIndex={questionIndex}
                                questionArrayHelpers={questionArrayHelpers}
                              />
                            ) : questionWithType?.type ===
                              ChoiceType.CHECKBOX ? (
                              <CheckBoxQuestion
                                Field={Field}
                                index={questionIndex}
                                values={values}
                                setFieldValue={setFieldValue}
                                handleChange={handleChange}
                                question={questionWithType}
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
                                question={questionWithType}
                                sectionIndex={sectionIndex}
                                questionIndex={questionIndex}
                                questionArrayHelpers={questionArrayHelpers}
                              />
                            )}
                            {isOther ? (
                              <OtherOption>
                                {questionWithType?.type === ChoiceType.RADIO ||
                                questionWithType?.type ===
                                  ChoiceType.CHECKBOX ||
                                questionWithType?.type ===
                                  ChoiceType.DROP_DOWN ? (
                                  <OptionGroup>
                                    <LeftOption>
                                      {questionWithType?.type ===
                                      ChoiceType.DROP_DOWN ? (
                                        <SelectOption>
                                          {`${
                                            question?.choiceQuestion?.options
                                              ?.length + 1
                                          }.`}
                                        </SelectOption>
                                      ) : questionWithType?.type ===
                                        ChoiceType.RADIO ? (
                                        <RadioItem />
                                      ) : (
                                        <CheckboxItem />
                                      )}
                                    </LeftOption>
                                    <RightOption>
                                      <OtherText>Other...</OtherText>
                                      <IconRemove
                                        src={iconRemove}
                                        alt={""}
                                        height="25px"
                                        width="25px"
                                        onClick={() =>
                                          handleRemoveOtherOption(
                                            questionIndex,
                                            values,
                                            setFieldValue,
                                            questionArrayHelpers
                                          )
                                        }
                                      />
                                    </RightOption>
                                  </OptionGroup>
                                ) : null}
                              </OtherOption>
                            ) : null}
                            <AddOption>
                              {questionWithType?.type === ChoiceType.RADIO ||
                              questionWithType?.type === ChoiceType.CHECKBOX ||
                              questionWithType?.type ===
                                ChoiceType.DROP_DOWN ? (
                                <OptionGroup>
                                  <LeftOption>
                                    {questionWithType?.type ===
                                    ChoiceType.DROP_DOWN ? (
                                      <SelectOption>
                                        {`${
                                          question?.choiceQuestion?.options
                                            ?.length + 1
                                        }.`}
                                      </SelectOption>
                                    ) : questionWithType?.type ===
                                      ChoiceType.RADIO ? (
                                      <RadioItem />
                                    ) : (
                                      <CheckboxItem />
                                    )}
                                  </LeftOption>
                                  <RightOption>
                                    <OptionOtherText
                                      onClick={() =>
                                        handleAddOption(
                                          questionIndex,
                                          values,
                                          setFieldValue,
                                          questionArrayHelpers
                                        )
                                      }
                                    >
                                      選択肢を追加
                                    </OptionOtherText>
                                    {!isOther ? (
                                      <>
                                        <OptionOrText>
                                          &nbsp; または&nbsp;
                                        </OptionOrText>
                                        <OptionOtherText
                                          onClick={() =>
                                            handleAddOtherOption(
                                              questionIndex,
                                              values,
                                              setFieldValue,
                                              questionArrayHelpers
                                            )
                                          }
                                        >
                                          &nbsp;「その他」を追加
                                        </OptionOtherText>
                                      </>
                                    ) : null}
                                  </RightOption>
                                </OptionGroup>
                              ) : null}
                            </AddOption>
                          </Option>
                          <QuestionFooter
                            question={question}
                            questions={section?.questionGroupItem?.questions}
                            questionArrayHelpers={questionArrayHelpers}
                            questionIndex={questionIndex}
                            sectionIndex={sectionIndex}
                          />
                        </QuestionItem>
                      )}
                    </Draggable>
                  );
                }
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Question>
  );
};

const Question = styled.div`
  position: relative;
`;

const ActionForm = styled.div`
  position: absolute;
  right: -103px;
  box-sizing: border-box;
  width: 58px;
  height: 148px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 25%);
  border-radius: 10px;
  text-align: center;
`;

const AddQuestionTooltip = styled.div`
  width: 36px;
  height: 36px;
  background-color: red;
  position: absolute;
  top: 19px;
  left: 70px;
  width: 82px;
  height: 28px;
  background: #807e93;
  display: none;
`;

const IconAddQuestion = styled.input`
  margin: 18px 11px 36px 11px;
`;
const IconAddSection = styled.input``;

const QuestionItem = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 30px 48px 0 32px;
  margin-top: 26px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 6px;
    left: 10px;
    bottom: 16px;
    top: 16px;
    background: #0080c1;
  }
`;

const HeaderQuestion = styled.div`
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Option = styled.div``;

const AddOption = styled.div`
  margin-top: 20px;
`;

const OptionGroup = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
`;

const SelectOption = styled.div`
  width: 31px;
  height: 30px;
  margin-right: 19px;
  display: flex;
  align-items: end;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
`;

const RadioItem = styled.div`
  width: 43px;
  height: 43px;
  margin-right: 19px;
  border-radius: 50%;
  border: 3px solid #807e93;
`;

const LeftOption = styled.div`
  display: flex;
`;

const RightOption = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const OptionOtherText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #3c3b47;
  border-bottom: 1px solid #3c3b47;
  padding-bottom: 1px;
  cursor: pointer;
`;

const OptionOrText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #3c3b47;
`;

const CheckboxItem = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 19px;
  border: 3px solid #807e93;
`;

const OtherOption = styled.div`
  margin-top: 20px;
  height: 40px;
`;

const IconRemove = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const OtherText = styled.p`
  ont-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #3c3b47;
  border-bottom: 1px dashed #3c3b47;
  padding-bottom: 5px;
  width: 50%;
`;

export default QuestionFieldArray;
