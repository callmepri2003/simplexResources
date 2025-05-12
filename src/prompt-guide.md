Generate JSON that I will parse as React.

## Syllabus Section

Please extract the questions exactly as they are (use general purpose component for drawing triangles maybe using a canvas) and convert them to the JSON provided. Generate the JSON that I will later parse as react.

## JSON Schema

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

## Component Tree

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
]
},
{
"KeyTakeaway": []
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
"GeneralPurpose": []
},
{
"Heading": []
},
{
"Text": []
}
]

## General Tips

- There are three main types of documents that I may ask for, either a content book, a question bank or a topic test. The content book covers all of the content required to complete the question bank but has no practise questions. The question bank has all practise questions but no new content.
- Question banks should have around 40 questions
- The main question type is GroupedSubquestionsGrid because its the most efficient way to present questions
- Feel free to use GeneralPurpose component for freeform html
- Double check that everything the student needs to complete the resource is there, for example questions asking the students to measure the area of a shape need to include the actual shape or rephrase the question. Because remember, the students won't have access to the original textbook that the resource is being recreated from. They will only have access to the new resource
- Feel free to make executive decisions related to whether a section needs to be included or not. But always follow the schema.
- The system is not advanced enough to work with diagrams and images. You must creatively reimagine the question so that it doesn't need a diagram or image. GeneralPurpose components are an option but i'd prefer not relying on them as they are highly prone to formatting errors.
- Use GroupedSubquestionsGrid for questions that have a lot of subquestions, the component is a collection of short questions in three columns
- The value of the question bank comes from the volume and uniqueness of questions.
- For now, quantity is more important than quality.
- Also recognise the year level it is aimed at and tailor language to suit
- Be pragmatic with the components, just understand what is required and where to put them
- The ExplanationBox is a highlighting tool, it should encompass all content rather than wrapping multiple adjacent content
- Similarly PractiseQuestions is a wrapper for ALL questions, of course you
  can have multiple PractiseQuestions throughout the rsource but it looks weird if they're adjacent
- for all maths equations use full LaTeX math mode syntax, used for multiline equations, and assume MathJax is configured. An acceptable example is
  \\begin{align} 3x + 2y + 5x - 6y &= 3x + 5x + 2y - 6y \\\\ &= 8x - 4y \\end{align}
- This means even the existence of SIMPLE math symbols like "^" must enclose the entire expression in full LaTeX math mode syntax
- Throw in key-takeaways where appropriate
- Make sure there are absolutely no placeholders, the JSON should be ready to go when copy pasted.
- Also make sure the JSON is coherent, prioritise coherence over imitation
- General purpose must only be at the top level not nested in anything.
- Follow the JSON schema exactly, to save me debugging time
