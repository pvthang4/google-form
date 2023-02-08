import __uniqueId from "lodash/uniqueId";

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
      // questions
      questionItem: {
        question: {
          questionId: __uniqueId("questionId-"),
          required: "boolean",
          choiceQuestion: {
            type: "enum (ChoiceType)",
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
      questionGroupItem: {
        questions: [
          {
            questionId: "string",
            required: "boolean",
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
            choiceQuestion: {
              type: " enum (ChoiceType)",
              options: [
                {
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
              paragraph: "boolean",
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
        image: {},
        grid: {},
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
