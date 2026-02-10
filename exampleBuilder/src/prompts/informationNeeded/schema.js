// schema.js

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
          items: { $ref: "#/$defs/ExampleComponent" }
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
    }
  }
};

export default schema;
