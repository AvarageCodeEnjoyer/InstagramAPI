async function getData() {
  const postNumber = document.getElementById('postNumber').value;
  const accessToken = document.getElementById('accessToken').value
  const results = await fetch(`https://graph.instagram.com/me/media?fields=media_url,caption,timestamp,media_type,permalink&access_token=${accessToken}`)
  const result = await results.json()

  document.getElementById("id").innerHTML += result.data[postNumber].id
  document.getElementById("caption").innerHTML += result.data[postNumber].caption
  document.getElementById("mediaType").innerHTML += result.data[postNumber].media_type
  document.getElementById("timestamp").innerHTML += result.data[postNumber].timestamp
  document.getElementById("permalink").innerHTML += result.data[postNumber].permalink
  document.getElementById('image').setAttribute("src", result.data[postNumber].media_url)
}