var giphyList = [];

function createCard(response) {
    // Create a new boostrap card container
    var article = $("<article>");
    article.addClass("card");


    var catImage = $("<img>");
    catImage.attr("src", response.Images);
    catImage.attr("alt", response.Title + " Images");
    $("#cat-section").append(catImage);
}

function getGif(cat) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cat + "&api_key=8F9fu64K7RrQVSzSMwz0ih9waWRnNi0b&limit=5"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        createCard(response);
        giphyList.push(response.Title);
    });
}
for (var i = 0; i < giphyList.length; i++) {

    var movie = giphyList[i];
    getGif(cat);
    console.log(giphyList);

}
$("#search").click(function () {

    var cat = $("#cat-images").val();
    getGif(cat);

});