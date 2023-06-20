chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// Handle the message here, e.g., switch AWS region
sendResponse({ success: true });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const newRegion = request.region;
    const url = window.location.href;
    const updatedUrl = url.replace(/(region=)(\w+-\w+-\d+)/, `$1${newRegion}`);
    if (url !== updatedUrl) {
      window.location.href = updatedUrl;
    }
  });
  