import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Formik, Field } from "formik";

const questions = [
  {
    id: Math.random().toString(),
    question__title: "",
    question__type: "3",
    options: [
      {
        id: Math.random().toString(),
        option: "",
      },
      {
        id: Math.random().toString(),
        option: "",
      },
    ],
    short__question: "",
    paragraph: "",
  },
];

function GoogleForm() {
  return (
    <div className="main">
      <Formik
        initialValues={{ questions: questions }}
        onSubmit={() => alert(123)}
        validateOnChange={false}
        validateOnBlur
        enableReinitialize
      >
        {({ handleSubmit, values, setFieldValue, handleChange }: any) => {
          const handleType = (e: any, index: number) => {
            const newData = [
              ...values.questions.slice(0, index),
              {
                ...values.questions[index],
                question__type: e.target.value,
              },
              ...values.questions.slice(index + 1),
            ];
            setFieldValue("questions", newData);
          };

          const handleAddQuestion = () => {
            const newData = [...values.questions];
            newData.push({
              id: Math.random().toString(),
              question__title: "",
              question__type: "3",
              options: [
                {
                  id: Math.random().toString(),
                  option: "",
                },
              ],
            });
            setFieldValue("questions", newData);
          };

          const handleAddOption = (index: number) => {
            const newData: any = [
              ...values.questions.slice(0, index),
              {
                ...values.questions[index],
                options: [
                  ...values.questions[index].options,
                  {
                    id: Math.random().toString(),
                    option: "",
                  },
                ],
              },
              ...values.questions.slice(index + 1),
            ];
            setFieldValue("questions", newData);
          };

          const handleRemoveOption = (id: string, indexQuestion: number) => {
            const newData = [
              ...values.questions.slice(0, indexQuestion),
              {
                ...values.questions[indexQuestion],
                options: [
                  ...values.questions[indexQuestion].options.filter(
                    (option: any) => option?.id !== id
                  ),
                ],
              },
              ...values.questions.slice(indexQuestion + 1),
            ];
            setFieldValue("questions", newData);
          };

          const handleCoppyQuestion = (question: any) => {
            const newOption: any = [];
            question?.options?.forEach((item: any) =>
              newOption.push(Object.assign({}, { ...item }))
            );
            const newQuestion: any = {
              id: Math.random().toString(),
              question__title: question?.question__title,
              question__type: question?.question__type,
              options: newOption,
              short__question: question?.short__question,
              paragraph: question?.paragraph,
            };
            const newData = [...values.questions, newQuestion];
            setFieldValue("questions", newData);
          };

          const handleRemoveQuestion = (id: string) => {
            const newData = values.questions?.filter(
              (question: any) => question?.id !== id
            );
            setFieldValue("questions", newData);
          };

          const handleOnDragEnd = (result: any) => {
            if (!result.destination) return;
            const items = Array.from(values?.questions);
            // to
            const [reorderedItem] = items.splice(result.source.index, 1);
            // from
            items.splice(result.destination.index, 0, reorderedItem);
            setFieldValue("questions", items);
          };

          return (
            <div className="form">
              <div className="title__block">
                <input
                  type="text"
                  placeholder="Contact Info"
                  defaultValue="Contact Info"
                  className="title__information"
                />
                <br />
                <input
                  type="text"
                  placeholder="Description of the form"
                  className="description__information"
                />
              </div>
              <button
                className="add__question__button"
                onClick={handleAddQuestion}
              >
                Add question
              </button>
              <DragDropContext onDragEnd={handleOnDragEnd}>
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
                                  <div className="question__header">
                                    <Field
                                      type="text"
                                      placeholder="Question"
                                      className="question__input"
                                      name={`questions.${index}.question__title`}
                                      onChange={handleChange}
                                    />
                                    <select
                                      name="question__type"
                                      id=""
                                      className="question__select"
                                      onChange={(e: any) =>
                                        handleType(e, index)
                                      }
                                    >
                                      {[
                                        { value: "1", label: "Short answer" },
                                        { value: "2", label: "Paragraph" },
                                        {
                                          value: "3",
                                          label: "Multiple-choice",
                                        },
                                        { value: "4", label: "Checkbox" },
                                        { value: "5", label: "Drop-down menu" },
                                      ]?.map((item: any) => (
                                        <option
                                          selected={
                                            item?.value ===
                                            question?.question__type
                                          }
                                          key={item?.value}
                                          value={item?.value}
                                        >
                                          {item?.label}
                                        </option>
                                      ))}
                                    </select>
                                  </div>

                                  <div className="question">
                                    {question?.question__type === "3" ? (
                                      question?.options?.map(
                                        (option: any, indexOption: number) => {
                                          return (
                                            <div
                                              className="radio__type"
                                              key={option?.id}
                                            >
                                              <div className="question__group">
                                                <div className="question__field">
                                                  <input
                                                    disabled
                                                    type="radio"
                                                    className="radio__field"
                                                  />
                                                  <Field
                                                    type="text"
                                                    name={`questions.${index}.options.${indexOption}.option`}
                                                    placeholder="Option"
                                                    className="option__radio__filed"
                                                    onChange={handleChange}
                                                  />
                                                </div>
                                                {question?.options?.length >
                                                1 ? (
                                                  <span
                                                    className="remove__icon"
                                                    onClick={() =>
                                                      handleRemoveOption(
                                                        option?.id,
                                                        index
                                                      )
                                                    }
                                                  ></span>
                                                ) : null}
                                              </div>
                                            </div>
                                          );
                                        }
                                      )
                                    ) : question?.question__type === "1" ? (
                                      <div className="question__filed">
                                        <Field
                                          type="text"
                                          name={`questions.${index}.short__question`}
                                          className="option__short__filed"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    ) : question?.question__type === "2" ? (
                                      <div className="question__filed">
                                        <Field
                                          as="textarea"
                                          name={`questions.${index}.paragraph`}
                                          className="option__paragraph__filed"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    ) : (
                                      question?.options?.map(
                                        (option: any, indexOption: number) => {
                                          return (
                                            <div
                                              className="radio__type"
                                              key={option?.id}
                                            >
                                              <div className="question__group">
                                                <div className="question__filed">
                                                  <input
                                                    disabled
                                                    type="checkbox"
                                                    name={option?.id}
                                                  />
                                                  <Field
                                                    type="text"
                                                    placeholder="Option"
                                                    className="option__checkbox__filed"
                                                    name={`questions.${index}.options.${indexOption}.option`}
                                                    onChange={handleChange}
                                                  />
                                                </div>
                                                {question?.options?.length >
                                                1 ? (
                                                  <span
                                                    className="remove__icon"
                                                    onClick={() =>
                                                      handleRemoveOption(
                                                        option?.id,
                                                        index
                                                      )
                                                    }
                                                  ></span>
                                                ) : null}
                                              </div>
                                            </div>
                                          );
                                        }
                                      )
                                    )}
                                    <div className="add__question__filed">
                                      {question?.question__type === "3" ||
                                      question?.question__type === "4" ? (
                                        <>
                                          <span>
                                            <input
                                              type={
                                                question?.question__type === "3"
                                                  ? "radio"
                                                  : "checkbox"
                                              }
                                              name=""
                                              id=""
                                              disabled
                                            />
                                          </span>
                                          <span
                                            className="add__option"
                                            onClick={() =>
                                              handleAddOption(index)
                                            }
                                          >
                                            More options
                                          </span>
                                        </>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="question__footer">
                                    <p
                                      className="coppy__icon"
                                      onClick={() =>
                                        handleCoppyQuestion(question)
                                      }
                                    ></p>
                                    <p
                                      className="delete__icon"
                                      onClick={() =>
                                        handleRemoveQuestion(question?.id)
                                      }
                                    ></p>
                                  </div>
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
}

export default GoogleForm;
