import{dG as r,d7 as t,cL as a,l as e}from"./card-67eaecc9.js";const n=async(n,s,c,i)=>{if(!c.sign)return c.endpoint;let l;try{l=await r(s,c.endpoint,i)}catch(r){return t(r),null}return l?l.replace(/^http/i,"ws"):(a(n,e("error.failed_sign")),null)};export{n as g};