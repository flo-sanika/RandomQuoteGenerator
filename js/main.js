const quoteB = document.getElementById('new-quote');
const quoteP = document.getElementById('quote');
const adresse = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

quoteB.addEventListener('click', newQuote);

async function newQuote() {
      
      try {
            const reponse = await fetch(adresse);
            if (!reponse.ok) {
                  throw Error(reponse.statusText);
            }
            const json = await reponse.json();
            console.log(json);

            quoteP.innerHTML = '"<em>' + json.message + '</em>" <br> \
            <span style="display: inline-block;text-align: right; width: 100%;"><b>Donald TRUMP</b>' ;
      } catch (error) {
            console.log(error);
            alert("Check you internet connection");
      }

      // console.log(reponse);
}

