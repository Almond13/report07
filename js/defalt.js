let btn = document.querySelector('.btn-close');
        let popup = document.querySelector('.popup-modal');
        console.log(btn);
        console.log(popup);
        
        btn.addEventListener('click',function(){
            popup.style.display='none';
        })  