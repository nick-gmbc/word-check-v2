/*global document*/

async function wordExists(word) {
    let query = "https://api.datamuse.com/words?sp=" + word + "&max=1";
    const response = await fetch(query);
    const data = await response.json();
    let found = false;
    if (data.length == 0) {
        found = false;
    } else {
        if (data[0].score > 10) {
            found = true;
        }
        else {
            found = false;
        }
    }
    return found;
}

async function testWord() {
    let word = document.getElementById("word").value;
    if (await wordExists(word)) {
        document.getElementById("result").innerHTML = "Word found";
    } else {
        document.getElementById("result").innerHTML = "Word not found";
    }
}