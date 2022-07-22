function HideModalContact (){
  var Modal = document.getElementById("ModalContact");
  var BtnOpenModalContact = document.getElementById("BtnCloseModal");
  BtnOpenModalContact.onclick = function () {
    Modal.style.display = "none";
  }
  
}
function ShowModalContact (){
  var Modal = document.getElementById("ModalContact");
  var BtnOpenModalContact = document.getElementById("BtnContact");
  BtnOpenModalContact.onclick = function () {
    Modal.style.display = "block";
  }
}
function ShowModalFAQ (){
  var ModalFAQ = document.getElementById("ModalFAQ");
  var BtnOpenModalFAQ = document.getElementById("BtnFAQ");
  BtnOpenModalFAQ.onclick = function(){
    ModalFAQ.style.display = "block";
  }
  window.onclick = function(event) {
    if (event.target == ModalFAQ) {
      ModalFAQ.style.display = "none";
    }
  }
}
function ShowModalReviewers (){
  document.getElementById("BtnReviews").onclick = function(){
    document.getElementById("ModalReviewers").style.display = "block";
  }
  window.onclick = function(event) {
    if (event.target == document.getElementById("ModalReviewers")) {
      document.getElementById("ModalReviewers").style.display = "none";
    }
  }
}
function ShowModalAnswer (){
  var Modal = document.getElementById("ModalAnswerContactData");
  var BtnOpenModalAnswerContact = document.getElementById("ButtonAccept");
  BtnOpenModalAnswerContact.onclick = function () {
    Modal.style.display = "block";
    document.getElementById("NameDisplayModal").innerHTML = "Su nombre es: " + ActualValueName +" "+ ActualValueLastName;
    document.getElementById("EmailDisplayModal").textContent = "Su Email es: " +ActualValueEmail;
    document.getElementById("RegionDisplayModal").textContent = "Su region es: "+ActualValueSelectRegion;
    alert("Se ha registrado correctamente!!!");
  }
  window.onclick = function(event) {
    if (event.target == Modal) {
      Modal.style.display = "none";
    }
  }
}
var ActualValueName = "";
var ActualValueLastName = "";
var ActualValueEmail = "";
var ActualValueCheckBox ;
var ActualValueSelectRegion = "";
function GetDataNameModal (){
  var InputNameValue = document.getElementById("InputTxtName");
  var CurrentNameValue = InputNameValue.value;
  ActualValueName = CurrentNameValue;
}
function GetDataLastNameModal (){
  var InputNameValue = document.getElementById("InputTxtLastName");
  var CurrentLastNameValue = InputNameValue.value;
  ActualValueLastName = CurrentLastNameValue;
}
function GetDataEmailModal (){
  var InputNameValue = document.getElementById("InputTxtEmail");
  var CurrentEmailValue = InputNameValue.value;
  ActualValueEmail = CurrentEmailValue;
}
function GetValueCheckBoxModal (){
  var ValueCheckBox = document.getElementById("CheckBoxAccept");
  var CurrentValueCheckBox = ValueCheckBox.checked;
  ActualValueCheckBox = CurrentValueCheckBox;
  if(ActualValueCheckBox === true){
    document.getElementById("ButtonAccept").removeAttribute('disabled');
  }
  else{
    document.getElementById("ButtonAccept").setAttribute('disabled' , 'disabled');
  }
}
function GetValueRegionSelect (){
  var ValueSelectRegion = document.getElementById("SelectRegion")
  var CurrentValueSelectRegion = ValueSelectRegion.value;
  ActualValueSelectRegion = CurrentValueSelectRegion;
}
function ShowMenu (){
  var DisplayMenu = document.getElementById("ButtonShowMenu");
  var Menu = document.getElementById("ContainerMenuButtons");
  DisplayMenu.onclick = function (){
    Menu.style.display = "block";
    Menu.style.animation = "MenuAnimationOpen 1s";
    document.getElementById("HeroTextoDiv").style.display = "none";
  }
}
function HideMenu(){
  document.getElementById("BtnColseMenu").onclick = function (){
    document.getElementById("ContainerMenuButtons").style.display = "none";
    document.getElementById("HeroTextoDiv").style.display = "block";
  }
}
function FAQAccordionShow(){
  var acc = document.getElementsByClassName("div__accordion--container");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } 
      else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  } 
}
function OnScrollHide (){
  if (document.documentElement.scrollTop > 50) {  
    document.getElementById("HeroTextoDiv").className = "slideUp hero__main__text";
  }
  if (document.documentElement.scrollTop < 50) {
    document.getElementById("HeroTextoDiv").className = "slideDown";
  }
}
window.onscroll = function() {OnScrollHide()};
