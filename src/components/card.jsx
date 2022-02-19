import './card.css';

export default function Card (props) {
    console.log(props.stock)
    return (
        <div className="card">
            <div>Symbol: {props.stock.symbol}</div>
            <div>Price: {props.stock.price}</div>
            <div>Volume: {props.stock.volume}</div>
        </div>
    )
}