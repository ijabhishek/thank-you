var pages=[].slice.call(document.querySelectorAll('.page')),cur=0;
var dots=document.getElementById('dots'),bk=document.getElementById('back'),nx=document.getElementById('next');
pages.forEach(function(){dots.appendChild(document.createElement('i'))});
function go(n){cur=Math.max(0,Math.min(pages.length-1,n));
  pages.forEach(function(p,i){p.classList.toggle('on',i===cur)});
  [].forEach.call(dots.children,function(d,i){d.classList.toggle('on',i===cur)});
  bk.style.visibility=cur?'visible':'hidden';
  nx.style.visibility=cur===pages.length-1?'hidden':'visible';
  nx.textContent=cur===0?'Let’s go →':'Next →';
  if(cur===pages.length-1)confetti()}
bk.onclick=function(){go(cur-1)};nx.onclick=function(){go(cur+1)};
var stages=[['🙂','Day one','I still remember our first conversation. I was unsure, and you listened.'],
['🔍','You saw something','You spotted strengths in me that I hadn’t seen yet.'],
['🚀','You gave me a push','With your trust and guidance, I did things I never thought I could.'],
['🌟','Today','I’m who I am today because of you. Thank you!']];
var sl=document.getElementById('sl'),st=document.getElementById('stage');
function show(){var s=stages[sl.value];st.innerHTML='<div class="big">'+s[0]+'</div><h2>'+s[1]+'</h2><p>'+s[2]+'</p>'}
sl.oninput=show;show();
[].forEach.call(document.querySelectorAll('.flip'),function(c){c.onclick=function(){c.classList.toggle('open')}});
function confetti(){var e=['🎉','😊','⭐','💛','🎈','😄','✨'];
  for(var i=0;i<28;i++){var s=document.createElement('span');s.className='conf';
  s.textContent=e[i%e.length];s.style.left=Math.random()*100+'vw';
  s.style.animationDuration=(2.5+Math.random()*2.5)+'s';s.style.animationDelay=Math.random()*1.2+'s';
  document.body.appendChild(s);setTimeout(function(x){x.remove()},7000,s)}}
document.getElementById('party').onclick=confetti;
var fl=document.getElementById('fl'),fe=['😊','⭐','💛','🌸','😄','✨'];
for(var i=0;i<14;i++){var s=document.createElement('span');s.textContent=fe[i%fe.length];
  s.style.left=(i*7.3)%100+'vw';s.style.animationDuration=(12+(i*3)%10)+'s';s.style.animationDelay=(-i*2)+'s';fl.appendChild(s)}
go(0);
