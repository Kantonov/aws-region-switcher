document.getElementById('setRegion').addEventListener('click', () => {
    const selectedRegion = document.getElementById('regionSelect').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { region: selectedRegion });
    });
  });

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'switchRegion', region: 'us-east-1' }, (response) => {
        // Handle the response from the content script, e.g., show a success message
        if (response.success) {
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = 'Region switched successfully!';
            successMessage.style.display = 'block';
        }
    });
});
  