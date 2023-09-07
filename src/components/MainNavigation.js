import SearchIcon from "../icons/SearchIcon";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes["logo-container"]}>
        <img
          src="https://browserstack.wpenginepowered.com/wp-content/themes/browserstack/img/bstack-logo-global.svg"
          alt="Logo"
        />
      </div>
      <nav>
        <ul className={classes.list}>
          <li className={`${classes.products} ${classes.item}`}>
            <a>Products</a>
            <ul className={classes["sub-list"]}>
              <li>
                <a>SubList item1</a>
              </li>
              <li>
                <a>SubList item2</a>
              </li>
              <li>
                <a>SubList item3</a>
              </li>
              <li>
                <a>SubList item4</a>
              </li>
            </ul>
          </li>
          <li className={`${classes.developers} ${classes.item}`}>
            <a>Developers</a>
            <ul className={classes["sub-list"]}>
              <li>
                <a>Developer 1</a>
              </li>
              <li>
                <a>Developer 2</a>
              </li>
              <li>
                <a>Developer 3</a>
              </li>
              <li>
                <a>Developer 4</a>
              </li>
              <li>
                <a >Developer 5</a>
              </li>
              <li>
                <a>Developer 6</a>
              </li>
            </ul>
          </li>
          <li className={classes.item}>
            <a>Live for Teams</a>
          </li>
          <li className={classes.item}>
            <a>Pricing</a>
          </li>
          <li className={classes.dashboard}>
            <a>GO TO DASHBOARD</a>
          </li>
          <li className={classes.item}>
            <SearchIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}
