import {generateFilename} from "./filenameGenerator.js"

// Find all maimai image elements on the page
const imageElements = document.querySelectorAll('[class = "w_430"]');

// Create an array to store image URLs
const imageUrls = [];

// Create an object for the corresponding filename
const filenames = {};

// Iterate through image elements and collect URLs
// at the same time, pass the url to filename generator and store the corresponding filename withh urls as the key
for (const imgElement of imageElements) {
  const imageUrl = imgElement.src;
  const filename = generateFilename(imageUrl);
  imageUrls.push(imageUrl);
  filenames[imageUrl] = filename;
}

//sends the array of image urls as a response from background.js request
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getUrls") {
    sendResponse({ imageUrls: imageUrls, filenames: filenames });
  }
});
