  import Board from './board/page';
import getData from './wordApi'; 

export default async function Home( ) {
  const answer = await getData();
  
  return (
    <main>
      <Board answer={answer}/>
    </main>
  )
}
