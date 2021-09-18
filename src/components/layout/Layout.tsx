import React, { ReactElement } from "react";
import styles from "./Layout.module.css";

interface Props {
  children?: JSX.Element | JSX.Element[] | ReactElement | ReactElement[];
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
