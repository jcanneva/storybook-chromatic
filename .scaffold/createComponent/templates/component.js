module.exports = componentName => ({
    content: `\
import React, { type ReactElement } from "react";
import "./${componentName}.css";
import type { Props } from "./${componentName}.types";

/** JSDocs for autodocs */
export const ${componentName} = ({ className, ...props }: Props): ReactElement => (
    <div className={className} {...props} />
);

${componentName}.displayName = "${componentName}";

export default ${componentName};
`,
    extension: `.tsx`,
});
