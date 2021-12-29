"use strict";(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[7055],{3245:function(e,t,a){var s=a(7378);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return s.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},8377:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(2685),r=a(7378),n=a(362),o=a(1335);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(5203),p=a(8944),d="tabItem_c0e5";function c(e){var t,a,n,o=e.lazy,c=e.block,m=e.defaultValue,N=e.values,k=e.groupId,v=e.className,u=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=N?N:u.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(t=null!=m?m:null==(a=u.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=u[0])?void 0:n.props.value;if(null!==f&&!y.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),b=h.tabGroupChoices,D=h.setTabGroupChoices,C=(0,r.useState)(f),P=C[0],E=C[1],F=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=b[k];null!=x&&x!==P&&y.some((function(e){return e.value===x}))&&E(x)}var M=function(e){var t=e.currentTarget,a=F.indexOf(t),s=y[a].value;s!==P&&(w(t),E(s),null!=k&&D(k,s))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var s=F.indexOf(e.currentTarget)+1;a=F[s]||F[0];break;case"ArrowLeft":var r=F.indexOf(e.currentTarget)-1;a=F[r]||F[F.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},v)},y.map((function(e){var t=e.value,a=e.label,n=e.attributes;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return F.push(e)},onKeyDown:T,onFocus:M,onClick:M},n,{className:(0,p.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(u.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,n.Z)();return r.createElement(c,(0,s.Z)({key:String(t)},e))}},4653:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var s=a(2685),r=a(1244),n=(a(7378),a(5318)),o=a(8377),i=a(3245),l=["components"],p={id:"persist",title:"Persist",sidebar_label:"@rematch/persist",slug:"/plugins/persist/"},d=void 0,c={unversionedId:"plugins/persist",id:"plugins/persist",title:"Persist",description:"Redux-Persist v6 plugin for Rematch. Provides automatic Redux state persistence.",source:"@site/../docs/plugins/persist.md",sourceDirName:"plugins",slug:"/plugins/persist/",permalink:"/docs/plugins/persist/",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/plugins/persist.md",tags:[],version:"current",frontMatter:{id:"persist",title:"Persist",sidebar_label:"@rematch/persist",slug:"/plugins/persist/"},sidebar:"docs",previous:{title:"@rematch/updated",permalink:"/docs/plugins/updated/"},next:{title:"@rematch/typed-state",permalink:"/docs/plugins/typed-state/"}},m=[{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Install",id:"install",children:[],level:2},{value:"persistPlugin(persistConfig, nestedPersistConfig, persistStoreConfig, callback)",id:"persistpluginpersistconfig-nestedpersistconfig-persiststoreconfig-callback",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Setup the store",id:"setup-the-store",children:[],level:3},{value:"Persist Gate",id:"persist-gate",children:[],level:3}],level:2}],N={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,s.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Redux-Persist v6 plugin for Rematch. Provides automatic Redux state persistence."),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"Install the correct version of persist plugin based on the version of the core Rematch library in your project."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"@rematch/core"),(0,n.kt)("th",{parentName:"tr",align:"center"},"@rematch/persist"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1.x.x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1.x.x")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2.x.x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2.x.x")))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"},npm2yarn:"true"},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"npm install @rematch/persist"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"},npm2yarn:"true"},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"npm install @rematch/persist"))))))),(0,n.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"},yarn:"","#":"","couldn't":"","auto-convert":"",command2yarn:"true"},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"yarn add @rematch/persist"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"},yarn:"","#":"","couldn't":"","auto-convert":"",command2yarn:"true"},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"yarn add @rematch/persist")))))))),(0,n.kt)("h2",{id:"persistpluginpersistconfig-nestedpersistconfig-persiststoreconfig-callback"},"persistPlugin(persistConfig, ","[nestedPersistConfig, persistStoreConfig, callback]",")"),(0,n.kt)("p",null,"The persist plugin accepts four arguments - ",(0,n.kt)("strong",{parentName:"p"},"persistConfig"),", ",(0,n.kt)("strong",{parentName:"p"},"nestedPersistConfig"),", ",(0,n.kt)("strong",{parentName:"p"},"persistStoreConfig"),", ",(0,n.kt)("strong",{parentName:"p"},"callback"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"persistConfig")," (",(0,n.kt)("em",{parentName:"p"},"PersistConfig"),"): object compatible with ",(0,n.kt)("em",{parentName:"p"},"config")," argument accepted by redux-persist's ",(0,n.kt)("em",{parentName:"p"},"persistReducer")," method - for details refer to their ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist#persistreducerconfig-reducer"},"documentation"),". It is used when creating a persisted root reducer in your store.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"[",(0,n.kt)("inlineCode",{parentName:"p"},"nestedPersistConfig"),"]"," (",(0,n.kt)("em",{parentName:"p"},"{ ","[modelName]",": PersistConfig }"),"): whenever you need to use a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist#nested-persists"},"Nested Persist")," configuration for some models, provide an object with a mapping from the model name to the redux-persist config for this model.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"[",(0,n.kt)("inlineCode",{parentName:"p"},"persistStoreConfig"),"]"," (",(0,n.kt)("em",{parentName:"p"},"PersistorOptions"),"): object compatible with ",(0,n.kt)("em",{parentName:"p"},"config")," argument accepted by redux-persist's ",(0,n.kt)("em",{parentName:"p"},"persistStore")," method - for details refer to their ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist#persiststorestore-config-callback"},"documentation"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"[",(0,n.kt)("inlineCode",{parentName:"p"},"callback"),"]"," (",(0,n.kt)("em",{parentName:"p"},"() => void"),"): a function called after rehydration is finished."))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"setup-the-store"},"Setup the store"),(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki github-light with-title twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"store.js"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"store.js"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const persistPlugin: <S, TModels extends Models<TModels>, TExtraModels extends Models<TModels> = Record<string, never>>(persistConfig: PersistConfig<S, any, any, any>, nestedPersistConfig?: NestedPersist<...> | undefined, persistStoreConfig?: (PersistorOptions & PersistorStoreOptionsNotExposed) | undefined, callback?: (() => void) | undefined) => Plugin<...>\nimport persistPlugin"},"persistPlugin")," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@rematch/persist"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const init: <TModels extends Models<TModels>, TExtraModels extends Models<TModels> = Record<string, never>>(initConfig?: InitConfig<TModels, TExtraModels> | undefined) => RematchStore<...>\nimport init"},"init")," } "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@rematch/core"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const storage: WebStorage\nimport storage"},"storage")," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"redux-persist/lib/storage"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#005CC5"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistConfig: {\n    key: string;\n    storage: WebStorage;\n}"},"persistConfig")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) key: string"},"key"),": "),(0,n.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"root"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) storage: WebStorage"},"storage"),",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"};")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) init<Models<unknown>, Record<string, never>>(initConfig?: InitConfig<Models<unknown>, Record<string, never>> | undefined): RematchStore<Models<unknown>, Record<...>>\nimport init"},"init")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"({")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) InitConfig<Models<unknown>, Record<string, never>>.plugins?: Plugin<Models<unknown>, Record<string, never>, Partial<Record<string, never>>>[] | undefined"},"plugins"),": ["),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) persistPlugin<unknown, Models<unknown>, Record<string, never>>(persistConfig: PersistConfig<unknown, any, any, any>, nestedPersistConfig?: NestedPersist<Models<unknown>> | undefined, persistStoreConfig?: (PersistorOptions & PersistorStoreOptionsNotExposed) | undefined, callback?: (() => void) | undefined): Plugin<...>\nimport persistPlugin"},"persistPlugin")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"(",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistConfig: {\n    key: string;\n    storage: WebStorage;\n}"},"persistConfig"),")],")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"});"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki github-dark with-title twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"},title:"store.js"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"store.js"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const persistPlugin: <S, TModels extends Models<TModels>, TExtraModels extends Models<TModels> = Record<string, never>>(persistConfig: PersistConfig<S, any, any, any>, nestedPersistConfig?: NestedPersist<...> | undefined, persistStoreConfig?: (PersistorOptions & PersistorStoreOptionsNotExposed) | undefined, callback?: (() => void) | undefined) => Plugin<...>\nimport persistPlugin"},"persistPlugin")," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"@rematch/persist"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const init: <TModels extends Models<TModels>, TExtraModels extends Models<TModels> = Record<string, never>>(initConfig?: InitConfig<TModels, TExtraModels> | undefined) => RematchStore<...>\nimport init"},"init")," } "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"@rematch/core"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const storage: WebStorage\nimport storage"},"storage")," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"redux-persist/lib/storage"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistConfig: {\n    key: string;\n    storage: WebStorage;\n}"},"persistConfig")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) key: string"},"key"),": "),(0,n.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"root"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) storage: WebStorage"},"storage"),",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"};")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) init<Models<unknown>, Record<string, never>>(initConfig?: InitConfig<Models<unknown>, Record<string, never>> | undefined): RematchStore<Models<unknown>, Record<...>>\nimport init"},"init")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"({")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) InitConfig<Models<unknown>, Record<string, never>>.plugins?: Plugin<Models<unknown>, Record<string, never>, Partial<Record<string, never>>>[] | undefined"},"plugins"),": ["),(0,n.kt)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) persistPlugin<unknown, Models<unknown>, Record<string, never>>(persistConfig: PersistConfig<unknown, any, any, any>, nestedPersistConfig?: NestedPersist<Models<unknown>> | undefined, persistStoreConfig?: (PersistorOptions & PersistorStoreOptionsNotExposed) | undefined, callback?: (() => void) | undefined): Plugin<...>\nimport persistPlugin"},"persistPlugin")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistConfig: {\n    key: string;\n    storage: WebStorage;\n}"},"persistConfig"),")],")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"});")))))),(0,n.kt)("h3",{id:"persist-gate"},"Persist Gate"),(0,n.kt)("p",null,"In React you can use a special component provided by redux-persist to display a loading indicator while waiting for data to async load from the storage."),(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const getPersistor: () => Persistor\nimport getPersistor"},"getPersistor")," } "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@rematch/persist"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) class PersistGate\nimport PersistGate"},"PersistGate")," } "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"redux-persist/lib/integration/react"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#005CC5"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistor: Persistor"},"persistor")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) getPersistor(): Persistor\nimport getPersistor"},"getPersistor")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"();")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const Root: () => JSX.Element"},"Root")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  <"),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) class PersistGate\nimport PersistGate"},"PersistGate")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#005CC5"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) persistor: Persistor"},"persistor")),(0,n.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistor: Persistor"},"persistor"),"}>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    <"),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},">app</"),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  </"),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) class PersistGate\nimport PersistGate"},"PersistGate")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292E"}},");"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const getPersistor: () => Persistor\nimport getPersistor"},"getPersistor")," } "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"@rematch/persist"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) class PersistGate\nimport PersistGate"},"PersistGate")," } "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"redux-persist/lib/integration/react"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistor: Persistor"},"persistor")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) getPersistor(): Persistor\nimport getPersistor"},"getPersistor")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"();")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const Root: () => JSX.Element"},"Root")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," () "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," (")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  <"),(0,n.kt)("span",{parentName:"div",style:{color:"#7EE787"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) class PersistGate\nimport PersistGate"},"PersistGate")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) persistor: Persistor"},"persistor")),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"{",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const persistor: Persistor"},"persistor"),"}>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    <"),(0,n.kt)("span",{parentName:"div",style:{color:"#7EE787"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},">app</"),(0,n.kt)("span",{parentName:"div",style:{color:"#7EE787"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  </"),(0,n.kt)("span",{parentName:"div",style:{color:"#7EE787"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) class PersistGate\nimport PersistGate"},"PersistGate")),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},");")))))))}k.isMDXComponent=!0},5318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return N}});var s=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),N=r,k=m["".concat(l,".").concat(N)]||m[N]||c[N]||n;return a?s.createElement(k,o(o({ref:t},d),{},{components:a})):s.createElement(k,o({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);