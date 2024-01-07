import React from "react";
import styled from "styled-components";

const ResponsiveImage = (props) => {
  const { baseSrc, picture, img } = props;

  const src1x = baseSrc;
  const src2x = baseSrc.replace(".jpg", "@2x.jpg");
  const src3x = baseSrc.replace(".jpg", "@3x.jpg");

  const optimized1x = baseSrc.replace(".jpg", ".avif");
  const optimized2x = baseSrc.replace(".jpg", "@2x.avif");
  const optimized3x = baseSrc.replace(".jpg", "@3x.avif");

  return (
    <picture {...picture} className={props.className}>
      <source
        type="image/avif"
        srcSet={`
          ${optimized1x} 1x,
          ${optimized2x} 2x,
          ${optimized3x} 3x,
        `}
      />
      <source
        type="image/jpeg"
        srcSet={`
          ${src1x} 1x,
          ${src2x} 2x,
          ${src3x} 3x,
        `}
      />
      <StyledImg src={src1x} {...img} />
    </picture>
  );
};

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ResponsiveImage;
