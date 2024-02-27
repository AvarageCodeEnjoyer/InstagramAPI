const container = document.getElementById("container");

async function getData() {
  const postNumber = document.getElementById('postNumber').value;
  const accessToken = document.getElementById('accessToken').value
  const results = await fetch(`https://graph.instagram.com/me/media?fields=media_url,caption,timestamp,media_type,permalink&access_token=${accessToken}`)
  const result = await results.json()

  container.innerHTML = '';

  if (postNumber) {
    createContainer(postNumber)
  } else if (!postNumber){
    for (let i = 0; i < result.data.length; i++) {
      createContainer(i)
    }
  }

  function createContainer(i) {
    // Create container div
    const div = document.createElement("div");
    div.classList.add("container");

    // Create elements for each data item
    const captionDiv = document.createElement("div");
    const captionBold = document.createElement("b");
    const captionText = document.createElement("span");
    const timestampDiv = document.createElement("div");
    const timestampBold = document.createElement("b");
    const timestampText = document.createElement("span");
    const idDiv = document.createElement("div");
    const idBold = document.createElement("b");
    const idText = document.createElement("span");
    const mediaTypeDiv = document.createElement("div");
    const mediaTypeBold = document.createElement("b");
    const mediaTypeText = document.createElement("span");
    const permalinkDiv = document.createElement("div");
    const permalinkBold = document.createElement("b");
    const permalinkText = document.createElement("span");
    const imageElement = document.createElement("img");

    // Set content for each element
    captionBold.textContent = "Caption: ";
    captionText.textContent = result.data[i].caption;
    timestampBold.textContent = "Timestamp: ";
    timestampText.textContent = result.data[i].timestamp;
    idBold.textContent = "Post ID: ";
    idText.textContent = result.data[i].id;
    mediaTypeBold.textContent = "Media Type: ";
    mediaTypeText.textContent = result.data[i].media_type;
    permalinkBold.textContent = "Permalink: ";
    permalinkText.textContent = result.data[i].permalink;
    imageElement.src = result.data[i].media_url;

    // Append elements to container
    captionDiv.appendChild(captionBold);
    captionDiv.appendChild(captionText);
    timestampDiv.appendChild(timestampBold);
    timestampDiv.appendChild(timestampText);
    idDiv.appendChild(idBold);
    idDiv.appendChild(idText);
    mediaTypeDiv.appendChild(mediaTypeBold);
    mediaTypeDiv.appendChild(mediaTypeText);
    permalinkDiv.appendChild(permalinkBold);
    permalinkDiv.appendChild(permalinkText);

    div.appendChild(captionDiv);
    div.appendChild(document.createElement("hr"));
    div.appendChild(timestampDiv);
    div.appendChild(document.createElement("hr"));
    div.appendChild(idDiv);
    div.appendChild(document.createElement("hr"));
    div.appendChild(mediaTypeDiv);
    div.appendChild(document.createElement("hr"));
    div.appendChild(permalinkDiv);
    div.appendChild(document.createElement("hr"));
    div.appendChild(imageElement);
    container.appendChild(div);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
  }
}
