(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{603:function(t,e,n){"use strict";var r=n(5);const o={key:0},a={key:1};var c=n(131),i=n(43),s=n(66),l=n(128),d=n(56),u=n(609),b=n.n(u);function p(t,e,n){const r=(null===e?"":`title="${e}"`)+' class="link"';if(null==t)return`<a ${r}>${n}</a>`;const o=Object(i.a)(t),a=o.protocol,l=Object(d.a)(o);if(a===s.a.CONTENT){const t=new URL(l,c.a);return`<a href="${Object(d.d)(t,"/content"+t.pathname).href}" ${r}>${n}</a>`}return a===s.a.EXTERNAL?`<a href="${l}" target="_blank" rel="noopener" ${r}>${n}</a>`:a===s.a.RELATIVE?`<router-link to="${l}" ${r}>${n}</router-link>`:`<a href="${o.href}" ${r}>${n}</a>`}const f=function(){const t=new b.a.Renderer;return t.link=p,t.image=(t,e,n)=>`<img ${null===t?"":`src="${Object(l.a)(Object(i.a)(t))}"`} title="${e}" alt="${n}">`,t}();var m,O=Object(r.i)({props:{markdown:{type:String,required:!0}},setup:(t,e)=>({html:Object(r.b)(()=>{return e=t.markdown,`<div>${b.a.parse(e,{renderer:f})}</div>`;var e})}),components:{DynamicVc:(m={},Object(r.i)({name:"DyanmicVc",props:{content:{type:String,required:!0}},components:m,setup:(t,e)=>()=>{const e=t.content||'<p class="not-available-text">No content</p>';return Object(r.g)({name:"DynamicVcContent",components:m,template:e})}}))}}),w=n(75),j=n.n(w),h=n(605),k={insert:"head",singleton:!1};j()(h.a,k),h.a.locals;O.render=function(t,e,n,o,a,c){const i=Object(r.A)("dynamic-vc");return Object(r.s)(),Object(r.d)(i,{class:"markdown",content:t.html},null,8,["content"])};var g=O,v=n(601),x=n(130);async function y(t){if(null!==t.text)return t.text;if(null!==t.cachedText)return t.cachedText;{if(null===t.url)throw Error("MarkdownDefinition doesn't have url defined");const e=await async function(t){const e=await Object(x.a)(t.href);if(!e.ok)throw new Error(`HTTP error fetching markdown from ${t.href}: ${e.statusText}`);return await e.text()}(t.url);return t.cachedText=e,e}}var $=Object(r.i)({props:{definition:{type:Object,required:!0}},setup(t,e){const n=Object(v.a)(async()=>{const n=t.definition;let r;try{r=await y(n)}catch(t){throw console.error(t),t}return e.emit("ready"),r});return Object(r.G)(()=>t.definition,()=>{n.perform()}),n.perform(),{markdownTask:n}},components:{Markdown:g}});$.render=function(t,e,n,c,i,s){const l=Object(r.A)("Markdown");return t.markdownTask.last.isRunning?(Object(r.s)(),Object(r.d)("p",o,"Loading markdown...")):t.markdownTask.last.isError?(Object(r.s)(),Object(r.d)("p",a,"Error loading markdown: "+Object(r.D)(t.markdownTask.last.error.message),1)):(Object(r.s)(),Object(r.d)(l,{key:2,markdown:t.markdownTask.last.value},null,8,["markdown"]))};e.a=$},605:function(t,e,n){"use strict";var r=n(76),o=n.n(r)()(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),o.push([t.i,'blockquote.twitter-tweet{display:inline-block;font-family:"Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;font-size:12px;font-weight:bold;line-height:16px;border-color:#eee #ddd #bbb;border-radius:5px;border-style:solid;border-width:1px;box-shadow:0 1px 3px rgba(0,0,0,0.15);margin:10px 5px;padding:0 16px 16px 16px;max-width:468px}blockquote.twitter-tweet p{font-size:16px;font-weight:normal;line-height:20px}blockquote.twitter-tweet a{color:inherit;font-weight:normal;text-decoration:none;outline:0 none}blockquote.twitter-tweet a:hover,blockquote.twitter-tweet a:focus{text-decoration:underline}.markdown h3{font-size:2rem;margin-bottom:0.5em}.markdown li{font-family:"Open Sans",sans-serif;color:#333}.markdown .twitter-tweet a{font-family:"Open Sans",sans-serif;color:#328546;text-decoration:underline;text-decoration-style:dotted}.banner{width:100%}\n',""]),e.a=o},630:function(t,e,n){"use strict";var r=n(76),o=n.n(r)()(!1);o.push([t.i,".error__title[data-v-253df455]{color:#b42727;font-size:1.5rem}.error__msg[data-v-253df455]{font-family:monospace;font-size:1rem}\n",""]),e.a=o},654:function(t,e,n){"use strict";n.r(e);var r=n(5);const o=Object(r.K)("data-v-253df455");Object(r.v)("data-v-253df455");const a=Object(r.g)("h1",{class:"page-title"},"Content editor",-1),c={ref:"cmInputContRef"},i=Object(r.g)("h2",null,"Parsed data",-1),s={ref:"cmOutputContRef"},l={key:0},d=Object(r.g)("p",{class:"error__title"}," An error occured while trying to update the site content: ",-1),u={class:"error__msg"},b={class:"error__msg"};Object(r.t)();const p=o((function(t,e,n,p,f,m){const O=Object(r.A)("MarkdownFromDef"),w=Object(r.A)("CardColumn");return Object(r.s)(),Object(r.d)(w,null,{"first-item":o(()=>[a,Object(r.g)(O,{definition:t.description},null,8,["definition"]),Object(r.g)("div",c,null,512),i,Object(r.J)(Object(r.g)("div",s,null,512),[[r.F,null===t.error]]),null!==t.error?(Object(r.s)(),Object(r.d)("div",l,[d,Object(r.g)("p",u,Object(r.D)(t.error.name)+": ",1),Object(r.g)("p",b,Object(r.D)(t.error.message),1)])):Object(r.e)("v-if",!0)]),_:1})}));var f=n(603),m=n(618),O=n.n(m),w=(n(619),n(628),n(629),n(126)),j=n(124),h=n(134),k=Object(r.i)({props:{content:{type:Object,required:!0}},setup(t,e){const n=Object(r.x)(null),o=Object(r.x)(null),a=Object(r.x)(null);Object(r.q)(()=>{const r=n.value;if(null===r)throw new Error("Ref to codemirror input div is not populated");const c=O()(r,{lineNumbers:!0,mode:"yaml",value:Object(w.b)(t.content)}),i=o.value;if(null===i)throw new Error("Ref to codemirror output div is not populated");const s=O()(i,{readOnly:!0,mode:{name:"javascript",json:!0}});function l(){const t=c.getDoc().getValue();let n;try{n=Object(w.a)(t)}catch(t){return void(a.value=t)}a.value=null;const r=Object(w.d)(n);s.getDoc().setValue(JSON.stringify(r,null,2)),e.emit(j.a,n)}c.on("change",l),l()});const c=Object(r.b)(()=>t.content.editor.description);return{cmInputContRef:n,cmOutputContRef:o,error:a,description:c}},components:{MarkdownFromDef:f.a,CardColumn:h.a}}),g=n(75),v=n.n(g),x=n(630),y={insert:"head",singleton:!1};v()(x.a,y),x.a.locals;k.render=p,k.__scopeId="data-v-253df455";e.default=k}}]);