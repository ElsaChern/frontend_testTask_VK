export const fetchFact = async (name) => {
  const response = await fetch("https://catfact.ninja/fact")
  const json = await response.json()
  return json
}
