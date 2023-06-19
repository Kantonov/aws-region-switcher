document.getElementById('setRegion').addEventListener('click', () => {
    const selectedRegion = document.getElementById('regionSelect').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { region: selectedRegion });
    });
  });
  