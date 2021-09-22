import React, { ReactElement } from "react";
import styles from "./Content.module.css";

interface Props {
  children?: JSX.Element | JSX.Element[] | ReactElement | ReactElement[];
}

function Content({ children }: Props): ReactElement {
  return <div className={styles.content}>{children}</div>;
}

export default Content;
