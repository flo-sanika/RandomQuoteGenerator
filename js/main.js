const quoteB = document.getElementById('new-quote');
const quoteP = document.getElementById('quote');

const tweetB = document.getElementById('tweet');

const adresse = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const spin = document.querySelector('.spinner');


quoteB.addEventListener('click', newQuote);


async function newQuote() {
      spin.classList.remove('hidden');
      // let hiddenClass = Array.from(spin.classList).pop();
      quoteB.disabled = true;
      
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
      } finally {
            spin.classList.add('hidden');
            quoteB.disabled = false;
      }
      
      tweetB.addEventListener('click', tweetIt);
      
      // console.log(reponse);
}

function tweetIt(event) {
      let quote = event.currentTarget.parentNode.querySelector('#quote').textContent.split('"')[1];
      console.log(quote);
      let url = `https://twitter.com/share?text=${quote} - Donald TRUMP`;
      console.log(url);
      window.open(url, '_blank', '');
}

