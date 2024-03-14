export const fetchAge = async (name) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`)
  const data = await response.json()

  if (response.status === 200) {
    return data
  }

  throw new Error("Request has failed")
}
