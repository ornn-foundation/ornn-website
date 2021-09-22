import React, { ReactElement } from "react";
import Button from "../../widget/Button";
import IconButton from "../../widget/IconButton";
import Logo from "../../widget/Logo";
import styles from "./Nav.module.css";
import Language from "@mui/icons-material/Language";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import DeviceHubTwoTone from "@mui/icons-material/DeviceHubTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useRouter } from "next/router";
import Link from "next/link";
import { red } from "@mui/material/colors";
interface Props {}

function Nav({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Logo />
        <span className={styles.spacer}></span>
        <Stack direction="row" spacing={1}>
          <IconButton>
            <DeviceHubTwoTone />
          </IconButton>
          <Link href="https://github.com/ornn-foundation">
            <a target="_blank">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </Link>
          <IconButton>
            <Language />
          </IconButton>
          <IconButton>
            <LightModeIcon />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
}

export default Nav;
