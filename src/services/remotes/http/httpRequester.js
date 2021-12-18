export const httpRequester = async (
  url = '', 
  data = {},
  headers = {}, 
  method = 'GET',
  contentType = 'application/json'
) => {
  const response = await fetch(url, {
    method,
    headers: {
      ...headers,
      'Content-Type': contentType
    },
    body: JSON.stringify(data)
  })

  return response
}