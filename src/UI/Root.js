
import classes from "./Root.module.css"

export default function Root({children}){

    return <>
        <div className={classes["root-content"]}>{children}</div>
    </>;
}