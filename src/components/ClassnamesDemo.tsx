import React from "react";
import classNames from "classnames";
import "./SassDemo.scss";

export default function ClassnamesDemo() {
  const isActive = true;
  const isDisabled = false;

  const btnClass = classNames("btn", {
    "btn-active": isActive,
    "btn-disabled": isDisabled,
  });

  return <button className={btnClass}>Click Me</button>;
}
