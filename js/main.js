let CHARACTER_ID=["ichika","saki","honami","shiho","minori","haruka","airi","shizuku","kohane","an","akito","touya","tsukasa","emu","nene","rui","kanade","mafuyu","ena","mizuki","miku","rin","len","luka","meiko","kaito","father","partner","otorifather"],CHARACTER_NAMES=["이치카","사키","호나미","시호","미노리","하루카","아이리","시즈쿠","코하네","안","아키토","토우야","츠카사","에무","네네","루이","카나데","마후유","에나","미즈키","미쿠","린","렌","루카","메이코","카이토","켄","타이가","코노스케"],CHARACTER_L2D_ID=["v2_01ichika_casual","v2_02saki_casual","v2_03honami_casual","v2_04shiho_casual","v2_05minori_casual","v2_06haruka_casual","v2_07airi_casual","v2_08shizuku_casual","v2_09kohane_casual","v2_10an_casual","v2_11akito_casual","v2_12touya_casual","v2_13tsukasa_casual","v2_14emu_casual","v2_15nene_casual","v2_16rui_casual","v2_17kanade_casual","v2_18mafuyu_casual","v2_19ena_casual","v2_20mizuki_casual","v2_21miku_normal","v2_22rin_normal","v2_23len_normal","v2_24luka_normal","v2_25meiko_normal","v2_26kaito_normal","sub_anfather","sub_partner","sub_otorifather"],UNIT_NAMES={light_sound:"Leo/need",idol:"MORE MORE JUMP！",street:"Vivid BAD SQUAD",theme_park:"ワンダーランズ×ショウタイム",school_refusal:"25時、ナイトコードで。",piapro:"バーチャル・シンガー"},BG_NAMES=["/img/bg_area_1.png","/img/bg_area_2.png","/img/bg_area_3.png","/img/bg_area_4.png","/img/bg_area_5.png","/img/bg_area_7.png","/img/bg_area_8.png","/img/bg_area_9.png","/img/bg_area_10.png","/img/bg_area_11.png","/img/bg_area_12.png","/img/bg_area_13.png","/img/bg_area_17.png","/img/bg_area_18.png","/img/bg_area_19.png","/img/bg_area_20.png","/img/bg_area_21.png"],API_HOST="hxxtxxxtxpxxx:xxx/xxx/xxsxxexkxxxxaidxxexxaxxxnxgx.xdxuxxxcxkxdxnxxxxsx.xoxrxxxxg",GIT_PREFIX="https://shinich39.github.io/skda",speechDisabledAt=0,L2D=function(){console.log("Live2D:",PIXI.live2d);let o=PIXI.live2d.Live2DModel,i=document.getElementById("c1"),c=new PIXI.Application({view:i,autoStart:!0,transparent:!0,resizeTo:window}),s=300,l=i.width-s,u=300,d=i.height-u,r=0;return{MIN_X:s,MAX_X:l,MIN_Y:u,MAX_Y:d,DEFAULT_R:r,init:function(){return new Promise(function(a,e){setTimeout(async function(){var t=["father","partner","otorifather"],n=[-500,window.innerWidth+500];util.shuffle(t),util.shuffle(n);for(let e=0;e<2;e++)(await m(t[e])).x=n[e];var e=w().reduce((e,t)=>Math.max(e,t.d),0);setTimeout(function(){a(c)},e)},256)})},unsetModels:function(){try{c.stage.removeChildren()}catch(e){}},setModel:m,moveX:g,moveY:f,shiverX:function(s){return new Promise(function(t,e){let n=s.position.x-10,a=s.position.x+10,o=s.position.x-5,i=s.position.x+5,r=s.position.x,c=0;!function e(){c+=2,s.x=util.bezier([{x:n,y:0},{x:a,y:0},{x:n,y:0},{x:a,y:0},{x:o,y:0},{x:i,y:0},{x:r,y:0}],c/24).x,c<24?setTimeout(e,2):t()}()})},motion:function(e,t){{var n;t||(n=e.internalModel.settings,t=util.choose(Object.keys(n.motions)))}e.motion(t)},resize:function(){var e=c.view.parentNode;c.renderer.resize(e.clientWidth,e.clientHeight)},getRandomScreenX:b,setHuggingPosition:w,rotate:_,rotateL:function(a,o=1e3){return new Promise(function(e,t){var n=a.originalRotation/90;switch(Math.abs(n%4)){case 0:p(a,!1,o);break;case 1:v(a,!1,o);break;case 2:x(a,!1,o);break;case 3:y(a,!1,o)}setTimeout(()=>{e()},o)})},rotateR:function(a,o=1e3){return new Promise(function(e,t){var n=a.originalRotation/90;switch(console.log(Math.abs(n%4)),Math.abs(n%4)){case 0:y(a,!0,o);break;case 1:x(a,!0,o);break;case 2:v(a,!0,o);break;case 3:p(a,!0,o)}setTimeout(()=>{e()},o)})},climbLB:p,climbLT:v,climbRB:y,climbRT:x,walkX:function(n,a,o=100){return new Promise(function(e,t){g(n,n.x+a,.666*o).then(function(){g(n,n.x-3,.166*o).then(function(){g(n,n.x+3,.166*o).then(e)})})})},walkY:function(n,a,o=100){return new Promise(function(e,t){f(n,n.y+a,.666*o).then(function(){f(n,n.y-3,.166*o).then(function(){f(n,n.y+3,.166*o).then(e)})})})}};function h(e=0){return(e+180)*(Math.PI/180)}function m(a){return new Promise(function(n,e){var t;o.from((t=a,t=CHARACTER_L2D_ID[CHARACTER_ID.indexOf(t)],GIT_PREFIX+`/live2d/${t}/${t}.model3.json`)).then(function(e){var t=e.internalModel;t.motionManager;console.log("Live2D Model added:",e),c.stage.addChild(e),e.modelName=a,e.originalRotation=r,e.pos=0,e.buttonMode=!1,e.rotation=h(r),e.skew.x=Math.PI,e.scale.set(i.height/e.height),e.anchor.set(.5,.5),e.x=-500,e.y=d,n(e)})})}function g(i,r,c=1e3){return new Promise(function(t,e){let n=i.position.x,a=r||i.position.x,o=0;!function e(){o+=12,i.x=util.bezier([{x:n,y:0},{x:a,y:0},{x:a,y:0},{x:a,y:0}],o/c).x,o<c?setTimeout(e,12):t()}()})}function f(i,r,c=1e3){return new Promise(function(t,e){let n=i.position.y,a=r||i.position.y,o=0;!function e(){o+=12,i.y=util.bezier([{x:0,y:n},{x:0,y:a},{x:0,y:a},{x:0,y:a}],o/c).y,o<c?setTimeout(e,12):t()}()})}function _(i,r,c=1e3){return new Promise(function(t,e){let n=i.rotation;let a=h(r)-n,o=0;!function e(){o+=12,i.rotation=util.bezier([{x:0,y:n},{x:0,y:n+.8*a},{x:0,y:n+a}],o/c).y,o<c?setTimeout(e,12):t()}()})}function p(i,r,c=1e3){return new Promise(function(e,t){i.x;var n=r?s+128:s,a=r?d:d-128,o=i.originalRotation,o=r?o-90:o+90;i.originalRotation=o,g(i,n,c),f(i,a,c),_(i,o,c),setTimeout(()=>{e()},c)})}function v(i,r,c=1e3){return new Promise(function(e,t){i.x;var n=r?s:s+128,a=r?u+128:u,o=i.originalRotation,o=r?o-90:o+90;i.originalRotation=o,g(i,n,c),f(i,a,c),_(i,o,c),setTimeout(()=>{e()},c)})}function y(i,r,c=1e3){return new Promise(function(e,t){i.x;var n=r?l:l-128,a=r?d-128:d,o=i.originalRotation,o=r?o-90:o+90;i.originalRotation=o,g(i,n,c),f(i,a,c),_(i,o,c),setTimeout(()=>{e()},c)})}function x(i,r,c=1e3){return new Promise(function(e,t){i.x;var n=r?l-128:l,a=r?u:u+128,o=i.originalRotation,o=r?o-90:o+90;i.originalRotation=o,g(i,n,c),f(i,a,c),_(i,o,c),setTimeout(()=>{e()},c)})}function w(){var e=b();let n=[300,250,200,150,-300,-250,-200,-150],a=[500,600,700,800,900,1e3],o=e,i;var t=c.stage.children.map((e,t)=>(o+=util.choose(n),i=util.choose(a),{m:e,x:o,d:i}));for(let e=0;e<t.length;e++){var r=t[e];g(r.m,r.x,r.d)}return t}function b(){return util.choose([.4*i.width,.45*i.width,.5*i.width,.55*i.width,.6*i.width])}}(),C=function(){let n=document.getElementById("c2"),a;return{init:function({labels:e,values:t}){if(a)return this.update({labels:e,values:t});e={type:"radar",data:{labels:e,datasets:[{data:t,fill:!0,backgroundColor:"rgba(134,206,203,0.8)",borderColor:"rgb(134,206,203)",pointBackgroundColor:"rgb(134,206,203)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(134,206,203)"}]},options:{interaction:{intersect:!1},layout:{padding:24},scale:{min:0,max:100,stepSize:33.33,beginAtZero:!0,font:{size:14}},scales:{r:{ticks:{display:!1,showLabelBackdrop:!1},pointLabels:{color:"rgb(255,255,255)",font:{size:14}},grid:{color:"rgba(255,255,255,1)",lineWidth:1},angleLines:{color:"rgba(255,255,255,1)",lineWidth:1}}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(e){return""},label:function(e){return""},afterBody:function(e){return e[0]?.formattedValue||""}}}},elements:{line:{borderWidth:1},point:{radius:3},interaction:{mode:"index"}}}};a=new Chart(n,e)},update:function({labels:e,values:t}){a.data.labels=e,a.data.datasets[0].data=t,a.update()}}}();function showChart(){document.getElementById("c2-container").style.opacity="1"}function hideChart(){document.getElementById("c2-container").style.opacity="0"}function showSpeech(e,t,n){var a,o,i,r;speechDisabledAt<Date.now()?(a=CHARACTER_NAMES[CHARACTER_ID.indexOf(e)],o=document.getElementById("speech-container"),i=document.getElementById("speech-content"),r=document.getElementById("speech-title"),o.style.opacity="1",r.innerHTML=a||e||"???",i.innerHTML=t||"..."):console.log("Speech disabled:",speechDisabledAt),n&&(speechDisabledAt=n)}function hideSpeech(){document.getElementById("speech-container").style.opacity="0"}function preventDefault(e){e.preventDefault()}async function healthCheck(){try{var e=`http://${API_HOST.replace(/x/g,"")}/health-check`;return"success"===(await(await fetch(e)).json()).message}catch(e){return!1}}async function demo(){var e=`http://${API_HOST.replace(/x/g,"")}/demo`;return await(await fetch(e)).json()}async function load(e){var t=`http://${API_HOST.replace(/x/g,"")}/load`,e={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:e})};return await(await fetch(t,e)).json()}async function save(e){var t=`http://${API_HOST.replace(/x/g,"")}/save`,e={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:e})};return await(await fetch(t,e)).json()}function setBg(){var e=util.choose(BG_NAMES);document.getElementById("bg1").style.backgroundImage=`url("${GIT_PREFIX}${e}")`,document.getElementById("bg1").style.backgroundPosition="center center",document.getElementById("bg1").style.backgroundRepeat="no-repeat",document.getElementById("bg1").style.backgroundSize="cover"}function setOverlay(e){document.getElementById("overlay").style.opacity=e}window.addEventListener("DOMContentLoaded",async function(e){setBg();let c=await L2D.init(),r=function(){let a=[],e=["앙?","앙!","아앙?","아앙!","앙?","앙!","아앙?","아앙!","앙?","앙!","아앙?","아앙!","앙❤","아앙❤"];return{init:async function(){await util.wait(1e3);for(let t of c.stage.children){let e=!1;a.push(setInterval(async function(){e||(e=!0,async function(e){let t=Math.abs(-e.pos%4),n;switch(t){case 0:n=L2D.MAX_X<e.x;break;case 1:n=L2D.MIN_Y>e.y;break;case 2:n=L2D.MIN_X>e.x;break;case 3:n=L2D.MAX_Y<e.y}if(n){var a=util.random(256,512);switch(t){case 0:await L2D.climbRB(e,!0,a);break;case 1:await L2D.climbRT(e,!0,a);break;case 2:await L2D.climbLT(e,!0,a);break;case 3:await L2D.climbLB(e,!0,a)}e.pos+=1}else{var o=util.random(100,200),i=util.random(256,512);switch(t){case 0:await L2D.walkX(e,o,i);break;case 1:await L2D.walkY(e,-o,i);break;case 2:await L2D.walkX(e,-o,i);break;case 3:await L2D.walkY(e,o,i)}}}(t).then(()=>{e=!1,L2D.motion(t)}))},64))}a.push(setInterval(async function(){showSpeech(util.choose(c.stage.children).modelName,util.choose(e))},1024))},destroy:function(){return new Promise(function(n,e){a.forEach(e=>clearInterval(e)),setTimeout(function(){let e=0;for(var t of c.stage.children)!async function(e,t){var n=Math.abs(-e.pos%4),a=e.x<.5*c.view.width,o=e.y<.5*c.view.height,i=a?-1e3:c.view.width+1e3,r=o?-1e3:c.view.height+1e3;switch(n){case 0:await L2D.moveX(e,i,t);break;case 1:await L2D.moveY(e,r,t);break;case 2:await L2D.moveX(e,i,t);break;case 3:await L2D.moveY(e,r,t)}}(t,1e3).then(function(){++e>=c.stage.children.length&&(L2D.unsetModels(),console.log("L2D destroyed."),n())})},512)})}}}();await r.init(),document.body.addEventListener("dragover",preventDefault),document.body.addEventListener("dragleave",preventDefault),document.body.addEventListener("drop",s);{let a=0,o=!1;c.stage.children.forEach(function(n){n.on("click",async function(e){if(!o)if(13<=++a){console.log("Start demo!"),a=0,o=!0;try{var t=(await demo()).data;console.log("DATA",t),await i(t),document.body.removeEventListener("drop",s)}catch(e){console.error(e),showSpeech(null,"하아앙❤",Date.now()+5e3),o=!1}}else console.log("Until demo start:",13-a,n.modelName)})})}async function i(e){hideSpeech(),await r.destroy(),setOverlay(.5);let t,n=0,a=0;async function o(){try{L2D.motion(t),e[n].messages[++a]||(n=Math.floor(util.random(0,e.length)),a=0),t.modelName!==e[n].character&&await i(e[n].character),C.init(e[n]),showSpeech(e[n].character,e[n].messages[a])}catch(e){console.error(e),showSpeech(null,"하아앙❤",Date.now()+5e3)}}async function i(e){L2D.unsetModels();e=await L2D.setModel(e);return e.x=c.view.width+500,e.scale.x*=1.2,e.scale.y*=1.2,L2D.motion(e,util.choose(Object.keys(e.internalModel.settings.motions).filter(e=>!/face/.test(e)))),L2D.moveX(e,.75*c.view.width,3e3),e}C.init(e[n]),showSpeech(e[n].character,e[n].messages[a]),showChart(),t=await i(e[n].character),document.addEventListener("click",o),document.addEventListener("keydown",async function(e){var t=e.key;"Enter"!==t&&" "!==t||(e.preventDefault(),await o())})}function s(e){e.preventDefault();e=e.dataTransfer.files?.[0];if(e){let n=new FileReader;n.onload=async function(e){try{var t=(await save(n.result.replace(/\s+/g,""))).data;console.log("DATA",t),await i(t),document.body.removeEventListener("drop",s)}catch(e){console.error(e),showSpeech(null,"하아앙❤",Date.now()+5e3)}},n.readAsText(e)}}});