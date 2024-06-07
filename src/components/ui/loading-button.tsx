import React from "react";
import { Button, ButtonProps } from "./button";
import { Loader2 } from "lucide-react";

type LoadingButtonProps = {
  loading: boolean;
} & ButtonProps;

const LoadingButton = ({ children, loading, ...props }: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={props.disabled || loading}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default LoadingButton;
