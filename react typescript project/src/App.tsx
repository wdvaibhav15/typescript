import "./App.css"
import { CardChai } from "./components/CardChai.tsx";
import { Counter } from "./components/Counter.tsx";
import type { Chai } from './types.ts'
import { ChaiList } from './components/ChaiList.tsx'


const menu: Chai[] =[
  {id:1, name:"LAPTOP", price:110000, isSpecial:true},
  {id:2, name:"MOBILE", price:70000},
  {id:3, name:"TABLET", price:50000, isSpecial:true},
  {id:4, name:"HEADPHONES", price:2000},
]

function App()   {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <CardChai 
        name="LAPTOP" 
        price={110000} 
        isSpecial={true} 
        />
        <CardChai 
        name="MOBILE" 
        price={70000} 
        />
      </div>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App;
