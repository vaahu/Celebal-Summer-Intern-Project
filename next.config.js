module.exports = {
  reactStrictMode: true,
  env: {
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dsdu6c9fj/image/upload",
  }, //url for image upload to cloudinary. First copy "API base url" from Cloudinary. Then paste it here.
  staticPageGenerationTimeout: 1000,
  target: "serverless",
};
