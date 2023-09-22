import React from "react";
import "./Button.css";
import type { Props } from "./Button.types";


/** Primary UI component for user interaction */
export const Button = ({
    primary = true,
    backgroundColor = undefined,
    size = "medium",
    label,
    ...props
}: Props) => {
    const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
    return (
        <button
            type="button"
            className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
            {...(backgroundColor && { style: { background: backgroundColor } })}
            {...props}>
            {label}
        </button>
    );
};

Button.displayName = "Button";

export default Button;
