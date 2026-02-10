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
              { $ref: "#/$defs/CoverPage" },
            ]
          }
        }
      },
      required: ["content"]
    }
  },
  required: ["type", "id", "props"],

  $defs: {
    CoverPage: {
      type: "object",
      properties: {
        type: { const: "CoverPage" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            yearLevel: { 
              type: "string",
              description: "The year level (e.g., 'Year 7', 'Year 8')"
            },
            subject: { 
              type: "string",
              default: "Mathematics",
              description: "The subject name"
            },
            subtitle: { 
              type: "string",
              description: "Value proposition or tagline (e.g., 'Complete Self-Study Resource for Parents & Students')"
            },
            academicYear: { 
              type: "string",
              description: "Academic year dates (e.g., '2025 Academic Year')"
            },
            logoAlt: {
              type: "string",
              default: "Tutoring Centre Logo",
              description: "Alt text for the logo"
            }
          },
          required: ["yearLevel", "subtitle"]
        }
      },
      required: ["type", "id", "props"]
    },
  }
};

export default schema;