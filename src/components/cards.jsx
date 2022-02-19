import './cards.css';
import Card from './card'

export default function Cards (props) {
    //console.log('cards',props.stock)
    return (
        <div className="cards-container">
            <Card stock={props.stock}/>
            <Card stock={props.stock}/>
            <Card stock={props.stock}/>
            
        </div>
    )
}