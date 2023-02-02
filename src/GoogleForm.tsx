import { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const questions = [
  {
    id: Math.random().toString(),
    question__title: "",
    question__type: "3",
    options: [
      {
        id: Math.random().toString(),
        option: "",
        isChoose: false,
      },
    ],
  },
];

function GoogleForm() {
  const [data, setData] = useState<any>(questions);

  const handleType = (e: any, index: number) => {
    const newData = [
      ...data.slice(0, index),
      {
        ...data[index],
        question__type: e.target.value,
      },
      ...data.slice(index + 1),
    ];
    setData(newData);
  };

  const handleChangeQuestion = (e: any, index: number) => {
    const newData = [
      ...data.slice(0, index),
      {
        ...data[index],
        question__title: e.target.value,
      },
      ...data.slice(index + 1),
    ];
    setData(newData);
  };

  const handleChangeOption = (
    e: any,
    indexQuestion: number,
    indexOption: number,
    isRadio: boolean
  ) => {
    const newData = isRadio
      ? [
          ...data.slice(0, indexQuestion),
          {
            ...data[indexQuestion],
            options: [
              ...data[indexQuestion].options.slice(0, indexOption),
              {
                ...data[indexQuestion].options[indexOption],
                isChoose: e.target.value === "on",
              },
              ...data[indexQuestion].options.slice(indexOption + 1),
            ],
          },
          ...data.slice(indexQuestion + 1),
        ]
      : [
          ...data.slice(0, indexQuestion),
          {
            ...data[indexQuestion],
            options: [
              ...data[indexQuestion].options.slice(0, indexOption),
              {
                ...data[indexQuestion].options[indexOption],
                option: e.target.value,
              },
              ...data[indexQuestion].options.slice(indexOption + 1),
            ],
          },
          ...data.slice(indexQuestion + 1),
        ];

    setData(newData);
  };

  const handleAddQuestion = () => {
    const newData = [...data];
    newData.push({
      id: Math.random().toString(),
      question__title: "",
      question__type: "",
      options: [
        {
          id: Math.random().toString(),
          option: "",
        },
      ],
    });
    setData(newData);
  };

  const handleAddOption = (index: number) => {
    const newData: any = [
      ...data.slice(0, index),
      {
        ...data[index],
        options: [
          ...data[index].options,
          {
            id: Math.random().toString(),
            option: "",
          },
        ],
      },
      ...data.slice(index + 1),
    ];
    setData(newData);
  };

  const handleRemoveOption = (id: string, indexQuestion: number) => {
    const newData = [
      ...data.slice(0, indexQuestion),
      {
        ...data[indexQuestion],
        options: [
          ...data[indexQuestion].options.filter(
            (option: any) => option?.id !== id
          ),
        ],
      },
      ...data.slice(indexQuestion + 1),
    ];
    setData(newData);
  };

  // const handleCoppyQuestion = (question: string) => {
  //   // todo: do not drap drop -> handle change id question
  //   const newData = [...data];
  //   newData.push(question);
  //   setData(newData);
  // };

  const handleRemoveQuestion = (id: string) => {
    const newData = data.filter((question: any) => question?.id !== id);
    setData(newData);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };

  console.log(data);

  return (
    <div className="main">
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
        <button className="add__question__button" onClick={handleAddQuestion}>
          Add question
        </button>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="questions" type={"type"}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data?.map((question: any, index: number) => {
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
                            <input
                              type="text"
                              placeholder="Question"
                              className="question__input"
                              onChange={(e: any) =>
                                handleChangeQuestion(e, index)
                              }
                            />
                            <select
                              name=""
                              id=""
                              className="question__select"
                              onChange={(e: any) => handleType(e, index)}
                            >
                              <option value=""></option>
                              <option value="1">Short answer</option>
                              <option value="2">Paragraph</option>
                              <option selected value="3">
                                Multiple-choice
                              </option>
                              <option value="4">Checkbox</option>
                              <option value="5">Drop-down menu</option>
                            </select>
                          </div>
                          <div className="question">
                            {question?.question__type === "3" ? (
                              question?.options?.map(
                                (option: any, indexOption: number) => {
                                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                  let isRadio;
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
                                            name={`radio__${question?.id}`}
                                            onChange={(e: any) =>
                                              handleChangeOption(
                                                e,
                                                index,
                                                indexOption,
                                                (isRadio = true)
                                              )
                                            }
                                          />
                                          <input
                                            type="text"
                                            placeholder="Option"
                                            className="option__radio__filed"
                                            onChange={(e: any) =>
                                              handleChangeOption(
                                                e,
                                                index,
                                                indexOption,
                                                (isRadio = false)
                                              )
                                            }
                                          />
                                        </div>
                                        {question?.options?.length > 1 ? (
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
                                <input
                                  type="text"
                                  name=""
                                  className="option__filed"
                                />
                              </div>
                            ) : question?.question__type === "2" ? (
                              <div className="question__filed">
                                <textarea
                                  name=""
                                  id=""
                                  className="option__filed"
                                ></textarea>
                              </div>
                            ) : (
                              question?.options?.map((option: any) => {
                                return (
                                  <div className="radio__type" key={option?.id}>
                                    <div className="question__group">
                                      <div className="question__filed">
                                        <input
                                          disabled
                                          type="checkbox"
                                          name={option?.id}
                                        />
                                        <input
                                          type="text"
                                          placeholder="Option"
                                          className="option__checkbox__filed"
                                        />
                                      </div>
                                      {question?.options?.length > 1 ? (
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
                              })
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
                                    onClick={() => handleAddOption(index)}
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
                              onClick={handleAddQuestion}
                            ></p>
                            <p
                              className="delete__icon"
                              onClick={() => handleRemoveQuestion(question?.id)}
                            ></p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default GoogleForm;
