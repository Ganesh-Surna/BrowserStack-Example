import FieldContent from "../../UI/FieldContent";
import TestItem from "./TestItem";
import classes from "./TestCaseContent.module.css";

//,date:new Date(2023,10,12)

const DUMMY_TESTCASES=[
    {id:"T001", title:"Test1", description:"Amazing first test!",environment:"Chrome",status:"Error"},
    {id:"T002", title:"Test2", description:"Awesome second test!",environment:"Mozilla",status:"Successful"},
    {id:"T003", title:"Test3", description:"Third test!",environment:"Edge",status:"Error"},
    {id:"T004", title:"Test4", description:"Forth test!",environment:"Opera",status:"Successful"},
    {id:"T005", title:"Test5", description:"Fifth test!",environment:"Windows",status:"Successful"},
    {id:"T006", title:"Test6", description:"Explore latest test!",environment:"Mozilla",status:"Successful"},
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