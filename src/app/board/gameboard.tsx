const Gameboard = ({ rows, changeColour}: {rows: string, changeColour: string[]}) => {
  return (
        <div className='grid grid-cols-5 gap-1 w-1/3 max-w-80 min-w-52 mx-auto my-1'>
          {rows.map((row: string, index: number) => (
            <div
              key={index}
              className={`flex items-center justify-center aspect-square border-2 rounded border-slate-100 shadow-md shadow-purple-800 font-bold ${changeColour[index] === 'green' ? 'bg-green-700' : changeColour[index] === 'yellow' ? 'bg-yellow-300' : changeColour[index] === 'grey' ? 'bg-slate-500' :'bg-slate-100'}`}
            >{row}</div>
          ))}
        </div> 
      );
}

export default Gameboard 
