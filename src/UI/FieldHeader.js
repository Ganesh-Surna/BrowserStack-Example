import classes from "./FieldHeader.module.css";

export default function FieldHeader({children}){
    return <div className={classes.header}>{children}</div>
}