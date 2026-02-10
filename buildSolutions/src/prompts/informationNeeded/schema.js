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
              { $ref: "#/$defs/ExampleComponent" },
              { $ref: "#/$defs/SolutionTitlePage" },
              { $ref: "#/$defs/SolutionSection" },
              { $ref: "#/$defs/SolutionAnswer" },
              { $ref: "#/$defs/SolutionWorkedSteps" },
              { $ref: "#/$defs/SolutionMarkingCriteria" },
              { $ref: "#/$defs/SolutionMultipleChoiceAnswer" },
              { $ref: "#/$defs/SolutionCommonMistakes" },
              { $ref: "#/$defs/SolutionKeyPoints" },
              { $ref: "#/$defs/SolutionAlternativeMethod" },
              { $ref: "#/$defs/SolutionPageBreak" },
              { $ref: "#/$defs/ExampleComponent" },
              { $ref: "#/$defs/SolutionTitlePage" },
              { $ref: "#/$defs/SolutionSection" },
              { $ref: "#/$defs/SolutionAnswer" },
              { $ref: "#/$defs/SolutionWorkedSteps" },
              { $ref: "#/$defs/SolutionMarkingCriteria" },
              { $ref: "#/$defs/SolutionMultipleChoiceAnswer" },
              { $ref: "#/$defs/SolutionCommonMistakes" },
              { $ref: "#/$defs/SolutionKeyPoints" },
              { $ref: "#/$defs/SolutionAlternativeMethod" },
              { $ref: "#/$defs/SolutionPageBreak" },
              { $ref: "#/$defs/ContentCard" },
              { $ref: "#/$defs/TwoColumnLayout" },
              { $ref: "#/$defs/CalloutBox" },
              { $ref: "#/$defs/IconHeader" },
              { $ref: "#/$defs/HighlightBox" },
              { $ref: "#/$defs/StepIndicator" },
              { $ref: "#/$defs/BadgeLabel" },
              { $ref: "#/$defs/DividerLine" },
              { $ref: "#/$defs/ImagePlaceholder" },
              { $ref: "#/$defs/QuickReference" }
            ]
          }
        }
      },
      required: ["content"]
    }
  },
  required: ["type", "id", "props"],

  $defs: {
    ExampleComponent: {
      type: "object",
      properties: {
        type: { const: "ExampleComponent" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            description: { type: "string" },
            items: {
              type: "array",
              items: { type: "string" }
            }
          },
          required: ["title"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionTitlePage: {
      type: "object",
      properties: {
        type: { const: "SolutionTitlePage" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            logoUrl: { type: "string" },
            examTitle: { type: "string" },
            subject: { type: "string" },
            examType: { type: "string" },
            notes: {
              type: "array",
              items: { type: "string" }
            },
            totalMarks: { type: "number" }
          },
          required: ["examTitle"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionSection: {
      type: "object",
      properties: {
        type: { const: "SolutionSection" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            sectionNumber: { type: "string" },
            sectionTitle: { type: "string" },
            marks: { type: "number" }
          },
          required: ["sectionNumber"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionAnswer: {
      type: "object",
      properties: {
        type: { const: "SolutionAnswer" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            marks: { type: "number" },
            answer: { type: "string" },
            explanation: { type: "string" },
            parts: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  partLabel: { type: "string" },
                  marks: { type: "number" },
                  answer: { type: "string" },
                  explanation: { type: "string" }
                },
                required: ["partLabel"]
              }
            }
          },
          required: ["questionNumber"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionWorkedSteps: {
      type: "object",
      properties: {
        type: { const: "SolutionWorkedSteps" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            partLabel: { type: "string" },
            marks: { type: "number" },
            steps: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  description: { type: "string" },
                  working: { type: "string" },
                  explanation: { type: "string" }
                }
              }
            },
            finalAnswer: { type: "string" }
          },
          required: ["questionNumber", "steps"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionMarkingCriteria: {
      type: "object",
      properties: {
        type: { const: "SolutionMarkingCriteria" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            partLabel: { type: "string" },
            criteria: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  marks: { type: "number" },
                  description: { type: "string" },
                  requirements: {
                    type: "array",
                    items: { type: "string" }
                  }
                },
                required: ["marks", "description"]
              }
            },
            totalMarks: { type: "number" }
          },
          required: ["questionNumber", "criteria"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionMultipleChoiceAnswer: {
      type: "object",
      properties: {
        type: { const: "SolutionMultipleChoiceAnswer" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            marks: { type: "number" },
            correctAnswer: { type: "string" },
            explanation: { type: "string" },
            distractorAnalysis: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  option: { type: "string" },
                  reason: { type: "string" }
                },
                required: ["option", "reason"]
              }
            }
          },
          required: ["questionNumber", "correctAnswer"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionCommonMistakes: {
      type: "object",
      properties: {
        type: { const: "SolutionCommonMistakes" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            partLabel: { type: "string" },
            mistakes: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  description: { type: "string" },
                  correction: { type: "string" }
                },
                required: ["title", "description"]
              }
            }
          },
          required: ["questionNumber", "mistakes"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionKeyPoints: {
      type: "object",
      properties: {
        type: { const: "SolutionKeyPoints" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            points: {
              type: "array",
              items: { type: "string" }
            },
            formulaReminder: { type: "string" }
          },
          required: ["points"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionAlternativeMethod: {
      type: "object",
      properties: {
        type: { const: "SolutionAlternativeMethod" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            partLabel: { type: "string" },
            methodName: { type: "string" },
            description: { type: "string" },
            steps: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  description: { type: "string" },
                  working: { type: "string" }
                }
              }
            },
            finalAnswer: { type: "string" },
            comparison: { type: "string" }
          },
          required: ["questionNumber", "steps"]
        }
      },
      required: ["type", "id", "props"]
    },

    SolutionPageBreak: {
      type: "object",
      properties: {
        type: { const: "SolutionPageBreak" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            showEndMarker: { type: "boolean" }
          }
        }
      },
      required: ["type", "id", "props"]
    },
  }
};

export default schema;