"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  text: string;
  length?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const ReadMoreLess = ({ text, length = 100, ...rest }: Props) => {
  const textIsLongerThanLength = text.length >= length;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = () => {
    setIsExpanded((v) => !v);
  };

  const description = isExpanded ? text : text.slice(0, length);
  return (
    <p {...rest}>
      <span
        className={cn("whitespace-pre-line", {
          "mr-1": textIsLongerThanLength,
        })}
        dangerouslySetInnerHTML={{
          __html: `${description!}${
            !isExpanded && textIsLongerThanLength ? "..." : ""
          }`,
        }}
      />
      {textIsLongerThanLength && (
        <span>
          <button className="underline inline-block" onClick={toggleIsExpanded}>
            Read {isExpanded ? "Less" : "More"}
          </button>
        </span>
      )}
    </p>
  );
};
