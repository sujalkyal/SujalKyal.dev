import { twMerge } from "tailwind-merge";
import { ToolIcon } from "./ToolIcon";
import { Fragment } from "react";

export const ToolboxItems = ({
  ToolboxIcons,
  className,
  itemWrapperClassname,
}: {
  ToolboxIcons: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassname?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemWrapperClassname
        )}
      >
        {[...new Array(2)].map((_, i) => (
          <Fragment key={i}>
            {ToolboxIcons.map((tool) => (
              <div
                key={tool.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <ToolIcon component={tool.iconType} />
                <span className="font-semibold">{tool.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
