import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image
        width="32"
        height="23"
        href="https://dubaiswapresources.s3.us-east-2.amazonaws.com/favicon.png"
      ></image>
    </Svg>
  );
};

export default Icon;
