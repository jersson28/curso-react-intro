import './todoCounter.css';

function TodoCounter({completed,total}){
    return(
      <h1 className='TodoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> todos
      </h1>
    );
  }
export{TodoCounter} ;
