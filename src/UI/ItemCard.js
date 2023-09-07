import classes from "./ItemCard.module.css";

export default function ItemCard({children}){
    return <div className={classes.item}>{children}</div>
}