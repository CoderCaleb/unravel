import cn from "@/lib/helpers/cn";
import React from "react";

type ButtonWithIconProps = React.ComponentProps<"div">;

export default function ButtonWithIcon({
  className,
  children,
  onClick,
  ...props
}: ButtonWithIconProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex gap-3 px-7 py-3 bg-brand rounded-soft text-white cursor-pointer",
        className,
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
    >
      {children}
    </div>
  );
}
