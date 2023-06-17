function search() {
  document.getElementById("result").innerHTML = "";
  let word = sbar.value;
  image.src = `https://source.unsplash.com/random/400x200/?${word}`;

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then((r) => {
      return r.json();
    })
    .then((response) => {
        
      let meanings = Array.from(response[0].meanings);
      meanings.forEach((m) => {
        console.log(m.partOfSpeech);
        console.log();
        let output = document.createElement("h1");

        output.innerHTML = `<h1 class="font-bold mx-3">${m.partOfSpeech}</h1>
        <h5 class="mx-5">${m.definitions[0].definition}</h>`;
        document.getElementById("result").appendChild(output);
      });
    });
}
