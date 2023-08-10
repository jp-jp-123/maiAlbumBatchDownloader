console.log("background.js loaded")

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "maiAlbumBatchDownloader",
    title: "Download Album",
    contexts: ["image"],
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("entered onMessage");
  if (message.action === "batchDownload") {
    const imageUrls = message.imageUrls;
    console.log('Contents of imageUrls:', imageUrls);
    
    for (const imageUrl of imageUrls){
      console.log('Initiating download for:', imageUrl);

      chrome.downloads.download({
        url: imageUrl,
        conflictAction: "uniquify",
      }, function(DownloadItem){
        if (chrome.runtime.lastError){
          console.error("Download Failed: ", chrome.runtime.lastError);
          return;
        }
        console.log("Download started: ", DownloadItem);
      });
    }
  }
});