import './graphs.css'
import LineChart from '../charts/LineChart'
import BarChart from '../charts/BarChart'

export default function Graphs ({dailyPrices, minutePrices}) {
    return (
        <div className="outerContainer">
            <div className="graphs-container">
                <LineChart dailyPrices={dailyPrices} />
            </div>
            <div className="graphs-container">
             <BarChart minutePrices={minutePrices} />
            </div>
            
        </div>
    )
}