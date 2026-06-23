import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-south-1_VOAvmv9cB",
      userPoolClientId: "35e081rssit1j83688dbo4a995",
    },
  },
});