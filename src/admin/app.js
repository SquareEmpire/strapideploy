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
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Tech Square',
        'app.components.LeftMenu.navbrand.title': 'Tech Square',
        'Auth.form.welcome.title': 'Welcome to Tech Square!',
        'Auth.form.welcome.subtitle': 'Log in to your App',
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};