import { QuestionType } from "../enums";
import { Question } from "../types";

// handle change question type
export const handleType = (
  e: any,
  index: number,
  values: any,
  setFieldValue: any
) => {
  const newData: Question[] = [
    ...values.questions.slice(0, index),
    {
      ...values.questions[index],
      question__type: e.target.value,
    },
    ...values.questions.slice(index + 1),
  ];
  setFieldValue("questions", newData);
};

// handle add question
export const handleAddQuestion = (values: any, setFieldValue: any) => {
  const newData: Question[] = [...values.questions];
  newData.push({
    id: Math.random().toString(),
    question__title: "",
    question__type: QuestionType.MULTIPLE_CHOICE,
    options: [
      {
        id: Math.random().toString(),
        option: "",
      },
    ],
  });
  setFieldValue("questions", newData);
};

// handle add option for question
export const handleAddOption = (
  index: number,
  values: any,
  setFieldValue: any
) => {
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

// handle remove option of question
export const handleRemoveOption = (
  id: string,
  indexQuestion: number,
  values: any,
  setFieldValue: any
) => {
  const newData: Question[] = [
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

// handle coppy question
export const handleCoppyQuestion = (
  question: any,
  values: any,
  setFieldValue: any
) => {
  const newOption: Question[] = [];
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

// handle remove question
export const handleRemoveQuestion = (
  id: string,
  values: any,
  setFieldValue: any
) => {
  const newData: Question[] = values.questions?.filter(
    (question: any) => question?.id !== id
  );
  setFieldValue("questions", newData);
};

// handle drap and drop question
export const handleOnDragEnd = (
  result: any,
  values: any,
  setFieldValue: any
) => {
  if (!result.destination) return;
  const items = Array.from(values?.questions);
  // to
  const [reorderedItem] = items.splice(result.source.index, 1);
  // from
  items.splice(result.destination.index, 0, reorderedItem);
  setFieldValue("questions", items);
};

// handle drap and drop option of question
export const handleOnDragOptionEnd = (
  result: any,
  data: any,
  indexQuestion: number,
  values: any,
  setFieldValue: any
) => {
  if (!result.destination) return;
  const items = Array.from(data);
  // to
  const [reorderedItem] = items.splice(result.source.index, 1);
  // from
  items.splice(result.destination.index, 0, reorderedItem);

  const newData: Question[] = [
    ...values.questions.slice(0, indexQuestion),
    {
      ...values.questions[indexQuestion],
      options: items,
    },
    ...values.questions.slice(indexQuestion + 1),
  ];
  setFieldValue("questions", newData);
};
