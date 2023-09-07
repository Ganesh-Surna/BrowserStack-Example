import { useDispatch } from "react-redux";
import ItemCard from "../../UI/ItemCard";
import classes from "./TestItem.module.css";
import { uiActions } from "../../store/ui-slice";
import { testItemActions } from "../../store/testItem-slice";
// import { useNavigate } from "react-router-dom";

export default function TestItem({item}){
    const dispatch=useDispatch();
    // const navigate=useNavigate();

    const handleShow=()=>{
        dispatch(testItemActions.getTestItemData(item));
        dispatch(uiActions.showModal());
        // navigate(`${item.id}`);
    }

    return <ItemCard>
        <div className={classes.item}>
            <div className={classes.text}>
                <h2>{item.title}</h2>
            </div>
            <div className={classes.actions}>
                <button onClick={handleShow}>View</button>
            </div>
        </div>
    </ItemCard>
}