async function getData() {
  const postNumber = document.getElementById('postNumber').value;
  const results = await fetch("https://graph.instagram.com/me/media?fields=media_url,caption,timestamp,media_type&access_token=IGQWRQYm5yUDhNOEQwRERqSi1FNVNpTVYwVURxRjZAGTFpOVXBhTTJ1SkVId2pDMjV0WG83Q1Frd0dLcmpRd3RqMk5nUDluWTl1MlprNWR4MmpnU0ZAnaVJfQl9kTjJ0Y2NfZA0U3VmxMcEstaXdid3NLZAEpqcUZAzTG50NW9PQUxuRVlqZAwZDZD")
  const result = await results.json()

  document.getElementById("id").innerHTML += result.data[postNumber].id
  document.getElementById("caption").innerHTML += result.data[postNumber].caption
  document.getElementById("mediaType").innerHTML += result.data[postNumber].media_type
  document.getElementById("timestamp").innerHTML += result.data[postNumber].timestamp
  document.getElementById('image').setAttribute("src", result.data[postNumber].media_url)
}