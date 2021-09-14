import React from "react"
import { Paper, Grid } from "@material-ui/core"
import { Face } from "@material-ui/icons"
import { IWeight } from "../../interfaces/IWeight"
import { prettifyDate } from "../../utils/prettifyDate"

interface WeightItemProps {
  weight: IWeight
}

const WeightItem: React.FC<WeightItemProps> = ({ weight }) => {
  const date = prettifyDate(weight.date_add)

  let color = "red"
  if (weight.value <= 90) color = "orange"
  if (weight.value <= 85) color = "green"

  return (
    <Grid style={{ padding: 8, textAlign: "center" }} item xs={2}>
      <Paper>
        <Face />
        <p>{date}</p>
        <p style={{ fontWeight: 600, color }}>{weight.value} кг</p>
      </Paper>
    </Grid>
  )
}

export default WeightItem
