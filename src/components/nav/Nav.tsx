import React, { ReactElement } from "react";
import Button from "../../widget/Button";
import IconButton from "../../widget/IconButton";
import Logo from "../../widget/Logo";
import styles from "./Nav.module.css";
import Language from "@mui/icons-material/Language";
import Stack from "@mui/material/Stack";

interface Props {}

function Nav({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Logo />
        <span className={styles.spacer}></span>
        <Stack direction="row" spacing={1}>
          <Button onClick={() => console.log("click!")}>Ornn Chain</Button>
          <IconButton>
            <Language />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
}

export default Nav;
