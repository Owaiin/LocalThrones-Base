import React from "react";

type BadgeProps = {
  isSelected?: boolean;
  text: string;
  onClick?: React.MouseEventHandler;
};

export default function FilterBadge(props: BadgeProps) {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`badge p-5  badge-outline ${
          props.isSelected && "bg-primary text-white"
        }`}
      >
        {props.text}
      </div>
    </>
  );
}
