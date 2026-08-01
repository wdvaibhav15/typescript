import type { Chai } from '../types.ts'
import {ChaiCard} from './ChaiCard.tsx'


//making interface usinf existing interface from types.ts file
interface ChaiListProps {
  items: Chai[]
}
export function ChaiList ({items}: ChaiListProps) {
  return (
    <div>
     {items.map((item) => (
        <ChaiCard
        key={item.it}
        name={item.name}
        price={item.price}
        isSpecial={item.isSpecial}
      />
     ))}
    </div>  
  )
}


