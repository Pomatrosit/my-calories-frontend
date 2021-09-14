export const getDate = (str: string = "today"): string => {
  let day = new Date()
  if (str === "yesterday") day = new Date(Date.now() - 86_400_000)

  const dd = String(day.getDate()).padStart(2, "0")
  const mm = String(day.getMonth() + 1).padStart(2, "0") //January is 0!
  const yyyy = day.getFullYear()

  return yyyy + "-" + mm + "-" + dd
}
