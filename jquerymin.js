$(document).ready(function(){
    $("#icon2").click(
        function () {
            $("#jumbotron, .footer, .topNav").css({"background-color": "#D2AAD2"});
            $("#cImg1").prop("src", "https://i.imgur.com/w2wze4G.jpg");
            $("#cImg2").prop("src", "https://i.imgur.com/B2Q7Vwz.jpg");
            $("#cImg3").prop("src", "https://i.imgur.com/0uyo74G.jpg");
            $("#cImg4").prop("src", "https://i.imgur.com/l0myIiu.jpg");
            $("#icon1").prop("src", "https://i.imgur.com/xQo7j2C.png");
            $("#icon2").prop("src", "https://i.imgur.com/JejGF8p.png");
            $("#icon3").prop("src", "https://i.imgur.com/gOrQCOA.png");
        }
    );
    $("#icon1").click(
        function () {
            $("#jumbotron, .footer, .topNav").css({"background-color": "#563d7c"});
            $("#cImg1").prop("src", "../public/images/cardImg1.png");
            $("#cImg2").prop("src", "../public/images/cardImg2.png");
            $("#cImg3").prop("src", "../public/images/cardImg3.png");
            $("#cImg4").prop("src", "../public/images/cardImg4.png");
            $("#icon1").prop("src", "../public/images/MusicNote.png");
            $("#icon2").prop("src", "../public/images/Headphone.png");
            $("#icon3").prop("src", "../public/images/Vinyl.png");
        }
    );
});

