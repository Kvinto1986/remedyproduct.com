(self.webpackChunkrps_site=self.webpackChunkrps_site||[]).push([[7],{5712:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(2122),l=a(9756),c=a(5900),s=a.n(c),i=a(9541),u=a(6306),m=n.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,m=e.size,o=e.active,f=e.className,d=e.block,p=e.type,E=e.as,x=(0,l.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=(0,i.vE)(a,"btn"),h=s()(f,v,o&&"active",c&&v+"-"+c,d&&v+"-block",m&&v+"-"+m);if(x.href)return n.createElement(u.Z,(0,r.Z)({},x,{as:E,ref:t,className:s()(h,x.disabled&&"disabled")}));t&&(x.ref=t),p?x.type=p:E||(x.type="button");var y=E||"button";return n.createElement(y,(0,r.Z)({},x,{className:h}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var o=m,f=a(6187),d=a(5444),p=function(){return n.createElement(f.Z,{className:"d-flex flex-wrap justify-content-center mt-5"},n.createElement("h1",null,"404"),n.createElement("h3",null,"The page you are looking for was not found"),n.createElement("p",null,n.createElement(d.Link,{to:"/"},n.createElement(o,{variant:"outline-dark mt-5"},"Return to homepage"))))}},3170:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(5444),l=a(3806),c=a(6187),s=a(9643),i=function(e){var t=e.post,a=e.id;return n.createElement(c.Z,{fluid:!0,className:"d-flex flex-wrap justify-content-center mt-5",key:a},n.createElement(c.Z,{className:"d-flex flex-wrap justify-content-center"},n.createElement("h4",{className:"title"},0!==l.RichText.asText(t.node.data.title.raw).length&&l.RichText.asText(t.node.data.title.raw)),n.createElement("p",{className:"auth"},0!==l.RichText.asText(t.node.data.title_text.raw).length&&l.RichText.asText(t.node.data.title_text.raw))),n.createElement(s.Z,{className:"introImage",src:t.node.data.title_image.url}),n.createElement(c.Z,{fluid:!0,className:"mt-4 d-flex flex-wrap justify-content-center"},function(e){var t=e.body.find((function(e){return"text"===e.slice_type}));if(null!=t){var a=l.RichText.asText(t.primary.text.raw),r=a.substring(0,600);return a.length>600?n.createElement("p",null,r.substring(0,r.lastIndexOf(" "))+"..."):n.createElement("p",null,a)}}(t.node.data)),n.createElement(r.Link,{className:"readLink mt-3",to:t.node.url},"READ MORE"))},u=function(e){var t=e.posts;return t?n.createElement(c.Z,null,t.map((function(e){return n.createElement(i,{post:e,key:e.node.id})}))):null},m=a(5712),o=a(1401),f=a(5044),d=function(e){var t=e.data;if(!t)return n.createElement(n.Fragment,null,n.createElement(m.default,null));var a=t.allPrismicPost.edges;return n.createElement(n.Fragment,null,n.createElement(o.Z,null),n.createElement(c.Z,null,n.createElement("h3",{style:{textAlign:"center"},className:"mt-5"},"RoadmApp")),n.createElement(u,{posts:a}),n.createElement(f.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-77f305358826915746d3.js.map