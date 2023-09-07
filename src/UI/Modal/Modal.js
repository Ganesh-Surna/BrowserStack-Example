import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const ModalLayout=({childrenProps})=>{
    return <div className={classes.modal}>{childrenProps}</div>
};

const Backdrop=()=>{
    const dispatch=useDispatch();
    // const navigate=useNavigate();

    const handleClose=()=>{
        // navigate("..");
        dispatch(uiActions.hideModal());
    }

    return <div className={classes.backdrop} onClick={handleClose}/>
}

const Modal=({children})=>{

    return <>
        {
            ReactDOM.createPortal(
                <ModalLayout childrenProps={children}/>,
                document.getElementById("modal")
            )
        }
        {
            ReactDOM.createPortal(
                <Backdrop/>,
                document.getElementById("modal")
            )
        }
    </>
}
export default Modal;