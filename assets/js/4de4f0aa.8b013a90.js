"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8054],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||o;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=f(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),v=h[0],g=h[1],b=p({queryString:s,groupId:u}),k=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],x=w[1],O=function(){var e=null!=k?k:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),x(e)}),[y,x,d]),tabValues:d}}var v=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:f},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},12473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),l={id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},s=void 0,u={unversionedId:"modal",id:"version-3.x/modal",title:"Opening a full-screen modal",description:"Dictionary.com provides no satisfactory definition of modal as it relates to user interfaces, but semantic UI describes it as follows:",source:"@site/versioned_docs/version-3.x/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/3.x/modal",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/modal.md",tags:[],version:"3.x",frontMatter:{id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},sidebar:"version-3.x-docs",previous:{title:"App containers",permalink:"/docs/3.x/app-containers"},next:{title:"Next steps",permalink:"/docs/3.x/next-steps"}},c={},d=[{value:"Creating a modal stack",id:"creating-a-modal-stack",level:2},{value:"Summary",id:"summary",level:2}],f={toc:d},m="wrapper";function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dictionary.com provides no satisfactory definition of modal as it relates to user interfaces, but semantic UI describes it as follows:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A modal displays content that temporarily blocks interactions with the main view")),(0,o.kt)("p",null,"This sounds about right. A modal is like a popup ","\u2014"," it's not part of your primary navigation flow ","\u2014"," it usually has a different transition, a different way to dismiss it, and is intended to focus on one particular piece of content or interaction."),(0,o.kt)("p",null,"The purpose of explaining this as part of the React Navigation fundamentals is not only because this is a common use case, but also because the implementation requires knowledge of ",(0,o.kt)("em",{parentName:"p"},"nesting navigators"),", which is an important part of React Navigation."),(0,o.kt)("h2",{id:"creating-a-modal-stack"},"Creating a modal stack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const params = navigation.state.params || {};\n\n    return {\n      headerLeft: (\n        <Button\n          onPress={() => navigation.navigate('MyModal')}\n          title=\"Info\"\n          color=\"#fff\"\n        />\n      ),\n      /* the rest of this config is unchanged */\n    };\n  };\n\n  /* render function, etc */\n}\n\nclass ModalScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n        <Button\n          onPress={() => this.props.navigation.goBack()}\n          title=\"Dismiss\"\n        />\n      </View>\n    );\n  }\n}\n\nconst MainStack = createStackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,\n    },\n    Details: {\n      screen: DetailsScreen,\n    },\n  },\n  {\n    /* Same configuration as before */\n  }\n);\n\nconst RootStack = createStackNavigator(\n  {\n    Main: {\n      screen: MainStack,\n    },\n    MyModal: {\n      screen: ModalScreen,\n    },\n  },\n  {\n    mode: 'modal',\n    headerMode: 'none',\n  }\n);\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/full-screen-modal-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"There are some important things to notice here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As we know, the stack navigator function returns a React component (remember we render ",(0,o.kt)("inlineCode",{parentName:"li"},"<RootStack />")," in our ",(0,o.kt)("inlineCode",{parentName:"li"},"App")," component). This same component can be used as a screen component! By doing this, we are nesting a stack navigator inside of another stack navigator. In this case, this is useful for us because we want to use a different transition style for the modal, and we want to disable the header across the entire stack. In the future this will be important because for tab navigation, for example, each tab will likely have its own stack! Intuitively, this is what you expect: when you are on tab A and switch to tab B, you would like tab A to maintain its navigation state as you continue to explore tab B. Look at this diagram to visualize the structure of navigation in this example:\n",(0,o.kt)("img",{alt:"tree diagram",src:n(11042).Z,width:"841",height:"536"})),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"mode")," configuration for stack navigator can be either ",(0,o.kt)("inlineCode",{parentName:"li"},"card")," (default) or ",(0,o.kt)("inlineCode",{parentName:"li"},"modal"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"modal")," behavior slides the screen in from the bottom on iOS and allows the user to swipe down from the top to dismiss it. The ",(0,o.kt)("inlineCode",{parentName:"li"},"modal")," configuration has no effect on Android because full-screen modals don't have any different transition behavior on the platform."),(0,o.kt)("li",{parentName:"ul"},"When we call ",(0,o.kt)("inlineCode",{parentName:"li"},"navigate")," we don't have to specify anything except the route that we'd like to navigate to. There is no need to qualify which stack it belongs to (the arbitrarily named 'root' or the 'main' stack) ","\u2014"," React Navigation attempts to find the route on the closest navigator and then performs the action there. To visualize this, look again at ",(0,o.kt)("a",{target:"_blank",href:n(93926).Z},"this diagram")," and imagine the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigate")," action flowing up from ",(0,o.kt)("inlineCode",{parentName:"li"},"HomeScreen")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"MainStack"),", we know that ",(0,o.kt)("inlineCode",{parentName:"li"},"MainStack")," can't handle the route ",(0,o.kt)("inlineCode",{parentName:"li"},"MyModal"),", so it then flows it up to ",(0,o.kt)("inlineCode",{parentName:"li"},"RootStack"),", which can handle that route and so it does.")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To change the type of transition on a stack navigator you can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"mode")," configuration. When set to ",(0,o.kt)("inlineCode",{parentName:"li"},"modal"),", all screens animate-in from bottom to top rather than right to left. This applies to that entire stack navigator, so to use right to left transitions on other screens, we add another navigation stack with the default configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"this.props.navigation.navigate")," traverses up the navigator tree to find a navigator that can handle the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigate")," action."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://snack.expo.io/@react-navigation/full-screen-modal-v3"},"Full source of what we have built so far"))))}p.isMDXComponent=!0},93926:function(e,t,n){t.Z=n.p+"assets/files/tree-c522585f78ec7e8aeaa7d09d3568012a.png"},11042:function(e,t,n){t.Z=n.p+"assets/images/tree-c522585f78ec7e8aeaa7d09d3568012a.png"}}]);