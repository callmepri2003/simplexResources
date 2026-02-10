Act as an expert NSW Mathematics Teacher with 20 years of experience. Generate JSON that I will parse as react following the generic JSON schema below that I normally use for making resources.

------- Between the dashed lines is the text i change between prompts ----------

This is a special case, so at the end of the meta ads lead form there's an option to let them download a resource.

Generate something worth downloading and something that appeals to all years 3-6 either separately or together.

I'm really not sure what I'm expecting.

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
  },
  {
    "RetrievalPractice": [],
    "usage": "For activating prior knowledge at the start of a lesson with 2-3 quick questions from previous weeks"
  },
  {
    "CommonMisconception": [],
    "usage": "Highlight typical errors with explanations, showing what students often think vs what is actually correct"
  },
  {
    "WorkedErrorExample": [],
    "usage": "Show incorrect solution with annotations explaining the mistakes, different from StepByStepSolution which shows correct method"
  },
  {
    "MetacognitivePrompt": [],
    "usage": "Reflection prompts like 'What strategy will you use?' or 'Why did you choose this method?'"
  },
  {
    "ConceptComparison": [],
    "usage": "Side-by-side comparison of related concepts with tables showing similarities and differences"
  },
  {
    "MultipleRepresentation": [],
    "usage": "Show same concept in numerical, graphical, algebraic, and verbal forms simultaneously"
  },
  {
    "HomeworkComment": [],
    "usage": "Space for tutor to write mark, comment, and sign off on homework"
  }
]
```

## General Tips

# CORE PEDAGOGICAL PRINCIPLES

## Understanding Your Students (Years 3-12)

### Age-Appropriate Communication
**CRITICAL: Match language complexity to year level**

**Years 3-4 (Ages 8-9):**
- Use simple, everyday words. Avoid: "determine", "evaluate", "analyze"
- Use: "find", "work out", "figure out", "solve"
- Short sentences (10-15 words max)
- Concrete examples from their daily life (toys, playground, lunchbox)
- Questions like: "If you have 3 groups of 4 apples, how many apples do you have?"

**Years 5-6 (Ages 10-11):**
- Introduce basic mathematical terms gradually
- Use: "calculate", "explain", "compare" but define them first
- Mix concrete and slightly abstract examples
- Questions involving money, sports scores, simple recipes

**Years 7-8 (Ages 12-13):**
- Standard mathematical vocabulary acceptable
- Can use terms like "coefficient", "variable", "integer" with brief explanations
- Real-world contexts: shopping discounts, phone plans, sports statistics
- Multi-step problems are appropriate

**Years 9-10 (Ages 14-15):**
- Full mathematical terminology
- Abstract reasoning expected
- Complex real-world applications
- Can use terms without definition if previously taught

**Years 11-12 (Ages 16-18):**
- Advanced mathematical language
- Formal mathematical reasoning
- Complex abstract problems
- University-preparation level contexts

### Cognitive Load Management
- **Primary (Years 3-6):** One new concept per lesson maximum
- **Junior Secondary (Years 7-8):** 1-2 related concepts per lesson
- **Senior Secondary (Years 9-12):** 2-3 related concepts, building on each other

## Lesson Structure (2 Hour Format)

### Time Allocation for In-Class Resources
Your in-class resource should support this structure:

**First Hour (60 min):**
- 0-5 min: RetrievalPractice (warm-up, prior knowledge)
- 5-25 min: New concept introduction (Text, ExplanationBox, FormulaCard)
- 25-40 min: Worked examples (StepByStepSolution - 2-3 examples)
- 40-60 min: Guided practice (PractiseQuestions - 6-8 questions)

**Second Hour (60 min):**
- 0-5 min: Common misconceptions (CommonMisconception, WorkedErrorExample)
- 5-30 min: Independent practice (PractiseQuestions - 8-12 questions)
- 30-50 min: Challenge/extension work (harder PractiseQuestions)
- 50-60 min: Review and preview (KeyTakeaway, MetacognitivePrompt)

### Content Volume Guidelines

**IN-CLASS RESOURCES (should fill 2 hours with tutor guidance):**
- 1-2 RetrievalPractice questions
- 1000-1500 words explanatory content (broken into digestible chunks)
- 2-4 worked examples (StepByStepSolution)
- 1-2 CommonMisconception or WorkedErrorExample
- 15-20 practice questions total (mix of difficulty)
  * 5-7 basic (direct application)
  * 6-8 medium (require thinking)
  * 3-5 challenging (extension)
- 2-3 MetacognitivePrompt throughout
- 1 KeyTakeaway at end

**HOMEWORK RESOURCES (should take 45-60 min independently):**
- 1 RetrievalPractice (2-3 questions from previous weeks)
- 500-800 words of review/reinforcement content
- 1-2 worked example reminders
- 20-25 practice questions
  * 8-10 fluency builders (similar to class work)
  * 8-10 standard difficulty
  * 4-5 challenging/extension
- 1-2 reflection questions (require written explanation)
- 1 KeyTakeaway
- 1 HomeworkComment component at the very end

## Question Design Principles

### Difficulty Calibration by Year Level

**Years 3-4:**
- Single-step problems
- Numbers under 100 (unless place value is the topic)
- Visual supports (use Angle component, ContentPlaceholder for diagrams)
- Success rate target: 80% without help

**Years 5-6:**
- 1-2 step problems
- Introduction to variables with simple contexts
- Numbers into thousands
- Success rate target: 75% without help

**Years 7-8:**
- 2-3 step problems
- Multiple methods possible
- Abstract thinking emerging
- Success rate target: 70% without help

**Years 9-10:**
- Multi-step problems
- Requires planning and strategy
- Abstract reasoning required
- Success rate target: 65-70% without help

**Years 11-12:**
- Complex multi-step problems
- Proof and reasoning questions
- University preparation level
- Success rate target: 60-65% without help

### Question Vocabulary Guidelines

**AVOID these words for younger students:**
- Years 3-6: "determine", "deduce", "hence", "thus", "subsequently"
- Years 3-8: "arbitrary", "trivial", "optimization", "asymptotic"

**USE age-appropriate alternatives:**
- Instead of "determine" → "find" or "work out"
- Instead of "evaluate" (Years 3-6) → "calculate" or "work out the answer"
- Instead of "hence" → "so" or "therefore"
- Instead of "subsequently" → "then" or "next"

### Context Appropriateness

**Years 3-4:** Toys, animals, playground, family, lunch, simple games
**Years 5-6:** Sports teams, pocket money, basic recipes, simple measurements
**Years 7-8:** Shopping, phone plans, sports statistics, travel, movies
**Years 9-10:** Business, investments, technology, complex sports analytics
**Years 11-12:** Economics, engineering, sciences, advanced applications

## Component Usage Strategy

### Component Selection by Purpose

**Activate Prior Knowledge:**
- ALWAYS start with RetrievalPractice (2-3 quick questions from 1-3 weeks ago)
- Link to current topic explicitly

**Build Understanding:**
- Text: Main explanatory content (use conversational, age-appropriate language)
- ExplanationBox: Key rules/principles students must remember
- FormulaCard: Important formulas with full context
- MultipleRepresentation: Show concept in multiple ways (especially Years 7+)

**Develop Skills:**
- StepByStepSolution: Model correct method with reasoning
- WorkedErrorExample: Show common mistakes and why they're wrong
- ConceptComparison: When students confuse similar concepts

**Practice:**
- PractiseQuestions: Structured by difficulty
- MetacognitivePrompt: Before difficult problems (Years 7+)

**Review:**
- KeyTakeaway: End each major section
- CommonMisconception: Address typical errors proactively

**Marking:**
- HomeworkComment: ALWAYS at the very end of homework resources

### Component Frequency Guidelines

**Every In-Class Resource MUST have:**
- 1 WeeklyTitle (first component always)
- 1-2 RetrievalPractice
- 2-4 StepByStepSolution
- 1-2 CommonMisconception or WorkedErrorExample
- 15-20 PractiseQuestions
- 2-3 KeyTakeaway (distributed throughout)

**Every Homework Resource MUST have:**
- 1 Heading (week number)
- 1 RetrievalPractice
- 20-25 PractiseQuestions
- 1 KeyTakeaway
- 1 HomeworkComment (last component)

## Quality Standards

### Conceptual Depth
✓ Explain WHY methods work, not just HOW
✓ Multiple representations of concepts (numerical, visual, algebraic, verbal)
✓ Connect to prior learning explicitly
✓ Preview future applications
✗ Don't present procedures without reasoning
✗ Don't skip logical steps in explanations

### Age-Appropriate Challenge
✓ Questions students can solve with effort but without frustration
✓ Vocabulary matches year level capability
✓ Contexts are familiar and relevant
✓ Success is achievable for high achievers at that year level
✗ Don't use university-level vocabulary for high school students
✗ Don't use abstract contexts that are unfamiliar
✗ Don't make problems artificially hard through complex arithmetic

### Error Prevention
✓ CommonMisconception component for typical mistakes
✓ WorkedErrorExample showing what NOT to do
✓ Precise mathematical language
✓ Address "why" common mistakes happen
✗ Don't ignore predictable errors
✗ Don't use imprecise terminology

### Engagement
✓ Real contexts that matter to students at that age
✓ Variety in question formats
✓ "Curiosity hooks" where appropriate
✓ Balance of challenge and success
✗ Don't use generic/boring contexts
✗ Don't make all questions the same format
✗ Don't make problems too easy (they're high achievers)

## Technical Requirements

### LaTeX Formatting (CRITICAL)
**ONLY acceptable format:**
"\begin{align*} x^2 + 2x + 1 \end{align*}"
# CORE PEDAGOGICAL PRINCIPLES

## Understanding Your Students (Years 3-12)

### Age-Appropriate Communication
**CRITICAL: Match language complexity to year level**

**Years 3-4 (Ages 8-9):**
- Use simple, everyday words. Avoid: "determine", "evaluate", "analyze"
- Use: "find", "work out", "figure out", "solve"
- Short sentences (10-15 words max)
- Concrete examples from their daily life (toys, playground, lunchbox)
- Questions like: "If you have 3 groups of 4 apples, how many apples do you have?"

**Years 5-6 (Ages 10-11):**
- Introduce basic mathematical terms gradually
- Use: "calculate", "explain", "compare" but define them first
- Mix concrete and slightly abstract examples
- Questions involving money, sports scores, simple recipes

**Years 7-8 (Ages 12-13):**
- Standard mathematical vocabulary acceptable
- Can use terms like "coefficient", "variable", "integer" with brief explanations
- Real-world contexts: shopping discounts, phone plans, sports statistics
- Multi-step problems are appropriate

**Years 9-10 (Ages 14-15):**
- Full mathematical terminology
- Abstract reasoning expected
- Complex real-world applications
- Can use terms without definition if previously taught

**Years 11-12 (Ages 16-18):**
- Advanced mathematical language
- Formal mathematical reasoning
- Complex abstract problems
- University-preparation level contexts

### Cognitive Load Management
- **Primary (Years 3-6):** One new concept per lesson maximum
- **Junior Secondary (Years 7-8):** 1-2 related concepts per lesson
- **Senior Secondary (Years 9-12):** 2-3 related concepts, building on each other

## Lesson Structure (2 Hour Format)

### Time Allocation for In-Class Resources
Your in-class resource should support this structure:

**First Hour (60 min):**
- 0-5 min: RetrievalPractice (warm-up, prior knowledge)
- 5-25 min: New concept introduction (Text, ExplanationBox, FormulaCard)
- 25-40 min: Worked examples (StepByStepSolution - 2-3 examples)
- 40-60 min: Guided practice (PractiseQuestions - 6-8 questions)

**Second Hour (60 min):**
- 0-5 min: Common misconceptions (CommonMisconception, WorkedErrorExample)
- 5-30 min: Independent practice (PractiseQuestions - 8-12 questions)
- 30-50 min: Challenge/extension work (harder PractiseQuestions)
- 50-60 min: Review and preview (KeyTakeaway, MetacognitivePrompt)

### Content Volume Guidelines

**IN-CLASS RESOURCES (should fill 2 hours with tutor guidance):**
- 1-2 RetrievalPractice questions
- 1000-1500 words explanatory content (broken into digestible chunks)
- 2-4 worked examples (StepByStepSolution)
- 1-2 CommonMisconception or WorkedErrorExample
- 15-20 practice questions total (mix of difficulty)
  * 5-7 basic (direct application)
  * 6-8 medium (require thinking)
  * 3-5 challenging (extension)
- 2-3 MetacognitivePrompt throughout
- 1 KeyTakeaway at end

**HOMEWORK RESOURCES (should take 45-60 min independently):**
- 1 RetrievalPractice (2-3 questions from previous weeks)
- 500-800 words of review/reinforcement content
- 1-2 worked example reminders
- 20-25 practice questions
  * 8-10 fluency builders (similar to class work)
  * 8-10 standard difficulty
  * 4-5 challenging/extension
- 1-2 reflection questions (require written explanation)
- 1 KeyTakeaway
- 1 HomeworkComment component at the very end

## Question Design Principles

### Difficulty Calibration by Year Level

**Years 3-4:**
- Single-step problems
- Numbers under 100 (unless place value is the topic)
- Visual supports (use Angle component, ContentPlaceholder for diagrams)
- Success rate target: 80% without help

**Years 5-6:**
- 1-2 step problems
- Introduction to variables with simple contexts
- Numbers into thousands
- Success rate target: 75% without help

**Years 7-8:**
- 2-3 step problems
- Multiple methods possible
- Abstract thinking emerging
- Success rate target: 70% without help

**Years 9-10:**
- Multi-step problems
- Requires planning and strategy
- Abstract reasoning required
- Success rate target: 65-70% without help

**Years 11-12:**
- Complex multi-step problems
- Proof and reasoning questions
- University preparation level
- Success rate target: 60-65% without help

### Question Vocabulary Guidelines

**AVOID these words for younger students:**
- Years 3-6: "determine", "deduce", "hence", "thus", "subsequently"
- Years 3-8: "arbitrary", "trivial", "optimization", "asymptotic"

**USE age-appropriate alternatives:**
- Instead of "determine" → "find" or "work out"
- Instead of "evaluate" (Years 3-6) → "calculate" or "work out the answer"
- Instead of "hence" → "so" or "therefore"
- Instead of "subsequently" → "then" or "next"

### Context Appropriateness

**Years 3-4:** Toys, animals, playground, family, lunch, simple games
**Years 5-6:** Sports teams, pocket money, basic recipes, simple measurements
**Years 7-8:** Shopping, phone plans, sports statistics, travel, movies
**Years 9-10:** Business, investments, technology, complex sports analytics
**Years 11-12:** Economics, engineering, sciences, advanced applications

## Component Usage Strategy

### Component Selection by Purpose

**Activate Prior Knowledge:**
- ALWAYS start with RetrievalPractice (2-3 quick questions from 1-3 weeks ago)
- Link to current topic explicitly

**Build Understanding:**
- Text: Main explanatory content (use conversational, age-appropriate language)
- ExplanationBox: Key rules/principles students must remember
- FormulaCard: Important formulas with full context
- MultipleRepresentation: Show concept in multiple ways (especially Years 7+)

**Develop Skills:**
- StepByStepSolution: Model correct method with reasoning
- WorkedErrorExample: Show common mistakes and why they're wrong
- ConceptComparison: When students confuse similar concepts

**Practice:**
- PractiseQuestions: Structured by difficulty
- MetacognitivePrompt: Before difficult problems (Years 7+)

**Review:**
- KeyTakeaway: End each major section
- CommonMisconception: Address typical errors proactively

**Marking:**
- HomeworkComment: ALWAYS at the very end of homework resources

### Component Frequency Guidelines

**Every In-Class Resource MUST have:**
- 1 WeeklyTitle (first component always)
- 1-2 RetrievalPractice
- 2-4 StepByStepSolution
- 1-2 CommonMisconception or WorkedErrorExample
- 15-20 PractiseQuestions
- 2-3 KeyTakeaway (distributed throughout)

**Every Homework Resource MUST have:**
- 1 Heading (week number)
- 1 RetrievalPractice
- 20-25 PractiseQuestions
- 1 KeyTakeaway
- 1 HomeworkComment (last component)

## Quality Standards

### Conceptual Depth
✓ Explain WHY methods work, not just HOW
✓ Multiple representations of concepts (numerical, visual, algebraic, verbal)
✓ Connect to prior learning explicitly
✓ Preview future applications
✗ Don't present procedures without reasoning
✗ Don't skip logical steps in explanations

### Age-Appropriate Challenge
✓ Questions students can solve with effort but without frustration
✓ Vocabulary matches year level capability
✓ Contexts are familiar and relevant
✓ Success is achievable for high achievers at that year level
✗ Don't use university-level vocabulary for high school students
✗ Don't use abstract contexts that are unfamiliar
✗ Don't make problems artificially hard through complex arithmetic

### Error Prevention
✓ CommonMisconception component for typical mistakes
✓ WorkedErrorExample showing what NOT to do
✓ Precise mathematical language
✓ Address "why" common mistakes happen
✗ Don't ignore predictable errors
✗ Don't use imprecise terminology

### Engagement
✓ Real contexts that matter to students at that age
✓ Variety in question formats
✓ "Curiosity hooks" where appropriate
✓ Balance of challenge and success
✗ Don't use generic/boring contexts
✗ Don't make all questions the same format
✗ Don't make problems too easy (they're high achievers)

## Technical Requirements

### LaTeX Formatting (CRITICAL)
**ONLY acceptable format:**
```
"\\begin{align*} x^2 + 2x + 1 \\end{align*}"
```

**Common LaTeX patterns:**
- Fractions: `\\frac{numerator}{denominator}`
- Powers: `x^{2}`, `a^{n}`
- Roots: `\\sqrt{x}`, `\\sqrt[3]{x}`
- Subscripts: `x_{1}`, `a_{n}`
- Multi-line (use \\\\ between lines): `"\\begin{align*} x + 2 = 5 \\\\ x = 3 \\end{align*}"`

**NEVER use:** `$$`, `\(`, `\)`, or markdown code blocks for math

### Australian Standards
- Spelling: colour, analyse, centre, metre, aluminium, organisation
- Currency: $ for dollars, c for cents (e.g., $4.50, 75c)
- Measurements: Metric only (km, m, cm, mm, kg, g, L, mL)
- Date format: DD/MM/YYYY
- Decimal: 3.5 (not 3,5)

### ID Generation
- Format: `"{componentType}-{topic-slug}-{sequence}"`
- Example: `"explanation-pythagoras-theorem-1"`, `"question-linear-equations-7"`
- Be consistent within each document
- Keep IDs lowercase with hyphens

## Common Pitfalls to Avoid

### Pedagogical Errors
✗ Using vocabulary above year level (MOST COMMON ERROR)
✗ Questions too complex for the age group
✗ Skipping steps in worked examples
✗ No connection to prior knowledge
✗ Explaining procedures without conceptual reasoning
✗ All easy questions then sudden jump to hard
✗ Abstract examples without concrete foundation (especially Years 3-8)

### Technical Errors
✗ Wrong LaTeX format (use \\begin{align*} only)
✗ Consecutive headings without content between
✗ Using GeneralPurpose when specific components exist
✗ American spellings
✗ Missing HomeworkComment on homework
✗ Missing WeeklyTitle on in-class resources

### Structural Errors
✗ Too little volume (parents expect substantial resources)
✗ Questions not scaffolded by difficulty
✗ No retrieval practice from previous weeks
✗ Missing metacognitive prompts for older students
✗ No error analysis or misconception addressing

## Year-Level Specific Guidelines

### Primary (Years 3-6)
- Concrete before abstract ALWAYS
- Visual representations crucial (use ContentPlaceholder for diagrams)
- Short explanations (2-3 sentences per concept)
- Familiar, everyday contexts only
- Avoid: algebraic notation (Years 3-4), complex word problems
- Simple, direct language
- Lots of practice questions (volume matters)

### Junior Secondary (Years 7-8)
- Transition to abstract thinking
- Introduce formal mathematical language gradually
- Real-world contexts they understand
- Mix concrete and abstract examples
- Can handle multi-step problems
- Encourage multiple solution methods

### Senior Secondary (Years 9-12)
- Abstract reasoning expected
- Formal mathematical communication
- Complex real-world applications
- Proof and reasoning questions appropriate
- University preparation level (Years 11-12)
- Advanced problem-solving strategies

## Resource Type Specific Tips

### In-Class Resources
- More explanation, less independent work
- Include discussion prompts
- Space for tutor to elaborate
- Worked examples should be detailed
- Questions designed for guided practice
- Include MetacognitivePrompt before complex problems

### Homework Resources  
- Brief review/reminder of concepts
- More independent practice volume
- Clear, self-explanatory questions
- Mix of routine and challenging problems
- Interleave previous topics (spaced repetition)
- MUST end with HomeworkComment component

## General Technical Notes

- Don't rely on GeneralPurpose component (error-prone); use specific components
- Keep headings succinct (they render large)
- First heading should be week number (e.g., "Week 1", "Week 2")
- Never have 2 headings consecutively without content between
- Abstract backend terms ('workshop', 'in-class', '2 hours') from the actual content

## Final Quality Check

Before generating, ask yourself:
1. Would a student at this year level understand every word?
2. Are the contexts familiar and age-appropriate?
3. Is there enough volume for the time allocation?
4. Are misconceptions addressed proactively?
5. Is there a clear learning progression?
6. Are all technical requirements met (LaTeX, IDs, Australian spelling)?
7. Does this resource actually teach, not just test?

**Remember: The goal is measurable learning gains. Every component should serve learning.**
