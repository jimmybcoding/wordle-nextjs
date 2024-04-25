import { useState } from 'react';

function ModalLoser({ answer }) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleModal = () => setIsOpen(!isOpen);

  return (
    isOpen && 
    <div className='flex place-items-center fixed top-0 left-0 w-full h-full bg-opacity-70 bg-emerald-400'>
      <div className='bg-purple-800 text-slate-100 mx-auto pb-14 rounded-md shadow-modal'>
        <button className=' bg-red-700 text-black p-5 hover:bg-red-900 w-5 font-bold' onClick={toggleModal}>X</button>
        <section className='flex flex-col gap-2 px-5 text-center'>
          <p className='font-bold text-2xl'>{`Uh-Oh :(`}</p>
          <p>Answer was: {answer}</p>
          <button className='border-2 border-slate-100 rounded-md mx-auto p-1 bg-emerald-400 text-black font-bold hover:opacity-70' onClick={() => window.location.reload()}>Play Again?</button>
        </section>
      </div>
    </div>
    
    
  )
}

export default ModalLoser

