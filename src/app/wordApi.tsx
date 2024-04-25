
export default async function getData() {
    try {
     const response = await fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2Cadjective%2Cverb%2Cadverb&excludePartOfSpeech=given-name%2Cfamily-name%2Cabbreviation%2Cnoun-posessive%2Cphrasal-prefix%2Csuffix%2Cabbreviation&minCorpusCount=1000&maxCorpusCount=-1&minDictionaryCount=10&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=kfpqzdj0ga0fgmmrt869mx87b2n6182v18el9qigscutnfjfm',{cache:"no-store"});
      const data = await response.json();
      const answer = data.word.toUpperCase();
      console.log(answer);
      return answer;
  }
    catch{
      console.log('failed')
    }
  }