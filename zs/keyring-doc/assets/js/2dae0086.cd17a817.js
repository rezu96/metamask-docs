"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),c=r,u=h["".concat(s,".").concat(c)]||h[c]||m[c]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Migrate the provider API",description:"Migrate to the current provider API.",sidebar_position:12},i="Migrate to the current provider API",l={unversionedId:"how-to/migrate-api",id:"how-to/migrate-api",title:"Migrate the provider API",description:"Migrate to the current provider API.",source:"@site/wallet/how-to/migrate-api.md",sourceDirName:"how-to",slug:"/how-to/migrate-api",permalink:"/zs/keyring-doc/wallet/how-to/migrate-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/migrate-api.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Migrate the provider API",description:"Migrate to the current provider API.",sidebar_position:12},sidebar:"walletSidebar",previous:{title:"Use the onboarding library",permalink:"/zs/keyring-doc/wallet/how-to/use-onboarding-library"},next:{title:"Concepts",permalink:"/zs/keyring-doc/wallet/category/concepts"}},s={},d=[{value:"Summary of breaking changes",id:"summary-of-breaking-changes",level:2},{value:"window.web3 removal",id:"windowweb3-removal",level:3},{value:"window.ethereum API changes",id:"windowethereum-api-changes",level:3},{value:"Replace window.web3",id:"replace-windowweb3",level:2},{value:"Use window.ethereum directly",id:"use-windowethereum-directly",level:3},{value:"Use an updated convenience library",id:"use-an-updated-convenience-library",level:3},{value:"Use @metamask/legacy-web3",id:"use-metamasklegacy-web3",level:3},{value:"Use the MetaMask legacy Web3 extension",id:"use-the-metamask-legacy-web3-extension",level:3},{value:"Migrate to the new provider API",id:"migrate-to-the-new-provider-api",level:2},{value:"Handle eth_chainId return values",id:"handle-eth_chainid-return-values",level:3},{value:"Handle the removal of chainIdChanged",id:"handle-the-removal-of-chainidchanged",level:3},{value:"Handle the removal of isEnabled() and isApproved()",id:"handle-the-removal-of-isenabled-and-isapproved",level:3},{value:"Handle the removal of ethereum.publicConfigStore",id:"handle-the-removal-of-ethereumpublicconfigstore",level:3},{value:"Handle the removal of ethereum.autoRefreshOnNetworkChange",id:"handle-the-removal-of-ethereumautorefreshonnetworkchange",level:3}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrate-to-the-current-provider-api"},"Migrate to the current provider API"),(0,r.kt)("p",null,"In January 2021, MetaMask made a number of breaking changes to the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/reference/provider-api"},"provider API"),", and removed the injected ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),".\nThese changes are live on all platforms as of version:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"9.0.2")," of the MetaMask browser extension."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1.0.9")," of MetaMask Mobile.")),(0,r.kt)("p",null,"This guide describes how to migrate to the new provider API, and how to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),".\nTo understand why MetaMask made these changes, please see\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/metamask/breaking-changes-to-the-metamask-provider-are-here-7b11c9388be9"},"this blog post"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you're a MetaMask user attempting to use a legacy Ethereum website that hasn't migrated to the\nnew API, please see the ",(0,r.kt)("a",{parentName:"p",href:"#use-the-metamask-legacy-web3-extension"},"MetaMask legacy Web3 extension"),"."),(0,r.kt)("p",{parentName:"admonition"},"Except for such legacy websites, no action is required for MetaMask users.")),(0,r.kt)("h2",{id:"summary-of-breaking-changes"},"Summary of breaking changes"),(0,r.kt)("h3",{id:"windowweb3-removal"},"window.web3 removal"),(0,r.kt)("p",null,"As part of the breaking changes, MetaMask stopped injecting ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.js")," version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.20.7")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),"\ninto web pages.\nMetaMask still injects a dummy object at ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),", in order to issue warnings when websites\nattempt to access ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),"."),(0,r.kt)("h3",{id:"windowethereum-api-changes"},"window.ethereum API changes"),(0,r.kt)("p",null,"MetaMask made the following breaking changes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure that chain IDs returned by ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_chainId")," are ",(0,r.kt)("strong",{parentName:"li"},"not")," 0-padded.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"0x01"),", we always return ",(0,r.kt)("inlineCode",{parentName:"li"},"0x1"),", wherever the chain ID is returned or accessible."))),(0,r.kt)("li",{parentName:"ul"},"Stop emitting ",(0,r.kt)("inlineCode",{parentName:"li"},"chainIdChanged"),", and instead emit ",(0,r.kt)("inlineCode",{parentName:"li"},"chainChanged"),"."),(0,r.kt)("li",{parentName:"ul"},"Remove the following experimental methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ethereum._metamask.isEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ethereum._metamask.isApproved")))),(0,r.kt)("li",{parentName:"ul"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum.publicConfigStore")," object.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This object was, despite its name, never intended for public consumption.\nIts removal ",(0,r.kt)("em",{parentName:"li"},"may")," affect those who do not use it directly, for example, if another library you\nuse relies on the object."))),(0,r.kt)("li",{parentName:"ul"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum.autoRefreshOnNetworkChange")," property.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Consumers can still set this property on the provider, it just won't do anything."))),(0,r.kt)("li",{parentName:"ul"},"Deprecate the ",(0,r.kt)("inlineCode",{parentName:"li"},"web3.currentProvider")," method.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/detect-provider"},"@metamask/detect-provider")," to detect the\ncurrent provider.")))),(0,r.kt)("h2",{id:"replace-windowweb3"},"Replace window.web3"),(0,r.kt)("admonition",{title:"Pages no longer reload on chain changes",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since we removed ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),", MetaMask no longer automatically reloads the page on chain/network changes."),(0,r.kt)("p",{parentName:"admonition"},"Please see ",(0,r.kt)("a",{parentName:"p",href:"#handle-the-removal-of-ethereumautorefreshonnetworkchange"},"Handling the removal of ",(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.autoRefreshOnNetworkChange")),"\nfor details.")),(0,r.kt)("p",null,"For historical reasons, MetaMask injected ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/tree/0.20.7"},(0,r.kt)("inlineCode",{parentName:"a"},"web3@0.20.7"))," into all web pages.\nThat version of ",(0,r.kt)("inlineCode",{parentName:"p"},"web3")," is deprecated, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/issues/3065"},"has known security issues"),", and is no longer maintained by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/"},"web3.js")," team.\nTherefore, we decided to remove this library."),(0,r.kt)("p",null,"If your website relied on our ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3")," object, you have to migrate.\nPlease continue reading to understand your options.\nSome are as simple as a one-line change."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Regardless of how you choose to migrate, you may want to read the ",(0,r.kt)("inlineCode",{parentName:"p"},"web3@0.20.7")," documentation, which\nyou can find ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/blob/0.20.7/DOCUMENTATION.md"},"here"),".")),(0,r.kt)("h3",{id:"use-windowethereum-directly"},"Use window.ethereum directly"),(0,r.kt)("p",null,"For many web3 sites, the API provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," is sufficient.\nMuch of the ",(0,r.kt)("inlineCode",{parentName:"p"},"web3")," API simply maps to RPC methods, all of which can be requested using\n",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/reference/provider-api#windowethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request()")),".\nFor example, here are a couple of actions performed using first ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),", and then their\nequivalents using ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Getting Accounts\n */\n\n// window.web3\nconst accounts = web3.eth.accounts;\n\n// window.ethereum\nconst accounts = await ethereum.request({ method: 'eth_accounts' });\n\n/**\n * Sending a Transaction\n */\n\n// window.web3\nweb3.eth.sendTransaction(\n  {\n    to: '0x...',\n    'from': '0x...',\n    value: '0x...',\n    // And so on...\n  },\n  (error, result) => {\n    if (error) {\n      return console.error(error);\n    }\n    // Handle the result\n    console.log(result);\n  }\n);\n\n// window.ethereum\ntry {\n  const transactionHash = await ethereum.request({\n    method: 'eth_sendTransaction',\n    params: [\n      {\n        to: '0x...',\n        'from': '0x...',\n        value: '0x...',\n        // And so on...\n      },\n    ],\n  });\n  // Handle the result\n  console.log(transactionHash);\n} catch (error) {\n  console.error(error);\n}\n")),(0,r.kt)("h3",{id:"use-an-updated-convenience-library"},"Use an updated convenience library"),(0,r.kt)("p",null,"If you decide that you need a convenience library, you have to convert your usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),"\nto an updated convenience library.\nWe recommend ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/ethers"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers"))," (",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"documentation"),")."),(0,r.kt)("h3",{id:"use-metamasklegacy-web3"},"Use @metamask/legacy-web3"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We strongly recommend that you consider one of the other two migration paths before resorting to this one.\nIt is not future-proof, and we will not add new features to it.")),(0,r.kt)("p",null,"Finally, if you just want your web3 site to continue to work, we created\n",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/legacy-web3"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/legacy-web3")),".\nThis package is a drop-in replacement for our ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3")," that you can add to your website even\nbefore remove ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3")," on all platforms."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/legacy-web3")," should work exactly like our injected ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),", including by refreshing\nthe page on chain/network changes, but ",(0,r.kt)("em",{parentName:"p"},"we cannot guarantee that it works perfectly"),".\nWe will not fix any future incompatibilities between ",(0,r.kt)("inlineCode",{parentName:"p"},"web3@0.20.7")," and MetaMask itself, nor will we\nfix any bugs in ",(0,r.kt)("inlineCode",{parentName:"p"},"web3@0.20.7")," itself."),(0,r.kt)("p",null,"For installation and usage instructions, please see the\n",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/legacy-web3"},"npm listing"),"."),(0,r.kt)("h3",{id:"use-the-metamask-legacy-web3-extension"},"Use the MetaMask legacy Web3 extension"),(0,r.kt)("p",null,"We created the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/legacy-web3-extension"},(0,r.kt)("strong",{parentName:"a"},"MetaMask Legacy Web3 Extension")),"\nfor any users of websites that still expect ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3")," to be injected.\nIf you install this extension alongside the regular MetaMask wallet extension, websites that rely on\nour old window.web3 API should start working again."),(0,r.kt)("p",null,"As with the regular extension, it\u2019s critical that you only install from the official browser\nextension stores.\nPlease follow the relevant link below to install the Legacy Web3 extension in your browser:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microsoftedge.microsoft.com/addons/detail/metamask-legacy-web3/obkfjbjkiofoponpkmphnpaaadebfloh?hl=en-US"},"Edge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/metamask-legacy-web3/"},"Firefox"))),(0,r.kt)("h2",{id:"migrate-to-the-new-provider-api"},"Migrate to the new provider API"),(0,r.kt)("h3",{id:"handle-eth_chainid-return-values"},"Handle eth_chainId return values"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_chainId")," RPC method now returns correctly formatted values, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0x2"),", instead\nof ",(0,r.kt)("em",{parentName:"p"},"incorrectly")," formatted values, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"0x01")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0x02"),".\nMetaMask's implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_chainId")," used to return 0-padded values for the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/get-started/detect-network#chain-ids"},"default Ethereum chains")," ",(0,r.kt)("em",{parentName:"p"},"except")," Kovan.\nIf you expect 0-padded chain ID values from ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_chainId"),", make sure to update your code to expect\nthe correct format instead."),(0,r.kt)("p",null,"For more details on chain IDs and how to handle them, see the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/reference/provider-api#chainchanged"},(0,r.kt)("inlineCode",{parentName:"a"},"chainChanged")," event"),"."),(0,r.kt)("h3",{id:"handle-the-removal-of-chainidchanged"},"Handle the removal of chainIdChanged"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chainIdChanged")," is a typo of ",(0,r.kt)("inlineCode",{parentName:"p"},"chainChanged"),".\nTo migrate, simply listen for ",(0,r.kt)("inlineCode",{parentName:"p"},"chainChanged")," instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Instead of this:\nethereum.on('chainIdChanged', (chainId) => {\n  /* handle the chainId */\n});\n\n// Do this:\nethereum.on('chainChanged', (chainId) => {\n  /* handle the chainId */\n});\n")),(0,r.kt)("h3",{id:"handle-the-removal-of-isenabled-and-isapproved"},"Handle the removal of isEnabled() and isApproved()"),(0,r.kt)("p",null,"Before the new provider API shipped, we added the ",(0,r.kt)("inlineCode",{parentName:"p"},"_metamask.isEnabled")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_metamask.isApproved"),"\nmethods to enable web3 sites to check if they have\n",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/reference/rpc-api#eth_requestaccounts"},"access to the user's accounts"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isApproved")," functioned identically, except that ",(0,r.kt)("inlineCode",{parentName:"p"},"isApproved")," was ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),".\nThese methods were arguably never that useful, and they became completely redundant with the\nintroduction of MetaMask's ",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/reference/rpc-api#restricted-methods"},"permission system"),"."),(0,r.kt)("p",null,"We recommend that you check for account access in the following ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can call the ",(0,r.kt)("a",{parentName:"li",href:"/zs/keyring-doc/wallet/reference/rpc-api#wallet_getpermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions"))," RPC method\nand check for the ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_accounts")," permission."),(0,r.kt)("li",{parentName:"ol"},"You can call the ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_accounts")," RPC method and the\n",(0,r.kt)("a",{parentName:"li",href:"/zs/keyring-doc/wallet/reference/provider-api#windowethereum_metamaskisunlocked"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum._metamask.isUnlocked()"))," method.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MetaMask has to be unlocked before you can access the user's accounts.\nIf the array returned by ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_accounts")," is empty, check if MetaMask is locked using ",(0,r.kt)("inlineCode",{parentName:"li"},"isUnlocked()"),"."),(0,r.kt)("li",{parentName:"ul"},"If MetaMask is unlocked and you still aren't receiving any accounts, it's time to request\naccounts using the ",(0,r.kt)("a",{parentName:"li",href:"/zs/keyring-doc/wallet/reference/rpc-api#eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")," RPC method"),".")))),(0,r.kt)("h3",{id:"handle-the-removal-of-ethereumpublicconfigstore"},"Handle the removal of ethereum.publicConfigStore"),(0,r.kt)("p",null,"How to handle this change depends on if and how you relied on the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicConfigStore"),".\nWe have seen examples of listening for provider state changes the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicConfigStore")," ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," event,\nand accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicConfigStore")," internal state directly."),(0,r.kt)("p",null,"We recommend that you search your code and its dependencies for references to ",(0,r.kt)("inlineCode",{parentName:"p"},"publicConfigStore"),".\nIf you find any references, you should understand what it's being used for, and migrate to\n",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/reference/provider-api"},"one of the recommended provider APIs")," instead.\nIf you don't find any references, you should not be affected by this change."),(0,r.kt)("p",null,"Although it is possible that your dependencies use the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicConfigStore"),", we have confirmed that\nthe latest versions (as of January 2021) of the following common libraries were not affected by this\nchange:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ethers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web3")," (web3.js)")),(0,r.kt)("h3",{id:"handle-the-removal-of-ethereumautorefreshonnetworkchange"},"Handle the removal of ethereum.autoRefreshOnNetworkChange"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.autoRefreshOnNetworkChange")," was a mutable boolean property used to control whether\nMetaMask reloaded the page on chain/network changes.\nHowever, it only caused the page to be reloaded if the script access a property on ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),".\nTherefore, this property was removed along with ",(0,r.kt)("inlineCode",{parentName:"p"},"window.web3"),"."),(0,r.kt)("p",null,"Despite this, we still recommend reloading the page on chain changes.\nSome convenience libraries, such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethers"},"ethers"),", will continue to\nreload the page by default.\nIf you don't use such a convenience library, you'll have to reload the page manually.\nPlease see the ",(0,r.kt)("a",{parentName:"p",href:"/zs/keyring-doc/wallet/reference/provider-api#chainchanged"},(0,r.kt)("inlineCode",{parentName:"a"},"chainChanged")," event")," for details."))}m.isMDXComponent=!0}}]);