
import TestcaseContent from "../components/Testcases/TestcaseContent";
import TestcaseHeader from "../components/Testcases/TestcaseHeader";
// import { useSelector } from "react-redux";
import TestDetailsPage from "./TestDetailsPage";

export default function TestcasesPage() {
  // const isShow=useSelector(state=>state.uiKey.isModalShow);

  return <>
    <TestDetailsPage/>
    {/* <TestcaseHeader/>
    <TestcaseContent/> */}
  </>;
}
