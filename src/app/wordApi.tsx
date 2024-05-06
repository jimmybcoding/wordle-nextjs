
export default async function getData() {
    try {
      
      const response = await fetch(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=10&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${process.env.API_KEY}`,{cache:"no-store"});
      const data = await response.json();
      const answer = data.word.toUpperCase();
      console.log(answer);
      return answer;
  }
    catch{
      const fetchFailedWords = [
        'ABOVE','ALIKE','ARRAY', 'ARGUE', 'ASIDE', 'ALLOW',
        'BEGIN','BENCH','BELOW','BEING','BOARD','CRASH',
        'CRIME','CATCH','CIVIL','DELAY','DOING','EVERY',
        'EXACT','EXIST','ERROR','EVENT','FOUND','FRAME',
        'FRAUD','GUEST','GUARD','GROUP','HAPPY','HAIRY',
        'GOING','GRACE','HUMAN','HOUSE','HENCE','IDEAL',
        'IRONY','ISSUE','JAILS','JUMBO','JUICE','KNOWN',
        'LOCAL','LOGIC','LABEL','MONEY','MINOR','MIGHT',
        'MEDIA','NEWLY','NOISE','NORTH','NURSE','OFFER',
        'OPENS','OFTEN','PRICE','PROUD','QUEEN','QUILT',
        'QUIET','ROLLS','RIVAL','READY','SEARCH','SCORE',
        'SOURCE','SERVE','TRUST','TIMED','THERE','TRIPS',
        'UNDER','UPPER','VICES','VEINS','VISOR','WHERE',
        'WILTS','WINGS','WARTS','WAGON','YOUTH','YOUNG',
        'YOURS','ZEBRA','PIZZA'
      ]
      const answer = fetchFailedWords[Math.floor(Math.random() * fetchFailedWords.length -1)]
      console.log(`fetch failed answer is ${answer}`)
      return answer
    }
  }

