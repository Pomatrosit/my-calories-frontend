import React, { useEffect, useState } from "react"
import "./App.css"
import WeightList from "./components/WeightList/WeightList"
import Navbar from "./components/Navbar/Navbar"
import CalorageList from "./components/CalorageList/CalorageList"
import AddNoticeForm from "./components/AddNoticeForm/AddNoticeForm"
import { Grid } from "@material-ui/core"
import axios from "axios"
import { INotice } from "./interfaces/INotice"
import { getDate } from "./utils/getDate"

function App() {
  const [notices, setNotices] = useState<INotice[]>([])
  const [activeRadio, setActiveRadio] = useState<number>(3)
  const [lastWeight, setLastWeight] = useState<number>(0)
  const [activeDay, setActiveDay] = useState<string>("today")

  const getNotices = async (date: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/notice?date=${date}`
    )
    setNotices(response.data.data)
  }

  useEffect(() => {
    getNotices(getDate("today"))
  }, [])

  return (
    <div className='app'>
      <WeightList setLastWeight={setLastWeight} />
      <h2 style={{ marginTop: 40 }}>Калораж:</h2>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={2}
        style={{ marginTop: 10, marginBottom: 50 }}
      >
        <Navbar
          activeRadio={activeRadio}
          setActiveDay={setActiveDay}
          setActiveRadio={setActiveRadio}
          getNotices={getNotices}
        ></Navbar>
        <CalorageList lastWeight={lastWeight} notices={notices} />
        <AddNoticeForm setNotices={setNotices} activeDay={activeDay} />
      </Grid>
    </div>
  )
}

export default App
