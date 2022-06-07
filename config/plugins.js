module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("doynwnic5"),
        api_key: env("772325534715938"),
        api_secret: env("kUEVq9egSMerEy5VbgTFULjoeA"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
