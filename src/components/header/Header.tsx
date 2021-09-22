import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { Context } from "../../lib/context";
import Button from "../../widget/Button";
import styles from "./Header.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
interface Props {}

function Header({}: Props): ReactElement {
  const { state } = React.useContext(Context);
  const openLink = (url) => window.open(url, "_blank")?.focus();
  const router = useRouter();

  return (
    <>
      <div className="container">
        <div className="arrow arrow--top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="270.11"
            height="349.9"
            overflow="visible"
          >
            <g className="item-to bounce-1">
              <path
                className="geo-arrow draw-in"
                d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
              />
            </g>
            <circle
              className="geo-arrow-top item-to bounce-2"
              cx="194.65"
              cy="69.54"
              r="7.96"
            />
            <circle
              className="geo-arrow-top draw-in"
              cx="194.65"
              cy="39.5"
              r="7.96"
            />
            <circle
              className="geo-arrow-top item-to bounce-3"
              cx="194.65"
              cy="9.46"
              r="7.96"
            />
            <g className="geo-arrow item-to bounce-2">
              <path
                className="st0 draw-in"
                d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552"
              />
            </g>
          </svg>
        </div>

        <div className="arrow arrow--bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.35"
            height="349.9"
            overflow="visible"
          >
            <g className="item-to bounce-1">
              <circle
                className="geo-arrow item-to bounce-3"
                cx="15.5"
                cy="380.36"
                r="7.96"
              />
              <circle
                className="geo-arrow draw-in"
                cx="15.5"
                cy="410.4"
                r="7.96"
              />
              <circle
                className="geo-arrow item-to bounce-2"
                cx="15.5"
                cy="440.44"
                r="7.96"
              />
              <g className="item-to bounce-2">
                <path
                  className="geo-arrow draw-in"
                  d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v352"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="main">
          <div className="main-text-wrapper">
            <h1 className="title">Ornn Foundation</h1>
            <p className="sub-title">
              Ornn is a blockchain platform for changemakers, innovators, and
              visionaries, with the tools and technologies required to create
              possibility for the many, as well as the few, and bring about
              positive global change.
            </p>
            <br />
            <Button onClick={() => router.push("/docs")}>
              Get started <KeyboardArrowRightIcon />
            </Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dotted-circle"
              width={352}
              height={352}
              overflow="visible"
            >
              <circle
                cx={176}
                cy={176}
                r={174}
                fill="none"
                stroke="#fff"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeDasharray="12.921,11.9271"
              />
            </svg>
          </div>
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;1,500&display=swap");

        .container {
          /* background-color: #9ab5e1;
          background-image: linear-gradient(315deg, #9ab5e1 0%, #f39fdc 74%); */
          /* background-color: #8d5185;
          background-image: linear-gradient(315deg, #8d5185 0%, #a1bafe 74%); */
          height: 700px;
          font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
          font-family: "DM Mono", monospace;
          font-weight: 300;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .geo-arrow-top {
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-miterlimit: 10;
        }
        .geo-arrow {
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-miterlimit: 10;
        }

        h1 {
          font-size: 3em;
          margin: 0.2em;
        }
        .sub-title {
          font-size: 14px;
          max-width: 716px;
          width: 100%;
          margin: auto;
        }
        .main {
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
          justify-content: center;
          align-items: center;
        }
        .main:before,
        .main:after {
          content: "";
          display: block;
          position: absolute;
          z-index: -3;
        }
        .main:before {
          right: 0;
          bottom: -19;
          height: 30em;
          width: 30em;
          border-radius: 30em;
          background: linear-gradient(#9ab5e1, #f39fdc);
          align-self: flex-end;
          animation: gradient-fade 8s ease-in-out 3s infinite alternate;
        }


        .main:after {
          top: 0;
          left: 30;
          height: 10em;
          width: 10em;
          border-radius: 10em;
          background: linear-gradient(#f39fdc, #f39fdc);
          animation: gradient-fade-alt 6s ease-in-out 3s infinite alternate;
        }
        .main-text-wrapper {
          position: relative;
          padding: 2em;
        }

        .main-text-wrapper:before,
        .main-text-wrapper:after {
          content: "";
          display: block;
          position: absolute;
        }
        .main-text-wrapper:before {
          z-index: -1;
          top: -3em;
          right: -3em;
          width: 13em;
          height: 13em;
          opacity: 0.7;
          border-radius: 13em;
          background: linear-gradient(#ff647f, #f39fdc);
          animation: rotation 7s linear infinite;
        }
        {/* .main-text-wrapper:after {
          z-index: -1;
          bottom: -20em;
          width: 20em;
          height: 20em;
          border-radius: 20em;
          background: linear-gradient(#ff647f, #f39fdc);
          animation: rotation 7s linear infinite;
        } */}
        .arrow {
          z-index: 2;
          opacity: 0.5;
          position: absolute;
        }
        .arrow--top {
          top: 90px;
          left: -5em;
        }
        .arrow--bottom {
          bottom: 375px;
          right: 3em;
        }
        .circle {
          transform: translate(50%, -50%) rotate(0deg);
          transform-origin: center;
        }
        .circle--ltblue {
          height: 20em;
          width: 20em;
          border-radius: 20em;
          background: linear-gradient(#15e0ff, #3800e7);
        }
        .backdrop {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: block;
          background-color: pink;
        }
        .dotted-circle {
          position: absolute;
          top: 0;
          right: 0;
          opacity: 0.3;
          animation: rotation 60s linear infinite;
        }
        .draw-in {
          stroke-dasharray: 1000;
          stroke-dashoffset: 10;
          animation: draw 15s ease-in-out alternate infinite;
        }
        @keyframes draw {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .item-to {
          animation-duration: 10s;
          animation-iteration-count: infinite;
          transform-origin: bottom;
        }
        .bounce-1 {
          animation-name: bounce-1;
          animation-timing-function: ease;
        }
        .bounce-2 {
          animation-name: bounce-2;
          animation-timing-function: ease;
        }
        .bounce-3 {
          animation-name: bounce-3;
          animation-timing-function: ease;
        }
        @keyframes bounce-1 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(50px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes bounce-2 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes bounce-3 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(30px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes gradient-fade {
          from {
            transform: translate(10%, -10%) rotate(0deg);
          }
          to {
            transform: translate(50%, -50%) rotate(360deg);
          }
        }
        @keyframes gradient-fade-alt {
          from {
            transform: translate(-20%, 20%) rotate(0deg);
          }
          to {
            transform: translate(-60%, 60%) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default Header;
