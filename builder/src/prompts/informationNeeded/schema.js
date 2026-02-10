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
              { $ref: "#/$defs/WeeklyTitle" },
              { $ref: "#/$defs/ExplanationBox" },
              { $ref: "#/$defs/KeyTakeaway" },
              { $ref: "#/$defs/PractiseQuestions" },
              { $ref: "#/$defs/GeneralPurpose" },
              { $ref: "#/$defs/Heading" },
              { $ref: "#/$defs/Text" },
              { $ref: "#/$defs/StepByStepSolution" },
              { $ref: "#/$defs/FormulaCard" },
              { $ref: "#/$defs/TermTitlePage" },
              { $ref: "#/$defs/ContentPlaceholder" },
              { $ref: "#/$defs/Angle" },
              { $ref : "#/$defs/RetrievalPractice" },
              { $ref: "#/$defs/CommonMisconception" },
              { $ref: "#/$defs/WorkedErrorExample" },
              { $ref: "#/$defs/MetacognitivePrompt" },
              { $ref: "#/$defs/ConceptComparison" },
              { $ref: "#/$defs/MultipleRepresentation" },
              { $ref: "#/$defs/HomeworkComment" }
            ],
          },
        },
      },
      required: ["content"],
    },
  },
  required: ["type", "id", "props"],
  $defs: {
    RetrievalPractice: {
      type: "object",
      properties: {
        type: { const: "RetrievalPractice" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            subtitle: { type: "string" },
            questions: {
              type: "array",
              items: { type: "string" },
              minItems: 1
            }
          },
          required: ["questions"]
        }
      },
      required: ["type", "id", "props"]
    },

    CommonMisconception: {
      type: "object",
      properties: {
        type: { const: "CommonMisconception" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            misconception: { type: "string" },
            reality: { type: "string" },
            explanation: { type: "string" }
          },
          required: ["misconception", "reality"]
        }
      },
      required: ["type", "id", "props"]
    },

    WorkedErrorExample: {
      type: "object",
      properties: {
        type: { const: "WorkedErrorExample" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            problem: { type: "string" },
            steps: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  incorrectWork: { type: "string" },
                  errorExplanation: { type: "string" }
                },
                required: ["incorrectWork", "errorExplanation"]
              },
              minItems: 1
            },
            correctApproach: { type: "string" }
          },
          required: ["problem", "steps"]
        }
      },
      required: ["type", "id", "props"]
    },

    MetacognitivePrompt: {
      type: "object",
      properties: {
        type: { const: "MetacognitivePrompt" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            prompt: { type: "string" }
          },
          required: ["prompt"]
        }
      },
      required: ["type", "id", "props"]
    },

    ConceptComparison: {
      type: "object",
      properties: {
        type: { const: "ConceptComparison" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            concept1: { type: "string" },
            concept2: { type: "string" },
            rows: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  aspect: { type: "string" },
                  concept1Value: { type: "string" },
                  concept2Value: { type: "string" }
                },
                required: ["aspect", "concept1Value", "concept2Value"]
              },
              minItems: 1
            }
          },
          required: ["title", "concept1", "concept2", "rows"]
        }
      },
      required: ["type", "id", "props"]
    },

    MultipleRepresentation: {
      type: "object",
      properties: {
        type: { const: "MultipleRepresentation" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            numerical: { type: "string" },
            algebraic: { type: "string" },
            graphical: { type: "string" },
            verbal: { type: "string" }
          },
          required: ["title"]
        }
      },
      required: ["type", "id", "props"]
    },

    HomeworkComment: {
      type: "object",
      properties: {
        type: { const: "HomeworkComment" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {}
        }
      },
      required: ["type", "id", "props"]
    },
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
    StepByStepSolution: {
      type: "object",
      properties: {
        type: { const: "StepByStepSolution" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            steps: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  description: { type: "string" },
                  work: { type: "string" },
                  explanation: { type: "string" },
                },
                required: ["id", "work"],
              },
              minItems: 1,
            },
          },
          required: ["title", "steps"],
        },
      },
      required: ["type", "id", "props"],
    },
    FormulaCard: {
      type: "object",
      properties: {
        type: { const: "FormulaCard" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            formula: { type: "string" },
            description: { type: "string" },
            variables: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  symbol: { type: "string" },
                  description: { type: "string" },
                  units: { type: "string" }
                },
                required: ["symbol", "description"]
              }
            },
            whenToUse: { type: "string" },
            examples: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  scenario: { type: "string" },
                  calculation: { type: "string" },
                  result: { type: "string" }
                },
                required: ["scenario", "calculation"]
              }
            }
          },
          required: ["title", "formula"]
        }
      },
      required: ["type", "id", "props"]
    },
    WeeklyTitle: {
      type: "object",
      properties: {
        type: { const: "WeeklyTitle" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            weekNumber: { type: "integer" },
            title: { type: "string" },
            description: { type: "string" },
            objectives: {
              type: "array",
              items: { type: "string" }
            },
            parentInfo: { type: "string" },
            studentInfo: { type: "string" },
            resourceType: {
              type: "string",
              enum: ["in-class", "homework"],
              default: "in-class"
            }
          },
          required: ["weekNumber", "title"]
        }
      },
      required: ["type", "id", "props"]
    },
    TermTitlePage: {
      type: "object",
      properties: {
        type: { const: "TermTitlePage" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            termNumber: { type: "integer" },
            termTitle: { type: "string" },
            termDescription: { type: "string" },
            academicYear: { type: "string" },
            subject: { type: "string" },
            weeklyBreakdown: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  weekNumber: { type: "integer" },
                  title: { type: "string" },
                  description: { type: "string" },
                  topics: {
                    type: "array",
                    items: { type: "string" }
                  }
                },
                required: ["weekNumber", "title"]
              }
            },
            termObjectives: {
              type: "array",
              items: { type: "string" }
            },
            assessmentInfo: { type: "string" },
            importantDates: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  event: { type: "string" },
                  date: { type: "string" }
                },
                required: ["event", "date"]
              }
            }
          },
          required: ["termNumber", "termTitle", "subject"]
        }
      },
      required: ["type", "id", "props"]
    },
    ContentPlaceholder: {
      type: "object",
      properties: {
        type: { const: "ContentPlaceholder" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            placeholderText: { type: "string" },
            suggestedContent: { type: "string" },
            height: { type: "string" }
          },
          required: ["placeholderText"]
        }
      },
      required: ["type", "id", "props"]
    },
    Angle: {
      type: "object",
      properties: {
        type: { const: "Angle" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            degrees: { 
              type: "number", 
              minimum: 0, 
              maximum: 360,
              description: "The angle measurement in degrees"
            },
            showLabel: { 
              type: "boolean", 
              default: true,
              description: "Whether to display the degree label"
            },
            showArc: { 
              type: "boolean", 
              default: true,
              description: "Whether to display the angle arc"
            },
            showRays: { 
              type: "boolean", 
              default: true,
              description: "Whether to display the angle rays"
            },
            rayLength: { 
              type: "number", 
              minimum: 40, 
              maximum: 120,
              description: "Length of the angle rays in pixels"
            },
            arcRadius: { 
              type: "number", 
              minimum: 15, 
              maximum: 50,
              description: "Radius of the angle arc in pixels"
            },
            labelOffset: { 
              type: "number", 
              minimum: 5, 
              maximum: 20,
              description: "Distance of label from arc in pixels"
            },
            size: { 
              type: "string", 
              enum: ["small", "medium", "large"], 
              default: "medium",
              description: "Predefined size configuration"
            },
            color: { 
              type: "string", 
              default: "#007bff",
              description: "Color of the angle visualization (hex, rgb, or named color)"
            }
          },
          required: ["degrees"],
        },
      },
      required: ["type", "id", "props"],
    }
  },
};

export default schema;
