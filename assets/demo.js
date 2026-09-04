(function(){
var STATE_SCHEMA=5,STATE_KEY='canteen-demo-rc4-11-state',THEME_KEY='canteen-theme',MEMORY_STATE=null,MEMORY_THEME='light';
var baseMenu=[
{id:1,cat:'Ăn sáng',name:'bánh mì xíu mại',desc:'Món làm sẵn buổi sáng',price:30000,stock:28,threshold:8,img:'meal.svg',prepMode:'READY_MADE',today:true,todayAvailable:true,active:true},
{id:2,cat:'Ăn sáng',name:'mì udon',desc:'Món làm sẵn buổi sáng',price:30000,stock:22,threshold:6,img:'noodles-egg.svg',prepMode:'READY_MADE',today:true,todayAvailable:true,active:true},
{id:3,cat:'Ăn sáng',name:'Hủ tiếu',desc:'Đặt mới làm',price:40000,stock:80,threshold:10,img:'noodles-beef.svg',prepMode:'MADE_TO_ORDER',today:true,todayAvailable:true,active:true},
{id:4,cat:'Ăn sáng',name:'Bò né',desc:'Đặt mới làm',price:45000,stock:80,threshold:10,img:'meal.svg',prepMode:'MADE_TO_ORDER',today:true,todayAvailable:true,active:true},
{id:5,cat:'Ăn sáng',name:'bún bò',desc:'Đặt mới làm',price:45000,stock:80,threshold:10,img:'noodles-beef.svg',prepMode:'MADE_TO_ORDER',today:true,todayAvailable:true,active:true},
{id:6,cat:'Ăn sáng',name:'phở bò và gà',desc:'Đặt mới làm',price:45000,stock:80,threshold:10,img:'noodles-beef.svg',prepMode:'MADE_TO_ORDER',today:false,todayAvailable:true,active:true},
{id:7,cat:'Ăn sáng',name:'bò kho',desc:'Đặt mới làm',price:45000,stock:80,threshold:10,img:'meal.svg',prepMode:'MADE_TO_ORDER',today:false,todayAvailable:true,active:true},
{id:8,cat:'Nước',name:'Cafe đá',desc:'Pha khi khách đặt',price:23000,stock:80,threshold:10,img:'water.svg',prepMode:'MADE_TO_ORDER',today:true,todayAvailable:true,active:true},
{id:9,cat:'Nước',name:'Café sữa',desc:'Pha khi khách đặt',price:25000,stock:80,threshold:10,img:'water.svg',prepMode:'MADE_TO_ORDER',today:true,todayAvailable:true,active:true},
{id:10,cat:'Nước',name:'TRÀ ĐÀO',desc:'Pha khi khách đặt',price:20000,stock:80,threshold:10,img:'kumquat-tea.svg',prepMode:'MADE_TO_ORDER',today:true,todayAvailable:true,active:true},
{id:11,cat:'Nước',name:'TRÀ CHANH / TRÀ TẮC XÍ MUỘI',desc:'Pha khi khách đặt',price:20000,stock:80,threshold:10,img:'kumquat-tea.svg',prepMode:'MADE_TO_ORDER',today:false,todayAvailable:true,active:true},
{id:12,cat:'Nước',name:'NƯỚC CAM ÉP',desc:'Làm khi khách đặt',price:20000,stock:80,threshold:10,img:'water.svg',prepMode:'MADE_TO_ORDER',today:false,todayAvailable:true,active:true},
{id:13,cat:'Cơm trưa',name:'cá diêu hồng chiên với xoài bào',desc:'Nấu theo mẻ buổi trưa',price:40000,stock:40,threshold:8,img:'meal.svg',prepMode:'READY_MADE',today:true,todayAvailable:true,active:true},
{id:14,cat:'Cơm trưa',name:'Đùi gà chiên nước mắm',desc:'Nấu theo mẻ buổi trưa',price:40000,stock:40,threshold:8,img:'chicken-rice.svg',prepMode:'READY_MADE',today:true,todayAvailable:true,active:true},
{id:15,cat:'Cơm trưa',name:'bún thịt nướng với chả giò',desc:'Nấu theo mẻ buổi trưa',price:40000,stock:40,threshold:8,img:'meal.svg',prepMode:'READY_MADE',today:false,todayAvailable:true,active:true},
{id:16,cat:'Ăn sáng',name:'bánh ướt và bánh cuốn',desc:'Món làm sẵn buổi sáng',price:35000,stock:25,threshold:6,img:'meal.svg',prepMode:'READY_MADE',today:false,todayAvailable:true,active:true}
];
function orderItem(menuId,qty,wf){var m=baseMenu.find(function(x){return x.id===menuId});return{id:m.id,name:m.name,qty:qty,price:m.price,prepMode:m.prepMode,workflowStatus:wf||(m.prepMode==='MADE_TO_ORDER'?'WAITING':'NOT_REQUIRED')}}
function seed(){var now=Date.now();return{schemaVersion:STATE_SCHEMA,next:186,nextMenu:16,nextStaff:4,ordering:true,categories:['Ăn sáng','Cơm trưa','Nước','Ăn vặt'],menu:JSON.parse(JSON.stringify(baseMenu)),staff:[
{id:1,name:'Chủ canteen',email:'owner@canteenabc.vn',role:'OWNER',status:'ACTIVE'},
{id:2,name:'Vận hành 01',email:'ops01@canteenabc.vn',role:'OPS',status:'ACTIVE'},
{id:3,name:'Nhân viên làm món',email:'bep01@canteenabc.vn',role:'KITCHEN',status:'ACTIVE'},
{id:4,name:'Nhân viên giao món',email:'quay01@canteenabc.vn',role:'COUNTER',status:'ACTIVE'}
],orders:[
{id:184,code:'A184',status:'NEW',created:now-80e3,statusAt:now-80e3,pickup:'Quầy chính',note:'Không hành',items:[orderItem(4,2,'WAITING'),orderItem(10,1,'WAITING'),orderItem(1,1,'NOT_REQUIRED')]},
{id:183,code:'A183',status:'NEW',created:now-65e3,statusAt:now-65e3,pickup:'Quầy chính',note:'Ít hành',items:[orderItem(3,2,'WAITING'),orderItem(9,1,'WAITING')]},
{id:179,code:'A179',status:'PREPARING',created:now-300e3,statusAt:now-240e3,pickup:'Quầy chính',note:'',items:[orderItem(5,2,'PREPARING'),orderItem(8,2,'PREPARING')]},
{id:178,code:'A178',status:'PREPARING',created:now-260e3,statusAt:now-200e3,pickup:'Quầy chính',note:'Ít cay',items:[orderItem(4,1,'PREPARING'),orderItem(10,3,'PREPARING')]},
{id:173,code:'A173',status:'READY',created:now-500e3,statusAt:now-150e3,pickup:'Quầy chính',note:'',items:[orderItem(3,1,'READY'),orderItem(1,1,'NOT_REQUIRED')]},
{id:172,code:'A172',status:'READY',created:now-460e3,statusAt:now-120e3,pickup:'Quầy chính',note:'',items:[orderItem(10,2,'READY'),orderItem(2,1,'NOT_REQUIRED')]}
],audit:[{at:now-60e3,text:'A173 đã chuyển sang Chờ giao'},{at:now-420e3,text:'Quản lý cập nhật Món hôm nay'}]}}
function clone(v){return JSON.parse(JSON.stringify(v))}
function normalize(s){
 if(!s||s.schemaVersion!==STATE_SCHEMA||!Array.isArray(s.menu)||!s.menu.length||!Array.isArray(s.orders)||!Array.isArray(s.staff))return seed();
 if(!Array.isArray(s.categories)||!s.categories.length)s.categories=Array.from(new Set(s.menu.map(function(m){return m.cat}).filter(Boolean)));
 s.menu.forEach(function(m){if(!m.prepMode)m.prepMode='READY_MADE';if(typeof m.today!=='boolean')m.today=false;if(typeof m.todayAvailable!=='boolean')m.todayAvailable=true;if(typeof m.active!=='boolean')m.active=true});
 s.orders.forEach(function(o){(o.items||[]).forEach(function(i){var m=s.menu.find(function(x){return x.id===i.id});if(!i.prepMode)i.prepMode=m&&m.prepMode||'READY_MADE';if(!i.workflowStatus)i.workflowStatus=i.prepMode==='MADE_TO_ORDER'?(o.status==='READY'?'READY':o.status==='PREPARING'?'PREPARING':'WAITING'):'NOT_REQUIRED'})});
 return s;
}
function state(){var s=null;try{s=JSON.parse(localStorage.getItem(STATE_KEY)||'null')}catch(e){}if(!s&&MEMORY_STATE)s=clone(MEMORY_STATE);s=normalize(s);save(s,false);return s}
function save(s,emit){MEMORY_STATE=clone(normalize(s));try{localStorage.setItem(STATE_KEY,JSON.stringify(MEMORY_STATE))}catch(e){}if(emit!==false)window.dispatchEvent(new Event('canteen-demo-update'))}
function reset(){save(seed());location.reload()}
function money(n){return String(Math.round(Number(n)||0)).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+'đ'}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function audit(s,text){s.audit=s.audit||[];s.audit.unshift({at:Date.now(),text:text});s.audit=s.audit.slice(0,30)}
function imageSrc(m){return m.imageData||('assets/menu-defaults/'+(m.img||'meal.svg'))}
function productionItems(o){return(o.items||[]).filter(function(i){return i.prepMode==='MADE_TO_ORDER'})}
function syncOrderStatus(o){var p=productionItems(o);if(!p.length){if(o.status!=='SERVED')o.status='READY';return}if(p.every(function(i){return i.workflowStatus==='READY'||i.workflowStatus==='SERVED'})){if(o.status!=='SERVED')o.status='READY';return}if(p.some(function(i){return i.workflowStatus==='PREPARING'||i.workflowStatus==='READY'}))o.status='PREPARING';else o.status='NEW'}
function summary(s){var map={};(s.orders||[]).filter(function(o){return ['NEW','PREPARING'].indexOf(o.status)>=0}).forEach(function(o){productionItems(o).forEach(function(i){if(['WAITING','PREPARING'].indexOf(i.workflowStatus)<0)return;var k=i.id||i.name;if(!map[k])map[k]={name:i.name,new:0,accepted:0,needToMake:0};if(i.workflowStatus==='WAITING')map[k].new+=i.qty;else map[k].accepted+=i.qty;map[k].needToMake+=i.qty})});return Object.keys(map).map(function(k){return map[k]}).sort(function(a,b){return b.needToMake-a.needToMake})}
function applyTheme(){var t=MEMORY_THEME;try{var stored=localStorage.getItem(THEME_KEY);if(stored==='dark'||stored==='light')t=stored}catch(e){}MEMORY_THEME=t;document.documentElement.setAttribute('data-theme',t);document.querySelectorAll('[data-theme-toggle]').forEach(function(b){b.textContent=t==='dark'?'☀ Sáng':'☾ Tối';b.setAttribute('aria-pressed',t==='dark'?'true':'false')})}
function toggleTheme(){var t=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';MEMORY_THEME=t;try{localStorage.setItem(THEME_KEY,t)}catch(e){}applyTheme()}
window.CanteenDemo={state:state,save:save,reset:reset,money:money,esc:esc,audit:audit,seed:seed,toggleTheme:toggleTheme,imageSrc:imageSrc,productionItems:productionItems,syncOrderStatus:syncOrderStatus,summary:summary};
document.addEventListener('click',function(e){var t=e.target.closest('[data-theme-toggle]');if(t){toggleTheme();return}var r=e.target.closest('[data-reset-demo]');if(r&&confirm('Khôi phục dữ liệu ban đầu?'))reset()});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyTheme);else applyTheme();
})();
