require(["esri/Map","esri/views/MapView","esri/layers/GeoJSONLayer","esri/layers/FeatureLayer","esri/widgets/TimeSlider","esri/widgets/Expand","esri/widgets/Home","esri/widgets/Legend","esri/widgets/LayerList","esri/widgets/BasemapGallery","esri/widgets/Fullscreen","esri/widgets/Zoom","esri/layers/MapImageLayer","esri/Graphic"],function(e,i,t,s,n,r,a,d,l,o,c,m,u,v){var p="peta11_legend";const g=new e({basemap:"topo"});var y=new i({map:g,container:"peta-11",center:[106.840492,-6.199763],zoom:10});y.ui.components=[];var b=new u({url:"https://portal.ina-sdi.or.id/gis/rest/services/COVID19/Hazard_Vulnerability_Analysis/MapServer"});g.add(b);var L=document.getElementById("timeSlider2");y.ui.add(L,"manual");var w=document.getElementById("timeRange2");y.ui.add(w,"manual");var f=document.getElementById("prevBtn2");f.classList.add("esri-component","esri-home","esri-widget--button","esri-widget"),f.setAttribute("title","Previous"),(E=document.createElement("span")).classList.add("esri-icon-reverse"),f.appendChild(E);var h=document.getElementById("playBtn2");h.classList.add("esri-component","esri-home","esri-widget--button","esri-widget"),h.setAttribute("title","Play");var I=document.createElement("span");I.classList.add("esri-icon-play","toggle-icon"),h.appendChild(I);var E,B=document.getElementById("nextBtn2");B.classList.add("esri-component","esri-home","esri-widget--button","esri-widget"),B.setAttribute("title","Next"),(E=document.createElement("span")).classList.add("esri-icon-forward"),B.appendChild(E),document.getElementById("timeInfo2").classList.add("esri-component","esri-widget");var S=document.getElementById("rangeInfo2");S.classList.add("esri-component","esri-widget"),b.load().then(function(){length=b.sublayers.length;var e,i=!1,t=0;function s(){t+1==length?(clearInterval(e),t=-2,I.classList.remove("esri-icon-pause"),I.classList.add("esri-icon-play"),f.classList.remove("esri-button--disabled"),B.classList.remove("esri-button--disabled"),i=!1):(console.log("curr: "+t),curr=b.findSublayerById(t),curr.visible=!1,console.log("next: "+t),item=b.findSublayerById(t+1),item.visible=!0,S.innerHTML=item.title),t++}item=b.findSublayerById(0),item.visible=!0,S.innerHTML=item.title,h.addEventListener("click",function(t){i?(clearInterval(e),I.classList.remove("esri-icon-pause"),I.classList.add("esri-icon-play"),f.classList.remove("esri-button--disabled"),B.classList.remove("esri-button--disabled"),i=!1):(console.log("play"),I.classList.remove("esri-icon-play"),I.classList.add("esri-icon-pause"),f.classList.add("esri-button--disabled"),B.classList.add("esri-button--disabled"),i=!0,e=setInterval(s,1e3))}),f.addEventListener("click",function(e){i||(console.log("curr: "+t),curr=b.findSublayerById(t),curr.visible=!1,t-1<0&&(t=length),console.log("prev: "+t),item=b.findSublayerById(t-1),item.visible=!0,S.innerHTML=item.title,t--)}),B.addEventListener("click",function(e){i||(console.log("curr: "+t),curr=b.findSublayerById(t),curr.visible=!1,t+1==length&&(t=-1),console.log("next: "+t),item=b.findSublayerById(t+1),item.visible=!0,S.innerHTML=item.title,t++)})});var x=new a({view:y});y.ui.add(x,"top-right");var C=new m({view:y});y.ui.add(C,"bottom-right");var M=new l({container:document.createElement("div"),view:y,listItemCreatedFunction:function(e){e.item.actionsSections=[[{title:"URL service information",className:"esri-icon-description",id:"information"}]]}});M.on("trigger-action",function(e){var i=e.action.id;console.log(e.item.layer.url),"information"===i&&window.open(e.item.layer.url)});var A=new r({expandIconClass:"esri-icon-layer-list",expandTooltip:"Expand LayerList",view:y,content:M.domNode});y.ui.add(A,"top-right");var H=document.createElement("div");H.style.width="185px",H.setAttribute("id",p);var T=document.createElement("i");T.classList.add("fa","fa-close","w3-right"),T.style.paddingTop="10px",T.style.paddingRight="10px",T.style.cursor="pointer",H.appendChild(T),T.addEventListener("click",function(e){document.getElementById(p).style.visibility="hidden"});new d({view:y,layerInfos:[{layer:b,title:"Jakarta HV Analysis"}],container:H,style:"classic"});y.ui.add(H,"top-left");var k=document.createElement("div");k.classList.add("esri-component","esri-home","esri-widget--button","esri-widget"),k.setAttribute("title","Legend");var N=document.createElement("span");N.classList.add("esri-icon-documentation","toggle-icon"),k.appendChild(N),y.ui.add(k,"top-right"),k.addEventListener("click",function(e){var i;"hidden"===(i=document.getElementById(p)).style.visibility?i.style.visibility="visible":i.style.visibility="hidden"}),fullscreen=new c({view:y}),y.ui.add(fullscreen,"top-right")});