Act as an expert NSW Mathematics Teacher with 20 years of experience. Generate JSON that I will parse as react following the generic JSON schema below that I normally use for making **SOLUTIONS**

------- Between the dashed lines is the text i change between prompts ----------

Make a worksheet on logs and tailor it to year 11 advanced maths arithmetic and geometric series questions. Follow the proper LaTeX rules

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
              { $ref: "#/$defs/SolutionTitlePage" },
              { $ref: "#/$defs/SolutionSection" },
              { $ref: "#/$defs/SolutionAnswer" },
              { $ref: "#/$defs/SolutionWorkedSteps" },
              { $ref: "#/$defs/SolutionMarkingCriteria" },
              { $ref: "#/$defs/SolutionMultipleChoiceAnswer" },
              { $ref: "#/$defs/SolutionCommonMistakes" },
              { $ref: "#/$defs/SolutionKeyPoints" },
              { $ref: "#/$defs/SolutionAlternativeMethod" },
              { $ref: "#/$defs/SolutionPageBreak" }
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
    "component": "SolutionTitlePage",
    "children": [],
    "usage": "Creates the title page for an HSC-style exam solution bank with logo, exam title, subject, and solution guide information. Should be the first component in a solution document."
  },
  {
    "component": "SolutionSection",
    "children": [],
    "usage": "Marks the beginning of a new section in the solution bank, corresponding to exam sections. Groups solutions by section number and title."
  },
  {
    "component": "SolutionAnswer",
    "children": [],
    "usage": "Displays a simple answer with optional explanation for a question. Supports multi-part questions with separate answers and explanations for each part. Best for straightforward answers that don't require detailed working."
  },
  {
    "component": "SolutionWorkedSteps",
    "children": [],
    "usage": "Provides detailed step-by-step working for a question, showing each calculation or reasoning step with descriptions and explanations. Includes a highlighted final answer. Ideal for complex mathematical problems."
  },
  {
    "component": "SolutionMarkingCriteria",
    "children": [],
    "usage": "Displays the marking criteria and rubric for a question, breaking down how marks are allocated and what requirements must be met. Essential for understanding how answers are assessed."
  },
  {
    "component": "SolutionMultipleChoiceAnswer",
    "children": [],
    "usage": "Shows the correct answer for a multiple choice question with explanation. Optionally includes distractor analysis explaining why incorrect options are wrong. Helps students understand common traps."
  },
  {
    "component": "SolutionCommonMistakes",
    "children": [],
    "usage": "Highlights common errors students make on a particular question, explaining what the mistake is and how to correct it. Displayed with warning styling to draw attention."
  },
  {
    "component": "SolutionKeyPoints",
    "children": [],
    "usage": "Summarizes key concepts, formulas, or techniques relevant to a question. Can include formula reminders. Useful for reinforcing important learning points."
  },
  {
    "component": "SolutionAlternativeMethod",
    "children": [],
    "usage": "Presents an alternative approach to solving a question with step-by-step working. Shows students that multiple valid solution methods exist. Can include comparison notes about when each method is preferable."
  },
  {
    "component": "SolutionPageBreak",
    "children": [],
    "usage": "Forces a page break in the solution document, optionally showing an 'End of Section Solutions' marker. Essential for print layouts and organizing solutions by section."
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
