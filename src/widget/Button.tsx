import * as React from "react";
import clsx from "clsx";
import Stack from "@mui/material/Stack";
import { ButtonUnstyledProps, useButton } from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

const MyThemeComponent = styled("div")(
  ({ theme }) => `
  
`
);

const CustomButtonRoot = styled("button")(
  ({ theme }) => `
  /* background-color: #FFC0CB; */
  background-color: ${theme.palette.primary.main};
  padding: 15px 20px;
  border-radius: 10px;
  color: ${theme.palette.info.main};
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #FF647F;
  }

  &.active {
    background-color: #FF3659;
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`
);

const Button = React.forwardRef(function CustomButton(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

export default Button;
