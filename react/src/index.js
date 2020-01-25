import React from 'react'
import ReactDom from 'react-dom'
// import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
// const elemento = <h1>React</h1>
// import Multi, { BoaNoite} from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Jefferson" sobrenome="Moreira">
            <Filho nome="Vini" sobrenome="Moreira"/>
            <Filho nome="Guifer" sobrenome="Moreira"/>
        </Pai>
    </div>
    , document.getElementById('root'))
//ReactDom.render(<BomDia nome="Guifer" idade={7}/>, document.getElementById('root'))