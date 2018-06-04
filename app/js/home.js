!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var a;n.d(t,"d",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i});var o=(a=void 0!==a?new Web3(a.currentProvider):new Web3(new Web3.providers.HttpProvider("http://85.214.224.112:8545"))).eth.contract([{anonymous:!1,inputs:[{indexed:!1,name:"oliAddr",type:"address"},{indexed:!1,name:"txTime",type:"uint256[]"},{indexed:!1,name:"txValue",type:"uint32[]"},{indexed:!1,name:"blockNumber",type:"uint256[]"},{indexed:!1,name:"blockHash",type:"bytes32[]"},{indexed:!1,name:"txGasPrice",type:"uint256[]"}],name:"ProTransactionEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"oliAddr",type:"address"},{indexed:!1,name:"eTime",type:"uint256"},{indexed:!1,name:"enerAmount",type:"uint32"}],name:"EnerProductionEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"pvAddr",type:"address"},{indexed:!1,name:"owner",type:"string"},{indexed:!1,name:"deviceType",type:"string"},{indexed:!1,name:"peakPowerPos",type:"uint32"},{indexed:!1,name:"peakPowerNeg",type:"uint32"},{indexed:!1,name:"latitude",type:"uint32"},{indexed:!1,name:"longitude",type:"uint32"},{indexed:!1,name:"voltageLevel",type:"uint32"},{indexed:!1,name:"location",type:"string"},{indexed:!1,name:"installDate",type:"string"}],name:"ProducerRegs",type:"event"},{constant:!1,inputs:[{name:"_enerValue",type:"uint32"}],name:"setEnerProduction",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"string"},{name:"_deviceType",type:"string"},{name:"_peakPowerPos",type:"uint32"},{name:"_peakPowerNeg",type:"uint32"},{name:"_latitude",type:"uint32"},{name:"_longitude",type:"uint32"},{name:"_voltageLevel",type:"uint32"},{name:"_location",type:"string"},{name:"_installDate",type:"string"}],name:"setProducer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[],name:"countProducers",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getDeviceTypeForCoin",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getEnerProduction",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getEnerProductionForCoin",outputs:[{name:"",type:"uint32[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getLocationForCoin",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_proAccntAddr",type:"address"}],name:"getProAccntDetails",outputs:[{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint32"},{name:"",type:"string"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getProAccntsList",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_proAccntAddr",type:"address"}],name:"getProBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getProducer",outputs:[{name:"",type:"address"},{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"string"},{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_proAccntAddr",type:"address"}],name:"getProEnerProduction",outputs:[{name:"",type:"address"},{name:"",type:"uint256[]"},{name:"",type:"uint32[]"},{name:"",type:"uint256[]"},{name:"",type:"bytes32[]"},{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"proAccntList",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"producerAddr",type:"address"}],name:"proAccntsArr",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}]).at("0x7661abe171d5985044131ebf2664f15d72ec95b5"),r=a.eth.contract([{anonymous:!1,inputs:[{indexed:!1,name:"oliAddr",type:"address"},{indexed:!1,name:"txTime",type:"uint256[]"},{indexed:!1,name:"txValue",type:"uint32[]"},{indexed:!1,name:"blockNumber",type:"uint256[]"},{indexed:!1,name:"blockHash",type:"bytes32[]"},{indexed:!1,name:"txGasPrice",type:"uint256[]"}],name:"ConsTransactionEvent",type:"event"},{constant:!1,inputs:[{name:"_owner",type:"string"},{name:"_deviceType",type:"string"},{name:"_peakPowerPos",type:"uint32"},{name:"_peakPowerNeg",type:"uint32"},{name:"_latitude",type:"uint32"},{name:"_longitude",type:"uint32"},{name:"_voltageLevel",type:"uint32"},{name:"_location",type:"string"},{name:"_installDate",type:"string"}],name:"setConsumer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"oliAddr",type:"address"},{indexed:!1,name:"eTime",type:"uint256"},{indexed:!1,name:"enerAmount",type:"uint32"}],name:"EnerConsumptionEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"pvAddr",type:"address"},{indexed:!1,name:"owner",type:"string"},{indexed:!1,name:"deviceType",type:"string"},{indexed:!1,name:"peakPowerPos",type:"uint32"},{indexed:!1,name:"peakPowerNeg",type:"uint32"},{indexed:!1,name:"latitude",type:"uint32"},{indexed:!1,name:"longitude",type:"uint32"},{indexed:!1,name:"voltageLevel",type:"uint32"},{indexed:!1,name:"location",type:"string"},{indexed:!1,name:"installDate",type:"string"}],name:"ConsumerRegs",type:"event"},{constant:!1,inputs:[{name:"_enerValue",type:"uint32"}],name:"setEnerConsumption",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"consAccntList",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"consumerAddr",type:"address"}],name:"consAccntsArr",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"countConsumers",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_consAccntAddr",type:"address"}],name:"getConsAccntDetails",outputs:[{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint32"},{name:"",type:"string"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConsAccntsList",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_consAccntAddr",type:"address"}],name:"getConsBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_consAccntAddr",type:"address"}],name:"getConsEnerConsumption",outputs:[{name:"",type:"address"},{name:"",type:"uint256[]"},{name:"",type:"uint32[]"},{name:"",type:"uint256[]"},{name:"",type:"bytes32[]"},{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConsumer",outputs:[{name:"",type:"address"},{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"uint32"},{name:"",type:"string"},{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getEnerConsumption",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}]).at("0xcff2fde767f1a6845d8b5b665d40bd07f3205721"),i=a.eth.contract([{anonymous:!1,inputs:[{indexed:!0,name:"_tokenOwner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_tokens",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_tokens",type:"uint256"}],name:"Transfer",type:"event"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_tokens",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getMultiplier",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"mintToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_tokens",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokens",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenOwner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenOwner",type:"address"}],name:"balanceOf",outputs:[{name:"_tokens",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getDeviceType",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getEnerProductionForCoin",outputs:[{name:"",type:"uint32[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getLocation",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getTotalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"proDeviceType",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"proLocation",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]).at("0xc9982674db4f283ade41798b6353c95ef366ed10");t.b=a},function(e,t,n){"use strict";n.r(t);var a=n(0);function o(e){var t=new Date(1e3*e),n=t.getFullYear(),a=("0"+t.getMonth()).slice(-2);return("0"+t.getDate()).slice(-2)+"-"+a+"-"+n+" "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)}function r(){var e=a.b.eth.getBlock("latest"),t=new Date(1e3*e.timestamp),n=t.getFullYear(),o=t.getUTCMonth()+1,r=("0"+t.getUTCDate()).slice(-2),i=t.getHours(),s="0"+t.getMinutes(),p="0"+t.getSeconds();return n+"-"+o+"-"+r+" "+i+":"+s.substr(-2)+":"+p.substr(-2)}var i=L.icon({iconUrl:"../img/home.png",iconSize:[30,40]}),s=L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',maxZoom:10}),p={"<span style='color: gray'>Open Street</span>":s,Grayscale:L.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),"Open Street DE":L.tileLayer("https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),"Open Topo":L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),"ESRI Imagery":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}),"CartoDB Dark":L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',subdomains:"abcd",maxZoom:19})},u=L.map("map",{center:[48.77538056,9.35277778],zoom:14,layers:s});L.control.layers(p).addTo(u);var c=L.marker([48.77538056,9.16277778],{icon:i}).addTo(u);c.bindPopup("OLI Systems GmbH"),c.on("mouseover",function(e){this.openPopup()}),c.on("mouseout",function(e){this.closePopup()});var l=u;var d=[];d.push(["Eth Address","Owner","Device Type","Peak Power (-) [W]","Coordinates [Lat-Long]","Voltage Level [V]","Location","Install Date"]),$("#consRegInfoButton").click(function(){a.a.consAccntsArr($("#inputConsAddr").val(),function(e,t){e?console.log(e):$("#consRegInfo").html(" "+t)})}),$("#resetConsButton").click(function(){document.getElementById("inputConsAddr").value="",$("#consRegInfo").html("")}),document.getElementById("consAccountList").addEventListener("click",function(e){if("LI"==e.target.nodeName){a.a.ConsumerRegs({},{fromBlock:0,toBlock:"latest"}).get(function(t,n){if(t)console.error(t);else{for(var a=[],o=[],r={},i=[],s=[],p=0;p<n.length;p++)o.push(n[p].args.latitude/1e4+", "+n[p].args.longitude/1e4),a.push(n[p].args.pvAddr);a.forEach((e,t)=>r[e]=o[t]);for(var p=0;p<Object.keys(r).length;p++)i.push(Object.entries(r)[p]);for(var p=0;p<i.length;p++)if(e.target.innerHTML==i[p][0]){var u=(s=(s=r[e.target.innerHTML]).split(","))[0].trim(),c=s[1].trim(),d=L.icon({iconUrl:"../img/consumer.png",iconSize:[30,40]}),y="Eth address: "+n[p].args.pvAddr.slice(0,7)+"...<br>Consumer: "+n[p].args.owner+"<br>Location: "+n[p].args.latitude/1e4+", "+n[p].args.longitude/1e4;void 0!=m&&l.removeLayer(m),(m=L.marker([u,c],{icon:d}).addTo(l)).bindPopup(y,{maxWidth:"500",className:"currentCons-popup"}).openPopup()}}}),document.getElementById("consAccntTitle").innerHTML=e.target.innerHTML,a.a.getConsAccntDetails(e.target.innerHTML,function(e,t){e?console.log(e):($("#consOwner").html(t[0]),$("#consDeviceType").html(t[1]),document.getElementById("consPeakPower").innerHTML=t[2],$("#consLocationType").html(t[3]),$("#consLat").html(t[4]/1e4),$("#consLon").html(t[5]/1e4),$("#consInstallDate").html(t[6]))}),a.a.getConsBalance(e.target.innerHTML,function(e,t){e?console.log(e):document.getElementById("consAccntBalance").innerHTML=t}),a.a.getConsEnerConsumption(e.target.innerHTML,function(e,t){if(e)console.error(e);else{var n=document.getElementById("consAccount");n.innerHTML="";var a=[];a.push(["Eth Address","Time","Power [W]","Block Number","BlockHash","Gas Price [wei]"]);for(var r=0;r<t[1].length;r++)a.push([t[0],o(t[1][r].c),t[2][r].c,t[3][r].c,t[4][r],t[5][r].c]);var n=document.getElementById("consAccount");n.style.cssText="table-layout: fixed;  width: 100%; font-size: 12px; word-break: break-word:display: block;";for(var i=a[0].length,s=n.insertRow(-1),r=0;r<i;r++){var p=document.createElement("TH");p.innerHTML=a[0][r],s.appendChild(p)}for(var r=1;r<a.length;r++){s=n.insertRow(-1);for(var u=0;u<i;u++){var c=s.insertCell(-1);c.innerHTML=a[r][u]}}}});for(var t=0;t<e.target.parentNode.children.length;t++)e.target.parentNode.children[t].classList.remove("activeConsumer");e.target.classList.add("activeConsumer")}});var m={};var y=[],g=[],f=[],v=[];v.push(["Eth Address","Time","Power [W]"]);var b=n(2);var h=[];h.push(["Eth Address","Owner","Device Type","Peak Power (+) [W]","Coordinates [Lat-Long]","Voltage Level [V]","Location","Install Date"]),$("#proRegInfoButton").click(function(){a.d.proAccntsArr($("#inputProAddr").val(),function(e,t){e?console.log(e):$("#proRegInfo").html(" "+t)})}),$("#resetProButton").click(function(){document.getElementById("inputProAddr").value="",$("#proRegInfo").html("")});var w=[],T=[],M=[],P=[];P.push(["Eth Address","Time","Power [W]"]),document.getElementById("proAccountList").addEventListener("click",function(e){if("LI"==e.target.nodeName){a.d.ProducerRegs({},{fromBlock:0,toBlock:"latest"}).get(function(t,n){if(t)console.error(t);else{for(var a=[],o=[],r={},i=[],s=[],p=0;p<n.length;p++)o.push(n[p].args.latitude/1e4+", "+n[p].args.longitude/1e4),a.push(n[p].args.pvAddr);a.forEach((e,t)=>r[e]=o[t]);for(var p=0;p<Object.keys(r).length;p++)i.push(Object.entries(r)[p]);for(var p=0;p<i.length;p++)if(e.target.innerHTML==i[p][0]){var u=(s=(s=r[e.target.innerHTML]).split(","))[0].trim(),c=s[1].trim(),d=L.icon({iconUrl:"../img/producer.png",iconSize:[30,40]}),m="Eth address: "+n[p].args.pvAddr.slice(0,7)+"...<br>Producer: "+n[p].args.owner+"<br>Location: "+n[p].args.latitude/1e4+", "+n[p].args.longitude/1e4;void 0!=k&&l.removeLayer(k),(k=L.marker([u,c],{icon:d}).addTo(l)).bindPopup(m,{maxWidth:"500",className:"currentPro-popup"}).openPopup()}}}),document.getElementById("proAccntTitle").innerHTML=e.target.innerHTML,a.d.getProAccntDetails(e.target.innerHTML,function(e,t){e?console.log(e):($("#proOwner").html(t[0]),$("#proDeviceType").html(t[1]),document.getElementById("proPeakPower").innerHTML=t[2],$("#proLocationType").html(t[3]),$("#proLat").html(t[4]/1e4),$("#proLon").html(t[5]/1e4),$("#proInstallDate").html(t[6]))}),a.d.getProBalance(e.target.innerHTML,function(e,t){e?console.log(e):document.getElementById("proAccntBalance").innerHTML=t}),a.d.getProEnerProduction(e.target.innerHTML,function(e,t){if(e)console.error(e);else{var n=document.getElementById("proAccount");n.innerHTML="";var a=[];a.push(["Eth Address","Time","Power [W]","Block Number","BlockHash","Gas Price [wei]"]);for(var r=0;r<t[1].length;r++)a.push([t[0],o(t[1][r].c),t[2][r].c,t[3][r].c,t[4][r],t[5][r].c]);var i=document.getElementById("proAccount");i.style.cssText="table-layout: fixed;  width: 100%; font-size: 12px; word-break: break-word:display: block;";for(var s=a[0].length,p=i.insertRow(-1),r=0;r<s;r++){var u=document.createElement("TH");u.innerHTML=a[0][r],p.appendChild(u)}for(var r=1;r<a.length;r++){p=i.insertRow(-1);for(var c=0;c<s;c++){var l=p.insertCell(-1);l.innerHTML=a[r][c]}}}});for(var t=0;t<e.target.parentNode.children.length;t++)e.target.parentNode.children[t].classList.remove("active");e.target.classList.add("active")}});var k={};setInterval(function(){var e=a.b.eth.blockNumber,t=a.b.eth.getBlockTransactionCount("latest"),n=a.b.eth.getBlock("latest").gasUsed/1e6;n=n.toFixed(2),document.getElementById("blockNumber").innerHTML=e,document.getElementById("txMined").innerHTML=t,document.getElementById("gasUsed").innerHTML=n},3e3),window.onload=(a.d.ProducerRegs({},{fromBlock:0,toBlock:"latest"}).get(function(e,t){if(e)console.error(e);else{for(var n=0;n<t.length;n++)h.push([t[n].args.pvAddr,t[n].args.owner,t[n].args.deviceType,t[n].args.peakPowerPos,t[n].args.latitude/1e4+" "+t[n].args.longitude/1e4,t[n].args.voltageLevel,t[n].args.location,t[n].args.installDate]);var a=document.createElement("Table");a.style.cssText="table-layout: fixed;  width: 100%; font-size: 12px; word-break: break-word:display: block;";var o=h[0].length,r=a.insertRow(-1);for(n=0;n<o;n++){var i=document.createElement("TH");i.innerHTML=h[0][n],r.appendChild(i)}for(n=1;n<h.length;n++){r=a.insertRow(-1);for(var s=0;s<o;s++)r.insertCell(-1).innerHTML=h[n][s]}var p=document.getElementById("proRegs");p.innerHTML="",p.appendChild(a);var u=L.icon({iconUrl:"../img/producer.png",iconSize:[50,50]}),c=[],d=[],m=[];for(n=0;n<t.length;n++)d.push(t[n].args.latitude/1e4),m.push(t[n].args.longitude/1e4),c.push(t[n].args.latitude/1e4+", "+t[n].args.longitude/1e4);for(n=0;n<d.length;n++){var y=m[n],g=d[n],f="Eth address: "+t[n].args.pvAddr.slice(0,7)+"...<br>Producer: "+t[n].args.owner+"<br>Location: "+t[n].args.latitude/1e4+", "+t[n].args.longitude/1e4,v=new L.LatLng(g,y);c=new L.Marker(v,{icon:u}),l.addLayer(c),c.bindPopup(f)}}}),a.d.ProducerRegs({fromBlock:"latest",toBlock:"latest"}).watch(function(e,t){e&&console.log(e)}),a.d.getProAccntsList(function(e,t){if(e)console.log(e);else{t.shift();for(var n=0;n<t.length;n++)$("#proAccountList").prepend("<li>"+t[n]+"</li>")}}),a.d.countProducers(function(e,t){e?console.log(e):$("#proCounter").html(" "+t)}),a.d.EnerProductionEvent({fromBlock:"latest",toBlock:"latest"}).watch(function(e,t){if(e)console.log(e);else{P.push([t.args.oliAddr,o(t.args.eTime),t.args.enerAmount]);var n=document.createElement("Table");n.style.cssText="table-layout: fixed;  width: 100%; font-size: 12px; word-break: break-word:display: block;";for(var a=P[0].length,i=n.insertRow(-1),s=0;s<a;s++){var p=document.createElement("TH");p.innerHTML=P[0][s],i.appendChild(p)}for(s=1;s<P.length;s++){i=n.insertRow(-1);for(var u=0;u<a;u++)i.insertCell(-1).innerHTML=P[s][u]}var c=document.getElementById("realTimeProdunction");c.innerHTML="",c.appendChild(n),w.push(t.args.enerAmount.c[0]),T.push(r());var l=[],d=[],m={};for(var f in T.forEach((e,t)=>m[e]=w[t]),m)m.hasOwnProperty(f);var v={},h={};v.time=f,h.energy=m[f];var L=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(v,h);M.push(L);var k={};M.forEach(function(e){k.hasOwnProperty(e.time)?k[e.time]=k[e.time]+e.energy:k[e.time]=e.energy});var x=[];for(var A in k)x.push({time:A,energy:k[A]});for(var f in x)x.hasOwnProperty(f)&&(d.push(x[f].time),l.push(x[f].energy));function E(e){return new Date(e)}T=d,(w=l).length>10&&(w=w.slice(-10),T=T.slice(-10));var C=[{type:"date",mode:"lines+markers",name:"Producer",x:T.map(E),y:w,line:{color:"#009933"}},{type:"scatter",mode:"lines+markers",name:"Consumer",x:g.map(E),y:y,line:{color:"#cc6600"}}];Plotly.newPlot("realTimeProGraph",C,{xaxis:{title:"Time",tickformat:"%H:%M:%S",linecolor:"lightgray",linewidth:.5,titlefont:{color:"black"}},yaxis:{title:"Energy [kWh] per Block",tickformat:"none",linecolor:"lightgray",linewidth:.5,titlefont:{color:"black"}},margin:{l:80,r:30,b:50,t:15,pad:4}}),Object(b.default)()}}),a.a.ConsumerRegs({},{fromBlock:0,toBlock:"latest"}).get(function(e,t){if(e)console.error(e);else{for(var n=0;n<t.length;n++)d.push([t[n].args.pvAddr,t[n].args.owner,t[n].args.deviceType,t[n].args.peakPowerNeg,t[n].args.latitude/1e4+" "+t[n].args.longitude/1e4,t[n].args.voltageLevel,t[n].args.location,t[n].args.installDate]);var a=document.createElement("Table");a.style.cssText="table-layout: fixed;  width: 100%; font-size: 12px; word-break: break-word:display: block;";var o=d[0].length,r=a.insertRow(-1);for(n=0;n<o;n++){var i=document.createElement("TH");i.innerHTML=d[0][n],r.appendChild(i)}for(n=1;n<d.length;n++){r=a.insertRow(-1);for(var s=0;s<o;s++)r.insertCell(-1).innerHTML=d[n][s]}var p=document.getElementById("consRegs");p.innerHTML="",p.appendChild(a);var u=L.icon({iconUrl:"../img/consumer.png",iconSize:[50,50]}),c=[],m=[],y=[];for(n=0;n<t.length;n++)m.push(t[n].args.latitude/1e4),y.push(t[n].args.longitude/1e4),c.push(t[n].args.latitude/1e4+", "+t[n].args.longitude/1e4);for(n=0;n<m.length;n++){var g=y[n],f=m[n],v="Eth address: "+t[n].args.pvAddr.slice(0,7)+"...<br>Consumer: "+t[n].args.owner+"<br>Location: "+t[n].args.latitude/1e4+", "+t[n].args.longitude/1e4,b=new L.LatLng(f,g);c=new L.Marker(b,{icon:u}),l.addLayer(c),c.bindPopup(v)}}}),a.a.getConsAccntsList(function(e,t){if(e)console.log(e);else{t.shift();for(var n=0;n<t.length;n++)$("#consAccountList").prepend("<li>"+t[n]+"</li>")}}),a.a.countConsumers(function(e,t){e?console.log(e):$("#consCounter").html(" "+t)}),void a.a.EnerConsumptionEvent({fromBlock:"latest",toBlock:"latest"}).watch(function(e,t){if(e)console.log(e);else{v.push([t.args.oliAddr,o(t.args.eTime),t.args.enerAmount]);var n=document.createElement("Table");n.style.cssText="table-layout: fixed;  width: 100%; font-size: 12px; word-break: break-word:display: block;";for(var a=v[0].length,i=n.insertRow(-1),s=0;s<a;s++){var p=document.createElement("TH");p.innerHTML=v[0][s],i.appendChild(p)}for(s=1;s<v.length;s++){i=n.insertRow(-1);for(var u=0;u<a;u++)i.insertCell(-1).innerHTML=v[s][u]}var c=document.getElementById("realTimeConsumption");c.innerHTML="",c.appendChild(n),y.push(t.args.enerAmount.c[0]),g.push(r());var l=[],d=[],m={};for(var b in g.forEach((e,t)=>m[e]=y[t]),m)m.hasOwnProperty(b);var h={},w={};h.time=b,w.energy=m[b];var L=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(h,w);f.push(L);var T={};f.forEach(function(e){T.hasOwnProperty(e.time)?T[e.time]=T[e.time]+e.energy:T[e.time]=e.energy});var M=[];for(var P in T)M.push({time:P,energy:T[P]});for(var b in M)M.hasOwnProperty(b)&&(d.push(M[b].time),l.push(M[b].energy));g=d,(y=l).length>10&&(y=y.slice(-10),g=g.slice(-10))}}))},function(e,t,n){"use strict";n.r(t);var a=n(0);document.getElementById("proAccountList").addEventListener("click",function(e){if("LI"==e.target.nodeName){a.c.proDeviceType(e.target.innerHTML,function(e,t){e?console.log(e):$("#proDeviceType").html(t)}),a.d.getProAccntDetails(e.target.innerHTML,function(e,t){e?console.log(e):($("#proOwner").html(t[0]),$("#proDeviceType").html(t[1]),document.getElementById("proPeakPower").innerHTML=t[2],$("#proLocationType").html(t[3]),$("#proLat").html(t[4]/1e4),$("#proLon").html(t[5]/1e4),$("#proInstallDate").html(t[6]))}),a.d.getProBalance(e.target.innerHTML,function(e,t){e?console.log(e):document.getElementById("proAccntBalance").innerHTML=t});for(var t=0;t<e.target.parentNode.children.length;t++)e.target.parentNode.children[t].classList.remove("active");e.target.classList.add("active")}}),window.onload=void a.d.getProAccntsList(function(e,t){if(e)console.log(e);else{t.shift();for(var n=0;n<t.length;n++)$("#proAccountList").prepend("<li>"+t[n]+"</li>")}}),t.default=function(){a.c.mintToken()}}]);
//# sourceMappingURL=home.js.map