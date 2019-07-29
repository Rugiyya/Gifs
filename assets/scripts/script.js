var giphyList = [];

function createCard(response) {
    // Create a new boostrap card container
    var article = $("<article>");
    article.addClass("card");


    var catImage = $("<img>");
    catImage.attr("src", response.data.original_still);

    var catImage = $("<figure>");
    catImage.append(giphyImage);
    article.append(giphyImage);

    var cardBody = $("<div>");
    cardBody.addClass("card-body");

    $("#cat-section").append(article);
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
        } else if (giphy.indexOf(response.data.original_still) >= 0) {
            alert("Gif already in List!")
        } else {
            createCard(response);
            gif.push(response.Title);
        }
    });

}



for (var i = 0; i < giphyList.length; i++) {

    var giphy = giphyList[i];
    getGif(cat);
    console.log(giphyList);

}
$("#search").click(function () {

    var cat = $("#cat-images").val();
    getGif(cat);

});