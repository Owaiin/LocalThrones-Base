import FilterBadge from "./FilterBadge";
import { BsSearch, BsFilter } from "react-icons/bs";

export default function FilterNav() {
  return (
    <>
      <div className="overflow-hidden py-2 flex items-center">
        <div className="pr-3 border-r border-neutral">
          <BsFilter className="text-3xl" />
        </div>
        <div className="grid grid-flow-col gap-3 pl-5 overflow-scroll scrollbar-hide ">
          <FilterBadge text="Chicken" />
          <FilterBadge text="Alcohol" />
          <FilterBadge text="Pizza" />
          <FilterBadge text="Chinese" />
          <FilterBadge text="Indian" />
          <FilterBadge text="American" />
        </div>
      </div>
    </>
  );
}
