(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{603:function(e,t,n){"use strict";var o=n(5);const r={key:0},c={key:1};var a=n(131),i=n(43),s=n(66),l=n(128),d=n(56),p=n(609),b=n.n(p);function u(e,t,n){const o=(null===t?"":`title="${t}"`)+' class="link"';if(null==e)return`<a ${o}>${n}</a>`;const r=Object(i.a)(e),c=r.protocol,l=Object(d.a)(r);if(c===s.a.CONTENT){const e=new URL(l,a.a);return`<a href="${Object(d.d)(e,"/content"+e.pathname).href}" ${o}>${n}</a>`}return c===s.a.EXTERNAL?`<a href="${l}" target="_blank" rel="noopener" ${o}>${n}</a>`:c===s.a.RELATIVE?`<router-link to="${l}" ${o}>${n}</router-link>`:`<a href="${r.href}" ${o}>${n}</a>`}const j=function(){const e=new b.a.Renderer;return e.link=u,e.image=(e,t,n)=>`<img ${null===e?"":`src="${Object(l.a)(Object(i.a)(e))}"`} title="${t}" alt="${n}">`,e}();var f,h=Object(o.i)({props:{markdown:{type:String,required:!0}},setup:(e,t)=>({html:Object(o.b)(()=>{return t=e.markdown,`<div>${b.a.parse(t,{renderer:j})}</div>`;var t})}),components:{DynamicVc:(f={},Object(o.i)({name:"DyanmicVc",props:{content:{type:String,required:!0}},components:f,setup:(e,t)=>()=>{const t=e.content||'<p class="not-available-text">No content</p>';return Object(o.g)({name:"DynamicVcContent",components:f,template:t})}}))}}),g=n(75),O=n.n(g),m=n(605),w={insert:"head",singleton:!1};O()(m.a,w),m.a.locals;h.render=function(e,t,n,r,c,a){const i=Object(o.A)("dynamic-vc");return Object(o.s)(),Object(o.d)(i,{class:"markdown",content:e.html},null,8,["content"])};var k=h,y=n(601),v=n(130);async function x(e){if(null!==e.text)return e.text;if(null!==e.cachedText)return e.cachedText;{if(null===e.url)throw Error("MarkdownDefinition doesn't have url defined");const t=await async function(e){const t=await Object(v.a)(e.href);if(!t.ok)throw new Error(`HTTP error fetching markdown from ${e.href}: ${t.statusText}`);return await t.text()}(e.url);return e.cachedText=t,t}}var $=Object(o.i)({props:{definition:{type:Object,required:!0}},setup(e,t){const n=Object(y.a)(async()=>{const n=e.definition;let o;try{o=await x(n)}catch(e){throw console.error(e),e}return t.emit("ready"),o});return Object(o.G)(()=>e.definition,()=>{n.perform()}),n.perform(),{markdownTask:n}},components:{Markdown:k}});$.render=function(e,t,n,a,i,s){const l=Object(o.A)("Markdown");return e.markdownTask.last.isRunning?(Object(o.s)(),Object(o.d)("p",r,"Loading markdown...")):e.markdownTask.last.isError?(Object(o.s)(),Object(o.d)("p",c,"Error loading markdown: "+Object(o.D)(e.markdownTask.last.error.message),1)):(Object(o.s)(),Object(o.d)(l,{key:2,markdown:e.markdownTask.last.value},null,8,["markdown"]))};t.a=$},605:function(e,t,n){"use strict";var o=n(76),r=n.n(o)()(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),r.push([e.i,'blockquote.twitter-tweet{display:inline-block;font-family:"Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;font-size:12px;font-weight:bold;line-height:16px;border-color:#eee #ddd #bbb;border-radius:5px;border-style:solid;border-width:1px;box-shadow:0 1px 3px rgba(0,0,0,0.15);margin:10px 5px;padding:0 16px 16px 16px;max-width:468px}blockquote.twitter-tweet p{font-size:16px;font-weight:normal;line-height:20px}blockquote.twitter-tweet a{color:inherit;font-weight:normal;text-decoration:none;outline:0 none}blockquote.twitter-tweet a:hover,blockquote.twitter-tweet a:focus{text-decoration:underline}.markdown h3{font-size:2rem;margin-bottom:0.5em}.markdown li{font-family:"Open Sans",sans-serif;color:#333}.markdown .twitter-tweet a{font-family:"Open Sans",sans-serif;color:#328546;text-decoration:underline;text-decoration-style:dotted}.banner{width:100%}\n',""]),t.a=r},607:function(e,t,n){"use strict";var o=n(5);const r=Object(o.K)("data-v-568f6dfb"),c=r((function(e,t,n,c,a,i){const s=Object(o.A)("SvgSprite"),l=Object(o.A)("router-link");return Object(o.s)(),Object(o.d)(l,{class:"technology-badge",title:e.p.technology.name,to:"/technologies/"+e.p.technology.urlSafeName.value},{default:r(()=>[Object(o.g)(s,{name:e.spriteName},null,8,["name"])]),_:1},8,["title","to"])}));var a=n(238),i=Object(o.i)({props:{technology:{type:Object,required:!0}},setup(e,t){const n=Object(o.b)(()=>"tech-"+e.technology.iconName.value);return{p:e,spriteName:n}},components:{SvgSprite:a.a}}),s=n(75),l=n.n(s),d=n(610),p={insert:"head",singleton:!1};l()(d.a,p),d.a.locals;i.render=c,i.__scopeId="data-v-568f6dfb";t.a=i},610:function(e,t,n){"use strict";var o=n(76),r=n.n(o)()(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),r.push([e.i,".technology-badge[data-v-568f6dfb],.technology-badge>svg[data-v-568f6dfb]{display:block;background-color:#38944e;height:50px;width:50px}.technology-badge__icon[data-v-568f6dfb]{pointer-events:none;height:50px;width:50px}\n",""]),t.a=r},613:function(e,t,n){"use strict";var o=n(76),r=n.n(o)()(!1);r.push([e.i,".icons[data-v-6d994602]{display:flex;list-style:none;flex-direction:row;padding:0;margin:0}.icons__item[data-v-6d994602]{height:50px;width:50px;background-color:#12a112;margin-right:5px;margin-bottom:5px}@media only screen and (min-width: 650px){.icons--block[data-v-6d994602]{flex-wrap:wrap;flex-direction:row-reverse;max-width:calc((50px + 5px) * 3)}.icons--block .icons__item[data-v-6d994602]{margin-left:5px;margin-right:0}}.icons__icon[data-v-6d994602]{height:50px;width:50px}a[data-v-6d994602]{display:block;height:50px;width:50px}object[data-v-6d994602]{pointer-events:none}\n",""]),t.a=r},616:function(e,t,n){"use strict";var o=n(5);const r=Object(o.K)("data-v-6d994602")((function(e,t,n,r,c,a){const i=Object(o.A)("TechnologyBadge");return Object(o.s)(),Object(o.d)("div",null,[Object(o.g)("ul",{class:e.iconsClass},[(Object(o.s)(!0),Object(o.d)(o.a,null,Object(o.y)(e.p.project.technologies,(e,t)=>(Object(o.s)(),Object(o.d)("li",{key:t,class:"icons__item"},[Object(o.g)(i,{technology:e},null,8,["technology"])]))),128))],2)])}));var c=n(607),a=Object(o.i)({props:{project:{type:Object,required:!0},block:{type:Boolean}},setup(e,t){const n=Object(o.b)(()=>"icons "+(e.block?"icons--block":""));return{p:e,iconsClass:n}},components:{TechnologyBadge:c.a}}),i=n(75),s=n.n(i),l=n(613),d={insert:"head",singleton:!1};s()(l.a,d),l.a.locals;a.render=r,a.__scopeId="data-v-6d994602";t.a=a},658:function(e,t,n){"use strict";n.r(t);var o=n(5);const r={class:"card-column"},c={class:"card"},a={class:"card__content"},i={class:"page-title"},s={key:0},l=Object(o.g)("br",null,null,-1),d={key:4,class:"not-available-text"},p={key:5};var b=n(603),u=n(616),j=Object(o.i)({props:{project:{type:Object,required:!0}},setup:(e,t)=>({p:e}),components:{ProjectTechnologyList:u.a,MarkdownFromDef:b.a}});j.render=function(e,t,n,b,u,j){const f=Object(o.A)("MarkdownFromDef"),h=Object(o.A)("ProjectTechnologyList");return Object(o.s)(),Object(o.d)("div",r,[Object(o.e)(' <NotFound v-if="!project"></NotFound> '),Object(o.g)("article",c,[Object(o.g)("div",a,[Object(o.g)("h1",i,Object(o.D)(e.p.project.name),1),null===e.p.project.short?(Object(o.s)(),Object(o.d)("p",s,Object(o.D)(e.p.project.description),1)):(Object(o.s)(),Object(o.d)(f,{key:1,definition:e.p.project.short},null,8,["definition"])),Object(o.g)(h,{project:e.p.project},null,8,["project"]),l,e.p.project.siteUrl?(Object(o.s)(),Object(o.d)("a",{key:2,href:e.p.project.siteUrl,class:"button"},"Project site",8,["href"])):Object(o.e)("v-if",!0),e.p.project.gitUrl?(Object(o.s)(),Object(o.d)("a",{key:3,href:e.p.project.gitUrl,class:"button"},"Git repository",8,["href"])):Object(o.e)("v-if",!0),null===e.p.project.long?(Object(o.s)(),Object(o.d)("p",d," No detailed description available. ")):(Object(o.s)(),Object(o.d)("article",p,[Object(o.g)(f,{definition:e.p.project.long},null,8,["definition"])]))])])])};t.default=j}}]);