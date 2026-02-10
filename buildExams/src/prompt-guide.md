Act as an expert NSW Mathematics Teacher with 20 years of experience. Generate JSON that I will parse as react following the generic JSON schema below that I normally use for making resources.

------- Between the dashed lines is the text i change between prompts ----------

special case: i have a trial lesson with a year 5 child doing selective practise, I need a resource to go through,
that covers whatever you think is good for the first trial lesson (1 hour) This is nothign like the other resources btw in most regards. Also this is not just numeracy, or english or whatever. everything.

---------------------- ----------
## JSON Schema

```
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
}

schema
```

## Component Tree

```
[
  {
    "component": "ExampleComponent",
    "usage": "Use this as a sample component to demonstrate structure and integration."
  },
  {
    "component": "ExamTitlePage",
    "children": [],
    "usage": "Creates the title page for an HSC-style exam with logo, exam title, subject, instructions, and marks breakdown. Should be the first component in an exam."
  },
  {
    "component": "ExamSection",
    "children": [],
    "usage": "Marks the beginning of a new exam section with section number, title, marks allocation, and specific instructions."
  },
  {
    "component": "ExamQuestion",
    "children": [],
    "usage": "Displays a structured exam question with question number, text, optional multi-part questions (a, b, c, etc.), and mark allocations. Supports HTML formatting in question text."
  },
  {
    "component": "ExamAnswerSpace",
    "children": [],
    "usage": "Provides a designated answer space for students with optional ruled lines, customizable height, and optional prompts. Can be labeled for specific question parts."
  },
  {
    "component": "ExamMultipleChoice",
    "children": [],
    "usage": "Displays a multiple choice question with options labeled (A), (B), (C), (D), etc. Includes question number, text, and mark allocation."
  },
  {
    "component": "ExamPageBreak",
    "children": [],
    "usage": "Forces a page break in the exam paper, optionally showing an 'End of Section' marker. Essential for print layouts."
  },
  {
    "component": "ExamReferenceSheet",
    "children": [],
    "usage": "Displays a reference sheet with formulas organized by sections. Typically appears at the beginning or end of an exam. Supports HTML formatting for mathematical formulas."
  },
  {
    "component": "ExamResultsGuide",
    "children": [],
    "usage": "(Only use when asked for) Provides a parent-friendly guide to interpreting exam results with mark ranges, performance levels, and actionable advice for each achievement level. Typically placed at the end of an exam or on a separate results interpretation page."
  },
  {
    "component": "ExamGraph",
    "children": [],
    "usage": "Renders mathematical equation graphs using Function Plot library. Supports multiple equations on the same graph, customizable axes ranges and labels, grid display, and various graph types (polyline, scatter, interval). Equations use mathematical notation (e.g., 'x^2', 'sin(x)', '2*x + 3'). Perfect for displaying functions, comparing multiple equations, or illustrating mathematical concepts in exam questions."
  }
]
```

## General Tips

- don't rely on GeneralPurpose component too much as it is prone to formatting errors, and if you use it just make sure its super basic so theres not much opportunity for error
- this is aimed at high achievers to all questions should be on the difficult end of the year level
- volume is a huge factor for parents, they don't like short homework/resources
- the 'workshop', 'homework', 'inclass', '2 hours' all this stuff is backend stuff and should be abstracted from the resources.
- keep the headings succint, because they're large
- Each document's first heading should be which week it is like 'week 1', 'week 2', etc
- Use Australian spellings
- 2 headings shouldn't go next to each other
- If you are generating homework as opposed to class work, make sure there's enough volume of questions, quantity matters just as much as quality, think about other tutoring resources.
- Always provide LaTeX as a single-line, JSON-escaped string wrapped in \\begin{align*} ... \\end{align*} with all backslashes doubled (\\). Avoid using $$, \(, or multiline LaTeX, as only this format works reliably.
