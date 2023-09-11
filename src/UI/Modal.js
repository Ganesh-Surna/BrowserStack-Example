
import ReactDOM from "react-dom";
import "../styles.css";

const ModalLayout=({childrenProps})=>{
    return <div className="modal-layout">{childrenProps}</div>
};

const Backdrop=(props)=>{

    const handleClose=()=>{
        props.onClick();
    }

    return <div className="back-drop" onClick={handleClose}/>
}

const Modal=({children, onClose})=>{

    return <>
        {
            ReactDOM.createPortal(
                <ModalLayout childrenProps={children}/>,
                document.getElementById("modal")
            )
        }
        {
            ReactDOM.createPortal(
                <Backdrop onClick={onClose} />,
                document.getElementById("backdrop")
            )
        }
    </>
}
export default Modal;
