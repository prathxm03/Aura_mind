import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "./utils";
function Skeleton({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsx("div", {
    "data-slot": "skeleton",
    className: cn("bg-accent animate-pulse rounded-md", className),
    ...props
  });
}
export { Skeleton };