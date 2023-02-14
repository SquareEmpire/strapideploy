import newLogo from "./extensions/favicon.png";
const myPrimaryColor = "#2C97AD";

export default {
  config: {
    auth: {
      logo: newLogo,
    },
    menu: {
      logo: newLogo,
    },
    head: {
      favicon: newLogo,
    },
    tutorials: false,
    theme: {
      colors: {
        buttonPrimary600: myPrimaryColor,
        primary600: myPrimaryColor,
      },
    }
  },
  bootstrap(app) {
    console.log(app);
  },
};