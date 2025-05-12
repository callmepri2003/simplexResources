import ExplanationBox from "./components/ExplanationBox/ExplanationBox";
import ExplanationBoxFormula from "./components/ExplanationBox/ExplanationBoxFormula";
import ExplanationBoxList from "./components/ExplanationBox/ExplanationBoxList";
import ExplanationBoxText from "./components/ExplanationBox/ExplanationBoxText";
import GeneralPurpose from "./components/GeneralPurpose";
import Heading from "./components/Heading";
import KeyTakeaway from "./components/KeyTakeaway";
import FillInTheBlanksQuestion from "./components/practiseQuestions/FillInTheBlanksQuestion";
import GroupedSubquestionsGrid from "./components/practiseQuestions/GroupedSubquestionsQuestion";
import MultipleChoiceQuestion from "./components/practiseQuestions/MultipleChoiceQuestion";
import PractiseQuestions from "./components/practiseQuestions/PractiseQuestions";
import ShortAnswerQuestion from "./components/practiseQuestions/ShortAnswerQuestion";
import Text from "./components/Text";

const componentMap = {
  ExplanationBox,
  ExplanationBoxFormula,
  ExplanationBoxList,
  ExplanationBoxText,
  KeyTakeaway,
  PractiseQuestions,
  MultipleChoiceQuestion,
  FillInTheBlanksQuestion,
  ShortAnswerQuestion,
  GeneralPurpose,
  GroupedSubquestionsGrid,
  Heading,
  Text,
};

export default componentMap;
