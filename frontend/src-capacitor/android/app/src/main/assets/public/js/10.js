(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{4254:function(t,e,r){},ec95:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"row flex content-start justify-center"},[t.loggedIn?r("div",[r("h5",{staticClass:"q-ma-md"},[t._v("\n      Useful Resources\n    ")]),r("div",{staticClass:"row"},t._l(t.homepageCards,(function(t){return r("dashboard-card",{key:t.title,staticClass:"col-12 col-sm-4",attrs:{title:t.title,icon:t.icon,description:t.description,"link-text":t.btn_text,"link-location":t.url,"router-link":!!t.routerLink&&t.routerLink}})})),1)]):r("div")])},a=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),o=r.n(i),c=r("2f62"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"q-pa-md"},[r("q-card",{staticClass:"my-card"},[r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",[r("q-icon",{attrs:{name:t.icon}})],1)],1),r("q-item-section",[r("q-item-label",[t._v(t._s(t.title))])],1)],1),r("q-separator"),r("q-card-section",[t._v("\n      "+t._s(t.description)+"\n    ")]),r("q-separator",{attrs:{dark:""}}),r("q-card-actions",[t.routerLink?r("q-btn",{attrs:{to:t.linkLocation,flat:""}},[t._v("\n        "+t._s(t.linkText)+"\n      ")]):r("q-btn",{attrs:{type:"a",href:t.linkLocation,target:"_blank",flat:""}},[t._v("\n        "+t._s(t.linkText)+"\n      ")])],1)],1)],1)},l=[],p={name:"DashboardCard",props:{title:{type:String,required:!0},icon:{type:String,required:!0},description:{type:String,required:!0},linkText:{type:String,required:!0},linkLocation:{type:[String,Object],required:!0},routerLink:{type:Boolean,required:!0}}},d=p,u=r("2877"),b=r("eebe"),f=r.n(b),m=r("f09f"),g=r("66e5"),q=r("4074"),O=r("cb32"),v=r("0016"),y=r("0170"),k=r("eb85"),j=r("a370"),_=r("4b7e"),h=r("9c40"),w=Object(u["a"])(d,s,l,!1,null,null,null),C=w.exports;function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}f()(w,"components",{QCard:m["a"],QItem:g["a"],QItemSection:q["a"],QAvatar:O["a"],QIcon:v["a"],QItemLabel:y["a"],QSeparator:k["a"],QCardSection:j["a"],QCardActions:_["a"],QBtn:h["a"]});var S={name:"DashboardPage",components:{DashboardCard:C},computed:P({},Object(c["c"])("config",["homepageCards"]),{},Object(c["c"])("profile",["loggedIn"]))},x=S,L=(r("f7a9"),r("9989")),D=Object(u["a"])(x,n,a,!1,null,"7eb5796c",null);e["default"]=D.exports;f()(D,"components",{QPage:L["a"]})},f7a9:function(t,e,r){"use strict";var n=r("4254"),a=r.n(n);a.a}}]);