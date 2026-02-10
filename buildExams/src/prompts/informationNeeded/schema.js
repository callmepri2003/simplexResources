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
              { $ref: "#/$defs/ExamTitlePage" },
              { $ref: "#/$defs/ExamSection" },
              { $ref: "#/$defs/ExamQuestion" },
              { $ref: "#/$defs/ExamAnswerSpace" },
              { $ref: "#/$defs/ExamMultipleChoice" },
              { $ref: "#/$defs/ExamPageBreak" },
              { $ref: "#/$defs/ExamReferenceSheet" },
              { $ref: "#/$defs/ExamResultsGuide" },
              { $ref: "#/$defs/ExamGraph" }
            ]
          }
        }
      },
      required: ["content"]
    }
  },
  required: ["type", "id", "props"],

  $defs: {
    ExamGraph: {
      type: "object",
      properties: {
        type: { const: "ExamGraph" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            description: { type: "string" },
            caption: { type: "string" },
            width: { type: "number" },
            height: { type: "number" },
            xAxisLabel: { type: "string" },
            yAxisLabel: { type: "string" },
            xDomain: {
              type: "array",
              items: { type: "number" },
              minItems: 2,
              maxItems: 2
            },
            yDomain: {
              type: "array",
              items: { type: "number" },
              minItems: 2,
              maxItems: 2
            },
            showGrid: { type: "boolean" },
            disableZoom: { type: "boolean" },
            equations: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  equation: { type: "string" },
                  label: { type: "string" },
                  color: { type: "string" },
                  graphType: { 
                    type: "string",
                    enum: ["polyline", "scatter", "interval"]
                  },
                  range: {
                    type: "array",
                    items: { type: "number" },
                    minItems: 2,
                    maxItems: 2
                  },
                  closed: { type: "boolean" },
                  skipTip: { type: "boolean" }
                },
                required: ["equation"]
              },
              minItems: 1
            }
          },
          required: ["equations"]
        }
      },
      required: ["type", "id", "props"]
    },
    ExamResultsGuide: {
      type: "object",
      properties: {
        type: { const: "ExamResultsGuide" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            totalMarks: { type: "number" },
            markRanges: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  level: { type: "string" },
                  minMark: { type: "number" },
                  maxMark: { type: "number" },
                  description: { type: "string" },
                  advice: { type: "string" }
                },
                required: ["level", "minMark"]
              }
            },
            generalAdvice: { type: "string" }
          }
        }
      },
      required: ["type", "id", "props"]
    },
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

    ExamTitlePage: {
      type: "object",
      properties: {
        type: { const: "ExamTitlePage" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            logoUrl: { type: "string" },
            examTitle: { type: "string" },
            subject: { type: "string" },
            examType: { type: "string" },
            instructions: {
              type: "array",
              items: { type: "string" }
            },
            totalMarks: { type: "number" },
            sections: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  section: { type: "string" },
                  marks: { type: "number" }
                },
                required: ["section", "marks"]
              }
            }
          },
          required: ["examTitle"]
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
            sectionNumber: { type: "string" },
            sectionTitle: { type: "string" },
            marks: { type: "number" },
            instructions: { type: "string" }
          },
          required: ["sectionNumber"]
        }
      },
      required: ["type", "id", "props"]
    },

    ExamQuestion: {
      type: "object",
      properties: {
        type: { const: "ExamQuestion" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            questionText: { type: "string" },
            marks: { type: "number" },
            parts: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  partLabel: { type: "string" },
                  text: { type: "string" },
                  marks: { type: "number" }
                },
                required: ["partLabel", "text"]
              }
            }
          },
          required: ["questionNumber"]
        }
      },
      required: ["type", "id", "props"]
    },

    ExamAnswerSpace: {
      type: "object",
      properties: {
        type: { const: "ExamAnswerSpace" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            label: { type: "string" },
            lines: { type: "number" },
            height: { type: "number" },
            ruled: { type: "boolean" },
            prompt: { type: "string" }
          }
        }
      },
      required: ["type", "id", "props"]
    },

    ExamMultipleChoice: {
      type: "object",
      properties: {
        type: { const: "ExamMultipleChoice" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            questionNumber: { type: "string" },
            questionText: { type: "string" },
            marks: { type: "number" },
            options: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  label: { type: "string" },
                  text: { type: "string" }
                },
                required: ["label", "text"]
              }
            }
          },
          required: ["questionNumber", "questionText", "options"]
        }
      },
      required: ["type", "id", "props"]
    },

    ExamPageBreak: {
      type: "object",
      properties: {
        type: { const: "ExamPageBreak" },
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

    ExamReferenceSheet: {
      type: "object",
      properties: {
        type: { const: "ExamReferenceSheet" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string" },
            sections: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  sectionTitle: { type: "string" },
                  formulas: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        label: { type: "string" },
                        formula: { type: "string" }
                      },
                      required: ["formula"]
                    }
                  }
                },
                required: ["formulas"]
              }
            }
          }
        }
      },
      required: ["type", "id", "props"]
    }
  }
};

export default schema;