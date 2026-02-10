Act as an expert NSW English Teacher with 20 years of experience. Generate JSON for English exams/assessments that I will parse as React components following the generic JSON schema below.

------- Between the dashed lines is the text i change between prompts ----------

This is actually a special case, I need a NAPLAN style test for a year 7 student for the Conventions of Language (spelling, grammar, and punctuation) topic.

Spelling Section
Fill-in-the-blank format

Sentence with one missing word
Student writes the correctly spelled word
Example: "The scientist made an important ________ (discovery)"
Audio component in some year levels (word read aloud)
Grammar & Punctuation Section
Multiple Choice (dominant format)

4 options (A, B, C, D)
Error identification: "Which sentence is correct?"
Punctuation: "Where should the comma go?"
Parts of speech: "Which word is an adjective?"
Sentence structure: "Which combines these sentences best?"
Short Answer (occasional)

Correct a sentence
Add appropriate punctuation
Identify word type/function

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
}

schema
```

## Component Tree

```
[
  {
    "ExamHeader": [],
    "usage": "Top-level component for exam header with title, student details, and time allowed"
  },
  {
    "ExamSection": [],
    "usage": "Section divider with title, instructions, and total marks for each exam section"
  },
  {
    "ReadingPassage": [],
    "usage": "Display reading comprehension passages with optional image, title, and author"
  },
  {
    "ComprehensionQuestion": [],
    "usage": "Comprehension questions with optional sub-questions and mark allocation"
  },
  {
    "WritingLines": [],
    "usage": "Lined writing space with configurable line count and height for student responses"
  },
  {
    "MultipleChoiceExam": [],
    "usage": "Multiple choice questions with options labeled A, B, C, D, etc."
  },
  {
    "VocabularyQuestion": [],
    "usage": "Vocabulary questions with word definition, context, and mark allocation"
  },
  {
    "GrammarQuestion": [],
    "usage": "Grammar questions with sentence examples and specific instructions"
  },
  {
    "WritingPrompt": [],
    "usage": "Creative or persuasive writing prompts with requirements, stimulus image, and word count"
  },
  {
    "ImagePlaceholder": [],
    "usage": "Insert images or placeholders for visual content with captions"
  },
  {
    "AnswerBox": [],
    "usage": "Empty bordered box for student answers with configurable height"
  }
]
```

## General Tips

- Focus on NSW English K-10 Syllabus (2022) outcomes for reading, writing, and language conventions
- Questions should be appropriately challenging for students - not too easy, but achievable with effort
- Use Australian spellings throughout (e.g., 'colour', 'favourite', 'organise')
- Reading passages should be age-appropriate, engaging, and around 200-400 words
- Include a mix of literal and inferential comprehension questions
- Grammar and vocabulary questions should be based on the student's year expectations (adjectives, verbs, nouns, sentence types, punctuation)
- Writing prompts should allow for creativity while providing clear structure and requirements
- Always include mark allocations for questions to help students understand weighting
- Provide adequate writing space (WritingLines) based on expected answer length
- Use ImagePlaceholder components with descriptive text when images would enhance questions - DO NOT include imageUrl values, leave them empty for manual insertion later
- Keep headings succinct as they render large
- Don't place two headings directly next to each other without content between them
- Ensure sufficient volume - parents value comprehensive assessments
- Question numbers should be sequential and clear (1, 2, 3... or 1a, 1b, 1c for sub-questions)
- Include variety in question types: comprehension, multiple choice, vocabulary, grammar, and writing tasks
- Writing tasks should specify word count expectations appropriate for students (typically 100-200 words)
- Use ExamSection components to clearly delineate different parts of the assessment (Reading, Language Conventions, Writing)
