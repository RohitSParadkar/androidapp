import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop ,Circle} from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={245}
    height={204}
    viewBox="0 0 245 204"
    fill="none"
    {...props}
  >
    <Path
      opacity={props.customOpacity}
      d="M245 204H0L34.8011 3.47638C42.527 -1.33618 196.487 -1.19669 210.199 4.17386L245 204Z"
      fill="url(#paint0_linear_26_297)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_26_297"
        x1={122.5}
        y1={0}
        x2={122.5}
        y2={204}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={props.color} />
        <Stop offset={1} stopColor={props.color} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const ColorPicker = (props) => {

  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <Circle cx={12.5} cy={12.5} r={12.5} fill={props.color}/>
  </Svg>

}

export default SVGComponent;
