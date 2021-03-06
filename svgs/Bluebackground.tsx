import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg width="368" height="246" viewBox="0 0 368 246" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3_94)">
<rect x="28" y="25" width="305" height="176" rx="26" fill="url(#paint0_linear_3_94)"/>
</g>
<defs>
<filter id="filter0_d_3_94" x="-7" y="0" width="375" height="246" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="10"/>
<feGaussianBlur stdDeviation="17.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.290196 0 0 0 0 0.501961 0 0 0 0 0.941176 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_94"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_94" result="shape"/>
</filter>
<linearGradient id="paint0_linear_3_94" x1="28" y1="201" x2="296.811" y2="-19.1813" gradientUnits="userSpaceOnUse">
<stop stop-color="#441DFC"/>
<stop offset="1" stop-color="#4E81EB"/>
</linearGradient>
</defs>
</svg>


`;

export default () => <SvgXml xml={xml} width="368px" height="246px" />;
