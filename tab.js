const tabdivs = document.querySelectorAll(".tabdiv");
const tablinks = document.querySelectorAll(".tablink");
function openClass(evt, cls) {
  
  for (i = 0; i < tabdivs.length; i++) {
    tabdivs[i].style.display = "none";
  }
  
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }
  document.querySelector(`#${cls}`).style.display = "block";
  evt.currentTarget.classList.add("active");
}
openClass({currentTarget: tablinks[0]},'c2213')