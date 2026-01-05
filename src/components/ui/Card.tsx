import React from "react";
import cn from "@/lib/helpers/cn";

type CardProps = React.ComponentProps<"div"> & {
  variant?: "default" | "elevated" | "outlined";
};

export default function Card({
  className,
  children,
  variant = "default",
  ...props
}: CardProps) {
  const baseClass =
    "bg-white rounded-lg p-6 shadow-sm border border-transparent";

  const variantClass = {
    default: "shadow-sm",
    elevated: "shadow-lg",
    outlined: "border-gray-300",
  }[variant];

  return (
    <div {...props} className={cn(baseClass, variantClass, className)}>
      {children}
    </div>
  );
}
