
export default async function getData() {
    try {
      
      const response = await fetch(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=10&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${process.env.API_KEY}`,{cache:"no-store"});
      const data = await response.json();
      const answer = data.word.toUpperCase();
      console.log(answer);
      return answer;
  }
    catch{
      console.log('failed');
      const answer = "FAILS";
      return answer
    }
  }