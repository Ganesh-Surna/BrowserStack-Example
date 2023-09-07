import FieldContent from "../../UI/FieldContent";
import TestItem from "./TestItem";
import classes from "./TestCaseContent.module.css";

const DUMMY_TESTCASES=[
    {id:"T001", title:"Test1", description:"Amazing first test!",date:new Date(2023,10,12),environment:"Chrome",status:"Error"},
    {id:"T002", title:"Test2", description:"Awesome second test!",date:new Date(2023,110,12),environment:"Mozilla",status:"Successful"},
    {id:"T003", title:"Test3", description:"Third test!",date:new Date(2023,10,12),environment:"Edge",status:"Error"},
    {id:"T004", title:"Test4", description:"Forth test!",date:new Date(2023,10,12),environment:"Opera",status:"Successful"},
    {id:"T005", title:"Test5", description:"Fifth test!",date:new Date(2023,10,12),environment:"Windows",status:"Successful"},
    {id:"T006", title:"Test6", description:"Explore latest test!",date:new Date(2023,10,12),environment:"Mozilla",status:"Successful"},
];

export default function TestcaseContent(){
    return <FieldContent>
       <ul className={classes.list}>
        {
            DUMMY_TESTCASES.map((test)=>{
                return <li key={test.id}>
                    <TestItem item={test}/>
                </li>
            })
        }
       </ul>
    </FieldContent>
}