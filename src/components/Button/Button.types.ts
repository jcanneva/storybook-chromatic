import type { ReactNode } from "react";

export type Props = {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;
};
