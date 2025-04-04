import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Scalable",
  "Reliable",
  "Secure",
  "Usable",
  "Search Optimized",
  "Efficient",
  "User-friendly",
  "Accessible",
  "Interactive",
  "Responsive",
  "Maintanable",
];

export const TapeSection = () => {
  return <div className="py-16 lg:py-24 overflow-x-clip">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
          {[...new Array(2)].map((_, i) => (
            <Fragment key={i}>
              {words.map((word) => (
            <div key={word} className="inline-flex gap-4 items-center">
              <span className="text-gray-900 text-sm uppercase font-extrabold">{word}</span>
              <StarIcon className="size-6 text-gray-900 -rotate-12" />
            </div>
          ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>;
};
