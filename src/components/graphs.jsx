import './graphs.css'
import LineChart from '../charts/LineChart'
import BarChart from '../charts/BarChart'

export default function Graphs () {
    return (
        <div className="graphs-container">
            <LineChart />
            <BarChart />
        </div>
    )
}