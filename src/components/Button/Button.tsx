import { FC, MouseEventHandler } from "react";

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";

import { Children } from "../../types/children";

type ButtonProps = {
  children?: Children;
  icon?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "primary" | "secondary" | "highlight" | "text";
  mode?: "light" | "dark";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  outlined?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    icon,
    onClick,
    type,
    mode = "dark",
    variant = "primary",
    size = "medium",
    disabled = false,
    fullWidth = false,
  } = props;

  const StyledButton = styled(MuiButton)<MuiButtonProps>(({ theme }) => ({
    borderRadius: "4px",
    borderWidth: variant === "secondary" ? "0.5px" : "none",
    borderStyle: "solid",
    fontWeight: "bold",
    borderColor:
      mode === "dark" ? theme.palette.primary.main : theme.palette.common.white,
  }));

  const setColor = () => {
    if (variant === "highlight") {
      return "secondary";
    } else if (variant === "primary") {
      if (mode === "dark") {
        return "primary";
      } else {
        return "inherit";
      }
    } else {
      if (mode === "dark") {
        return "inherit";
      } else {
        return "primary";
      }
    }
  };

  return (
    <StyledButton
      variant={variant === "text" ? "text" : "contained"}
      type={type}
      color={setColor()}
      startIcon={icon}
      onClick={onClick}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      disableElevation
    >
      {children}
    </StyledButton>
  );
};

export default Button;
