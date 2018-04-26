$(document).ready(function () {

    $("#submit").on("click", function (event) {

        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim()
        };

        if (newBurger.name != "") {

            $.ajax("/api/burgers", {
                type: 'POST',
                data: newBurger
            }).then(function () {

                location.reload();

            });

        }
        else {

            alert("Burger names are required, otherwise, how would we know what to serve you. Please enter a burger name and try submitting again.");

        }

    });

    $(".devourButton").on("click", function (event) {

        event.preventDefault();

        var burgerId = $(this).data("id");

        $.ajax("/api/burgers/" + burgerId, {
            method: 'PUT',
            data: burgerId
        }).then(function (error) {

            if (error) throw error;
            location.reload();

        });


    });

    $(".clearButton").on("click", function (event) {

        event.preventDefault();

        $.ajax("/api/burgers/", {
            method: 'DELETE',
        }).then(function (error) {

            if (error) throw error;
            location.reload();

        });

    });

});