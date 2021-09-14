import React, { useState } from "react"
import { Paper, Grid, Radio, TextField, Button } from "@material-ui/core"
import { getDate } from "../../utils/getDate"

interface INavbarProps {
  activeRadio: number
  setActiveRadio: (radio: number) => void
  getNotices: (date: string) => void
  setActiveDay: (day: string) => void
}

const Navbar: React.FC<INavbarProps> = ({
  activeRadio,
  setActiveRadio,
  getNotices,
  setActiveDay,
}) => {
  const [datePickerValue, setDatePickerValue] = useState<string>(
    getDate("today")
  )

  const loadNotices = () => {
    if (activeRadio === 3) {
      setActiveDay("today")
      getNotices(getDate("today"))
    } else if (activeRadio === 2) {
      getNotices(getDate("yesterday"))
      setActiveDay("not today")
    } else {
      getNotices(datePickerValue)
      setActiveDay("not today")
    }
  }

  return (
    <Grid item xs={3}>
      <Paper elevation={2} style={{ padding: "20px 8px 8px 8px" }}>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setActiveRadio(1)}
        >
          <Radio checked={activeRadio === 1} color='primary' />
          <TextField
            id='date'
            label='Выберите дату'
            type='date'
            value={datePickerValue}
            onChange={(e) => setDatePickerValue(e.target.value)}
            disabled={activeRadio !== 1}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setActiveRadio(2)}
        >
          <Radio checked={activeRadio === 2} color='primary' />
          <p>Вчера</p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setActiveRadio(3)}
        >
          <Radio checked={activeRadio === 3} color='primary' />
          <p>Сегодня</p>
        </div>
        <Button
          style={{ margin: "20px 10px" }}
          variant='contained'
          color='primary'
          onClick={loadNotices}
        >
          Показать
        </Button>
      </Paper>
    </Grid>
  )
}

export default Navbar
