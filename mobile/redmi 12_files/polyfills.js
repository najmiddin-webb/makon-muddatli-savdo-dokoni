
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5baf1b87-740f-5a6e-9531-388fcdba9cc8")}catch(e){}}();
(function(e){let n=e.performance;function s(j){n&&n.mark&&n.mark(j)}function r(j,d){n&&n.measure&&n.measure(j,d)}s("Zone");let i=e.__Zone_symbol_prefix||"__zone_symbol__";function l(j){return i+j}let m=e[l("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(m||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone}let E=(()=>{let d=class d{static assertZonePatched(){if(e.Promise!==se.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=d.current;for(;t.parent;)t=t.parent;return t}static get current(){return W.zone}static get currentTask(){return re}static __load_patch(t,_,P=!1){if(se.hasOwnProperty(t)){if(!P&&m)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){let L="Zone:"+t;s(L),se[t]=_(e,d,Y),r(L,L)}}get parent(){return this._parent}get name(){return this._name}constructor(t,_){this._parent=t,this._name=_?_.name||"unnamed":"<root>",this._properties=_&&_.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,_)}get(t){let _=this.getZoneWith(t);if(_)return _._properties[t]}getZoneWith(t){let _=this;for(;_;){if(_._properties.hasOwnProperty(t))return _;_=_._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,_){if(typeof t!="function")throw new Error("Expecting function got: "+t);let P=this._zoneDelegate.intercept(this,t,_),L=this;return function(){return L.runGuarded(P,this,arguments,_)}}run(t,_,P,L){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,t,_,P,L)}finally{W=W.parent}}runGuarded(t,_=null,P,L){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,t,_,P,L)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{W=W.parent}}runTask(t,_,P){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===G&&(t.type===Q||t.type===w))return;let L=t.state!=y;L&&t._transitionTo(y,A),t.runCount++;let a=re;re=t,W={parent:W,zone:this};try{t.type==w&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,_,P)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{t.state!==G&&t.state!==h&&(t.type==Q||t.data&&t.data.isPeriodic?L&&t._transitionTo(A,y):(t.runCount=0,this._updateTaskCount(t,-1),L&&t._transitionTo(G,y,G))),W=W.parent,re=a}}scheduleTask(t){if(t.zone&&t.zone!==this){let P=this;for(;P;){if(P===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);P=P.parent}}t._transitionTo(z,G);let _=[];t._zoneDelegates=_,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(P){throw t._transitionTo(h,z,G),this._zoneDelegate.handleError(this,P),P}return t._zoneDelegates===_&&this._updateTaskCount(t,1),t.state==z&&t._transitionTo(A,z),t}scheduleMicroTask(t,_,P,L){return this.scheduleTask(new p(I,t,_,P,L,void 0))}scheduleMacroTask(t,_,P,L,a){return this.scheduleTask(new p(w,t,_,P,L,a))}scheduleEventTask(t,_,P,L,a){return this.scheduleTask(new p(Q,t,_,P,L,a))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(!(t.state!==A&&t.state!==y)){t._transitionTo(V,A,y);try{this._zoneDelegate.cancelTask(this,t)}catch(_){throw t._transitionTo(h,V),this._zoneDelegate.handleError(this,_),_}return this._updateTaskCount(t,-1),t._transitionTo(G,V),t.runCount=0,t}}_updateTaskCount(t,_){let P=t._zoneDelegates;_==-1&&(t._zoneDelegates=null);for(let L=0;L<P.length;L++)P[L]._updateTaskCount(t.type,_)}};d.__symbol__=l;let j=d;return j})(),b={name:"",onHasTask:(j,d,c,t)=>j.hasTask(c,t),onScheduleTask:(j,d,c,t)=>j.scheduleTask(c,t),onInvokeTask:(j,d,c,t,_,P)=>j.invokeTask(c,t,_,P),onCancelTask:(j,d,c,t)=>j.cancelTask(c,t)};class v{constructor(d,c,t){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=d,this._parentDelegate=c,this._forkZS=t&&(t&&t.onFork?t:c._forkZS),this._forkDlgt=t&&(t.onFork?c:c._forkDlgt),this._forkCurrZone=t&&(t.onFork?this.zone:c._forkCurrZone),this._interceptZS=t&&(t.onIntercept?t:c._interceptZS),this._interceptDlgt=t&&(t.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=t&&(t.onIntercept?this.zone:c._interceptCurrZone),this._invokeZS=t&&(t.onInvoke?t:c._invokeZS),this._invokeDlgt=t&&(t.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=t&&(t.onInvoke?this.zone:c._invokeCurrZone),this._handleErrorZS=t&&(t.onHandleError?t:c._handleErrorZS),this._handleErrorDlgt=t&&(t.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=t&&(t.onHandleError?this.zone:c._handleErrorCurrZone),this._scheduleTaskZS=t&&(t.onScheduleTask?t:c._scheduleTaskZS),this._scheduleTaskDlgt=t&&(t.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=t&&(t.onScheduleTask?this.zone:c._scheduleTaskCurrZone),this._invokeTaskZS=t&&(t.onInvokeTask?t:c._invokeTaskZS),this._invokeTaskDlgt=t&&(t.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=t&&(t.onInvokeTask?this.zone:c._invokeTaskCurrZone),this._cancelTaskZS=t&&(t.onCancelTask?t:c._cancelTaskZS),this._cancelTaskDlgt=t&&(t.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=t&&(t.onCancelTask?this.zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let _=t&&t.onHasTask,P=c&&c._hasTaskZS;(_||P)&&(this._hasTaskZS=_?t:b,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=d,t.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this.zone),t.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this.zone),t.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this.zone))}fork(d,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,c):new E(d,c)}intercept(d,c,t){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,c,t):c}invoke(d,c,t,_,P){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,c,t,_,P):c.apply(t,_)}handleError(d,c){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,c):!0}scheduleTask(d,c){let t=c;if(this._scheduleTaskZS)this._hasTaskZS&&t._zoneDelegates.push(this._hasTaskDlgtOwner),t=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,c),t||(t=c);else if(c.scheduleFn)c.scheduleFn(c);else if(c.type==I)C(c);else throw new Error("Task is missing scheduleFn.");return t}invokeTask(d,c,t,_){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,c,t,_):c.callback.apply(t,_)}cancelTask(d,c){let t;if(this._cancelTaskZS)t=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");t=c.cancelFn(c)}return t}hasTask(d,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,c)}catch(t){this.handleError(d,t)}}_updateTaskCount(d,c){let t=this._taskCounts,_=t[d],P=t[d]=_+c;if(P<0)throw new Error("More tasks executed then were scheduled.");if(_==0||P==0){let L={microTask:t.microTask>0,macroTask:t.macroTask>0,eventTask:t.eventTask>0,change:d};this.hasTask(this.zone,L)}}}class p{constructor(d,c,t,_,P,L){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=c,this.data=_,this.scheduleFn=P,this.cancelFn=L,!t)throw new Error("callback is not defined");this.callback=t;let a=this;d===Q&&_&&_.useG?this.invoke=p.invokeTask:this.invoke=function(){return p.invokeTask.call(e,a,this,arguments)}}static invokeTask(d,c,t){d||(d=this),te++;try{return d.runCount++,d.zone.runTask(d,c,t)}finally{te==1&&T(),te--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,z)}_transitionTo(d,c,t){if(this._state===c||this._state===t)this._state=d,d==G&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${c}'${t?" or '"+t+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let M=l("setTimeout"),O=l("Promise"),N=l("then"),U=[],H=!1,K;function X(j){if(K||e[O]&&(K=e[O].resolve(0)),K){let d=K[N];d||(d=K.then),d.call(K,j)}else e[M](j,0)}function C(j){te===0&&U.length===0&&X(T),j&&U.push(j)}function T(){if(!H){for(H=!0;U.length;){let j=U;U=[];for(let d=0;d<j.length;d++){let c=j[d];try{c.zone.runTask(c,null,null)}catch(t){Y.onUnhandledError(t)}}}Y.microtaskDrainDone(),H=!1}}let J={name:"NO ZONE"},G="notScheduled",z="scheduling",A="scheduled",y="running",V="canceling",h="unknown",I="microTask",w="macroTask",Q="eventTask",se={},Y={symbol:l,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:C,showUncaughtError:()=>!E[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:X},W={parent:null,zone:new E(null,null)},re=null,te=0;function q(){}return r("Zone","Zone"),e.Zone=E})(globalThis);var pe=Object.getOwnPropertyDescriptor,Ie=Object.defineProperty,Me=Object.getPrototypeOf,ct=Object.create,at=Array.prototype.slice,Le="addEventListener",je="removeEventListener",De=Zone.__symbol__(Le),Ze=Zone.__symbol__(je),ce="true",ae="false",ge=Zone.__symbol__("");function Ae(e,n){return Zone.current.wrap(e,n)}function He(e,n,s,r,i){return Zone.current.scheduleMacroTask(e,n,s,r,i)}var x=Zone.__symbol__,Pe=typeof window<"u",Te=Pe?window:void 0,$=Pe&&Te||globalThis,lt="removeAttribute";function xe(e,n){for(let s=e.length-1;s>=0;s--)typeof e[s]=="function"&&(e[s]=Ae(e[s],n+"_"+s));return e}function ut(e,n){let s=e.constructor.name;for(let r=0;r<n.length;r++){let i=n[r],l=e[i];if(l){let m=pe(e,i);if(!$e(m))continue;e[i]=(E=>{let b=function(){return E.apply(this,xe(arguments,s+"."+i))};return le(b,E),b})(l)}}}function $e(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var Je=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Re=!("nw"in $)&&typeof $.process<"u"&&{}.toString.call($.process)==="[object process]",Ge=!Re&&!Je&&!!(Pe&&Te.HTMLElement),Ke=typeof $.process<"u"&&{}.toString.call($.process)==="[object process]"&&!Je&&!!(Pe&&Te.HTMLElement),we={},qe=function(e){if(e=e||$.event,!e)return;let n=we[e.type];n||(n=we[e.type]=x("ON_PROPERTY"+e.type));let s=this||e.target||$,r=s[n],i;if(Ge&&s===Te&&e.type==="error"){let l=e;i=r&&r.call(this,l.message,l.filename,l.lineno,l.colno,l.error),i===!0&&e.preventDefault()}else i=r&&r.apply(this,arguments),i!=null&&!i&&e.preventDefault();return i};function Xe(e,n,s){let r=pe(e,n);if(!r&&s&&pe(s,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;let i=x("on"+n+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete r.writable,delete r.value;let l=r.get,m=r.set,E=n.slice(2),b=we[E];b||(b=we[E]=x("ON_PROPERTY"+E)),r.set=function(v){let p=this;if(!p&&e===$&&(p=$),!p)return;typeof p[b]=="function"&&p.removeEventListener(E,qe),m&&m.call(p,null),p[b]=v,typeof v=="function"&&p.addEventListener(E,qe,!1)},r.get=function(){let v=this;if(!v&&e===$&&(v=$),!v)return null;let p=v[b];if(p)return p;if(l){let M=l.call(this);if(M)return r.set.call(this,M),typeof v[lt]=="function"&&v.removeAttribute(n),M}return null},Ie(e,n,r),e[i]=!0}function Qe(e,n,s){if(n)for(let r=0;r<n.length;r++)Xe(e,"on"+n[r],s);else{let r=[];for(let i in e)i.slice(0,2)=="on"&&r.push(i);for(let i=0;i<r.length;i++)Xe(e,r[i],s)}}var oe=x("originalInstance");function ke(e){let n=$[e];if(!n)return;$[x(e)]=n,$[e]=function(){let i=xe(arguments,e);switch(i.length){case 0:this[oe]=new n;break;case 1:this[oe]=new n(i[0]);break;case 2:this[oe]=new n(i[0],i[1]);break;case 3:this[oe]=new n(i[0],i[1],i[2]);break;case 4:this[oe]=new n(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},le($[e],n);let s=new n(function(){}),r;for(r in s)e==="XMLHttpRequest"&&r==="responseBlob"||function(i){typeof s[i]=="function"?$[e].prototype[i]=function(){return this[oe][i].apply(this[oe],arguments)}:Ie($[e].prototype,i,{set:function(l){typeof l=="function"?(this[oe][i]=Ae(l,e+"."+i),le(this[oe][i],l)):this[oe][i]=l},get:function(){return this[oe][i]}})}(r);for(r in n)r!=="prototype"&&n.hasOwnProperty(r)&&($[e][r]=n[r])}function ue(e,n,s){let r=e;for(;r&&!r.hasOwnProperty(n);)r=Me(r);!r&&e[n]&&(r=e);let i=x(n),l=null;if(r&&(!(l=r[i])||!r.hasOwnProperty(i))){l=r[i]=r[n];let m=r&&pe(r,n);if($e(m)){let E=s(l,i,n);r[n]=function(){return E(this,arguments)},le(r[n],l)}}return l}function ft(e,n,s){let r=null;function i(l){let m=l.data;return m.args[m.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(m.target,m.args),l}r=ue(e,n,l=>function(m,E){let b=s(m,E);return b.cbIdx>=0&&typeof E[b.cbIdx]=="function"?He(b.name,E[b.cbIdx],b,i):l.apply(m,E)})}function le(e,n){e[x("OriginalDelegate")]=n}var ze=!1,Oe=!1;function ht(){try{let e=Te.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function dt(){if(ze)return Oe;ze=!0;try{let e=Te.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Oe=!0)}catch{}return Oe}Zone.__load_patch("ZoneAwarePromise",(e,n,s)=>{let r=Object.getOwnPropertyDescriptor,i=Object.defineProperty;function l(a){if(a&&a.toString===Object.prototype.toString){let u=a.constructor&&a.constructor.name;return(u||"")+": "+JSON.stringify(a)}return a?a.toString():Object.prototype.toString.call(a)}let m=s.symbol,E=[],b=e[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,v=m("Promise"),p=m("then"),M="__creationTrace__";s.onUnhandledError=a=>{if(s.showUncaughtError()){let u=a&&a.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",a.zone.name,"; Task:",a.task&&a.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(a)}},s.microtaskDrainDone=()=>{for(;E.length;){let a=E.shift();try{a.zone.runGuarded(()=>{throw a.throwOriginal?a.rejection:a})}catch(u){N(u)}}};let O=m("unhandledPromiseRejectionHandler");function N(a){s.onUnhandledError(a);try{let u=n[O];typeof u=="function"&&u.call(this,a)}catch{}}function U(a){return a&&a.then}function H(a){return a}function K(a){return c.reject(a)}let X=m("state"),C=m("value"),T=m("finally"),J=m("parentPromiseValue"),G=m("parentPromiseState"),z="Promise.then",A=null,y=!0,V=!1,h=0;function I(a,u){return o=>{try{Y(a,u,o)}catch(f){Y(a,!1,f)}}}let w=function(){let a=!1;return function(o){return function(){a||(a=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",se=m("currentTaskTrace");function Y(a,u,o){let f=w();if(a===o)throw new TypeError(Q);if(a[X]===A){let k=null;try{(typeof o=="object"||typeof o=="function")&&(k=o&&o.then)}catch(R){return f(()=>{Y(a,!1,R)})(),a}if(u!==V&&o instanceof c&&o.hasOwnProperty(X)&&o.hasOwnProperty(C)&&o[X]!==A)re(o),Y(a,o[X],o[C]);else if(u!==V&&typeof k=="function")try{k.call(o,f(I(a,u)),f(I(a,!1)))}catch(R){f(()=>{Y(a,!1,R)})()}else{a[X]=u;let R=a[C];if(a[C]=o,a[T]===T&&u===y&&(a[X]=a[G],a[C]=a[J]),u===V&&o instanceof Error){let g=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];g&&i(o,se,{configurable:!0,enumerable:!1,writable:!0,value:g})}for(let g=0;g<R.length;)te(a,R[g++],R[g++],R[g++],R[g++]);if(R.length==0&&u==V){a[X]=h;let g=o;try{throw new Error("Uncaught (in promise): "+l(o)+(o&&o.stack?`
`+o.stack:""))}catch(S){g=S}b&&(g.throwOriginal=!0),g.rejection=o,g.promise=a,g.zone=n.current,g.task=n.currentTask,E.push(g),s.scheduleMicroTask()}}}return a}let W=m("rejectionHandledHandler");function re(a){if(a[X]===h){try{let u=n[W];u&&typeof u=="function"&&u.call(this,{rejection:a[C],promise:a})}catch{}a[X]=V;for(let u=0;u<E.length;u++)a===E[u].promise&&E.splice(u,1)}}function te(a,u,o,f,k){re(a);let R=a[X],g=R?typeof f=="function"?f:H:typeof k=="function"?k:K;u.scheduleMicroTask(z,()=>{try{let S=a[C],D=!!o&&T===o[T];D&&(o[J]=S,o[G]=R);let Z=u.run(g,void 0,D&&g!==K&&g!==H?[]:[S]);Y(o,!0,Z)}catch(S){Y(o,!1,S)}},o)}let q="function ZoneAwarePromise() { [native code] }",j=function(){},d=e.AggregateError;class c{static toString(){return q}static resolve(u){return u instanceof c?u:Y(new this(null),y,u)}static reject(u){return Y(new this(null),V,u)}static withResolvers(){let u={};return u.promise=new c((o,f)=>{u.resolve=o,u.reject=f}),u}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new d([],"All promises were rejected"));let o=[],f=0;try{for(let g of u)f++,o.push(c.resolve(g))}catch{return Promise.reject(new d([],"All promises were rejected"))}if(f===0)return Promise.reject(new d([],"All promises were rejected"));let k=!1,R=[];return new c((g,S)=>{for(let D=0;D<o.length;D++)o[D].then(Z=>{k||(k=!0,g(Z))},Z=>{R.push(Z),f--,f===0&&(k=!0,S(new d(R,"All promises were rejected")))})})}static race(u){let o,f,k=new this((S,D)=>{o=S,f=D});function R(S){o(S)}function g(S){f(S)}for(let S of u)U(S)||(S=this.resolve(S)),S.then(R,g);return k}static all(u){return c.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof c?this:c).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,o){let f,k,R=new this((Z,F)=>{f=Z,k=F}),g=2,S=0,D=[];for(let Z of u){U(Z)||(Z=this.resolve(Z));let F=S;try{Z.then(B=>{D[F]=o?o.thenCallback(B):B,g--,g===0&&f(D)},B=>{o?(D[F]=o.errorCallback(B),g--,g===0&&f(D)):k(B)})}catch(B){k(B)}g++,S++}return g-=2,g===0&&f(D),R}constructor(u){let o=this;if(!(o instanceof c))throw new Error("Must be an instanceof Promise.");o[X]=A,o[C]=[];try{let f=w();u&&u(f(I(o,y)),f(I(o,V)))}catch(f){Y(o,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return c}then(u,o){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||c);let k=new f(j),R=n.current;return this[X]==A?this[C].push(R,k,u,o):te(this,R,k,u,o),k}catch(u){return this.then(null,u)}finally(u){let o=this.constructor?.[Symbol.species];(!o||typeof o!="function")&&(o=c);let f=new o(j);f[T]=T;let k=n.current;return this[X]==A?this[C].push(k,f,u,u):te(this,k,f,u,u),f}}c.resolve=c.resolve,c.reject=c.reject,c.race=c.race,c.all=c.all;let t=e[v]=e.Promise;e.Promise=c;let _=m("thenPatched");function P(a){let u=a.prototype,o=r(u,"then");if(o&&(o.writable===!1||!o.configurable))return;let f=u.then;u[p]=f,a.prototype.then=function(k,R){return new c((S,D)=>{f.call(this,S,D)}).then(k,R)},a[_]=!0}s.patchThen=P;function L(a){return function(u,o){let f=a.apply(u,o);if(f instanceof c)return f;let k=f.constructor;return k[_]||P(k),f}}return t&&(P(t),ue(e,"fetch",a=>L(a))),Promise[n.__symbol__("uncaughtPromiseErrors")]=E,c});Zone.__load_patch("toString",e=>{let n=Function.prototype.toString,s=x("OriginalDelegate"),r=x("Promise"),i=x("Error"),l=function(){if(typeof this=="function"){let v=this[s];if(v)return typeof v=="function"?n.call(v):Object.prototype.toString.call(v);if(this===Promise){let p=e[r];if(p)return n.call(p)}if(this===Error){let p=e[i];if(p)return n.call(p)}}return n.call(this)};l[s]=n,Function.prototype.toString=l;let m=Object.prototype.toString,E="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?E:m.call(this)}});var _e=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{_e=!1}var _t={useG:!0},ne={},et={},tt=new RegExp("^"+ge+"(\\w+)(true|false)$"),nt=x("propagationStopped");function rt(e,n){let s=(n?n(e):e)+ae,r=(n?n(e):e)+ce,i=ge+s,l=ge+r;ne[e]={},ne[e][ae]=i,ne[e][ce]=l}function Et(e,n,s,r){let i=r&&r.add||Le,l=r&&r.rm||je,m=r&&r.listeners||"eventListeners",E=r&&r.rmAll||"removeAllListeners",b=x(i),v="."+i+":",p="prependListener",M="."+p+":",O=function(C,T,J){if(C.isRemoved)return;let G=C.callback;typeof G=="object"&&G.handleEvent&&(C.callback=y=>G.handleEvent(y),C.originalDelegate=G);let z;try{C.invoke(C,T,[J])}catch(y){z=y}let A=C.options;if(A&&typeof A=="object"&&A.once){let y=C.originalDelegate?C.originalDelegate:C.callback;T[l].call(T,J.type,y,A)}return z};function N(C,T,J){if(T=T||e.event,!T)return;let G=C||T.target||e,z=G[ne[T.type][J?ce:ae]];if(z){let A=[];if(z.length===1){let y=O(z[0],G,T);y&&A.push(y)}else{let y=z.slice();for(let V=0;V<y.length&&!(T&&T[nt]===!0);V++){let h=O(y[V],G,T);h&&A.push(h)}}if(A.length===1)throw A[0];for(let y=0;y<A.length;y++){let V=A[y];n.nativeScheduleMicroTask(()=>{throw V})}}}let U=function(C){return N(this,C,!1)},H=function(C){return N(this,C,!0)};function K(C,T){if(!C)return!1;let J=!0;T&&T.useG!==void 0&&(J=T.useG);let G=T&&T.vh,z=!0;T&&T.chkDup!==void 0&&(z=T.chkDup);let A=!1;T&&T.rt!==void 0&&(A=T.rt);let y=C;for(;y&&!y.hasOwnProperty(i);)y=Me(y);if(!y&&C[i]&&(y=C),!y||y[b])return!1;let V=T&&T.eventNameToString,h={},I=y[b]=y[i],w=y[x(l)]=y[l],Q=y[x(m)]=y[m],se=y[x(E)]=y[E],Y;T&&T.prepend&&(Y=y[x(T.prepend)]=y[T.prepend]);function W(o,f){return!_e&&typeof o=="object"&&o?!!o.capture:!_e||!f?o:typeof o=="boolean"?{capture:o,passive:!0}:o?typeof o=="object"&&o.passive!==!1?{...o,passive:!0}:o:{passive:!0}}let re=function(o){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?H:U,h.options)},te=function(o){if(!o.isRemoved){let f=ne[o.eventName],k;f&&(k=f[o.capture?ce:ae]);let R=k&&o.target[k];if(R){for(let g=0;g<R.length;g++)if(R[g]===o){R.splice(g,1),o.isRemoved=!0,R.length===0&&(o.allRemoved=!0,o.target[k]=null);break}}}if(o.allRemoved)return w.call(o.target,o.eventName,o.capture?H:U,o.options)},q=function(o){return I.call(h.target,h.eventName,o.invoke,h.options)},j=function(o){return Y.call(h.target,h.eventName,o.invoke,h.options)},d=function(o){return w.call(o.target,o.eventName,o.invoke,o.options)},c=J?re:q,t=J?te:d,_=function(o,f){let k=typeof f;return k==="function"&&o.callback===f||k==="object"&&o.originalDelegate===f},P=T&&T.diff?T.diff:_,L=Zone[x("UNPATCHED_EVENTS")],a=e[x("PASSIVE_EVENTS")],u=function(o,f,k,R,g=!1,S=!1){return function(){let D=this||e,Z=arguments[0];T&&T.transferEventName&&(Z=T.transferEventName(Z));let F=arguments[1];if(!F)return o.apply(this,arguments);if(Re&&Z==="uncaughtException")return o.apply(this,arguments);let B=!1;if(typeof F!="function"){if(!F.handleEvent)return o.apply(this,arguments);B=!0}if(G&&!G(o,F,D,arguments))return;let fe=_e&&!!a&&a.indexOf(Z)!==-1,ee=W(arguments[2],fe),ye=ee&&typeof ee=="object"&&ee.signal&&typeof ee.signal=="object"?ee.signal:void 0;if(ye?.aborted)return;if(L){for(let he=0;he<L.length;he++)if(Z===L[he])return fe?o.call(D,Z,F,ee):o.apply(this,arguments)}let Ce=ee?typeof ee=="boolean"?!0:ee.capture:!1,Ve=ee&&typeof ee=="object"?ee.once:!1,it=Zone.current,Se=ne[Z];Se||(rt(Z,V),Se=ne[Z]);let Fe=Se[Ce?ce:ae],de=D[Fe],Be=!1;if(de){if(Be=!0,z){for(let he=0;he<de.length;he++)if(P(de[he],F))return}}else de=D[Fe]=[];let ve,Ue=D.constructor.name,We=et[Ue];We&&(ve=We[Z]),ve||(ve=Ue+f+(V?V(Z):Z)),h.options=ee,Ve&&(h.options.once=!1),h.target=D,h.capture=Ce,h.eventName=Z,h.isExisting=Be;let me=J?_t:void 0;me&&(me.taskData=h),ye&&(h.options.signal=void 0);let ie=it.scheduleEventTask(ve,F,me,k,R);if(ye&&(h.options.signal=ye,o.call(ye,"abort",()=>{ie.zone.cancelTask(ie)},{once:!0})),h.target=null,me&&(me.taskData=null),Ve&&(ee.once=!0),!_e&&typeof ie.options=="boolean"||(ie.options=ee),ie.target=D,ie.capture=Ce,ie.eventName=Z,B&&(ie.originalDelegate=F),S?de.unshift(ie):de.push(ie),g)return D}};return y[i]=u(I,v,c,t,A),Y&&(y[p]=u(Y,M,j,t,A,!0)),y[l]=function(){let o=this||e,f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));let k=arguments[2],R=k?typeof k=="boolean"?!0:k.capture:!1,g=arguments[1];if(!g)return w.apply(this,arguments);if(G&&!G(w,g,o,arguments))return;let S=ne[f],D;S&&(D=S[R?ce:ae]);let Z=D&&o[D];if(Z)for(let F=0;F<Z.length;F++){let B=Z[F];if(P(B,g)){if(Z.splice(F,1),B.isRemoved=!0,Z.length===0&&(B.allRemoved=!0,o[D]=null,typeof f=="string")){let fe=ge+"ON_PROPERTY"+f;o[fe]=null}return B.zone.cancelTask(B),A?o:void 0}}return w.apply(this,arguments)},y[m]=function(){let o=this||e,f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));let k=[],R=ot(o,V?V(f):f);for(let g=0;g<R.length;g++){let S=R[g],D=S.originalDelegate?S.originalDelegate:S.callback;k.push(D)}return k},y[E]=function(){let o=this||e,f=arguments[0];if(f){T&&T.transferEventName&&(f=T.transferEventName(f));let k=ne[f];if(k){let R=k[ae],g=k[ce],S=o[R],D=o[g];if(S){let Z=S.slice();for(let F=0;F<Z.length;F++){let B=Z[F],fe=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,f,fe,B.options)}}if(D){let Z=D.slice();for(let F=0;F<Z.length;F++){let B=Z[F],fe=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,f,fe,B.options)}}}}else{let k=Object.keys(o);for(let R=0;R<k.length;R++){let g=k[R],S=tt.exec(g),D=S&&S[1];D&&D!=="removeListener"&&this[E].call(this,D)}this[E].call(this,"removeListener")}if(A)return this},le(y[i],I),le(y[l],w),se&&le(y[E],se),Q&&le(y[m],Q),!0}let X=[];for(let C=0;C<s.length;C++)X[C]=K(s[C],r);return X}function ot(e,n){if(!n){let l=[];for(let m in e){let E=tt.exec(m),b=E&&E[1];if(b&&(!n||b===n)){let v=e[m];if(v)for(let p=0;p<v.length;p++)l.push(v[p])}}return l}let s=ne[n];s||(rt(n),s=ne[n]);let r=e[s[ae]],i=e[s[ce]];return r?i?r.concat(i):r.slice():i?i.slice():[]}function Tt(e,n){let s=e.Event;s&&s.prototype&&n.patchMethod(s.prototype,"stopImmediatePropagation",r=>function(i,l){i[nt]=!0,r&&r.apply(i,l)})}function yt(e,n,s,r,i){let l=Zone.__symbol__(r);if(n[l])return;let m=n[l]=n[r];n[r]=function(E,b,v){return b&&b.prototype&&i.forEach(function(p){let M=`${s}.${r}::`+p,O=b.prototype;try{if(O.hasOwnProperty(p)){let N=e.ObjectGetOwnPropertyDescriptor(O,p);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,M),e._redefineProperty(b.prototype,p,N)):O[p]&&(O[p]=e.wrapWithCurrentZone(O[p],M))}else O[p]&&(O[p]=e.wrapWithCurrentZone(O[p],M))}catch{}}),m.call(n,E,b,v)},e.attachOriginToPatched(n[r],m)}function st(e,n,s){if(!s||s.length===0)return n;let r=s.filter(l=>l.target===e);if(!r||r.length===0)return n;let i=r[0].ignoreProperties;return n.filter(l=>i.indexOf(l)===-1)}function Ye(e,n,s,r){if(!e)return;let i=st(e,n,s);Qe(e,i,r)}function Ne(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function mt(e,n){if(Re&&!Ke||Zone[e.symbol("patchEvents")])return;let s=n.__Zone_ignore_on_properties,r=[];if(Ge){let i=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=ht()?[{target:i,ignoreProperties:["error"]}]:[];Ye(i,Ne(i),s&&s.concat(l),Me(i))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<r.length;i++){let l=n[r[i]];l&&l.prototype&&Ye(l.prototype,Ne(l.prototype),s)}}Zone.__load_patch("util",(e,n,s)=>{let r=Ne(e);s.patchOnProperties=Qe,s.patchMethod=ue,s.bindArguments=xe,s.patchMacroTask=ft;let i=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[i]=e[l]),e[i]&&(n[i]=n[l]=e[i]),s.patchEventPrototype=Tt,s.patchEventTarget=Et,s.isIEOrEdge=dt,s.ObjectDefineProperty=Ie,s.ObjectGetOwnPropertyDescriptor=pe,s.ObjectCreate=ct,s.ArraySlice=at,s.patchClass=ke,s.wrapWithCurrentZone=Ae,s.filterProperties=st,s.attachOriginToPatched=le,s._redefineProperty=Object.defineProperty,s.patchCallbacks=yt,s.getGlobalObjects=()=>({globalSources:et,zoneSymbolEventNames:ne,eventNames:r,isBrowser:Ge,isMix:Ke,isNode:Re,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ge,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:je})});function pt(e,n){n.patchMethod(e,"queueMicrotask",s=>function(r,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}var be=x("zoneTask");function Ee(e,n,s,r){let i=null,l=null;n+=r,s+=r;let m={};function E(v){let p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=i.apply(e,p.args),v}function b(v){return l.call(e,v.data.handleId)}i=ue(e,n,v=>function(p,M){if(typeof M[0]=="function"){let O={isPeriodic:r==="Interval",delay:r==="Timeout"||r==="Interval"?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{O.isPeriodic||(typeof O.handleId=="number"?delete m[O.handleId]:O.handleId&&(O.handleId[be]=null))}};let U=He(n,M[0],O,E,b);if(!U)return U;let H=U.data.handleId;return typeof H=="number"?m[H]=U:H&&(H[be]=U),H&&H.ref&&H.unref&&typeof H.ref=="function"&&typeof H.unref=="function"&&(U.ref=H.ref.bind(H),U.unref=H.unref.bind(H)),typeof H=="number"||H?H:U}else return v.apply(e,M)}),l=ue(e,s,v=>function(p,M){let O=M[0],N;typeof O=="number"?N=m[O]:(N=O&&O[be],N||(N=O)),N&&typeof N.type=="string"?N.state!=="notScheduled"&&(N.cancelFn&&N.data.isPeriodic||N.runCount===0)&&(typeof O=="number"?delete m[O]:O&&(O[be]=null),N.zone.cancelTask(N)):v.apply(e,M)})}function gt(e,n){let{isBrowser:s,isMix:r}=n.getGlobalObjects();if(!s&&!r||!e.customElements||!("customElements"in e))return;let i=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];n.patchCallbacks(n,e.customElements,"customElements","define",i)}function kt(e,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:s,zoneSymbolEventNames:r,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:m}=n.getGlobalObjects();for(let b=0;b<s.length;b++){let v=s[b],p=v+l,M=v+i,O=m+p,N=m+M;r[v]={},r[v][l]=O,r[v][i]=N}let E=e.EventTarget;if(!(!E||!E.prototype))return n.patchEventTarget(e,n,[E&&E.prototype]),!0}function vt(e,n){n.patchEventPrototype(e,n)}Zone.__load_patch("legacy",e=>{let n=e[Zone.__symbol__("legacyPatch")];n&&n()});Zone.__load_patch("timers",e=>{let n="set",s="clear";Ee(e,n,s,"Timeout"),Ee(e,n,s,"Interval"),Ee(e,n,s,"Immediate")});Zone.__load_patch("requestAnimationFrame",e=>{Ee(e,"request","cancel","AnimationFrame"),Ee(e,"mozRequest","mozCancel","AnimationFrame"),Ee(e,"webkitRequest","webkitCancel","AnimationFrame")});Zone.__load_patch("blocking",(e,n)=>{let s=["alert","prompt","confirm"];for(let r=0;r<s.length;r++){let i=s[r];ue(e,i,(l,m,E)=>function(b,v){return n.current.run(l,e,v,E)})}});Zone.__load_patch("EventTarget",(e,n,s)=>{vt(e,s),kt(e,s);let r=e.XMLHttpRequestEventTarget;r&&r.prototype&&s.patchEventTarget(e,s,[r.prototype])});Zone.__load_patch("MutationObserver",(e,n,s)=>{ke("MutationObserver"),ke("WebKitMutationObserver")});Zone.__load_patch("IntersectionObserver",(e,n,s)=>{ke("IntersectionObserver")});Zone.__load_patch("FileReader",(e,n,s)=>{ke("FileReader")});Zone.__load_patch("on_property",(e,n,s)=>{mt(s,e)});Zone.__load_patch("customElements",(e,n,s)=>{gt(e,s)});Zone.__load_patch("XHR",(e,n)=>{b(e);let s=x("xhrTask"),r=x("xhrSync"),i=x("xhrListener"),l=x("xhrScheduled"),m=x("xhrURL"),E=x("xhrErrorBeforeScheduled");function b(v){let p=v.XMLHttpRequest;if(!p)return;let M=p.prototype;function O(h){return h[s]}let N=M[De],U=M[Ze];if(!N){let h=v.XMLHttpRequestEventTarget;if(h){let I=h.prototype;N=I[De],U=I[Ze]}}let H="readystatechange",K="scheduled";function X(h){let I=h.data,w=I.target;w[l]=!1,w[E]=!1;let Q=w[i];N||(N=w[De],U=w[Ze]),Q&&U.call(w,H,Q);let se=w[i]=()=>{if(w.readyState===w.DONE)if(!I.aborted&&w[l]&&h.state===K){let W=w[n.__symbol__("loadfalse")];if(w.status!==0&&W&&W.length>0){let re=h.invoke;h.invoke=function(){let te=w[n.__symbol__("loadfalse")];for(let q=0;q<te.length;q++)te[q]===h&&te.splice(q,1);!I.aborted&&h.state===K&&re.call(h)},W.push(h)}else h.invoke()}else!I.aborted&&w[l]===!1&&(w[E]=!0)};return N.call(w,H,se),w[s]||(w[s]=h),y.apply(w,I.args),w[l]=!0,h}function C(){}function T(h){let I=h.data;return I.aborted=!0,V.apply(I.target,I.args)}let J=ue(M,"open",()=>function(h,I){return h[r]=I[2]==!1,h[m]=I[1],J.apply(h,I)}),G="XMLHttpRequest.send",z=x("fetchTaskAborting"),A=x("fetchTaskScheduling"),y=ue(M,"send",()=>function(h,I){if(n.current[A]===!0||h[r])return y.apply(h,I);{let w={target:h,url:h[m],isPeriodic:!1,args:I,aborted:!1},Q=He(G,C,w,X,T);h&&h[E]===!0&&!w.aborted&&Q.state===K&&Q.invoke()}}),V=ue(M,"abort",()=>function(h,I){let w=O(h);if(w&&typeof w.type=="string"){if(w.cancelFn==null||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(n.current[z]===!0)return V.apply(h,I)})}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&ut(e.navigator.geolocation,["getCurrentPosition","watchPosition"])});Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function s(r){return function(i){ot(e,r).forEach(m=>{let E=e.PromiseRejectionEvent;if(E){let b=new E(r,{promise:i.promise,reason:i.rejection});m.invoke(b)}})}}e.PromiseRejectionEvent&&(n[x("unhandledPromiseRejectionHandler")]=s("unhandledrejection"),n[x("rejectionHandledHandler")]=s("rejectionhandled"))});Zone.__load_patch("queueMicrotask",(e,n,s)=>{pt(e,s)});window.onpageshow=function(e){e.persisted&&window.location.reload()};window.process={env:{}};
/*! Bundled license information:

zone.js/fesm2015/zone.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/


//# debugId=5baf1b87-740f-5a6e-9531-388fcdba9cc8