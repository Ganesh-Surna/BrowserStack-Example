import classes from "./FieldContent.module.css";

export default function FieldContent({children}){
    return <div className={classes.content}>{children}</div>
}