Act as an expert NSW Mathematics Teacher with 20 years of experience. Generate JSON that I will parse as react following the generic JSON schema below that I normally use for making resources.

------- Between the dashed lines is the text i change between prompts ----------


Create slides for an ADHD year 3 student Ryan, to cover:

Week 3,,Identify 30 minutes as being a half-hour and 60 minutes as an hour
,,Connect the quarter-hour to 15 minutes
,,Recognise that the position of the numerals on an analog timepiece often represents 2 different values
,,Recognise that 5-minute intervals (corresponding to the hour markers) are used as benchmarks to read time on an analog clock
,,Read time as past the hour to half-past and then towards the hour
,,Read analog clocks to the minute


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
              { $ref: "#/$defs/Slide" },
              { $ref: "#/$defs/ExampleComponent" }
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

    Slide: {
      type: "object",
      properties: {
        type: { const: "Slide" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideTitle" },
                  { $ref: "#/$defs/SlideContent" },
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideTwoColumn" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/SlideCard" },
                  { $ref: "#/$defs/SlideAccentBar" },
                  { $ref: "#/$defs/SlideIconBox" },
                  { $ref: "#/$defs/SlideGradientBox" },
                  { $ref: "#/$defs/SlideNumberedStep" },
                  { $ref: "#/$defs/SlideVisualDivider" },
                  { $ref: "#/$defs/SlideFeatureBox" },
                  { $ref: "#/$defs/SlideDecorativeCorner" },
                  { $ref: "#/$defs/SlideQuoteBox" },

                ]
              }
            },
            backgroundColor: { 
              type: "string",
              default: "white"
            },
            backgroundImage: { 
              type: ["string", "null"],
              default: null
            },
            padding: {
              type: "string",
              enum: ["none", "small", "default", "large"],
              default: "default"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideTitle: {
      type: "object",
      properties: {
        type: { const: "SlideTitle" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            text: { type: "string" },
            align: {
              type: "string",
              enum: ["left", "center", "right"],
              default: "left"
            },
            size: {
              type: "string",
              enum: ["small", "medium", "large", "xlarge"],
              default: "large"
            },
            color: {
              type: "string",
              default: "dark"
            },
            marginBottom: {
              type: "string",
              enum: ["none", "small", "default", "large"],
              default: "default"
            }
          },
          required: ["text"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideContent: {
      type: "object",
      properties: {
        type: { const: "SlideContent" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideTwoColumn" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" },
                  { $ref: "#/$defs/SlideCard" },
                  { $ref: "#/$defs/SlideAccentBar" },
                  { $ref: "#/$defs/SlideIconBox" },
                  { $ref: "#/$defs/SlideGradientBox" },
                  { $ref: "#/$defs/SlideNumberedStep" },
                  { $ref: "#/$defs/SlideVisualDivider" },
                  { $ref: "#/$defs/SlideFeatureBox" },
                  { $ref: "#/$defs/SlideDecorativeCorner" },
                  { $ref: "#/$defs/SlideQuoteBox" },
                ]
              }
            },
            layout: {
              type: "string",
              enum: ["default"],
              default: "default"
            },
            verticalAlign: {
              type: "string",
              enum: ["top", "center", "bottom"],
              default: "top"
            },
            horizontalAlign: {
              type: "string",
              enum: ["start", "center", "end"],
              default: "start"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideBulletList: {
      type: "object",
      properties: {
        type: { const: "SlideBulletList" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            items: {
              type: "array",
              items: { type: "string" }
            },
            bulletStyle: {
              type: "string",
              enum: ["disc", "circle", "square", "numbered"],
              default: "disc"
            },
            fontSize: {
              type: "string",
              enum: ["small", "medium", "large", "xlarge"],
              default: "medium"
            },
            spacing: {
              type: "string",
              enum: ["compact", "default", "relaxed"],
              default: "default"
            },
            color: {
              type: "string",
              default: "dark"
            }
          },
          required: ["items"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideImage: {
      type: "object",
      properties: {
        type: { const: "SlideImage" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            src: { type: "string" },
            alt: { 
              type: "string",
              default: ""
            },
            caption: { 
              type: "string",
              default: ""
            },
            width: {
              type: "string",
              default: "100"
            },
            align: {
              type: "string",
              enum: ["left", "center", "right"],
              default: "center"
            },
            borderRadius: {
              type: "string",
              enum: ["none", "small", "medium", "large", "circle"],
              default: "none"
            },
            shadow: {
              type: "boolean",
              default: false
            }
          },
          required: ["src"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideTwoColumn: {
      type: "object",
      properties: {
        type: { const: "SlideTwoColumn" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            leftContent: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            rightContent: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            leftWidth: {
              type: "string",
              default: "50"
            },
            gap: {
              type: "string",
              enum: ["none", "small", "default", "large"],
              default: "default"
            },
            verticalAlign: {
              type: "string",
              enum: ["top", "center", "bottom"],
              default: "top"
            }
          },
          required: ["leftContent", "rightContent"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideCallout: {
      type: "object",
      properties: {
        type: { const: "SlideCallout" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            text: { type: "string" },
            title: { 
              type: "string",
              default: ""
            },
            type: {
              type: "string",
              enum: ["info", "success", "warning", "danger", "primary", "secondary"],
              default: "info"
            },
            icon: {
              type: "boolean",
              default: true
            },
            size: {
              type: "string",
              enum: ["small", "medium", "large"],
              default: "medium"
            }
          },
          required: ["text"]
        }
      },
      required: ["type", "id", "props"]
    },

    TwoColumnLayout: {
      type: "object",
      properties: {
        type: { const: "TwoColumnLayout" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            leftContent: { type: "string" },
            rightContent: { type: "string" },
            leftWidth: { 
              type: "number",
              minimum: 1,
              maximum: 11,
              default: 6
            },
            verticalAlign: {
              type: "string",
              enum: ["top", "center", "bottom"],
              default: "top"
            }
          },
          required: ["leftContent", "rightContent"]
        }
      },
      required: ["type", "id", "props"]
    },

    CalloutBox: {
      type: "object",
      properties: {
        type: { const: "CalloutBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["info", "tip", "warning", "important"],
              default: "info"
            },
            title: { type: "string" },
            content: { type: "string" },
            icon: { type: "string" }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    IconHeader: {
      type: "object",
      properties: {
        type: { const: "IconHeader" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            text: { type: "string" },
            iconUrl: { type: "string" },
            iconPlaceholder: { type: "string", default: "📝" },
            level: {
              type: "number",
              minimum: 1,
              maximum: 6,
              default: 2
            },
            alignment: {
              type: "string",
              enum: ["left", "center", "right"],
              default: "left"
            }
          },
          required: ["text"]
        }
      },
      required: ["type", "id", "props"]
    },

    HighlightBox: {
      type: "object",
      properties: {
        type: { const: "HighlightBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: { type: "string" },
            color: {
              type: "string",
              enum: ["yellow", "green", "blue", "pink"],
              default: "yellow"
            },
            bold: { type: "boolean", default: false }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    StepIndicator: {
      type: "object",
      properties: {
        type: { const: "StepIndicator" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            stepNumber: { type: "number" },
            totalSteps: { type: "number" },
            title: { type: "string" },
            content: { type: "string" }
          },
          required: ["stepNumber", "title", "content"]
        }
      },
      required: ["type", "id", "props"]
    },

    BadgeLabel: {
      type: "object",
      properties: {
        type: { const: "BadgeLabel" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            text: { type: "string" },
            variant: {
              type: "string",
              enum: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
              default: "primary"
            },
            size: {
              type: "string",
              enum: ["small", "medium", "large"],
              default: "medium"
            }
          },
          required: ["text"]
        }
      },
      required: ["type", "id", "props"]
    },

    DividerLine: {
      type: "object",
      properties: {
        type: { const: "DividerLine" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            text: { type: "string" },
            style: {
              type: "string",
              enum: ["solid", "dashed", "dotted"],
              default: "solid"
            },
            spacing: {
              type: "string",
              enum: ["small", "normal", "large"],
              default: "normal"
            }
          }
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
            aspectRatio: {
              type: "string",
              enum: ["16:9", "4:3", "1:1", "3:2"],
              default: "16:9"
            },
            placeholderText: { type: "string", default: "Image Placeholder" },
            rounded: { type: "boolean", default: false }
          }
        }
      },
      required: ["type", "id", "props"]
    },

    QuickReference: {
      type: "object",
      properties: {
        type: { const: "QuickReference" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            title: { type: "string", default: "Quick Reference" },
            items: {
              type: "array",
              items: { type: "string" }
            }
          },
          required: ["items"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideCard: {
      type: "object",
      properties: {
        type: { const: "SlideCard" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideTitle" },
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideTwoColumn" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            elevation: {
              type: "string",
              enum: ["none", "low", "medium", "high"],
              default: "medium"
            },
            padding: {
              type: "string",
              enum: ["none", "small", "default", "large"],
              default: "default"
            },
            borderColor: {
              type: "string",
              default: "light"
            },
            backgroundColor: {
              type: "string",
              default: "white"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideAccentBar: {
      type: "object",
      properties: {
        type: { const: "SlideAccentBar" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideTitle" },
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            accentColor: {
              type: "string",
              default: "primary"
            },
            position: {
              type: "string",
              enum: ["left", "right"],
              default: "left"
            },
            thickness: {
              type: "string",
              enum: ["thin", "medium", "thick"],
              default: "medium"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideIconBox: {
      type: "object",
      properties: {
        type: { const: "SlideIconBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideTitle" },
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            iconUrl: {
              type: "string"
            },
            iconPlaceholder: {
              type: "string",
              default: "📌"
            },
            iconPosition: {
              type: "string",
              enum: ["top", "left", "right"],
              default: "top"
            },
            iconSize: {
              type: "string",
              enum: ["small", "medium", "large"],
              default: "medium"
            },
            iconBackground: {
              type: "string",
              default: "primary"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideGradientBox: {
      type: "object",
      properties: {
        type: { const: "SlideGradientBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideTitle" },
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            gradientStart: {
              type: "string",
              default: "primary"
            },
            gradientEnd: {
              type: "string",
              default: "secondary"
            },
            direction: {
              type: "string",
              enum: ["to-right", "to-left", "to-bottom", "to-top", "diagonal-down", "diagonal-up"],
              default: "to-right"
            },
            textColor: {
              type: "string",
              default: "white"
            },
            padding: {
              type: "string",
              enum: ["none", "small", "default", "large"],
              default: "default"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideNumberedStep: {
      type: "object",
      properties: {
        type: { const: "SlideNumberedStep" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideTitle" },
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            stepNumber: {
              type: "number",
              minimum: 1
            },
            stepColor: {
              type: "string",
              default: "primary"
            },
            size: {
              type: "string",
              enum: ["small", "medium", "large"],
              default: "medium"
            }
          },
          required: ["content", "stepNumber"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideVisualDivider: {
      type: "object",
      properties: {
        type: { const: "SlideVisualDivider" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            iconUrl: {
              type: "string"
            },
            iconPlaceholder: {
              type: "string",
              default: "✦"
            },
            style: {
              type: "string",
              enum: ["solid", "dashed", "dotted", "double"],
              default: "solid"
            },
            color: {
              type: "string",
              default: "secondary"
            },
            spacing: {
              type: "string",
              enum: ["small", "default", "large"],
              default: "default"
            }
          }
        }
      },
      required: ["type", "id", "props"]
    },

    SlideFeatureBox: {
      type: "object",
      properties: {
        type: { const: "SlideFeatureBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            iconUrl: {
              type: "string"
            },
            iconPlaceholder: {
              type: "string",
              default: "⭐"
            },
            title: {
              type: "string"
            },
            variant: {
              type: "string",
              enum: ["default", "primary", "success", "info", "warning", "minimal"],
              default: "default"
            },
            size: {
              type: "string",
              enum: ["small", "medium", "large"],
              default: "medium"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideDecorativeCorner: {
      type: "object",
      properties: {
        type: { const: "SlideDecorativeCorner" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            content: {
              type: "array",
              items: {
                oneOf: [
                  { $ref: "#/$defs/SlideTitle" },
                  { $ref: "#/$defs/SlideBulletList" },
                  { $ref: "#/$defs/SlideImage" },
                  { $ref: "#/$defs/SlideCallout" },
                  { $ref: "#/$defs/Text" }
                ]
              }
            },
            corner: {
              type: "string",
              enum: ["top-left", "top-right", "bottom-left", "bottom-right"],
              default: "top-left"
            },
            decorationType: {
              type: "string",
              enum: ["dots", "lines", "triangle"],
              default: "dots"
            },
            color: {
              type: "string",
              default: "primary"
            },
            size: {
              type: "string",
              enum: ["small", "medium", "large"],
              default: "medium"
            }
          },
          required: ["content"]
        }
      },
      required: ["type", "id", "props"]
    },

    SlideQuoteBox: {
      type: "object",
      properties: {
        type: { const: "SlideQuoteBox" },
        id: { type: "string" },
        props: {
          type: "object",
          properties: {
            text: {
              type: "string"
            },
            author: {
              type: "string"
            },
            style: {
              type: "string",
              enum: ["default", "card", "minimal", "filled"],
              default: "default"
            },
            color: {
              type: "string",
              default: "secondary"
            }
          },
          required: ["text"]
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
    "Slide": [
      { "SlideTitle": [] },
      { "SlideContent": [
        { "SlideBulletList": [] },
        { "SlideImage": [] },
        { "SlideTwoColumn": [] },
        { "SlideCallout": [] },
        { "SlideCard": [] },
        { "SlideAccentBar": [] },
        { "SlideIconBox": [] },
        { "SlideGradientBox": [] },
        { "SlideNumberedStep": [] },
        { "SlideVisualDivider": [] },
        { "SlideFeatureBox": [] },
        { "SlideDecorativeCorner": [] },
        { "SlideQuoteBox": [] }
      ]},
      { "SlideBulletList": [] },
      { "SlideImage": [] },
      { "SlideTwoColumn": [] },
      { "SlideCallout": [] },
      { "SlideCard": [] },
      { "SlideAccentBar": [] },
      { "SlideIconBox": [] },
      { "SlideGradientBox": [] },
      { "SlideNumberedStep": [] },
      { "SlideVisualDivider": [] },
      { "SlideFeatureBox": [] },
      { "SlideDecorativeCorner": [] },
      { "SlideQuoteBox": [] }
    ],
    "usage": "Main container for each presentation slide. Can contain titles, content areas, and direct content components. Supports custom backgrounds, padding, and styling. Now includes enhanced layout and visual components for better aesthetics."
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
