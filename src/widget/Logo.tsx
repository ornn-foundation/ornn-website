import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

function Logo({}: Props): ReactElement {
  return (
    <>
      <Link href="/">
        <div
          style={{
            width: "fit-content",
            transform: "scale(0.9)",
            cursor: "pointer",
          }}
        >
          <div className="logo">
            <div className="circle"></div>
            <div className="mask"></div>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .logo {
          width: 50px;
          height: 50px;
          background: #ff647f;
          border-radius: 50px;
          position: relative;
        }
        .logo:active {
          background: #ff3659;
        }
        .circle {
          width: 17px;
          height: 17px;
          border-radius: 50px;
          border: 3.5px solid #fff;
          position: absolute;
          bottom: 11px;
          right: 11px;
        }
        .mask {
          width: 5px;
          height: 5px;
          background: #fff;
          border-radius: 50px;
          position: absolute;
          bottom: 7px;
          right: 3px;
        }
      `}</style>
    </>
  );
}

export default Logo;
