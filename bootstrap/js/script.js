(function(document){
  var div = document.querySelector('#bigBtn');
  var icon = document.getElementById('icon');
  var open = false;
  
  div.addEventListener('click', function(){
    if(open){
      icon.className = 'fa fa-plus-circle';  
    } else{
      icon.className = 'fa fa-plus-circle open';
    }
    
    open = !open;
  });
})(document);



(function(document){
  var div = document.querySelector('#bigBtn1');
  var icon = document.getElementById('icon1');
  var open = false;
  
  div.addEventListener('click', function(){
    if(open){
      icon.className = 'fa fa-plus-circle';  
    } else{
      icon.className = 'fa fa-plus-circle open';
    }
    
    open = !open;
  });
})(document);



(function(document){
  var div = document.querySelector('#bigBtn2');
  var icon = document.getElementById('icon2');
  var open = false;
  
  div.addEventListener('click', function(){
    if(open){
      icon.className = 'fa fa-plus-circle';  
    } else{
      icon.className = 'fa fa-plus-circle open';
    }
    
    open = !open;
  });
})(document);



(function(document){
  var div = document.querySelector('#bigBtn3');
  var icon = document.getElementById('icon3');
  var open = false;
  
  div.addEventListener('click', function(){
    if(open){
      icon.className = 'fa fa-plus-circle';  
    } else{
      icon.className = 'fa fa-plus-circle open';
    }
    
    open = !open;
  });
})(document);