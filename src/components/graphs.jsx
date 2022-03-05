import './graphs.css'
import LineChart from '../charts/LineChart'
import BarChart from '../charts/BarChart'

export default function Graphs ({dailyPrices, minutePrices}) {
    return (
        <div className="graphs-container">
            <LineChart dailyPrices={dailyPrices} />
            <BarChart minutePrices={minutePrices} />
        </div>
    )
}