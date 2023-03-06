"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[32252],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),l=n(16550),u=n(91980),c=n(67392),s=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function v(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,d=p(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),h=v[0],g=v[1],b=f({queryString:u,groupId:c}),k=b[0],w=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),y=N[0],C=N[1],S=function(){var e=null!=k?k:y;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){S&&g(S)}),[S]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),C(e)}),[w,C,d]),tabValues:d}}var h=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,l=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==l&&(d(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;n=null!=(i=s[o])?i:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},79409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=(n(74866),n(85162),["components"]),l={id:"drawer-navigator",title:"createDrawerNavigator",sidebar_label:"createDrawerNavigator"},u=void 0,c={unversionedId:"drawer-navigator",id:"version-2.x/drawer-navigator",title:"createDrawerNavigator",description:"RouteConfigs",source:"@site/versioned_docs/version-2.x/drawer-navigator.md",sourceDirName:".",slug:"/drawer-navigator",permalink:"/docs/2.x/drawer-navigator",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/drawer-navigator.md",tags:[],version:"2.x",frontMatter:{id:"drawer-navigator",title:"createDrawerNavigator",sidebar_label:"createDrawerNavigator"},sidebar:"version-2.x-api",previous:{title:"createSwitchNavigator",permalink:"/docs/2.x/switch-navigator"},next:{title:"createTabNavigator",permalink:"/docs/2.x/tab-navigator"}},s={},d=[{value:"RouteConfigs",id:"routeconfigs",level:3},{value:"DrawerNavigatorConfig",id:"drawernavigatorconfig",level:3},{value:"Providing a custom <code>contentComponent</code>",id:"providing-a-custom-contentcomponent",level:3},{value:"<code>contentOptions</code> for <code>DrawerItems</code>",id:"contentoptions-for-draweritems",level:3},{value:"Example",id:"example",level:4},{value:"Screen Navigation Options",id:"screen-navigation-options",level:3},{value:"<code>title</code>",id:"title",level:4},{value:"<code>drawerLabel</code>",id:"drawerlabel",level:4},{value:"<code>drawerIcon</code>",id:"drawericon",level:4},{value:"<code>drawerLockMode</code>",id:"drawerlockmode",level:4},{value:"Nesting drawer navigators inside others",id:"nesting-drawer-navigators-inside-others",level:3}],p={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig)\n")),(0,i.kt)("h3",{id:"routeconfigs"},"RouteConfigs"),(0,i.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/stack-navigator#routeconfigs"},"example")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),(0,i.kt)("h3",{id:"drawernavigatorconfig"},"DrawerNavigatorConfig"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"drawerWidth")," - Width of the drawer or a function returning it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"drawerPosition")," - Options are ",(0,i.kt)("inlineCode",{parentName:"li"},"left")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),". Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"left")," position."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contentComponent")," - Component used to render the content of the drawer, for example, navigation items. Receives the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," prop for the drawer. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"DrawerItems"),". For more information, see below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contentOptions")," - Configure the drawer content, see below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useNativeAnimations")," - Enable native animations. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"drawerBackgroundColor")," - Use the Drawer background for some color. The Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"white"),".")),(0,i.kt)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial route."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the drawer items."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause switch to the initial route? If yes, set to ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute")," behavior.")),(0,i.kt)("h3",{id:"providing-a-custom-contentcomponent"},"Providing a custom ",(0,i.kt)("inlineCode",{parentName:"h3"},"contentComponent")),(0,i.kt)("p",null,"The default component for the drawer is scrollable and only contains links for the routes in the RouteConfig. You can easily override the default component to add a header, footer, or other content to the drawer. By default the drawer is scrollable and supports iPhone X safe area. If you customize the content, be sure to wrap the content in a SafeAreaView:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { DrawerItems, SafeAreaView } from 'react-navigation';\n\nconst CustomDrawerContentComponent = (props) => (\n  <ScrollView>\n    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>\n      <DrawerItems {...props} />\n    </SafeAreaView>\n  </ScrollView>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n")),(0,i.kt)("h3",{id:"contentoptions-for-draweritems"},(0,i.kt)("inlineCode",{parentName:"h3"},"contentOptions")," for ",(0,i.kt)("inlineCode",{parentName:"h3"},"DrawerItems")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"items")," - the array of routes, can be modified or overridden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeItemKey")," - key identifying the active route"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - label and icon color of the active label"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - background color of the active label"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - label and icon color of the inactive label"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - background color of the inactive label"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onItemPress(route)")," - function to be invoked when an item is pressed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemsContainerStyle")," - style object for the content section"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemStyle")," - style object for the single item, which can contain an Icon and/or a Label"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle")," - style object to overwrite ",(0,i.kt)("inlineCode",{parentName:"li"},"Text")," style inside content section, when your label is a string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeLabelStyle")," - style object to overwrite ",(0,i.kt)("inlineCode",{parentName:"li"},"Text")," style of the active label, when your label is a string (merged with ",(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveLabelStyle")," - style object to overwrite ",(0,i.kt)("inlineCode",{parentName:"li"},"Text")," style of the inactive label, when your label is a string (merged with ",(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iconContainerStyle")," - style object to overwrite ",(0,i.kt)("inlineCode",{parentName:"li"},"View")," icon container styles.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"contentOptions: {\n  activeTintColor: '#e91e63',\n  itemsContainerStyle: {\n    marginVertical: 0,\n  },\n  iconContainerStyle: {\n    opacity: 1\n  }\n}\n")),(0,i.kt)("h3",{id:"screen-navigation-options"},"Screen Navigation Options"),(0,i.kt)("h4",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")),(0,i.kt)("p",null,"Generic title that can be used as a fallback for ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"drawerLabel")),(0,i.kt)("h4",{id:"drawerlabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"drawerLabel")),(0,i.kt)("p",null,"String, React Element or a function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in drawer sidebar. When undefined, scene ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," is used"),(0,i.kt)("h4",{id:"drawericon"},(0,i.kt)("inlineCode",{parentName:"h4"},"drawerIcon")),(0,i.kt)("p",null,"React Element or a function, that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in drawer sidebar"),(0,i.kt)("h4",{id:"drawerlockmode"},(0,i.kt)("inlineCode",{parentName:"h4"},"drawerLockMode")),(0,i.kt)("p",null,"Specifies the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/drawerlayoutandroid.html#drawerlockmode"},"lock mode")," of the drawer. This can also update dynamically by using screenProps.drawerLockMode on your top level router."),(0,i.kt)("h3",{id:"nesting-drawer-navigators-inside-others"},"Nesting drawer navigators inside others"),(0,i.kt)("p",null,"If a drawer navigator is nested inside of another navigator that provides some UI, for example a tab navigator or stack navigator, then the drawer will be rendered below the UI from those navigators. The drawer will appear below the tab bar and below the header of the stack. You will need to make the drawer navigator the parent of any navigator where the drawer should be rendered on top of its UI."))}f.isMDXComponent=!0}}]);