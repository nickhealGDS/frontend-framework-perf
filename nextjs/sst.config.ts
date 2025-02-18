// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      providers: {
        aws: {
          profile: "di-tools-staging-admin-548348341823",
        },
      },
      name: "nextjs",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("PTNextVPC", { bastion: true });
    new sst.aws.Redis("SessionStore", { vpc });
    new sst.aws.Nextjs("MyWeb", { vpc });
  },
});
