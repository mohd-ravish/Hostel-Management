$(".sat").click(function(){

     $(".sat").addClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading2").text("Minimum expected menu on Saturday");
     $(".breakfast").html("<ul><li>Brown Bread(3)</li><li>&nbsp;&nbsp;&nbsp;Amul Butter(1/6) of 100gm /Tops Fruit Jam / Boiled Egg</li><li>Tea</li></ul>");
     $(".lunch").html("<ul><li>Aalu Palak / Seasonal Veg.</li> <li>Rice</li><li>Daal</li><li>Roti</li><li>Salad(Onion/Gajar/Muli/Kheera)</li> </ul>");
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
     $(".heading2").text("Minimum expected menu on Sunday");
     $(".breakfast").html("<h4>Non-Veg</h4><ul><li>Anda Paratha(2)</li> <li>Chatni</li><li>Tea</li></ul><h4>Veg.</h4><ul><li>Aalu Paratha(2)</li> <li>Chatni</li> <li>Tea</li></ul>");
     $(".lunch").html("<ul><li>Mutter Paneer</li> <li>Rice</li><li>Daal</li><li>Roti</li><li>Salad(Onion/Gajar/Muli/Kheera)</li> </ul>");
     $(".dinner").html(" <h4>Non-Veg</h4> <ul> <li>Chicken Biriany</li><li>Raita (Boondi)</li></ul><h4>Veg.</h4><ul><li>Mutter Paneer</li><li>Pulao</li> <li>Raita (Boondi)</li></ul>");
});

$(".mon").click(function(){

     $(".mon").addClass("mon-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading2").text("Minimum expected menu on Monday");
     // $(".btn").css('background-color', 'black');
     $(".breakfast").html("<ul><li>Brown Bread(3)</li> <li>&nbsp;&nbsp;&nbsp;Amul Butter(1/6) of 100gm /Tops Fruit Jam / Boiled Egg(1)</li><li>Tea</li></ul>");
     $(".lunch").html("<ul><li>Aalu Chhole</li><li>Rice</li><li>Daal</li><li>Roti</li><li>Salad (Onion/Gajar/Muli/Kheera)</li> </ul>");
     $(".dinner").html(" <h4>Non-Veg</h4> <ul> <li>Chicken Qorma/Chicken Strew</li><li>Roti</li><li>Rice</li><li>Daal</li></ul><h4>Veg.</h4><ul><li>Mutter Paneer</li><li>Ruti</li> <li>Rice</li> <li>Daal</li></ul>");
});

$(".tue").click(function(){

     $(".tue").addClass("tue-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading2").text("Minimum expected menu on Tuesday");
     $(".breakfast").html("<ul><li>Puri(6)</li> <li>Sabzi</li><li>Tea</li></ul>");
     $(".lunch").html("<ul><li>Lauki Chana Daal</li><li>Rice</li><li>Daal</li><li>Roti</li><li>Salad (Onion/Gajar/Muli/Kheera)</li></ul>");
     $(".dinner").html("<ul> <li>Mix Veg/Seasonal Veg(Dry)</li><li>Daal</li><li>Roti</li><li>Rice</li></ul>");
});

$(".wed").click(function(){

     $(".wed").addClass("wed-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".thu").removeClass("thu-size");
     $(".fri").removeClass("fri-size");
     $(".heading2").text("Minimum expected menu on Wednesday");
     $(".breakfast").html("<h4>Non-Veg</h4><ul><li>Brown Bread(2)</li> <li>Omelette(2 egg)</li><li>Tea</li> </ul><h4>Veg.</h4><ul><li>Brown Bread(2)</li><li>Jam/Butter</li><li>Tea</li> </ul>");
     $(".lunch").html("<ul><li>Rajma Aaalu</li><li>Rice</li><li>Daal</li><li>Roti</li><li>Salad (Onion/Gajar/Muli/Kheera)</li></ul>");
     $(".dinner").html(" <h4>Non-Veg</h4> <ul> <li>Chicken Biriyani</li><li>Raita (Boondi)</li></ul><h4>Veg.</h4><ul><li>Mutter Paneer</li><li>Pulao</li><li>Raita (Boondi)</li></ul>");
});

$(".thu").click(function(){

     $(".thu").addClass("thu-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".fri").removeClass("fri-size");
     $(".heading2").text("Minimum expected menu on Thursday");
     $(".breakfast").html("<ul><li>Papa (4)</li> <li>Banana (1)</li><li>Boiled Egg (1)</li><li>Tea</li> </ul>");
     $(".lunch").html("<ul><li>Mix Vegetable</li><li>Rice</li><li>Daal</li><li>Roti</li><li>Salad (Onion/Gajar/Muli/Kheera)</li></ul>");
     $(".dinner").html(" <h4>Non-Veg</h4><ul><li>Egg Curry</li><li>Rice</li><li>Daal</li><li>Roti</li><li>Kheer/Halwa</li></ul><h4>Veg.</h4><ul><li>Aalu Tamatar/Seasonal Veg</li><li>Rice</li><li>Daal</li><li>Roti</li><li>Kheer/Halwa</li></ul>");
});

$(".fri").click(function(){

     $(".fri").addClass("fri-size");
     $(".sat").removeClass("sat-size");
     $(".sun").removeClass("sun-size");
     $(".mon").removeClass("mon-size");
     $(".tue").removeClass("tue-size");
     $(".wed").removeClass("wed-size");
     $(".thu").removeClass("thu-size");
     $(".heading2").text("Minimum expected menu on Friday");
     $(".breakfast").html("<ul><li>Aalu Paratha (2)</li> <li>Chatni</li><li>Tea</li> </ul>");
     $(".lunch").html("<ul><li>Tahiri/Veg. Pulao</li> <li>Raita (Boondi)</li><li>Papad 1 Pc</li> </ul>");
     $(".dinner").html(" <h4>Non-Veg</h4> <ul> <li>Chicken Qorma</li><li>Roti</li><li>Zeera Rice</li><li>Daal</li><li>Gulab Jamun(2)/Fruit Cream</li></ul><h4>Veg.</h4><ul><li>Palak Paneer</li><li>Roti</li><li>Zeera Rice</li><li>Daal</li><li>Gulab Jamun(2)/Fruit Cream</li></ul>");
});