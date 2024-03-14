export const fetchFact = async () => {
  const response = await fetch("https://catfact.ninja/fact")
  const data = await response.json()

  if (response.status === 200) {
    return data
  }

  throw new Error("Request has failed")
}
