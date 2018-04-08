$(function () {
    $("#target").keyup(function (event) {
        if (event.keyCode == 13) {
            $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + $("#target").val() + "&utf8=&callback=?", json => {
                $(".results").html("");
                json.query.search.forEach(val => {
                    $(".results").append("<a target='_blank' href='" + "https://en.wikipedia.org/wiki/" + val.title.replace(/\s+/g, "_") + "'" + "class='item'>" +
                        "<div class='holder'>" +
                        "<h3>" + val.title + "</h3>" +
                        "<p>" + val.snippet.split(".")[0] + "." +
                        "</div>" +
                        "</a>");
                })
            });
        }
    })
})