import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import { Paper } from "@material-ui/core"
import { IWeight } from "../../interfaces/IWeight"
import { prettifyDate } from "../../utils/prettifyDate"

interface DiagramProps {
  weightData: IWeight[]
}

interface DiagramData {
  name?: string
  uv?: number
}

const Diagram: React.FC<DiagramProps> = ({ weightData }) => {
  const data: DiagramData[] = weightData.map((w) => {
    // const obj: DiagramData = {}
    // obj.name = w.date_add
    // obj.uv = w.value
    const date: string = prettifyDate(w.date_add, "short")
    return { name: date, uv: w.value }
  })

  let width: number
  const clientWidth: number = document.documentElement.clientWidth
  if (clientWidth < 1263)
    width = Math.round(document.documentElement.clientWidth * 0.95) - 20
  else width = 1180

  return (
    <Paper elevation={2} style={{ padding: 10, marginTop: 20 }}>
      <LineChart
        width={width}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis domain={[80, 100]} />
        <Tooltip />
        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
      </LineChart>
    </Paper>
  )
}

export default Diagram
