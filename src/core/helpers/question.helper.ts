import __uniqueId from "lodash/uniqueId";
import { ChoiceType } from "../enums";

//handle add section
export const handleAddSection = (values: any, arrayHelpers: any) => {
  arrayHelpers.insert(values?.items?.length, {
    itemId: __uniqueId("sectionId-"),
    title: "title section",
    description: "description section",
    questionItem: {
      question: {
        questionId: __uniqueId("questionId-"),
        required: "boolean",
        choiceQuestion: {
          type: ChoiceType.RADIO,
          options: [
            {
              optionId: __uniqueId("optionId-"),
              value: "string",
              image: {
                contentUri: "string",
                altText: "string",
                properties: {
                  alignment: "enum (Alignment)",
                  width: "integer",
                },
                sourceUri: "string",
              },
              isOther: "boolean",
              goToAction: "enum (GoToAction)",
              goToSectionId: "string",
            },
          ],
          shuffle: "boolean",
        },
        textQuestion: {
          // if false, the question is a short text question
          paragraph: "boolean",
        },
        grading: {
          pointValue: "integer",
          correctAnswers: {
            answers: [
              {
                value: "string",
              },
            ],
          },
          whenRight: {},
          whenWrong: {},
          generalFeedback: {},
        },
        scaleQuestion: {
          low: "integer",
          high: "integer",
          lowLabel: "string",
          highLabel: "string",
        },
        dateQuestion: {
          includeTime: "boolean",
          includeYear: "boolean",
        },
        timeQuestion: {
          duration: "boolean",
        },
        fileUploadQuestion: {
          folderId: "string",
          types: [],
          maxFiles: "integer",
          maxFileSize: "string",
        },
        rowQuestion: {
          pointValue: "integer",
          correctAnswers: {},
          whenRight: {},
          whenWrong: {},
          generalFeedback: {},
        },
      },
      image: {
        contentUri: "string",
        altText: "string",
        properties: {
          alignment: "enum (Alignment)",
          width: "integer",
        },
        sourceUri: "string",
      },
    },
    // questions
    questionGroupItem: {
      questions: [
        {
          questionId: __uniqueId("questionId-"),
          // temp
          title: "title question",
          required: false,
          choiceQuestion: {
            type: ChoiceType.RADIO,
            options: [
              {
                optionId: __uniqueId("optionId-"),
                value: "Option 1",
                image: {
                  contentUri: "",
                  altText: "",
                  properties: {
                    alignment: "",
                    width: "",
                  },
                  sourceUri: "",
                },
                isOther: false,
                goToAction: "",
                goToSectionId: "",
              },
            ],
            shuffle: false,
          },
          textQuestion: {
            // if false, the question is a short text question
            paragraph: true,
          },
          grading: {
            pointValue: "",
            correctAnswers: {
              answers: [
                {
                  value: "",
                },
              ],
            },
            whenRight: {},
            whenWrong: {},
            generalFeedback: {},
          },
          scaleQuestion: {
            low: "",
            high: "",
            lowLabel: "",
            highLabel: "",
          },
          dateQuestion: {
            includeTime: false,
            includeYear: false,
          },
          timeQuestion: {
            duration: false,
          },
          fileUploadQuestion: {
            folderId: "",
            types: [],
            maxFiles: "",
            maxFileSize: false,
          },
          rowQuestion: {
            pointValue: "",
            correctAnswers: {},
            whenRight: {},
            whenWrong: {},
            generalFeedback: {},
          },
        },
      ],
      image: {
        contentUri: "",
        altText: "",
        properties: {
          alignment: "",
          width: "",
        },
        sourceUri: "",
      },
      grid: {
        columns: {
          type: "",
          options: [{}],
          shuffle: false,
        },
        shuffleQuestions: false,
      },
    },
    pageBreakItem: {},
    textItem: {},
    imageItem: {},
    videoItem: {},
  });
};

