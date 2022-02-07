function checkVisible(elm, threshold, mode) {
    threshold = threshold || 300;
    mode = mode || 'visible';
  
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var above = rect.bottom - threshold < 0;
    var below = rect.top - viewHeight + threshold >= 0;
  
    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
  }

document.addEventListener('scroll', function(e) {
    if (checkVisible(document.getElementById('commands'))){
      var children = document.getElementById("nav").childNodes;
      
      children.forEach(function(item){
        try{
            item.classList.remove("active")
        }catch{

        }
        if (item.textContent === 'Commands'){
            item.classList.add("active")
        }
      });
    }

    if (checkVisible(document.getElementById('features'))){
        var children = document.getElementById("nav").childNodes;
        children.forEach(function(item){
            
          try{
            item.classList.remove("active")
        }catch{
            
        }
          if (item.textContent === 'Features'){
              item.classList.add("active")
          }
        });
      }

      if (checkVisible(document.getElementById('about'))){
        var children = document.getElementById("nav").childNodes;
        children.forEach(function(item){
            try{
                item.classList.remove("active")
            }catch{
                
            }
          if (item.textContent === 'About The Project'){
              item.classList.add("active")
          }
        });
      }


});