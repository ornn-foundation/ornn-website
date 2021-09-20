import React, { ReactElement } from "react";
import { Context } from "../../lib/context";
import styles from "./Header.module.css";

interface Props {}

function Header({}: Props): ReactElement {
  const { state } = React.useContext(Context);
  const openLink = (url) => window.open(url, "_blank")?.focus();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.title}>Ornn</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
