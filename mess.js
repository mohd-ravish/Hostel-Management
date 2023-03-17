$(".sat").click(function(){

     $(".sat").addClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading").text("Mess menu on Saturday");
     $(".breakfast").html("<ul><li>bf1</li> <li>bf1</li> </ul>");
     $(".lunch").html("<ul><li>bf1</li> <li>bf1</li> </ul>");
     $(".dinner").html(" <h4>Non-Veg</h4> <ul> <li>Chicken Biriany<li>Raita(Boondi)</li></ul><h4>Veg.</h4><ul><li>Mutter Paneer</li><li>Pulao</li><li>Raita(Boondi)</li></ul>");


});

$(".sun").click(function(){

     $(".sun").addClass("sun-size");
     $(".sat").removeClass("sat-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading").text("Mess menu on Sunday");
     $(".breakfast").html("<ul><li>bf2</li> <li>bf3</li> </ul>");
     $(".dinner").html(" <h4>Non-Veg</h4> <ul> <li>Chicken Biriany</li><li>Roti</li><li>Rice</li><li>Daal</li></ul><h4>Veg.</h4><ul><li>Mutter Paneer</li><li>Pulao</li> <li>Rice</li> <li>Daal</li><li>Roti</li></ul>");
});

$(".mon").click(function(){

     $(".mon").addClass("mon-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading").text("Mess menu on Monday");

});

$(".tue").click(function(){

     $(".tue").addClass("tue-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading").text("Mess menu on Tuesday");
});

$(".wed").click(function(){

     $(".wed").addClass("wed-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading").text("Mess menu on Wednesday");
});

$(".thu").click(function(){

     $(".thu").addClass("thu-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".fri").removeClass("fri-size");
     $(".heading").text("Mess menu on Thursday");

});

$(".fri").click(function(){

     $(".fri").addClass("fri-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".heading").text("Mess menu on Friday");

});