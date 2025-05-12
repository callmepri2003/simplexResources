const schema = {
  type: "object",
  properties: {
    type: { const: "data" },
    id: { type: "string" },
    props: {
      type: "object",
      properties: {
        content: {
          type: "array",
          items: {
            oneOf: [
              { $ref: "#/$defs/ExplanationBox" },
              { $ref: "#/$defs/KeyTakeaway" },
              { $ref: "#/$defs/PractiseQuestions" },
              { $ref: "#/$defs/GeneralPurpose" },
              { $ref: "#/$defs/Heading" },
              { $ref: "#/$defs/Text" },
            ],
          },
        },
      },
      required: ["content"],
    },
  },
  required: ["type", "id", "props"],
  $defs: {
    ExplanationBox: {
      type: "object",
      properties: {
        type: { const: "ExplanationBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/ExplanationBoxText" },
                  { $ref: "#/$defs/ExplanationBoxFormula" },
                  { $ref: "#/$defs/ExplanationBoxList" },
                ],
              },
            },
          },
          required: ["title", "content"],
        },
      },
      required: ["type", "id", "props"],
    },
    ExplanationBoxText: {
      type: "object",
      properties: {
        type: { const: "ExplanationBoxText" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            children: { type: "string" },
          },
          required: ["children"],
        },
      },
      required: ["type", "id", "props"],
    },
    ExplanationBoxFormula: {
      type: "object",
      properties: {
        type: { const: "ExplanationBoxFormula" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            children: { type: "string" },
          },
          required: ["children"],
        },
      },
      required: ["type", "id", "props"],
    },
    ExplanationBoxList: {
      type: "object",
      properties: {
        type: { const: "ExplanationBoxList" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            items: {
              type: "array",
              items: { type: "string" },
            },
          },
          required: ["items"],
        },
      },
      required: ["type", "id", "props"],
    },
    KeyTakeaway: {
      type: "object",
      properties: {
        type: { const: "KeyTakeaway" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            keyTakeaways: {
              type: "array",
              items: { type: "string" },
            },
          },
          required: ["keyTakeaways"],
        },
      },
      required: ["type", "id", "props"],
    },
    PractiseQuestions: {
      type: "object",
      properties: {
        type: { const: "PractiseQuestions" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/MultipleChoiceQuestion" },
                  { $ref: "#/$defs/FillInTheBlanksQuestion" },
                  { $ref: "#/$defs/ShortAnswerQuestion" },
                  { $ref: "#/$defs/GroupedSubquestionsGrid" },
                ],
              },
            },
          },
          required: ["content"],
        },
      },
      required: ["type", "id", "props"],
    },

    MultipleChoiceQuestion: {
      type: "object",
      properties: {
        type: { const: "MultipleChoiceQuestion" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "integer" },
            questionContent: { type: "string" },
            options: {
              type: "array",
              items: { type: "string" },
              minItems: 2,
              maxItems: 6,
            },
          },
          required: ["questionNumber", "questionContent", "options"],
        },
      },
      required: ["type", "id", "props"],
    },

    FillInTheBlanksQuestion: {
      type: "object",
      properties: {
        type: { const: "FillInTheBlanksQuestion" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "integer" },
            leftPart: { type: "string" },
            middlePart: { type: "string" },
            rightPart: { type: "string" },
          },
          required: ["questionNumber", "leftPart", "middlePart", "rightPart"],
        },
      },
      required: ["type", "id", "props"],
    },

    ShortAnswerQuestion: {
      type: "object",
      properties: {
        type: { const: "ShortAnswerQuestion" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "integer" },
            questionContent: { type: "string" },
          },
          required: ["questionNumber", "questionContent"],
        },
      },
      required: ["type", "id", "props"],
    },
    GeneralPurpose: {
      type: "object",
      properties: {
        type: { const: "GeneralPurpose" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            componentName: { type: "string" },
            html: { type: "string" },
          },
          required: ["componentName", "html"],
        },
      },
      required: ["type", "id", "props"],
    },
    GroupedSubquestionsGrid: {
      type: "object",
      properties: {
        type: { const: "GroupedSubquestionsGrid" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "integer" },
            questionContent: { type: "string" },
            subquestions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  prompt: { type: "string" },
                },
                required: ["prompt"],
              },
            },
          },
          required: ["questionNumber", "questionContent", "subquestions"],
        },
      },
      required: ["type", "id", "props"],
    },
    Heading: {
      type: "object",
      properties: {
        type: { const: "Heading" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            heading: { type: "string" },
          },
          required: ["heading"],
        },
      },
      required: ["type", "id", "props"],
    },
    Text: {
      type: "object",
      properties: {
        type: { const: "Text" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            text: { type: "string" },
          },
          required: ["text"],
        },
      },
      required: ["type", "id", "props"],
    },
  },
};

export default schema;
