import React from "react";
import { Button, type ButtonProps } from "./ui/button";
import { LoaderCircle } from "lucide-react";

type Props = {
  isLoading?: boolean;
} & ButtonProps;

export const LoadingButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, disabled, isLoading = false, ...rest }, ref) => {
    return (
      <Button ref={ref} {...rest} disabled={disabled || isLoading}>
        {isLoading ? <LoaderCircle /> : children}
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";
