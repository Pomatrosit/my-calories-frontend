import React, { useEffect, useState } from "react"
import { IWeight } from "../../interfaces/IWeight"
import { Paper, Grid, Button, TextField } from "@material-ui/core"
import WeightItem from "../WeightItem/WeightItem"
import axios from "axios"
import Diagram from "../Diagram/Diagram"

interface WeightListProps {
  setLastWeight: (weight: number) => void
}

const WeightList: React.FC<WeightListProps> = ({ setLastWeight }) => {
  const [weightData, setWeightData] = useState<IWeight[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  const getWeight = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/weight`
      )
      const sorted = response.data.data.sort(
        (a: IWeight, b: IWeight) => a.id - b.id
      )
      setLastWeight(sorted[sorted.length - 1].value)
      setWeightData(sorted)
    } catch (e) {
      console.log(e)
    }
  }

  const createWeight = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/weight`,
        {
          value: Number(inputValue),
        }
      )
      setWeightData((prev) => [...prev, response.data.data])
      setInputValue("")
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getWeight()

    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <h2>Вес:</h2>
      <Paper style={{ padding: 10 }} elevation={3}>
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={2}
        >
          {weightData.map((w) => (
            <WeightItem key={w.id} weight={w} />
          ))}
        </Grid>
      </Paper>
      <Diagram weightData={weightData} />
      <div
        style={{ marginTop: 10, display: "flex", justifyContent: "flex-end" }}
      >
        <TextField
          variant='outlined'
          type='number'
          label='Добавить вес'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={createWeight}>
          Добавить
        </Button>
      </div>
    </div>
  )
}

export default WeightList
