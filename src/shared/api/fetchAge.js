export const fetchAge = async (name) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`)
  const json = await response.json()
  return json
}
