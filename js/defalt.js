let openPopup = document.querySelectorAll('.popup-link');
let openPopupID;

// 팝업 열기
for(var i = 0; i < openPopup.length; i++){
  openPopup[i].addEventListener('click', function(){
    openPopupID = this.getAttribute('href');
    document.querySelector(openPopupID).style.display = 'block';
  });
}

// 팝업 닫기
let modal00 = document.querySelector('#popup-modal00');
let modal01 = document.querySelector('#popup-modal01');
let modal02 = document.querySelector('#popup-modal02');
let modal03 = document.querySelector('#popup-modal03');
let modal04 = document.querySelector('#popup-modal04');
let modalGal00 = document.querySelector('#popup-modal-gal00');
let modalGal01 = document.querySelector('#popup-modal-gal01');
let modalGal02 = document.querySelector('#popup-modal-gal02');
let modalGal03 = document.querySelector('#popup-modal-gal03');
let btnClose00 = document.querySelector('#btn-close00');
let btnClose01 = document.querySelector('#btn-close01');
let btnClose02 = document.querySelector('#btn-close02');
let btnClose03 = document.querySelector('#btn-close03');
let btnClose04 = document.querySelector('#btn-close04');
let btnCloseGal00 = document.querySelector('#btn-close-gal00');
let btnCloseGal01 = document.querySelector('#btn-close-gal01');
let btnCloseGal02 = document.querySelector('#btn-close-gal02');
let btnCloseGal03 = document.querySelector('#btn-close-gal03');

btnClose00.addEventListener('click',function(){
  modal00.style.display='none';
})
btnClose01.addEventListener('click',function(){
  modal01.style.display='none';
})
btnClose02.addEventListener('click',function(){
  modal02.style.display='none';
})
btnClose03.addEventListener('click',function(){
  modal03.style.display='none';
})
btnClose04.addEventListener('click',function(){
  modal04.style.display='none';
})
btnCloseGal00.addEventListener('click',function(){
  modalGal00.style.display='none';
})
btnCloseGal01.addEventListener('click',function(){
  modalGal01.style.display='none';
})
btnCloseGal02.addEventListener('click',function(){
  modalGal02.style.display='none';
})
btnCloseGal03.addEventListener('click',function(){
  modalGal03.style.display='none';
})
    