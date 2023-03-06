"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[62519],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?o.createElement(m,i(i({ref:n},l),{},{components:t})):o.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(67294),r=t(86010),a={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return S}});var o=t(83117),r=t(67294),a=t(86010),i=t(12466),s=t(16550),c=t(91980),p=t(67392),l=t(50012);function u(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:u(t);return function(e){var n=(0,p.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,a=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:t,groupId:o});return[(0,c._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(a.location.search);n.set(i,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[i,a])]}function h(e){var n,t,o,a,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,p=e.groupId,u=d(e),h=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=o.find((function(e){return e.default})))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:u})})),v=h[0],g=h[1],k=m({queryString:c,groupId:p}),b=k[0],y=k[1],S=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),t=(0,l.Nk)(n),o=t[0],a=t[1],[o,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),N=S[0],w=S[1],O=function(){var e=null!=b?b:N;return f({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),w(e)}),[y,w,u]),tabValues:u}}var v=t(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var n=e.className,t=e.block,s=e.selectedValue,c=e.selectValue,p=e.tabValues,l=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),o=p[t].value;o!==s&&(u(n),c(o))},f=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var o,r=l.indexOf(e.currentTarget)+1;t=null!=(o=l[r])?o:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;t=null!=(a=l[i])?a:l[l.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},p.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return l.push(e)},onKeyDown:f,onClick:d},i,{className:(0,a.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function b(e){var n=e.lazy,t=e.children,o=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var a=t.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})})))}function y(e){var n=h(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},r.createElement(k,(0,o.Z)({},e,n)),r.createElement(b,(0,o.Z)({},e,n)))}function S(e){var n=(0,v.Z)();return r.createElement(y,(0,o.Z)({key:String(n)},e))}},35324:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=t(83117),r=t(80102),a=(t(67294),t(3905)),i=(t(74866),t(85162),["components"]),s={id:"screen-options",title:"Options for screens",sidebar_label:"Options for screens"},c=void 0,p={unversionedId:"screen-options",id:"version-6.x/screen-options",title:"Options for screens",description:"Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options.",source:"@site/versioned_docs/version-6.x/screen-options.md",sourceDirName:".",slug:"/screen-options",permalink:"/docs/screen-options",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/screen-options.md",tags:[],version:"6.x",frontMatter:{id:"screen-options",title:"Options for screens",sidebar_label:"Options for screens"},sidebar:"version-6.x/docs",previous:{title:"Screen",permalink:"/docs/screen"},next:{title:"Route prop",permalink:"/docs/route-prop"}},l={},u=[{value:"<code>options</code> prop on <code>Screen</code>",id:"options-prop-on-screen",level:3},{value:"<code>screenOptions</code> prop on <code>Group</code>",id:"screenoptions-prop-on-group",level:3},{value:"<code>screenOptions</code> prop on the navigator",id:"screenoptions-prop-on-the-navigator",level:3},{value:"<code>navigation.setOptions</code> method",id:"navigationsetoptions-method",level:3}],d={toc:u},f="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)(f,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options."),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/docs/headers"},"configuring the header bar")," section of the fundamentals documentation we explain the basics of how this works. Also see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/screen-options-resolution"},"screen options resolution guide")," to get an idea of how they work when there are multiple navigators."),(0,a.kt)("p",null,"There are 3 ways of specifying options for screens:"),(0,a.kt)("h3",{id:"options-prop-on-screen"},(0,a.kt)("inlineCode",{parentName:"h3"},"options")," prop on ",(0,a.kt)("inlineCode",{parentName:"h3"},"Screen")),(0,a.kt)("p",null,"You can pass a prop named ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen")," component to configure a screen, where you can specify an object with different options for that screen:"),(0,a.kt)("samp",{id:"screen-options"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<Stack.Navigator>\n  <Stack.Screen\n    name=\"Home\"\n    component={HomeScreen}\n    options={{ title: 'Awesome app' }}\n  />\n  <Stack.Screen\n    name=\"Profile\"\n    component={ProfileScreen}\n    options={{ title: 'My profile' }}\n  />\n</Stack.Navigator>\n")),(0,a.kt)("p",null,"You can also pass a function to ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),". The function will receive the ",(0,a.kt)("a",{parentName:"p",href:"/docs/navigation-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"navigation")," prop")," and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/route-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"route")," prop")," for that screen. This can be useful if you want to perform navigation in your options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<Stack.Screen\n  name=\"Home\"\n  component={HomeScreen}\n  options={({ navigation }) => ({\n    title: 'Awesome app',\n    headerLeft: () => (\n      <DrawerButton onPress={() => navigation.toggleDrawer()} />\n    ),\n  })}\n/>\n")),(0,a.kt)("h3",{id:"screenoptions-prop-on-group"},(0,a.kt)("inlineCode",{parentName:"h3"},"screenOptions")," prop on ",(0,a.kt)("inlineCode",{parentName:"h3"},"Group")),(0,a.kt)("p",null,"You can pass a prop named ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Group")," component to configure screens inside the group, where you can specify an object with different options. The options specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions")," apply to all of the screens in the group."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("samp",{id:"screen-options-group"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Navigator>\n  <Stack.Group\n    screenOptions={{ headerStyle: { backgroundColor: \'papayawhip\' } }}\n  >\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n  </Stack.Group>\n  <Stack.Group screenOptions={{ presentation: \'modal\' }}>\n    <Stack.Screen name="Settings" component={Settings} />\n    <Stack.Screen name="Share" component={Share} />\n  </Stack.Group>\n</Stack.Navigator>\n')),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),", you can also pass a function to ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions"),". The function will receive the ",(0,a.kt)("a",{parentName:"p",href:"/docs/navigation-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"navigation")," prop")," and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/route-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"route")," prop")," for each screen. This can be useful if you want to configure options for all the screens in one place based on the route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Navigator>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n  <Stack.Group\n    screenOptions={({ navigation }) => ({\n      presentation: \'modal\',\n      headerLeft: () => <CancelButton onPress={navigation.goBack} />,\n    })}\n  >\n    <Stack.Screen name="Settings" component={Settings} />\n    <Stack.Screen name="Share" component={Share} />\n  </Stack.Group>\n</Stack.Navigator>\n')),(0,a.kt)("h3",{id:"screenoptions-prop-on-the-navigator"},(0,a.kt)("inlineCode",{parentName:"h3"},"screenOptions")," prop on the navigator"),(0,a.kt)("p",null,"You can pass a prop named ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions")," to the navigator component, where you can specify an object with different options. The options specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions")," apply to all of the screens in the navigator. So this is a good place to add specify options that you want to configure for the whole navigator."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Navigator\n  screenOptions={{ headerStyle: { backgroundColor: \'papayawhip\' } }}\n>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n')),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),", you can also pass a function to ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions"),". The function will receive the ",(0,a.kt)("a",{parentName:"p",href:"/docs/navigation-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"navigation")," prop")," and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/route-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"route")," prop")," for each screen. This can be useful if you want to configure options for all the screens in one place based on the route:"),(0,a.kt)("samp",{id:"screen-options-navigator"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<Tab.Navigator\n  screenOptions={({ route }) => ({\n    tabBarIcon: ({ color, size }) => {\n      const icons = {\n        Home: 'home',\n        Profile: 'account',\n      };\n\n      return (\n        <MaterialCommunityIcons\n          name={icons[route.name]}\n          color={color}\n          size={size}\n        />\n      );\n    },\n  })}\n>\n  <Tab.Screen name=\"Home\" component={HomeScreen} />\n  <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n</Tab.Navigator>\n")),(0,a.kt)("h3",{id:"navigationsetoptions-method"},(0,a.kt)("inlineCode",{parentName:"h3"},"navigation.setOptions")," method"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop has a ",(0,a.kt)("inlineCode",{parentName:"p"},"setOptions")," method that lets you update the options for a screen from within a component. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/navigation-prop#setoptions"},"navigation prop's docs")," more details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Update options\"\n  onPress={() => navigation.setOptions({ title: 'Updated!' })}\n/>\n")))}m.isMDXComponent=!0}}]);