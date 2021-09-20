import React, { ReactElement } from "react";
import styles from "./Footer.module.css";

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <div className={styles.footer}>
      <div>Copyright © 2021 Ornn Foundation</div>
    </div>
  );
}

export default Footer;
