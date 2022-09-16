import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const STATES = {
  LOADING: "loading",
};

type TextStyleType = {
  shown?: Boolean;
};

type OuterStyleType = {
  type?: String;
  ref?: any;
};

const Outer = styled.button.attrs((p) => ({
  type: p.type || "button",
}))<OuterStyleType>`
  position: relative;
`;

const Text = styled.span<TextStyleType>`
  color: inherit;
  z-index: 2;
  transition: opacity 100ms, transform 100ms;
  white-space: nowrap;
  ${(props: any) =>
    !props.shown &&
    `
  opacity: 0;
  display: none;
  transform: scale(0.7);

  `}
`;

const Loading = styled.span`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 50%;
    width: auto;
  }
`;

type ButtonType = {
  children?: React.ReactNode;
  state?: String;
  variant?: String;
  isLink?: Boolean;
  link?: any;
  className?: String;
  type?: ("button" | "submit" | "reset") & String;
  onClick?: Function;
};

export const Button = React.forwardRef(
  (
    {
      children,
      state,
      variant = "",
      isLink,
      link = "",
      className = "",
      type = "button",
      onClick = () => {},
    }: ButtonType,
    ref
  ) => (
    <Outer
      disabled={state === STATES.LOADING}
      onClick={() => onClick()}
      type={type}
      className={`btn relative ${variant} ${className}`}
      ref={ref}
    >
      {!isLink ? (
        <>
          <Text shown={state !== STATES.LOADING}>{children}</Text>
          {state === STATES.LOADING && <Loading>Loading...</Loading>}
        </>
      ) : (
        <Link to={link}>
          <Text shown={true}>{children}</Text>
        </Link>
      )}
    </Outer>
  )
);

Button.displayName = "Button";
