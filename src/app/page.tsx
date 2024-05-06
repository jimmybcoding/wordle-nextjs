import Board from './board/page';
import ThemeSwitcher from './darkMode/themeSwitch';
import getData from './wordApi'; 


export default async function Home( ) {
  const answer = await getData();
  
  return (
    <main>
      <ThemeSwitcher />
      <Board answer={answer}/>
    </main>
  )
}
