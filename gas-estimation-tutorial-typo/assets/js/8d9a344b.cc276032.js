"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={description:"Snaps exports reference",toc_max_heading_level:2,sidebar_position:2},l="Snaps exports",p={unversionedId:"reference/exports",id:"reference/exports",title:"Snaps exports",description:"Snaps exports reference",source:"@site/snaps/reference/exports.md",sourceDirName:"reference",slug:"/reference/exports",permalink:"/gas-estimation-tutorial-typo/snaps/reference/exports",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/exports.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Snaps exports reference",toc_max_heading_level:2,sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps JSON-RPC API",permalink:"/gas-estimation-tutorial-typo/snaps/reference/rpc-api"},next:{title:"Snaps command line interface",permalink:"/gas-estimation-tutorial-typo/snaps/reference/cli/"}},u={},c=[{value:"onRpcRequest",id:"onrpcrequest",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"onTransaction",id:"ontransaction",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"onCronjob",id:"oncronjob",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Example",id:"example-2",level:3}],m={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-exports"},"Snaps exports"),(0,r.kt)("p",null,"A snap can export the following methods."),(0,r.kt)("h2",{id:"onrpcrequest"},"onRpcRequest"),(0,r.kt)("p",null,"To communicate with dapps and other snaps, a snap must implement its own JSON-RPC API by exporting\n",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest"),".\nWhenever the snap receives a JSON-RPC request, the ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," handler method is called."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If your snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,r.kt)("a",{parentName:"p",href:"#ontransaction"},"transaction insights"),", you can skip exporting ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest"),".\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that sends transactions for that protocol via your snap, for example, you must\nspecify an RPC API.")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")," - The origin as a string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - The JSON-RPC request.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"A promise containing the return of the implemented method."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"TypeScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n"))),(0,r.kt)(s.Z,{label:"JavaScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")))),(0,r.kt)("h2",{id:"ontransaction"},"onTransaction"),(0,r.kt)("p",null,"To provide transaction insights before a user signs a transaction, a snap must export ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction"),".\nWhenever there's a contract interaction, and a transaction is submitted using the MetaMask\nextension, MetaMask calls this method.\nMetaMask passes the raw unsigned transaction payload to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," handler method."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/gas-estimation-tutorial-typo/snaps/reference/permissions#endowmenttransaction-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:transaction-insight"))," permission.")),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction")," - The raw transaction payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId")," - The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"CAIP-2"),"\nchain ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactionOrigin")," - The transaction origin if\n",(0,r.kt)("a",{parentName:"li",href:"/gas-estimation-tutorial-typo/snaps/reference/permissions#endowmenttransaction-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"allowTransactionOrigin"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"A content object displayed using ",(0,r.kt)("a",{parentName:"p",href:"/gas-estimation-tutorial-typo/snaps/how-to/use-custom-ui"},"custom UI"),", alongside the confirmation\nfor the transaction that ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," was called with."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"TypeScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OnTransactionHandler } from '@metamask/snaps-types';\nimport { panel, heading, text } from '@metamask/snaps-ui';\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ])\n  };\n};\n"))),(0,r.kt)(s.Z,{label:"JavaScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\nmodule.exports.onTransaction = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ])\n  };\n};\n")))),(0,r.kt)("h2",{id:"oncronjob"},"onCronjob"),(0,r.kt)("p",null,"To run periodic actions for the user (cron jobs), a snap must export ",(0,r.kt)("inlineCode",{parentName:"p"},"onCronjob"),".\nThis method is called at the specified times with the specified payloads defined in the\n",(0,r.kt)("a",{parentName:"p",href:"/gas-estimation-tutorial-typo/snaps/reference/permissions#endowmentcronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onCronjob")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/gas-estimation-tutorial-typo/snaps/reference/permissions#endowmentcronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission.")),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"An object containing an RPC request specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"TypeScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OnCronjobHandler } from '@metamask/snaps-types';\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case 'exampleMethodOne':\n      return snap.request({\n        method: 'snap_notify',\n        params: {\n          type: 'inApp',\n          message: `Hello, world!`,\n        },\n      });\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n"))),(0,r.kt)(s.Z,{label:"JavaScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.onCronjob = async ({ request }) => {\n  switch (request.method) {\n    case 'exampleMethodOne':\n      return snap.request({\n        method: 'snap_notify',\n        params: {\n          type: 'inApp',\n          message: `Hello, world!`,\n        },\n      });\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")))))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(70989),l=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(m(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function c(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",p.tabList)},r.createElement(u,(0,a.Z)({},e,t)),r.createElement(c,(0,a.Z)({},e,t)))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(67294),r=n(16550),o=n(91980),s=n(67392),i=n(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[m,d]=c({queryString:n,groupId:r}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=m??h;return u({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}}}]);