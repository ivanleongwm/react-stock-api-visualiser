import './newsCard.css';

export default function NewsCard (props) {
    
    //console.log(props.stock)
    return (
        <div className="card">
            <div><b>{props.stock.title}</b></div>
            <div>{props.stock.text}</div>
            <div>Ticker Symbol: {props.stock.symbol}</div>
            <div>Published Date: {props.stock.publishedDate}</div>
        </div>
    )
}