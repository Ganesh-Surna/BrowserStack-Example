import Modal from "../../../UI/Modal/Modal";
import classes from "./TestDetails.module.css";

import { uiActions } from "../../../store/ui-slice";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

export default function TestDetails(){
    const dispatch=useDispatch();
    // const navigate=useNavigate();

    const testItem=useSelector(state=>state.testItemKey.item);

    const date= testItem.date.toLocaleString("en-US",{dateStyle:"full"});

    const handleClose=()=>{
        // navigate("..");
        dispatch(uiActions.hideModal());
    }

    return <Modal>
        <div className={classes.item}>
            <div className={classes.text}>
                <p><span>Title: </span>{testItem.title}</p>
                <p><span>Test Case Id: </span>{testItem.id}</p>
                <p><span>Description: </span>{testItem.description}</p>
                <p><span>Last tested date: </span>{date}</p>
                <p><span>Test Environment: </span>{testItem.environment}</p>
                <p><span>Status: </span>{testItem.status}</p>
                {/* <p><span></span>{testItem.}</p>
                <p><span></span>{testItem.}</p> */}
            </div>
            <div className={classes.actions}>
                <button onClick={handleClose}>Close</button>
                {/* <Link to="/folder">Close</Link> */}
            </div>
        </div>
    </Modal>
}