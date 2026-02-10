Act as an expert NSW Mathematics Teacher with 20 years of experience. Generate JSON that I will parse as react following the generic JSON schema below that I normally use for making resources.

------- Between the dashed lines is the text i change between prompts ----------

Make a 45 minute maths assessment for a year 3 student, at the end include a section for the parents that gives a detailed outline that corresponds how many marks they got correct to where they lie amongst the rest of year 3 students in Australia.

Be as detailed as possible, even differentiate individual topics if you can.

(Yes, this is a test not a resource)

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
              { $ref: "#/$defs/Angle" }
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
}

schema
```

## Component Tree

```
[
  {
    "ExplanationBox": [
      {
        "ExplanationBoxText": []
      },
      {
        "ExplanationBoxFormula": []
      },
      {
        "ExplanationBoxList": []
      }
    ],
    "useage": "Use to highlight important parts of the explanation."
  },
  {
    "KeyTakeaway": [],
    "useage": "Use to highlight quick important dot points."
  },
  {
    "PractiseQuestions": [
      {
        "MultipleChoiceQuestion": []
      },
      {
        "FillInTheBlanksQuestion": []
      },
      {
        "ShortAnswerQuestion": []
      },
      {
        "GroupedSubquestionsGrid": []
      }
    ]
  },
  {
    "GeneralPurpose": [],
    "useage": "Used in cases that call for components that aren't offered."
  },
  {
    "Heading": []
  },
  {
    "Text": [],
    "useage": "Use this mainly for explanations. This is the default text."
  },
  {
    "StepByStepSolution": [],
    "usage": "Use to show step-by-step problem solving with explanations. Each step can include the mathematical work and reasoning behind it. Perfect for demonstrating equation solving, algebraic manipulation, or multi-step calculations where students need to follow the logical progression."
  },
  {
    "FormulaCard": [],
    "usage": "Use to display important formulas with explanations, variable definitions, usage context, and practical examples. Perfect for mathematical equations, scientific formulas, or any formula that students need to understand and apply."
  },
  {
    "WeeklyTitle": [],
    "usage": "Use at the very beginning of each week's content. Creates a professional full-page introduction with week number, title, description, learning objectives, and important information for both parents and students. Should only appear once per week and never be repeated within the same week's content."
  },
  {
    "TermTitlePage": [],
    "usage": "Use at the very beginning of each 10-week term (I will explicitly prompt it). Creates a comprehensive, professional title page with term overview, weekly breakdown, learning objectives, assessment information, and important dates. Should only appear once per term - typically used every 10 weeks to introduce the entire term's learning journey."
  },
  {
    "ContentPlaceholder": [],
    "usage": "Use when content requires manual creation (diagrams, complex images, interactive elements). Provides clear visual indication that human intervention is needed and includes instructions for easy replacement with actual content."
  },
  {
    "Angle": [],
    "usage": "Use to display geometric angles with precise visual representation. Supports various customization options including size, color, and visibility of components (rays, arc, label). Replaces the unreliable GeneralPurpose component for angle visualization with consistent, scalable SVG rendering."
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
