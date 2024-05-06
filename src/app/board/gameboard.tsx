const Gameboard = ({ rows, changeColour}: {rows: string[], changeColour: string[]}) => {
  return (
        <div className='grid grid-cols-5 w-1/4 gap-1 max-w-96 min-w-56 mx-auto my-1'>
          {rows.map((row: string, index: number) => (
            <div
              key={index}
              className={`flex items-center justify-center aspect-square border-2 rounded border-slate-100 shadow-md shadow-purple-800 font-bold ${changeColour[index] === 'green' ? 'bg-green-700' : changeColour[index] === 'yellow' ? 'bg-yellow-500' : changeColour[index] === 'grey' ? 'bg-slate-500 dark:bg-slate-800' :'bg-slate-100 dark:bg-slate-500'}`}
            >{row}</div>
          ))}
        </div> 
      );
}

export default Gameboard 
