chrome.tabs.onRemoved.addListener(function(tabId, removeInfo){
    console.log('tabs.onRemoved', tabId);
});

