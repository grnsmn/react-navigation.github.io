"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5392],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var t,a=e.lazy,r=e.block,s=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=n.Children.toArray(e.children),v=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=i(),f=g.tabGroupChoices,k=g.setTabGroupChoices,y=(0,n.useState)(h),b=y[0],N=y[1],w=[];if(null!=u){var x=f[u];null!=x&&x!==b&&v.some((function(e){return e.value===x}))&&N(x)}var j=function(e){var t=e.currentTarget,a=w.indexOf(t),n=v[a].value;N(n),null!=u&&(k(u,n),setTimeout((function(){var e,a,n,r,i,o,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,a>=0&&i<=s&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},v.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:j,onClick:j},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},32125:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return v}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(55064),l=a(58215),c=["components"],s={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},p=void 0,u={unversionedId:"getting-started",id:"version-4.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.",source:"@site/versioned_docs/version-4.x/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/4.x/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/getting-started.md",tags:[],version:"4.x",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-4.x-docs",next:{title:"Hello React Navigation",permalink:"/docs/4.x/hello-react-navigation"}},d=[{value:"What to expect",id:"what-to-expect",children:[]},{value:"Start from a template",id:"start-from-a-template",children:[]},{value:"Install into an existing project",id:"install-into-an-existing-project",children:[]}],m={toc:d};function v(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."),(0,i.kt)("p",null,"Before you commit to using React Navigation for your project, you might want to read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/pitch"},"anti-pitch")," ","\u2014"," it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."),(0,i.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,i.kt)("p",null,"If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",(0,i.kt)("a",{parentName:"p",href:"http://reactnativeexpress.com/"},"React Native Express")," first, then come back here when you're done."),(0,i.kt)("p",null,"What follows within the ",(0,i.kt)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),(0,i.kt)("h2",{id:"start-from-a-template"},"Start from a template"),(0,i.kt)("p",null,"The easiest way to get running with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation")," is to initialize a project using ",(0,i.kt)("inlineCode",{parentName:"p"},"expo-cli"),". You can install this with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i -g expo-cli"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you'd like to create a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.expo.io/versions/latest/introduction/managed-vs-bare"},"managed React Native project")," then choose the ",(0,i.kt)("inlineCode",{parentName:"li"},"blank")," template under the Managed workflow heading."),(0,i.kt)("li",{parentName:"ul"},"If you'd like a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.expo.io/versions/latest/introduction/managed-vs-bare/#bare-workflow"},"bare React Native project"),", then choose ",(0,i.kt)("inlineCode",{parentName:"li"},"minimal")," under the Bare workflow heading."),(0,i.kt)("li",{parentName:"ul"},"In both cases you can pick the TypeScript version of the template if you prefer ","\u2014"," React Navigation ships with TypeScript types.")),(0,i.kt)("p",null,"Once the project is initialized, in the project directory run ",(0,i.kt)("inlineCode",{parentName:"p"},"expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens"),", and you're ready to go! You can now continue to ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."),(0,i.kt)("h2",{id:"install-into-an-existing-project"},"Install into an existing project"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation")," package in your React Native project."),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation\n")))),(0,i.kt)("p",null,"React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code."),(0,i.kt)("p",null,"The libraries we will install now are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},(0,i.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,i.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},(0,i.kt)("inlineCode",{parentName:"a"},"react-native-screens"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,i.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),". If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on."),(0,i.kt)("h4",{id:"installing-dependencies-into-an-expo-managed-project"},"Installing dependencies into an Expo managed project"),(0,i.kt)("p",null,"In your project directory, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")),(0,i.kt)("p",null,"This will install versions of these libraries that are compatible."),(0,i.kt)("p",null,"You can now continue to ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."),(0,i.kt)("h4",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),(0,i.kt)("p",null,"In your project directory, run:"),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused my incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),(0,i.kt)("p",null,"Next, we need to link these libraries. The steps depends on your React Native version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native 0.60 and higher")),(0,i.kt)("p",{parentName:"li"},"On newer versions of React Native, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"linking is automatic"),"."),(0,i.kt)("p",{parentName:"li"},"If you're on a Mac and developing for iOS, you need to install pods to complete the linking. Make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods")," installed. Then run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios; pod install; cd ..\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native 0.59 and lower")),(0,i.kt)("p",{parentName:"li"},"If you're on an older React Native version, you need to manually link the dependencies. To do that, run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"react-native link react-native-reanimated\nreact-native link react-native-gesture-handler\nreact-native link react-native-screens\nreact-native link react-native-safe-area-context\n")),(0,i.kt)("p",{parentName:"li"},"You also need to configure ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier"},"jetifier")," to support dependencies using ",(0,i.kt)("inlineCode",{parentName:"p"},"androidx"),":"),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jetifier\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --save-dev jetifier\n")))),(0,i.kt)("p",{parentName:"li"},"Then add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," script in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "postinstall": "jetifier -r"\n}\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: Remember to remove this when you upgrade to React Native 0.60 and higher.")),(0,i.kt)("p",{parentName:"li"},"Now, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," script manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run postinstall\n")))),(0,i.kt)("p",null,"To finalize installation of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," for Android, make the following modifications to ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n+ import com.facebook.react.ReactActivityDelegate;\n+ import com.facebook.react.ReactRootView;\n+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n+  @Override\n+  protected ReactActivityDelegate createReactActivityDelegate() {\n+    return new ReactActivityDelegate(this, getMainComponentName()) {\n+      @Override\n+      protected ReactRootView createRootView() {\n+        return new RNGestureHandlerEnabledRootView(MainActivity.this);\n+      }\n+    };\n+  }\n}\n')),(0,i.kt)("p",null,"Then add the following at the top of your entry file, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler';\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error \"Unable to resolve module\", you need to install that module in your project.")),(0,i.kt)("p",null,"Now you are ready to build and run your app on the device/simulator."),(0,i.kt)("p",null,"Continue to ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."))}v.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);