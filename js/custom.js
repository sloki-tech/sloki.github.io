window.addEventListener('load',function(){
    console.log("loaded");
    document.querySelector('.loader').style.display = "none";  
});

// product-tabs starts
function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "#014ed4";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = '#014ed4';
    elmnt.style.color = "#f4f4f4";
  }
document.getElementById("defaultOpen").click();
// product-tabs ends

// document.getElementById('designer').innerHTML = "Designed and developed by Gangadhar";