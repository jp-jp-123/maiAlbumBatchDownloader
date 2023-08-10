// Find all maimai image elements on the page
const imageElements = document.querySelectorAll('[class = "w_430"]');

// Create an array to store image URLs
const imageUrls = [];

// Iterate through image elements and collect URLs
for (const imgElement of imageElements) {
  const imageUrl = imgElement.src;
  imageUrls.push(imageUrl);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getUrls") {
    sendResponse({ imageUrls: imageUrls });
  }
});
