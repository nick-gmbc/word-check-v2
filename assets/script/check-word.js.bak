/*global document*/

async function wordExists(word) {
    let query = "https://api.datamuse.com/words?sp=" + word + "&max=1";
    const response = await response.fetch(query);
    const data = await response.json();
    let result = false;
    if (data[0] === "undefined") {
        result = false;
    } else {
        let wordData = data[0];
        if (wordData.score > 10) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
async function testWord() {
    let w = document.getElementById("word").value;
    if (await wordExists(w)) {
        document.getElementById("result").innerHTML = "Word exists";
    } else {
        document.getElementById("result").innerHTML = "Word not found";
    }

}