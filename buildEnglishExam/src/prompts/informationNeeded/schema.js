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
              { $ref: "#/$defs/ExamHeader" },
              { $ref: "#/$defs/ExamSection" },
              { $ref: "#/$defs/ReadingPassage" },
              { $ref: "#/$defs/ComprehensionQuestion" },
              { $ref: "#/$defs/WritingLines" },
              { $ref: "#/$defs/MultipleChoiceExam" },
              { $ref: "#/$defs/VocabularyQuestion" },
              { $ref: "#/$defs/GrammarQuestion" },
              { $ref: "#/$defs/WritingPrompt" },
              { $ref: "#/$defs/ImagePlaceholder" },
              { $ref: "#/$defs/AnswerBox" }
            ]
          }
        }
      },
      required: ["content"]
    }
  },
  required: ["type", "id", "props"],

  $defs: {
    ExamHeader: {
      type: "object",
      properties: {
        type: { const: "ExamHeader" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            subtitle: { type: "string" },
            timeAllowed: { type: "string" }
          },
          required: ["title"]
        }
      },
      required: ["type", "id", "props"]
    },

    ExamSection: {
      type: "object",
      properties: {
        type: { const: "ExamSection" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            instructions: { type: "string" },
            marks: { type: "number" }
          },
          required: ["title"]
        }
      },
      required: ["type", "id", "props"]
    },

    ReadingPassage: {
      type: "object",
      properties: {
        type: { const: "ReadingPassage" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            author: { type: "string" },
            paragraphs: {
              type: "array",
              items: { type: "string" }
            },
            image: { type: "string" },
            imageAlt: { type: "string" },
            imageCaption: { type: "string" }
          },
          required: ["title", "paragraphs"]
        }
      },
      required: ["type", "id", "props"]
    },

    ComprehensionQuestion: {
      type: "object",
      properties: {
        type: { const: "ComprehensionQuestion" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            question: { type: "string" },
            marks: { type: "number" },
            subQuestions: {
              type: "array",
              items: { type: "string" }
            }
          },
          required: ["questionNumber", "question"]
        }
      },
      required: ["type", "id", "props"]
    },

    WritingLines: {
      type: "object",
      properties: {
        type: { const: "WritingLines" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            lines: { type: "number" },
            lineHeight: { type: "string" },
            prompt: { type: "string" }
          },
          required: []
        }
      },
      required: ["type", "id", "props"]
    },

    MultipleChoiceExam: {
      type: "object",
      properties: {
        type: { const: "MultipleChoiceExam" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            question: { type: "string" },
            options: {
              type: "array",
              items: { type: "string" },
              minItems: 2
            },
            marks: { type: "number" }
          },
          required: ["questionNumber", "question", "options"]
        }
      },
      required: ["type", "id", "props"]
    },

    VocabularyQuestion: {
      type: "object",
      properties: {
        type: { const: "VocabularyQuestion" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            question: { type: "string" },
            word: { type: "string" },
            context: { type: "string" },
            marks: { type: "number" }
          },
          required: ["questionNumber", "question"]
        }
      },
      required: ["type", "id", "props"]
    },

    GrammarQuestion: {
      type: "object",
      properties: {
        type: { const: "GrammarQuestion" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            question: { type: "string" },
            sentence: { type: "string" },
            instruction: { type: "string" },
            marks: { type: "number" }
          },
          required: ["questionNumber", "question"]
        }
      },
      required: ["type", "id", "props"]
    },

    WritingPrompt: {
      type: "object",
      properties: {
        type: { const: "WritingPrompt" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            prompt: { type: "string" },
            stimulusImage: { type: "string" },
            stimulusImageAlt: { type: "string" },
            requirements: {
              type: "array",
              items: { type: "string" }
            },
            wordCount: { type: "string" },
            marks: { type: "number" }
          },
          required: ["title", "prompt"]
        }
      },
      required: ["type", "id", "props"]
    },

    ImagePlaceholder: {
      type: "object",
      properties: {
        type: { const: "ImagePlaceholder" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            imageUrl: { type: "string" },
            alt: { type: "string" },
            caption: { type: "string" },
            description: { type: "string" },
            maxWidth: { type: "string" },
            maxHeight: { type: "string" },
            height: { type: "string" }
          },
          required: []
        }
      },
      required: ["type", "id", "props"]
    },

    AnswerBox: {
      type: "object",
      properties: {
        type: { const: "AnswerBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            label: { type: "string" },
            height: { type: "string" }
          },
          required: []
        }
      },
      required: ["type", "id", "props"]
    }
  }
};

export default schema;