const months = [
  { title: "Января", month: "01" },
  { title: "Февраля", month: "02" },
  { title: "Марта", month: "03" },
  { title: "Апреля", month: "04" },
  { title: "Мая", month: "05" },
  { title: "Июня", month: "06" },
  { title: "Июля", month: "07" },
  { title: "Августа", month: "08" },
  { title: "Сентября", month: "09" },
  { title: "Октября", month: "10" },
  { title: "Ноября", month: "11" },
  { title: "Декабря", month: "12" },
]

export const prettifyDate = (
  date: string,
  level: "long" | "short" = "long"
): string => {
  let prettified: string = ""
  const d = new Date(date)
  let month: string
  if (level === "long") month = months[d.getMonth()].title
  else month = months[d.getMonth()].month
  prettified += d.getDate() + " "
  prettified += month + " "
  if (level === "long") prettified += d.getFullYear()
  else prettified = prettified.trim().replace(" ", ".")
  return prettified
}
