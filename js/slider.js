let _slider = document.querySelectorAll('.sliderlist');
        let sIdx;
        function slide(num){
            for(let idx=0; idx<_slider.length; idx++){             
                if(_slider[idx].classList.contains('active')){
                    sIdx = idx;
                }
                _slider[idx].classList.remove("active");
            }
            if(num<0){
                if(sIdx == 0){
                    sIdx = 3;
                }
                sIdx = sIdx - 1;
            }else{
                sIdx = (sIdx + num) % 3;
            }                
            _slider[sIdx].classList.add("active");
        }
        setInterval(function(){
            slide(1);
        },3000);