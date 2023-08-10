// Create the context menu without an onclick parameter
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "maiAlbumBatchDownloader",
    title: "Download Album",
    contexts: ["image"],
  });
});

// Add an event listener for the context menu item click event
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "maiAlbumBatchDownloader") {
    // Send a message to the content script to retrieve image URLs
    chrome.tabs.sendMessage(tab.id, { action: "getUrls" }, function (response) {
      if (!response || response.imageUrls.length === 0) {
        console.error("Error retrieving imageUrls");
        return;
      }

      const retrievedImageUrls = response.imageUrls;

      for (const imageUrl of retrievedImageUrls) {
        console.log('Initiating download for:', imageUrl);

        chrome.downloads.download({
          url: imageUrl,
          conflictAction: "uniquify",
        }, function (DownloadItem) {
          if (chrome.runtime.lastError) {
            console.error("Download Failed: ", chrome.runtime.lastError);
            return;
          }
          console.log("Download started: ", DownloadItem);
        });
      }
    });
  }
});
