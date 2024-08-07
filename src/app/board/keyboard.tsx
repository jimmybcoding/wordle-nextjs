
const Keyboard: React.FC<{
    handleKeyClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    same: string[];
    different: string[];
    notInAnswer: string[];
    changeColour: string[];
    }> = ({ handleKeyClick, handleDelete, handleSubmit, same, different, notInAnswer, changeColour }) => {
    
    const topKeys: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const middleKeys: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const bottomKeys: string[] = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className='flex flex-col items-center max-w-96 min-w-72 mx-auto mt-4 justify-center'>
        <div className='flex gap-1 my-1'>
          {topKeys.map((value, index) => {
            return (
              <button
                className={`sm:w-10 sm:h-10 w-9 h-9 border-2 border-black rounded-md p-2 hover:bg-purple-800 dark:hover:bg-purple-800 hover:text-slate-100 font-bold ${same.includes(value) ? 'bg-green-700' : changeColour && different.includes(value) ? 'bg-yellow-500' : changeColour && notInAnswer.includes(value) ? 'bg-zinc-700' : 'bg-slate-100 dark:bg-slate-600'}`}
                key={index}
                value={value}
                onClick={handleKeyClick}
              >
                {value}
              </button>
            )
          })}
        </div>
        <div className='flex gap-1 my-1 text-center'>
          {middleKeys.map((value, index) => {
            return (
              <button
              className={`sm:w-10 sm:h-10 w-9 h-9 border-2 border-black rounded-md p-2 hover:bg-purple-800 dark:hover:bg-purple-800 hover:text-slate-100 font-bold ${same.includes(value) ? 'bg-green-700' : changeColour && different.includes(value) ? 'bg-yellow-500' : changeColour && notInAnswer.includes(value) ? 'bg-zinc-700' : 'bg-slate-100 dark:bg-slate-600'}`}
              key={index}
              value={value}
              onClick={handleKeyClick}
              >
                {value}
              </button>
            )
          })}
        </div>
        <div className='flex gap-1 my-1 text-center'>
          {bottomKeys.map((value, index) => {
            return (
              <button
              className={`sm:w-10 sm:h-10 w-9 h-9 flex-auto border-2 border-black rounded-md p-2 hover:bg-purple-800 dark:hover:bg-purple-800 hover:text-slate-100 font-bold ${same.includes(value) ? 'bg-green-700' : changeColour && different.includes(value) ? 'bg-yellow-500' : changeColour && notInAnswer.includes(value) ? 'bg-zinc-700' : 'bg-slate-100 dark:bg-slate-600'}`}
              key={index}
              value={value}
              onClick={handleKeyClick}
              >
                {value}
              </button>
            )
          })
          }
          <button onClick={handleDelete} className='flex-auto border-2 border-black rounded-md p-2 bg-purple-800 text-slate-100 hover:bg-slate-700 hover:text-slate-100 font-bold'>{'Delete'}</button>
        </div>
        <button type="submit" onClick={handleSubmit} className='w-1/2 mx-auto border-2 border-black rounded-md p-2  bg-purple-800 text-slate-100 font-bold hover:bg-purple-600'>{'Submit'}</button>
      </div> 
  )
}

export default Keyboard
