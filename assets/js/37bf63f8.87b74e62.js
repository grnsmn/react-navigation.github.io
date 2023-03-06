"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[57310],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(83117),r=t(67294),i=t(86010),o=t(12466),s=t(16550),l=t(91980),c=t(67392),u=t(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function g(e){var n,t,a,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,p=d(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),k=g[0],f=g[1],w=h({queryString:l,groupId:c}),S=w[0],v=w[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),b=y[0],N=y[1],C=function(){var e=null!=S?S:b;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),v(e),N(e)}),[v,N,p]),tabValues:p}}var k=t(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){var n=e.className,t=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==s&&(p(n),l(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;t=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;t=null!=(i=u[o])?i:u[u.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function S(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function v(e){var n=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(w,(0,a.Z)({},e,n)),r.createElement(S,(0,a.Z)({},e,n)))}function y(e){var n=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(n)},e))}},32756:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=(t(74866),t(85162),["components"]),s={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},l=void 0,c={unversionedId:"auth-flow",id:"version-6.x/auth-flow",title:"Authentication flows",description:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:",source:"@site/versioned_docs/version-6.x/auth-flow.md",sourceDirName:".",slug:"/auth-flow",permalink:"/docs/auth-flow",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/auth-flow.md",tags:[],version:"6.x",frontMatter:{id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},sidebar:"version-6.x/docs",previous:{title:"Drawer navigation",permalink:"/docs/drawer-based-navigation"},next:{title:"Supporting safe areas",permalink:"/docs/handling-safe-area"}},u={},p=[{value:"What we need",id:"what-we-need",level:2},{value:"How it will work",id:"how-it-will-work",level:2},{value:"Don&#39;t manually navigate when conditionally rendering screens",id:"dont-manually-navigate-when-conditionally-rendering-screens",level:2},{value:"Define our screens",id:"define-our-screens",level:2},{value:"Implement the logic for restoring the token",id:"implement-the-logic-for-restoring-the-token",level:2},{value:"Fill in other components",id:"fill-in-other-components",level:2},{value:"Removing shared screens when auth state changes",id:"removing-shared-screens-when-auth-state-changes",level:2}],d={toc:p},m="wrapper";function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user opens the app."),(0,i.kt)("li",{parentName:"ul"},"The app loads some authentication state from encrypted persistent storage (for example, ",(0,i.kt)("a",{parentName:"li",href:"https://docs.expo.io/versions/latest/sdk/securestore/"},(0,i.kt)("inlineCode",{parentName:"a"},"SecureStore")),")."),(0,i.kt)("li",{parentName:"ul"},"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."),(0,i.kt)("li",{parentName:"ul"},"When the user signs out, we clear the authentication state and send them back to authentication screens.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Note: We say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.')),(0,i.kt)("h2",{id:"what-we-need"},"What we need"),(0,i.kt)("p",null,"This is the behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens related to authentication, and when we press the hardware back button we expect to not be able to go back to the authentication flow."),(0,i.kt)("h2",{id:"how-it-will-work"},"How it will work"),(0,i.kt)("p",null,"We can define different screens based on some condition. For example, if the user is signed in, we can define ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," etc. If the user is not signed in, we can define ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SignUp")," screens."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("samp",{id:"conditional-screens"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'isSignedIn ? (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n    <Stack.Screen name="Settings" component={SettingsScreen} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n  </>\n);\n')),(0,i.kt)("p",null,"When we define screens like this, when ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", React Navigation will only see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," screens, and when it's ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", React Navigation will see the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SignUp")," screens. This makes it impossible to navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," screens when the user is not signed in, and to ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SignUp")," screens when the user is signed in."),(0,i.kt)("p",null,'This pattern has been in use by other routing libraries such as React Router for a long time, and is commonly known as "Protected routes". Here, our screens which need the user to be signed in are "protected" and cannot be navigated to by other means if the user is not signed in.'),(0,i.kt)("p",null,"The magic happens when the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," variable changes. Let's say, initially ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". This means, either ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SignUp")," screens are shown. After the user signs in, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," will change to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". React Navigation will see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SignUp")," screens are no longer defined and so it will remove them. Then it'll show the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," screen automatically because that's the first screen defined when ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"The example shows stack navigator, but you can use the same approach with any navigator."),(0,i.kt)("p",null,"By conditionally defining different screens based on a variable, we can implement auth flow in a simple way that doesn't require additional logic to make sure that the correct screen is shown."),(0,i.kt)("h2",{id:"dont-manually-navigate-when-conditionally-rendering-screens"},"Don't manually navigate when conditionally rendering screens"),(0,i.kt)("p",null,"It's important to note that when using such a setup, you ",(0,i.kt)("strong",{parentName:"p"},"don't manually navigate")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," screen by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.navigate('Home')")," or any other method. ",(0,i.kt)("strong",{parentName:"p"},"React Navigation will automatically navigate to the correct screen")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," changes - ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," screen when ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", and to ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," screen when ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignedIn")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". You'll get an error if you attempt to navigate manually."),(0,i.kt)("h2",{id:"define-our-screens"},"Define our screens"),(0,i.kt)("p",null,"In our navigator, we can conditionally define appropriate screens. For our case, let's say we have 3 screens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SplashScreen")," - This will show a splash or loading screen when we're restoring the token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SignInScreen")," - This is the screen we show if the user isn't signed in already (we couldn't find a token)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HomeScreen")," - This is the screen we show if the user is already signed in.")),(0,i.kt)("p",null,"So our navigator will look like:"),(0,i.kt)("samp",{id:"conditional-screens-advanced"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (state.isLoading) {\n  // We haven't finished checking for the token yet\n  return <SplashScreen />;\n}\n\nreturn (\n  <Stack.Navigator>\n    {state.userToken == null ? (\n      // No token found, user isn't signed in\n      <Stack.Screen\n        name=\"SignIn\"\n        component={SignInScreen}\n        options={{\n          title: 'Sign in',\n          // When logging out, a pop animation feels intuitive\n          // You can remove this if you want the default 'push' animation\n          animationTypeForReplace: state.isSignout ? 'pop' : 'push',\n        }}\n      />\n    ) : (\n      // User is signed in\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n    )}\n  </Stack.Navigator>\n);\n")),(0,i.kt)("p",null,"In the above snippet, ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading")," means that we're still checking if we have a token. This can usually be done by checking if we have a token in ",(0,i.kt)("inlineCode",{parentName:"p"},"SecureStore")," and validating the token. After we get the token and if it's valid, we need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"userToken"),". We also have another state called ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignout")," to have a different animation on sign out."),(0,i.kt)("p",null,"The main thing to notice is that we're conditionally defining screens based on these state variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SignIn")," screen is only defined if ",(0,i.kt)("inlineCode",{parentName:"li"},"userToken")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," (user is not signed in)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Home")," screen is only defined if ",(0,i.kt)("inlineCode",{parentName:"li"},"userToken")," is non-null (user is signed in)")),(0,i.kt)("p",null,"Here, we're conditionally defining one screen for each case. But you could also define multiple screens. For example, you probably want to define password reset, signup, etc screens as well when the user isn't signed in. Similarly for the screens accessible after sign in, you probably have more than one screen. We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"React.Fragment")," to define multiple screens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'state.userToken == null ? (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n    <Stack.Screen name="ResetPassword" component={ResetPassword} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n  </>\n);\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you have both your login-related screens and rest of the screens in Stack navigators, we recommend to use a single Stack navigator and place the conditional inside instead of using 2 different navigators. This makes it possible to have a proper transition animation during login/logout.")),(0,i.kt)("h2",{id:"implement-the-logic-for-restoring-the-token"},"Implement the logic for restoring the token"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The following is just an example of how you might implement the logic for authentication in your app. You don't need to follow it as is.")),(0,i.kt)("p",null,"From the previous snippet, we can see that we need 3 state variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isLoading")," - We set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when we're trying to check if we already have a token saved in ",(0,i.kt)("inlineCode",{parentName:"li"},"SecureStore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isSignout")," - We set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when user is signing out, otherwise set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userToken")," - The token for the user. If it's non-null, we assume the user is logged in, otherwise not.")),(0,i.kt)("p",null,"So we need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add some logic for restoring token, sign in and sign out"),(0,i.kt)("li",{parentName:"ul"},"Expose methods for sign in and sign out to other components")),(0,i.kt)("p",null,"We'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useReducer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useContext")," in this guide. But if you're using a state management library such as Redux or Mobx, you can use them for this functionality instead. In fact, in bigger apps, a global state management library is more suitable for storing authentication tokens. You can adapt the same approach to your state management library."),(0,i.kt)("p",null,"First we'll need to create a context for auth where we can expose necessary methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\n\nconst AuthContext = React.createContext();\n")),(0,i.kt)("p",null,"So our component will look like this:"),(0,i.kt)("samp",{id:"auth-flow"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport * as SecureStore from 'expo-secure-store';\n\nexport default function App({ navigation }) {\n  const [state, dispatch] = React.useReducer(\n    (prevState, action) => {\n      switch (action.type) {\n        case 'RESTORE_TOKEN':\n          return {\n            ...prevState,\n            userToken: action.token,\n            isLoading: false,\n          };\n        case 'SIGN_IN':\n          return {\n            ...prevState,\n            isSignout: false,\n            userToken: action.token,\n          };\n        case 'SIGN_OUT':\n          return {\n            ...prevState,\n            isSignout: true,\n            userToken: null,\n          };\n      }\n    },\n    {\n      isLoading: true,\n      isSignout: false,\n      userToken: null,\n    }\n  );\n\n  React.useEffect(() => {\n    // Fetch the token from storage then navigate to our appropriate place\n    const bootstrapAsync = async () => {\n      let userToken;\n\n      try {\n        userToken = await SecureStore.getItemAsync('userToken');\n      } catch (e) {\n        // Restoring token failed\n      }\n\n      // After restoring token, we may need to validate it in production apps\n\n      // This will switch to the App screen or Auth screen and this loading\n      // screen will be unmounted and thrown away.\n      dispatch({ type: 'RESTORE_TOKEN', token: userToken });\n    };\n\n    bootstrapAsync();\n  }, []);\n\n  const authContext = React.useMemo(\n    () => ({\n      signIn: async (data) => {\n        // In a production app, we need to send some data (usually username, password) to server and get a token\n        // We will also need to handle errors if sign in failed\n        // After getting token, we need to persist the token using `SecureStore`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n      signOut: () => dispatch({ type: 'SIGN_OUT' }),\n      signUp: async (data) => {\n        // In a production app, we need to send user data to server and get a token\n        // We will also need to handle errors if sign up failed\n        // After getting token, we need to persist the token using `SecureStore`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n    }),\n    []\n  );\n\n  return (\n    <AuthContext.Provider value={authContext}>\n      <Stack.Navigator>\n        {state.userToken == null ? (\n          <Stack.Screen name=\"SignIn\" component={SignInScreen} />\n        ) : (\n          <Stack.Screen name=\"Home\" component={HomeScreen} />\n        )}\n      </Stack.Navigator>\n    </AuthContext.Provider>\n  );\n}\n")),(0,i.kt)("h2",{id:"fill-in-other-components"},"Fill in other components"),(0,i.kt)("p",null,"We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function SignInScreen() {\n  const [username, setUsername] = React.useState(\'\');\n  const [password, setPassword] = React.useState(\'\');\n\n  const { signIn } = React.useContext(AuthContext);\n\n  return (\n    <View>\n      <TextInput\n        placeholder="Username"\n        value={username}\n        onChangeText={setUsername}\n      />\n      <TextInput\n        placeholder="Password"\n        value={password}\n        onChangeText={setPassword}\n        secureTextEntry\n      />\n      <Button title="Sign in" onPress={() => signIn({ username, password })} />\n    </View>\n  );\n}\n')),(0,i.kt)("h2",{id:"removing-shared-screens-when-auth-state-changes"},"Removing shared screens when auth state changes"),(0,i.kt)("p",null,"Consider the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'isSignedIn ? (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n    <Stack.Screen name="Help" component={HelpScreen} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n    <Stack.Screen name="Help" component={HelpScreen} />\n  </>\n);\n')),(0,i.kt)("p",null,"Here we have specific screens such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," etc. which are only shown depending on the sign in state. But we also have the ",(0,i.kt)("inlineCode",{parentName:"p"},"Help")," screen which can be shown in both cases. This also means that if the signin state changes when the user is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Help")," screen, they'll stay on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Help")," screen."),(0,i.kt)("p",null,"This can be a problem, we probably want the user to be taken to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," screen or ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," screen instead of keeping them on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Help")," screen. To make this work, we can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/screen#navigationkey"},(0,i.kt)("inlineCode",{parentName:"a"},"navigationKey")," prop"),". When the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationKey")," changes, React Navigation will remove all the screen."),(0,i.kt)("p",null,"So our updated code will look like following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<>\n  {isSignedIn ? (\n    <>\n      <Stack.Screen name="Home" component={HomeScreen} />\n      <Stack.Screen name="Profile" component={ProfileScreen} />\n    </>\n  ) : (\n    <>\n      <Stack.Screen name="SignIn" component={SignInScreen} />\n      <Stack.Screen name="SignUp" component={SignUpScreen} />\n    </>\n  )}\n  <Stack.Screen navigationKey={isSignedIn ? \'user\' : \'guest\'} name="Help" component={HelpScreen} />\n</>\n')),(0,i.kt)("p",null,"If you have a bunch of shared screens, you can also use ",(0,i.kt)("a",{parentName:"p",href:"/docs/group#navigationkey"},(0,i.kt)("inlineCode",{parentName:"a"},"navigationKey")," with a ",(0,i.kt)("inlineCode",{parentName:"a"},"Group"))," to remove all of the screens in the group. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<>\n  {isSignedIn ? (\n    <>\n      <Stack.Screen name="Home" component={HomeScreen} />\n      <Stack.Screen name="Profile" component={ProfileScreen} />\n    </>\n  ) : (\n    <>\n      <Stack.Screen name="SignIn" component={SignInScreen} />\n      <Stack.Screen name="SignUp" component={SignUpScreen} />\n    </>\n  )}\n  <Stack.Group navigationKey={isSignedIn ? \'user\' : \'guest\'}>\n    <Stack.Screen name="Help" component={HelpScreen} />\n    <Stack.Screen name="About" component={AboutScreen} />\n  </Stack.Group>\n</>\n')))}h.isMDXComponent=!0}}]);