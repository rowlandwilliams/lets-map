"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import classNames from "classnames";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={classNames(
        "bg-gray-200 shrink-0",
        orientation === "horizontal" ? "h-[1px] w-full my-1" : "h-full w-[1px] mx-1",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
