import React from "react";

interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  beforeIcon?: JSX.Element;
  afterIcon?: JSX.Element;
}

const Button = ({
  className,
  style,
  title,
  beforeIcon,
  afterIcon,
}: ButtonProps) => {
  return (
    <button className={`flex ${className} hover:cursor-pointer`} style={style}>
      {beforeIcon}
      {title}
      {afterIcon}
    </button>
  );
};

export default Button;
