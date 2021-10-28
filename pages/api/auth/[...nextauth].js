import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // If you want to have a custom page... include this..
  pages: {
    signIn: "/auth/signin",
  },
  // If you dont have custom page... style with this...
  // theme: {
  //   logo: "https://links.papareact.com/sq0",
  //   brandColor: "#F13287",
  //   colorScheme: "auto",
  // },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});

// OAuth Creds Screen, click Edit App
// https://console.cloud.google.com/apis/credentials/consent?authuser=1&project=insta-2-24a39

// Credentials Screen, click edit oauth 2.0 client
// https://console.cloud.google.com/apis/credentials?authuser=1&project=insta-2-24a39
