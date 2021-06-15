function addToBag() {
    alert("Your selected products are added to the cart!!");
}

$(document).ready(function(){
    $('.addtobag').attr('disabled',true);
    $(".addtobag").css("background-color", "grey");
});

function enableAddToBag(){
    let enableId = false;
    let counter1 = false;
    let counter2 = false;
    let counter3 = false;
    let counter4 = false;
    let numberofitems = 0;

    for(let i =1; i<5; i++){
        if($("#miniimage"+i).hasClass("decor")){
            counter1 = true;
            numberofitems++;
        }
        if($("#serumimage"+i).hasClass("decor")){
            counter2 = true;
            numberofitems++;
        }
        if($("#lipimage"+i).hasClass("decor")){
            counter3 = true;
            numberofitems++;
        }
        if($("#cleanserimage"+i).hasClass("decor")){
            counter4 = true;
            numberofitems++;
        }
    }
    $("#numberofitems").text(`${numberofitems} of 4`);
    
    if(counter1 && counter2 && counter3 && counter4){
        $('.addtobag').attr('disabled',false);
        $(".addtobag").css("background-color", "orangeRed");
    }
}

function on_clickMini(value){
    $(".miniimage").removeClass("decor");
    $("#miniimage"+value).toggleClass("decor");
    $('#hidemini').removeAttr('hidden');
    $("#miniselect").text("close X");
    enableAddToBag();
}

function on_clickSerum(value){
    $(".serumimage").removeClass("decor");
    $("#serumimage"+value).toggleClass("decor");
    $('#hideserum').removeAttr('hidden');
    $("#serumselect").text("close X");
    enableAddToBag();
}

function on_clickLip(value){
    $(".lipimage").removeClass("decor");
    $("#lipimage"+value).toggleClass("decor");
    $('#hidelip').removeAttr('hidden');
    $("#lipselect").text("close X");
    enableAddToBag();
}

function on_clickCleanser(value){
    $(".cleanserimage").removeClass("decor");
    $("#cleanserimage"+value).toggleClass("decor");
    $('#hidecleanser').removeAttr('hidden');
    $("#cleanserselect").text("close X");
    enableAddToBag();
}
  
    var coll = document.getElementsByClassName("collapsible1");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = document.getElementById("id1");
        if (content.style.display === "block") {
          content.style.display = "none";
          if($(".miniimage").hasClass("decor")){
            $("#miniselect").text("edit+");
          }
          
        } else {
          content.style.display = "block";
          
        }
      });
    }
  
    var coll = document.getElementsByClassName("collapsible2");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = document.getElementById("id2");
        if (content.style.display === "block") {
          content.style.display = "none";
          if($(".serumimage").hasClass("decor")){
            $("#serumselect").text("edit+");
          }
        } else {
          content.style.display = "block";
          
        }
      });
    }
  
    var coll = document.getElementsByClassName("collapsible3");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = document.getElementById("id3");
        if (content.style.display === "block") {
          content.style.display = "none";
          if($(".lipimage").hasClass("decor")){
            $("#lipselect").text("edit+");
          }
        } else {
          content.style.display = "block";
          
        }
      });
    }
  
    var coll = document.getElementsByClassName("collapsible4");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = document.getElementById("id4");
        if (content.style.display === "block") {
          content.style.display = "none";
          if($(".cleanserimage").hasClass("decor")){
            $("#cleanserselect").text("edit+");
          }
        } else {
          content.style.display = "block";
          
        }
      });
    }