import React from "react"
import { Paper } from "@material-ui/core"
import { INotice } from "../../interfaces/INotice"

interface NoticeProps {
  notice: INotice
}

const Notice: React.FC<NoticeProps> = ({ notice }) => {
  return (
    <Paper
      elevation={2}
      style={{ padding: 8, display: "flex", justifyContent: "space-between" }}
    >
      <p>{notice.description}</p>
      <p style={{ fontWeight: 600 }}>{notice.calories}</p>
    </Paper>
  )
}

export default Notice
