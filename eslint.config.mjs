import config from "eslint-config-mlauffer-ui5";
export default [
    ...config,
    {
      ignores: ["**/thirdparty/"]
    },
  ];
