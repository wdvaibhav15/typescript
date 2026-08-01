// hers the use of typescript to define the data of the objects that is send to a function to define or structured manner 
interface CardChaiProps {
    name: string;
    price: number;
    isSpecial?: boolean; // optional property
}

export function CardChai(
    {name, price, isSpecial = false}: CardChaiProps
) {
  return (
    <article>
        <h2>
            {name} {isSpecial && <span>Special ⭐</span>}
        </h2>
        <p>{price}</p>
    </article>
  );
}