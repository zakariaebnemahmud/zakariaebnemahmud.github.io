/* Click the round photo to preview a different picture (preview only).
   To change it permanently, replace images/profile.jpg */
var ph=document.getElementById('ph'),f=document.getElementById('file');
ph.addEventListener('click',function(){f.click()});
f.addEventListener('change',function(){
  var file=f.files&&f.files[0];if(!file)return;
  var r=new FileReader();
  r.onload=function(){ph.innerHTML='<img alt="Profile photo" src="'+r.result+'">'};
  r.readAsDataURL(file);
});
