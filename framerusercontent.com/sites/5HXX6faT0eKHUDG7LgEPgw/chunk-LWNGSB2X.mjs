import{I as m,K as r,ja as h,k as d,n as p}from"./chunk-2VPXM5HX.mjs";var g='"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',x={position:"relative",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},R={...x,borderRadius:6,background:"rgba(136, 85, 255, 0.3)",color:"#85F",border:"1px dashed #85F",flexDirection:"column"},F={onClick:{type:r.EventHandler},onMouseEnter:{type:r.EventHandler},onMouseLeave:{type:r.EventHandler}},T={type:r.Number,title:"Font Size",min:2,max:200,step:1,displayStepper:!0},k={font:{type:r.Boolean,title:"Font",defaultValue:!1,disabledTitle:"Default",enabledTitle:"Custom"},fontFamily:{type:r.String,title:"Family",placeholder:"Inter",hidden:({font:o})=>!o},fontWeight:{type:r.Enum,title:"Weight",options:[100,200,300,400,500,600,700,800,900],optionTitles:["Thin","Extra-light","Light","Regular","Medium","Semi-bold","Bold","Extra-bold","Black"],hidden:({font:o})=>!o}};var S={100:"Thin",200:"Extra-light",300:"Light",400:"Regular",500:"Medium",600:"Semi-bold",700:"Bold",800:"Extra-bold",900:"Black"};function P(o){let{fontFamily:a="Inter",fontSize:u=16,fontWeight:i=400,font:c=!1}=o,s=S[i],l=`"${a} ${s}", "${a}", ${g}`,f=a?{fontSize:u,fontWeight:i,fontFamily:l}:{fontSize:u,fontWeight:i},C=async()=>{await h.loadWebFontsFromSelectors([`CUSTOM;${a}`,`CUSTOM;${a} ${s}`,`GF;${a}-${s.toLowerCase()}`]).catch(y=>console.error(y))};return d(()=>{c&&C()},[c,a,i]),f}function N(){return p(()=>m.current()===m.canvas,[])}function D(o){let{borderRadius:a,isMixedBorderRadius:u,topLeftRadius:i,topRightRadius:c,bottomRightRadius:s,bottomLeftRadius:l}=o;return p(()=>u?`${i}px ${c}px ${s}px ${l}px`:`${a}px`,[a,u,i,c,s,l])}var W={borderRadius:{title:"Radius",type:r.FusedNumber,toggleKey:"isMixedBorderRadius",toggleTitles:["Radius","Radius per corner"],valueKeys:["topLeftRadius","topRightRadius","bottomRightRadius","bottomLeftRadius"],valueLabels:["TL","TR","BR","BL"],min:0}};function H(o){let{padding:a,paddingPerSide:u,paddingTop:i,paddingRight:c,paddingBottom:s,paddingLeft:l}=o;return p(()=>u?`${i}px ${c}px ${s}px ${l}px`:a,[a,u,i,c,s,l])}var q={padding:{type:r.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0,title:"Padding"}};export{x as a,R as b,k as c,P as d,N as e,D as f,W as g,H as h,q as i};
//# sourceMappingURL=chunk-LWNGSB2X.mjs.map