// handle add question
export const handleAddQuestion = (section: any, arrayHelpers: any) => {
  arrayHelpers.insert(section?.questionGroupItem?.questions.length, {
    questionId: __uniqueId("questionId-"),
    // temp
    title: "title question",
    required: false,
    choiceQuestion: {
      type: ChoiceType.RADIO,
      options: [
        {
          optionId: __uniqueId("optionId-"),
          value: "Option 1",
          image: {
            contentUri: "",
            altText: "",
            properties: {
              alignment: "",
              width: "",
            },
            sourceUri: "",
          },
          isOther: false,
          goToAction: "",
          goToSectionId: "",
        },
      ],
      shuffle: false,
    },
    textQuestion: {
      paragraph: true,
    },
    grading: {
      pointValue: "",
      correctAnswers: {
        answers: [
          {
            value: "",
          },
        ],
      },
      whenRight: {},
      whenWrong: {},
      generalFeedback: {},
    },
    scaleQuestion: {
      low: "",
      high: "",
      lowLabel: "",
      highLabel: "",
    },
    dateQuestion: {
      includeTime: false,
      includeYear: false,
    },
    timeQuestion: {
      duration: false,
    },
    fileUploadQuestion: {
      folderId: "",
      types: [],
      maxFiles: "",
      maxFileSize: "",
    },
    rowQuestion: {
      pointValue: "",
      correctAnswers: {},
      whenRight: {},
      whenWrong: {},
      generalFeedback: {},
    },
  });
};

// handle change question type
export const handleType = (
  e: any,
  questionIndex: number,
  values: any,
  setFieldValue: any,
  questionArrayHelpers: any
) => {
  const questionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}`;
  const questionstionFormikValue = getValueFromFormikName(
    questionsFormikName,
    values
  );
  const choiceQuestionFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.choiceQuestion`;
  const choiceQuestionFormikValue = getValueFromFormikName(
    choiceQuestionFormikName,
    values
  );
  const newData = {
    ...questionstionFormikValue,
    choiceQuestion: {
      ...choiceQuestionFormikValue,
      type: e.target.value,
    },
    textQuestion: {
      paragraph:
        e.target.value === ChoiceType.SHORT_ANSWER
          ? true
          : ChoiceType.PARAGRAPH
          ? false
          : null,
    },
  };
  setFieldValue(questionsFormikName, newData);
};

// handle add option for question
export const handleAddOption = (
  questionIndex: number,
  values: any,
  setFieldValue: any,
  questionArrayHelpers: any
) => {
  const optionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.choiceQuestion.options`;

  const optionsFormikValue =
    getValueFromFormikName(optionsFormikName, values) || [];

  const optionsNoOther = optionsFormikValue?.filter(
    (item: any) => item?.isOther === false
  );

  const newData = [
    ...optionsFormikValue,
    {
      optionId: __uniqueId("optionId-"),
      value: `Option ${optionsNoOther?.length + 1}`,
      image: {
        contentUri: "",
        altText: "",
        properties: {
          alignment: "",
          width: "",
        },
        sourceUri: "",
      },
      isOther: false,
      goToAction: "",
      goToSectionId: "",
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
  const optionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.choiceQuestion.options`;
  const optionsFormikValue =
    getValueFromFormikName(optionsFormikName, values) || [];

  const newData = [
    ...optionsFormikValue,
    {
      optionId: __uniqueId("optionId-"),
      value: "Other...",
      image: {
        contentUri: "",
        altText: "",
        properties: {
          alignment: "",
          width: "",
        },
        sourceUri: "",
      },
      isOther: true,
      goToAction: "",
      goToSectionId: "",
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

// handle remove other option of question
export const handleRemoveOtherOption = (
  questionIndex: number,
  values: any,
  setFieldValue: any,
  questionArrayHelpers: any
) => {
  const optionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.choiceQuestion.options`;
  const optionsFormikValue =
    getValueFromFormikName(optionsFormikName, values) || [];

  const newData = optionsFormikValue?.filter(
    (item: any) => item?.isOther === false
  );
  setFieldValue(optionsFormikName, newData);
};

// handle swap question
export const handleSwapQuestion = (
  questions: any[],
  questionArrayHelpers: any,
  questionIndex: number
) => {
  if (questions?.length === 1) return;
  questionArrayHelpers.swap(questionIndex, questionIndex + 1);
};
// handle coppy question
export const handleCoppyQuestion = (
  question: any,
  questionArrayHelpers: any,
  questionIndex: number
) => {
  const newQuestion: any = {
    ...question,
    questionId: __uniqueId("questionId-"),
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
  const optionsFormikName: string = `${questionArrayHelpers.name}.${questionIndex}.choiceQuestion.options`;

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

// handle sort isOther from flase to true
export const handleSortOptions = (options: any) => {
  return options?.sort((a: any, b: any) => a.isOther - b.isOther);
};
