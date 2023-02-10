import __uniqueId from "lodash/uniqueId";
import { ChoiceType } from "../../enums";

export const initalFormValue = {
  formId: __uniqueId("formId-"),
  info: {
    title: "string",
    documentTitle: "string",
    description: "string",
  },
  settings: {
    quizSettings: {
      isQuiz: "boolean",
    },
  },
  // sections
  items: [
    {
      itemId: __uniqueId("sectionId-"),
      title: "title section",
      description: "description section",
      questionItem: {
        question: {
          questionId: __uniqueId("questionId-"),
          required: false,
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
                isOther: false,
                goToAction: "enum (GoToAction)",
                goToSectionId: "string",
              },
            ],
            shuffle: false,
          },
          textQuestion: {
            // if false, the question is a short text question
            paragraph: false,
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
        ],
        image: {
          contentUri: "string",
          altText: "string",
          properties: {
            alignment: "enum (Alignment)",
            width: "integer",
          },
          sourceUri: "string",
        },
        grid: {
          columns: {
            type: "enum (ChoiceType)",
            options: [{}],
            shuffle: "boolean",
          },
          shuffleQuestions: "boolean",
        },
      },
      pageBreakItem: {},
      textItem: {},
      imageItem: {},
      videoItem: {},
    },
  ],
  revisionId: "string",
  responderUri: "string",
  linkedSheetId: "string",
};
