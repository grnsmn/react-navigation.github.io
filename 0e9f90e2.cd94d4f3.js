(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{427:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,d=l["".concat(i,".").concat(m)]||l[m]||g[m]||a;return t?r.a.createElement(d,c(c({ref:n},p),{},{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var o=t(1),r=t(6),a=(t(0),t(427)),i={id:"common-mistakes",title:"Common mistakes",sidebar_label:"Common mistakes"},c={unversionedId:"common-mistakes",id:"version-2.x/common-mistakes",isDocsHomePage:!1,title:"Common mistakes",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation and serves as a reference in some cases for error messages.",source:"@site/versioned_docs/version-2.x/common-mistakes.md",slug:"/common-mistakes",permalink:"/docs/2.x/common-mistakes",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/common-mistakes.md",version:"2.x",sidebar_label:"Common mistakes",sidebar:"version-2.x-docs",previous:{title:"Glossary of terms",permalink:"/docs/2.x/glossary-of-terms"},next:{title:"Optimize memory usage and performance",permalink:"/docs/2.x/react-native-screens"}},s=[{value:"Explicitly rendering more than one navigator",id:"explicitly-rendering-more-than-one-navigator",children:[]},{value:"Assigning navigationOptions to the wrong component",id:"assigning-navigationoptions-to-the-wrong-component",children:[]}],p={rightToc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation and serves as a reference in some cases for error messages."),Object(a.b)("h2",{id:"explicitly-rendering-more-than-one-navigator"},"Explicitly rendering more than one navigator"),Object(a.b)("p",null,"Most apps should only ever render one navigator inside of a React component, and this is usually somewhere near the root component of your app. This is a little bit counter-intuitive at first but it's important for the architecture of React Navigation."),Object(a.b)("p",null,"Here's what you might write in your code -- note that this example would be incorrect:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'export default App extends React.Component {\n  render() {\n    /* In the root component we are rendering the app navigator */\n    return <AppNavigator />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\n\nclass AuthenticationScreen extends React.Component {\n  render() {\n    /*\n     * In a screen inside of the navigator we are rendering another navigator\n     * You should avoid this! It will have its own navigation state and be unable\n     * To interact with any parent navigator, eg: it would not know the route "Home" exists\n     */\n    return (\n      <AuthenticationNavigator />\n    );\n  }\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthenticationScreen, // This screen renders a navigator!\n  Home: HomeScreen,\n});\n')),Object(a.b)("p",null,"The correct way to write this would be the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"export default App extends React.Component {\n  render() {\n    return <AppNavigator />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  /*\n   * Rather than being rendered by a screen component, the\n   * AuthenticationNavigator is a screen component\n   */\n  Auth: AuthenticationNavigator,\n  Home: HomeScreen,\n});\n")),Object(a.b)("p",null,"Alternatively, the following would also work because it exposes the ",Object(a.b)("inlineCode",{parentName:"p"},"router")," static on ",Object(a.b)("inlineCode",{parentName:"p"},"AuthenticationScreen")," and threads through the ",Object(a.b)("inlineCode",{parentName:"p"},"navigation")," prop:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"export default App extends React.Component {\n  render() {\n    /* In the root component we are rendering the app navigator */\n    return <AppNavigator />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nclass AuthenticationScreen extends React.Component {\n  static router = AuthenticationNavigator.router;\n\n  render() {\n    return (\n      <AuthenticationNavigator navigation={this.props.navigation} />\n    );\n  }\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthenticationScreen, // This screen renders a navigator!\n  Home: HomeScreen,\n});\n")),Object(a.b)("h2",{id:"assigning-navigationoptions-to-the-wrong-component"},"Assigning navigationOptions to the wrong component"),Object(a.b)("p",null,"In previous version of React Navigation, the library used to dig through your component tree to find ",Object(a.b)("inlineCode",{parentName:"p"},"navigationOptions"),". This is no longer the case, and only ",Object(a.b)("inlineCode",{parentName:"p"},"navigationOptions")," on screen components of a particular navigator will apply to that navigator. You can read more about this in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/2.x/navigation-options-resolution"}),"Navigation options resolution")," guide."))}u.isMDXComponent=!0}}]);