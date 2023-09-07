import { Outlet } from "react-router-dom";
import TestcaseContent from "../components/Testcases/TestcaseContent";
import TestcaseHeader from "../components/Testcases/TestcaseHeader";

export default function TestcasesPage() {
  
  return <>
    <TestcaseHeader/>
    <TestcaseContent/>
    <Outlet/>
  </>;
}
