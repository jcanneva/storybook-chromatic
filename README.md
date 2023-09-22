<h1 align="center">
  Storybook and React POC with Chromatic CI
</h1>

This POC shows how to use React and Storybook adding it CI with Chromatic.\
See deploy [here](https://main--65079b0e0dd1e8cb6f51654a.chromatic.com/) and the github actions [here](https://github.com/jcanneva/storybook-chromatic/actions).

## Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit jcanneva/storybook-chromatic
    ```

2.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell

    # Navigate to the root directory and install the dependencies
    yarn
    ```

3.  **Open the source code and start editing the source code**

    Open the root directory in your code editor and create a component

    ```shell

    # You can create a new component with the following command
    yarn create:component componentName
    ```

4.  **Browse your stories!**

    Run `yarn storybook` to see your component's stories at `http://localhost:6006`
