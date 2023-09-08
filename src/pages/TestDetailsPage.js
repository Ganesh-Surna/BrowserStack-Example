import { useSelector } from "react-redux";
import TestDetails from "../components/Testcases/TestDetails/TestDetails";
import TestcaseHeader from "../components/Testcases/TestcaseHeader";
import TestcaseContent from "../components/Testcases/TestcaseContent";


export default function TestDetailsPage(){
    const isShow=useSelector(state=>state.uiKey.isModalShow);
    return <>
        {isShow && <TestDetails/>}
        <TestcaseHeader/>
        <TestcaseContent/>
    </>;
}