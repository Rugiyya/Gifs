var giphyList = [];

//Create a new boostrap card container

function createCard(response) {
    for (var i = 0; i < 5; i++) {
        var catImage = response.data[i].images.original.url
        $("#cat-section").append("<img src ='" + catImage + "'>");
    }

}


function getGif(cat) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cat + "&api_key=8F9fu64K7RrQVSzSMwz0ih9waWRnNi0b&limit=5"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        if (response.Response === "False") {
            alert(response.Error);
        } else {
            createCard(response);
            console.log(response);
        }
    });

}

$("#search").on("click", function () {

    var cat = $("#cat-images").val();
    getGif(cat);
    console.log('test')

});