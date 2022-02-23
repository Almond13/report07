let _subNav = document.querySelector('.sub-nav');
        let _mainNav = document.querySelector('.main-nav');
        let _subNavli = document.querySelectorAll('.sub-navli');
        
        _mainNav.onmouseenter = function(){
            for(let idx=0; idx<_subNavli.length; idx++){
                _subNavli[idx].style.display = 'block';
            }
        }
        _mainNav.onmouseleave = function(){
            for(let idx=0; idx<_subNavli.length; idx++){
                _subNavli[idx].style.display = 'none';
            }
        }
        _subNav.onmouseenter = function(){
            for(let idx=0; idx<_subNavli.length; idx++){
                _subNavli[idx].style.display = 'block';
            }
        }
        _subNav.onmouseleave = function(){
            for(let idx=0; idx<_subNavli.length; idx++){
                _subNavli[idx].style.display = 'none';
            }
        }
