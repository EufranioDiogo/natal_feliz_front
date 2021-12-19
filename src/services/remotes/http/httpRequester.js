export const httpRequester = async (
  url = '',
  data = {},
  headers = {

  },
  method = 'GET',
  contentType = 'application/json'
) => {
  let response;
  if (method === 'GET' || method === 'HEAD') {
    response = await fetch(url, {
      method,
      headers: {
        ...headers,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': contentType
      },
    })
  } else {
    response = await fetch(url, {
      method,
      headers: {
        ...headers,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': contentType
      },
      body: JSON.stringify(data)
    })
  }
  

  return await response.json()
}