let btn = document.querySelector('.btn-close');
let popup = document.querySelector('.popup-modal');       
    btn.addEventListener('click',function(){
    popup.style.display='none';
    })

let popupLink = document.querySelectorAll('.popup-link');
let popupLinkID;
for(var i = 0; i < popupLink.length; i++){
    popupLink[i].addEventListener('click', function(){
      popupLinkID = this.getAttribute('href');
      document.querySelector(popupLinkID).style.display = 'block';
    });
  }
        