module.exports = componentName => ({
    content: `\
import ${componentName} from "./${componentName}";
import type { Props } from "./${componentName}.types";

export type { Props };
export default ${componentName};
`,
    extension: `index.ts`,
});
