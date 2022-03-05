import './graphs.css'
import LineChart from '../charts/LineChart'
import BarChart from '../charts/BarChart'

export default function Graphs ({dailyPrices}) {
    return (
        <div className="graphs-container">
            <LineChart dailyPrices={dailyPrices}/>
            <BarChart />
        </div>
    )
}