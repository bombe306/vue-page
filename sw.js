if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const s=e=>a(e,r),n={module:{uri:r},exports:d,require:s};i[r]=Promise.all(c.map((e=>n[e]||s(e)))).then((e=>(f(...e),d)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DN5iomPa.js",revision:null},{url:"assets/index-vPKfBfUR.css",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"image/image1.jpg",revision:"ff0e6701670cc0483513f4067d9a95f3"},{url:"image/image10.png",revision:"7cb18345d2eac52573c4ce19f24ad16a"},{url:"image/image2.jpg",revision:"498d479e38e9050ede75e9c99d1431b1"},{url:"image/image3.jpg",revision:"7ff2e6c4ce1c2852514344ce4dd09eee"},{url:"image/image4.jpg",revision:"e6013fcffb6ea33b3cb0768ded281f64"},{url:"image/image5.jpg",revision:"c266797421f49c0a4f67f1f5320a0382"},{url:"image/image6.jpg",revision:"946508d2c3582ed8d671df18819d6613"},{url:"image/image7.jpg",revision:"a47d27aaa3ca0eec8c60a11358856166"},{url:"image/image8.jpg",revision:"5fde38427c1752a4b12f17c5c19a393d"},{url:"image/image9.jpg",revision:"cda1f6fab914a631629a55092f38d8dc"},{url:"index.html",revision:"fc59323d0df6c0c652cf2089288552c1"},{url:"items.json",revision:"4f128610e9fd8a79200c72cc093d8c1f"},{url:"manifest.webmanifest",revision:"3a59df4bcb4d0ef9113566673da53585"},{url:"registerSW.js",revision:"813bfc25f06f6c5b4b6f5d204da93f39"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"items.json",revision:"4f128610e9fd8a79200c72cc093d8c1f"},{url:"image/image1.jpg",revision:"ff0e6701670cc0483513f4067d9a95f3"},{url:"image/image10.png",revision:"7cb18345d2eac52573c4ce19f24ad16a"},{url:"image/image2.jpg",revision:"498d479e38e9050ede75e9c99d1431b1"},{url:"image/image3.jpg",revision:"7ff2e6c4ce1c2852514344ce4dd09eee"},{url:"image/image4.jpg",revision:"e6013fcffb6ea33b3cb0768ded281f64"},{url:"image/image5.jpg",revision:"c266797421f49c0a4f67f1f5320a0382"},{url:"image/image6.jpg",revision:"946508d2c3582ed8d671df18819d6613"},{url:"image/image7.jpg",revision:"a47d27aaa3ca0eec8c60a11358856166"},{url:"image/image8.jpg",revision:"5fde38427c1752a4b12f17c5c19a393d"},{url:"image/image9.jpg",revision:"cda1f6fab914a631629a55092f38d8dc"},{url:"manifest.webmanifest",revision:"3a59df4bcb4d0ef9113566673da53585"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));