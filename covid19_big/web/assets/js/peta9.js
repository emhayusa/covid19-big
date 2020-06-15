require(["esri/Map","esri/views/MapView","esri/widgets/Expand","esri/widgets/Home","esri/widgets/Legend","esri/widgets/LayerList","esri/widgets/BasemapGallery","esri/widgets/Fullscreen","esri/widgets/Zoom","esri/layers/MapImageLayer","esri/tasks/IdentifyTask","esri/tasks/support/IdentifyParameters","dojo/domReady!"],function(e,t,i,n,a,r,o,s,d,l,c,p){var u,m,g="peta-9",v='"peta9_legend"',w="http://portal.ina-sdi.or.id/gis/rest/services/COVID19/Mapping_Cluster/MapServer",y=new e({basemap:"gray"}),h=new t({container:g,center:[106.840492,-6.199763],zoom:11,map:y}),f=new l(w,null);y.layers.add(f),h.ui.components=[];var b=new n({view:h});h.ui.add(b,"top-right");var E=new d({view:h});h.ui.add(E,"bottom-right");var L=new o({view:h,container:document.createElement("div")}),x=new i({expandIconClass:"esri-icon-basemap",expandTooltip:"Expand BasemapGallery",view:h,content:L.domNode});h.ui.add(x,"top-right");var I=new r({container:document.createElement("div"),view:h,listItemCreatedFunction:function(e){e.item.actionsSections=[[{title:"URL service information",className:"esri-icon-description",id:"information"}]]}});I.on("trigger-action",function(e){var t=e.action.id;console.log(e.item.layer.url),"information"===t&&window.open(e.item.layer.url)});var C=new i({expandIconClass:"esri-icon-layer-list",expandTooltip:"Expand LayerList",view:h,content:I.domNode});h.ui.add(C,"top-right");var M=document.createElement("div");M.style.width="185px",M.setAttribute("id",v);var k=document.createElement("i");k.classList.add("fa","fa-close","w3-right"),k.style.paddingTop="10px",k.style.paddingRight="10px",k.style.cursor="pointer",M.appendChild(k),k.addEventListener("click",function(e){document.getElementById(v).style.visibility="hidden"});new a({view:h,layerInfos:[{layer:f,title:"Mapping Cluster"}],container:M,style:"classic"});h.ui.add(M,"top-left");var B=document.createElement("div");B.classList.add("esri-component","esri-home","esri-widget--button","esri-widget"),B.setAttribute("title","Legend");var T=document.createElement("span");function N(e){m.geometry=e.mapPoint,m.mapExtent=h.extent,document.getElementById(g).style.cursor="wait",u.execute(m).then(function(e){return e.results.map(function(e){var t=e.feature,i=e.layerName;t.attributes.layerName=i,console.log(t.attributes);var n=document.createElement("div"),a=t.attributes,r="<table>";for(var o in a)console.log(o),console.log(a[o]),r+="<tr><td>"+o+"</td><td>"+a[o]+"</td></tr>";return r+="</table>",n.innerHTML=r,t.popupTemplate={title:i,content:n},t})}).then(function(t){t.length>0&&h.popup.open({features:t,location:e.mapPoint});document.getElementById(g).style.cursor="auto"})}T.classList.add("esri-icon-documentation","toggle-icon"),B.appendChild(T),h.ui.add(B,"top-right"),B.addEventListener("click",function(e){var t;"hidden"===(t=document.getElementById(v)).style.visibility?t.style.visibility="visible":t.style.visibility="hidden"}),fullscreen=new s({view:h}),h.ui.add(fullscreen,"top-right"),h.when(function(){h.on("click",N),u=new c(w),(m=new p).tolerance=3,m.layerOption="visible",m.width=h.width,m.height=h.height})});