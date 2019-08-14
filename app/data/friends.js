
const questions = [
    "The best way to resolve an issue is through conversation",
    "Why get a plane ticket when you can fly there?",
    "I'm skilled at problem solving",
    "I like to ride solo"
]

const writePage = () => {
    questions.forEach(e => {
        $(`#Q${questions.indexOf(e) + 1}`).text(e);
    });

// Populate select box with options
    let opt0 = $(`<option value=""></option>`)
    let opt1 = $(`<option value="1">1 (Disagree)</option>`)
    let opt2 = $(`<option value="2">2</option>`)
    let opt3 = $(`<option value="3">3</option>`)
    let opt4 = $(`<option value="4">4</option>`)
    let opt5 = $(`<option value="4">5 (Strongly Agree)</option>`)
    $(".response").append(opt0, opt1, opt2, opt3, opt4, opt5)
}

writePage();


$("#questionaire").on("submit", function(e) {
    e.preventDefault();
    
    let newUser = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [$("#A1").val(), $("#A2").val(), $("#A3").val(), $("#A4").val(), $("#A5").val()]
        }

    if ($("#name").val() && $("#A1").val() && $("#A2").val() && $("#A3").val() && $("#A4").val() && $("#A4").val) {

        $.post("/api/user", newUser, function(bestMatch) {
            $("#user-name").text(newUser.name);
            $("#user-img").attr("src", newUser.photo);
            $("#match-name").text(bestMatch.name);
            $("#match-img").attr("src", bestMatch.photo);
            $("#results-modal").modal("toggle");
        });
    } else {
        alert("Please fill out all the fields")
    }

})
