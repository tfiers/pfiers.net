(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{771:function(t,e,n){var o=n(783);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(241).default)("6a5ed7fa",o,!1,{})},773:function(t,e,n){"use strict";var o,r=n(37),i=n(92);let a=Object(i.b)(o=class extends r.a{Pathname(){return window.location.pathname}})||o;e.a=a},775:function(t,e,n){var o=n(794);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(241).default)("32bf0c00",o,!1,{})},776:function(t,e,n){var o=n(797);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(241).default)("21cd6e86",o,!1,{})},782:function(t,e,n){"use strict";var o=n(771);n.n(o).a},783:function(t,e,n){(e=n(239)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),e.push([t.i,".technology-badge[data-v-20c20aa0],.technology-badge>div[data-v-20c20aa0]{display:block;background-color:#38944e;height:50px;width:50px}.technology-badge__icon[data-v-20c20aa0]{pointer-events:none;height:50px;width:50px}\n",""]),t.exports=e},787:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isRelative?n("router-link",{attrs:{to:t.toUrl.pathname}},[t._t("default",[t._v(t._s(t.toUrl.pathname))])],2):n("a",{attrs:{href:t.toUrl.href}},[t._t("default",[t._v(t._s(t.toUrl.href))])],2)};o._withStripped=!0;var r,i,a,c,s,l,h=n(102),p=n.n(h),u=n(103),d=n.n(u),f=(n(349),n(769));var g=(r=Object(f.b)(void 0),i=Object(f.b)({required:!1,type:String}),Object(f.a)((c=class extends f.c{constructor(...t){super(...t),p()(this,"to",s,this),p()(this,"text",l,this)}get isRelative(){return this.toUrl.host===document.location.host}get toUrl(){return new URL(this.to.toString(),document.location.href)}},s=d()(c.prototype,"to",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=d()(c.prototype,"text",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=c))||a),v=n(131),m=Object(v.a)(g,o,[],!1,null,"98e317e8",null);m.options.__file="src/components/SmartLink.vue";e.a=m.exports},788:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{staticClass:"technology-badge",attrs:{title:this.technology.name,to:"/technologies/"+this.technology.urlSafeName}},[e("div",{domProps:{innerHTML:this._s(this.svg)}})])};o._withStripped=!0;var r,i,a,c,s,l=n(102),h=n.n(l),p=n(103),u=n.n(p),d=(n(349),n(37)),f=n(92),g=n(769);var v=(r=Object(g.b)(Object),i=Object(g.d)("technology",{}),Object(f.b)((c=class t extends d.a{constructor(...t){super(...t),h()(this,"technology",s,this),this.svg=""}onTechnologyChanged(){this.updateSvg()}created(){this.updateSvg()}updateSvg(){new Promise((e,n)=>{let o=this.technology.iconUrl;null!=o?t.fetchSvgFromUrl(o).then(t=>{e(t)}).catch(t=>{n('The following error occurred when trying to load "'.concat(o,'":\n\n ').concat(t.message))}):e()}).then(t=>{this.svg=t}).catch(t=>{this.svg="",console.error(t)})}static fetchSvgFromUrl(t){let e=new Request(t.href);return fetch(e).then(e=>{if(!e.ok)throw new Error("HTTP Error loading ".concat(t.href,": ").concat(e.statusText));return e.text()})}},s=u()(c.prototype,"technology",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u()(c.prototype,"onTechnologyChanged",[i],Object.getOwnPropertyDescriptor(c.prototype,"onTechnologyChanged"),c.prototype),a=c))||a),m=(n(782),n(131)),b=Object(m.a)(v,o,[],!1,null,"20c20aa0",null);b.options.__file="src/components/TechnologyBadge.vue";e.a=b.exports},791:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("Not found")]),this._v(" "),e("p",[this._v('The page "'+this._s(this.Pathname())+'" does not exist')])])},r=[];o._withStripped=!0},793:function(t,e,n){"use strict";var o=n(775);n.n(o).a},794:function(t,e,n){(e=n(239)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),e.push([t.i,".markdown h3{font-size:2rem;margin-bottom:0.5em}.banner{width:100%}\n",""]),t.exports=e},796:function(t,e,n){"use strict";var o=n(776);n.n(o).a},797:function(t,e,n){(e=n(239)(!1)).push([t.i,".icons[data-v-f53c7428]{display:flex;list-style:none;flex-direction:row;padding:0;margin:0}.icons__item[data-v-f53c7428]{height:50px;width:50px;background-color:#12a112;margin-right:5px;margin-bottom:5px}@media only screen and (min-width: 650px){.icons[data-v-f53c7428]{flex-wrap:wrap;flex-direction:row-reverse;max-width:calc((50px + 5px) * 3)}.icons__item[data-v-f53c7428]{margin-left:5px;margin-right:0}}.icons__icon[data-v-f53c7428]{height:50px;width:50px}a[data-v-f53c7428]{display:block;height:50px;width:50px}object[data-v-f53c7428]{pointer-events:none}\n",""]),t.exports=e},801:function(t,e,n){"use strict";var o=n(791),r=n(773),i=n(131),a=Object(i.a)(r.a,o.a,o.b,!1,null,"66bc5b48",null);a.options.__file="src/components/NotFound.vue",e.a=a.exports},819:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return this.error?e("p",[this._v(this._s(this.error))]):void 0!==this.content?e("dynamic-vc",{staticClass:"markdown",attrs:{content:this.content}}):e("p",[this._v("No markdown    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")])};o._withStripped=!0;var r=n(102),i=n.n(r),a=n(103),c=n.n(a),s=(n(349),n(769)),l=n(823),h=n(37);var p,u,d,f,g,v,m,b,w,_,A,y=function(t){return h.a.component("DyanmicVc",{components:t,props:{content:{type:String,required:!0}},render:function(e){const n="<div>".concat(this.content,"</div>")||!1;return e({name:"DynamicVcContent",components:t,template:n})}})},x=n(787);var j=(p=Object(s.a)({components:{DynamicVc:y({SmartLink:x.a})}}),u=Object(s.b)(String),d=Object(s.b)(URL),f=Object(s.d)("markdown",{}),g=Object(s.d)("markdownUrl",{}),p((A=_=class t extends s.c{constructor(...t){super(...t),i()(this,"markdown",b,this),i()(this,"markdownUrl",w,this),this.content="",this.error=""}onMarkdownChanged(){this.updateContent()}created(){this.updateContent()}updateContent(){new Promise((e,n)=>{if(null!=this.markdown)e(this.markdown);else{let o=this.markdownUrl;null!=o?t.fetchMdFromUrl(o).then(t=>{e(t)}).catch(t=>{n('The following error occurred when trying to load "'.concat(o,'":\n\n ').concat(t.message))}):e()}}).then(e=>{this.content=null==e?void 0:t.parse(e),this.error=void 0}).catch(t=>{this.content=void 0,this.error=t})}static fetchMdFromUrl(t){const e=new Request(t.href);return fetch(e).then(e=>{if(!e.ok)throw new Error("HTTP Error loading ".concat(t.href,": ").concat(e.statusText));return e.text()})}static parse(t){const e=l.parse(t,{renderer:this.renderer});return"<div>".concat(e,"</div>")}},_.renderer=function(){const t=new l.Renderer;return t.link=(t,e,n)=>'<SmartLink to="'.concat(t,'" class="link">').concat(n,"</SmartLink>"),t}(),m=A,b=c()(m.prototype,"markdown",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=c()(m.prototype,"markdownUrl",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c()(m.prototype,"onMarkdownChanged",[f,g],Object.getOwnPropertyDescriptor(m.prototype,"onMarkdownChanged"),m.prototype),v=m))||v),k=(n(793),n(131)),O=Object(k.a)(j,o,[],!1,null,null,null);O.options.__file="src/components/Markdown.vue";e.a=O.exports},821:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",{staticClass:"icons"},this._l(this.project.technologies,(function(t,n){return e("li",{key:n,staticClass:"icons__item"},[e("TechnologyBadge",{attrs:{technology:t}})],1)})),0)])};o._withStripped=!0;var r,i,a,c,s,l=n(102),h=n.n(l),p=n(103),u=n.n(p),d=(n(349),n(37)),f=n(92),g=n(788),v=n(769);var m=(r=Object(f.b)({components:{TechnologyBadge:g.a}}),i=Object(v.b)(Object),r((c=class extends d.a{constructor(...t){super(...t),h()(this,"project",s,this)}},s=u()(c.prototype,"project",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=c))||a),b=(n(796),n(131)),w=Object(b.a)(m,o,[],!1,null,"f53c7428",null);w.options.__file="src/components/ProjectTechnologyList.vue";e.a=w.exports},938:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-column"},[t.project?n("article",{staticClass:"card"},[n("div",{staticClass:"card__content"},[n("h1",{staticClass:"page-title"},[t._v(t._s(t.project.name))]),t._v(" "),n("p",[t._v(t._s(t.project.short))]),t._v(" "),n("ProjectTechnologyList",{attrs:{project:t.project}}),t._v(" "),null==t.project.longMdUrl?n("p",{staticClass:"not-available-text"},[t._v("\n        No detailed description available.\n      ")]):n("article",[n("Markdown",{attrs:{"markdown-url":t.project.longMdUrl}})],1)],1)]):n("NotFound")],1)};o._withStripped=!0;var r,i,a,c,s,l=n(102),h=n.n(l),p=n(103),u=n.n(p),d=(n(349),n(769)),f=n(821),g=n(801),v=n(819);var m=(r=Object(d.a)({components:{ProjectTechnologyList:f.a,NotFound:g.a,Markdown:v.a}}),i=Object(d.b)(Object),r((c=class extends d.c{constructor(...t){super(...t),h()(this,"project",s,this)}},s=u()(c.prototype,"project",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=c))||a),b=n(131),w=Object(b.a)(m,o,[],!1,null,null,null);w.options.__file="src/components/ProjectDetail.vue";e.default=w.exports}}]);