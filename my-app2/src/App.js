import React, {useState} from 'react';



const App= ()=>{
    const[Nome, setNome] = useState('Claudio');
    const AlterarNome = ()=>setNome('Vanessa da Silva Sauro')
    
    return(
        <div>
            <p>O meu nome é : {Nome}</p>
            <button onClick={() => AlterarNome()}>AlterarNome</button>
        </div>
    )
}





export default App;
