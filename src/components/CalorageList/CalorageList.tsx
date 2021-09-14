import React from "react"
import { Paper, Grid } from "@material-ui/core"
import { INotice } from "../../interfaces/INotice"
import Notice from "../Notice/Notice"

interface CalorageListProps {
  notices: INotice[]
  lastWeight: number
}

const CalorageList: React.FC<CalorageListProps> = ({ notices, lastWeight }) => {
  const maxCalorage = (10 * lastWeight + 6.25 * 185 - 5 * 30 + 5) * 1.2
  const all = notices.reduce((acc, notice) => acc + notice.calories, 0)

  let color = "green"
  if (all / maxCalorage > 0.5) color = "orange"
  if (all / maxCalorage > 0.8) color = "red"

  return (
    <Grid item xs={5}>
      <Paper elevation={2} style={{ padding: 8 }}>
        {notices.map((notice) => (
          <Notice key={notice.id} notice={notice} />
        ))}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>
            <span>Всего: </span>
            <span style={{ color }}>{all}</span>
          </h3>
          <h3>
            <span>Максимум сейчас: </span>
            <span style={{ color: "tomato" }}>{maxCalorage}</span>
          </h3>
        </div>
      </Paper>
    </Grid>
  )
}

export default CalorageList
