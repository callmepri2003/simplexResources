import Ajv from "ajv";
import data from "./data.json"; // Import your data
import schema from "./schema"; // Import the schema from the new file

const validateJsonSchema = () => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data); // Using the imported data for validation

  if (valid) {
    return true; // Return true if the data is valid
  } else {
    return validate.errors; // Return the list of errors if invalid
  }
};

export default validateJsonSchema;
