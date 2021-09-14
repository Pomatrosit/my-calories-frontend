import React, { useState, Dispatch, SetStateAction } from "react"
import { Paper, Grid, TextField, Button } from "@material-ui/core"
import { INotice } from "../../interfaces/INotice"
import axios from "axios"

interface AddNoticeFormProps {
  activeDay: string
  setNotices: Dispatch<SetStateAction<INotice[]>>
}

const AddNoticeForm: React.FC<AddNoticeFormProps> = ({
  setNotices,
  activeDay,
}) => {
  const [description, setDescription] = useState<string>("")
  const [calories, setCalories] = useState<string>("")

  const createNotice = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/notice`,
        {
          description,
          calories,
        }
      )
      if (activeDay === "today")
        setNotices((prev) => [...prev, response.data.data])
      setDescription("")
      setCalories("")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Grid item xs={4}>
      <Paper elevation={2} style={{ padding: 8, textAlign: "center" }}>
        <h3 style={{ marginBottom: 20 }}>Добавить прием пищи</h3>
        <TextField
          variant='outlined'
          type='text'
          label='Описание'
          value={description}
          style={{ marginBottom: 20 }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          variant='outlined'
          type='number'
          label='Калории'
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <div style={{ margin: "30px 0" }}>
          <Button variant='contained' color='primary' onClick={createNotice}>
            Добавить
          </Button>
        </div>
      </Paper>
    </Grid>
  )
}

export default AddNoticeForm
