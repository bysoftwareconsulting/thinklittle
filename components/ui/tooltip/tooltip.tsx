import { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative inline-block cursor-pointer group">
      {children}
      <span
        className="
          absolute bottom-[95%] left-1/2 -translate-x-1/2
          bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap
          opacity-0 invisible transition-opacity duration-200
          group-hover:opacity-100 group-hover:visible
          z-[100]
        "
      >
        {text}
        <span
          className="
            absolute top-full left-1/2 -translate-x-1/2
            border-[6px] border-solid
            border-t-gray-800 border-x-transparent border-b-transparent
          "
        />
      </span>
    </div>
  );
}