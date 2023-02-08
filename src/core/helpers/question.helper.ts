import __uniqueId from "lodash/uniqueId";

//handle add section
export const handleAddSection = (values: any, arrayHelpers: any) => {
  arrayHelpers.insert(values.sections.length, {
    id: __uniqueId("section-"),
    title__section: "",
    description__section: "",
    questions: [],
  });
};

// handle add question
export const handleAddQuestion = (section: any, arrayHelpers: any) => {
  arrayHelpers.insert(section.questions.length, {
    id: __uniqueId("question-"),
    question__title: "",
    question__type: "3",
    options: [
      {
        id: __uniqueId("option-"),
        option: "",
      },
    ],
    short__question: "",
    paragraph: "",
    isRequired: false,
  });
};

// handle change question type
export const handleType = (
  e: any,
  sectionIndex: number,
  questionIndex: number,
  values: any,
  setFieldValue: any
) => {
  const newData = [
    ...values.sections.slice(0, sectionIndex),
    {
      ...values.sections[sectionIndex],
      questions: [
        ...values.sections[sectionIndex].questions.slice(0, questionIndex),
        {
          ...values.sections[sectionIndex].questions[questionIndex],
          question__type: e.target.value,
        },
        ...values.sections[sectionIndex].questions.slice(questionIndex + 1),
      ],
    },
    ...values.sections.slice(sectionIndex + 1),
  ];
  setFieldValue("sections", newData);
};

// handle add option for question
export const handleAddOption = (
  questionIndex: number,
  values: any,
  setFieldValue: any,
  questionArrayHelpers: any
) => {
  const optionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.options`;
  const optionsFormikValue =
    getValueFromFormikName(optionsFormikName, values) || [];

  const newData = [
    ...optionsFormikValue,
    {
      id: __uniqueId("option-"),
      option: "",
    },
  ];
  setFieldValue(optionsFormikName, newData);
};

// handle add other option for question
export const handleAddOtherOption = (
  questionIndex: number,
  values: any,
  setFieldValue: any,
  questionArrayHelpers: any
) => {
  const optionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.options`;
  const optionsFormikValue =
    getValueFromFormikName(optionsFormikName, values) || [];

  const newData = [
    ...optionsFormikValue,
    {
      id: __uniqueId("option-"),
      option: "Other",
    },
  ];
  setFieldValue(optionsFormikName, newData);
};

// handle remove option of question
export const handleRemoveOption = (
  optionArrayHelpers: any,
  optionIndex: number
) => {
  optionArrayHelpers.remove(optionIndex);
};

// handle coppy question
export const handleCoppyQuestion = (
  question: any,
  questionArrayHelpers: any,
  questionIndex: number
) => {
  const newQuestion: any = {
    ...question,
    id: __uniqueId("question-"),
  };
  questionArrayHelpers.insert(questionIndex + 1, newQuestion);
};

// handle remove question
export const handleRemoveQuestion = (
  questionIndex: number,
  questionArrayHelpers: any
) => {
  questionArrayHelpers.remove(questionIndex);
};

// handle drap and drop question
export const handleOnDragEnd = (
  result: any,
  values: any,
  questionArrayHelpers: any,
  setFieldValue: any
) => {
  if (!result.destination) return;
  // get field name of sections, get value with field name
  const sectionsFormikName: string = questionArrayHelpers.name;
  const sectionsFormikValue =
    getValueFromFormikName(sectionsFormikName, values) || [];
  // index start, index end
  const sourceIndex: number = result.source.index;
  const destIndex: number = result.destination.index;

  const items = Array.from(sectionsFormikValue);
  // to
  const [reorderedItem] = items.splice(sourceIndex, 1);
  // from
  items.splice(destIndex, 0, reorderedItem);

  setFieldValue(sectionsFormikName, items);
};

// handle drap and drop option of question
export const handleOnDragOptionEnd = (
  result: any,
  questionArrayHelpers: any,
  questionIndex: number,
  values: any,
  setFieldValue: any
) => {
  if (!result.destination) return;
  // get field name of options, get value with field name
  const optionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.options`;

  const optionsFormikValue =
    getValueFromFormikName(optionsFormikName, values) || [];

  // index start, index end
  const sourceIndex: number = result.source.index;
  const destIndex: number = result.destination.index;

  const items = Array.from(optionsFormikValue);
  // to
  const [reorderedItem] = items.splice(sourceIndex, 1);
  // from
  items.splice(destIndex, 0, reorderedItem);

  setFieldValue(optionsFormikName, items);
};
export const getValueFromFormikName = (path: string, obj?: any) => {
  return path.split(".").reduce((previous: any, current: any) => {
    return previous ? previous[current] : null;
    // eslint-disable-next-line no-restricted-globals
  }, obj || self);
};
