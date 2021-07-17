let params = {
    active: true,
    currentWindow: true
}

document.getElementById('logo-pic').addEventListener('click', () => {
    chrome.tabs.query(params, gotTab)
})




function gotTab(tab){
    chrome.tabs.sendMessage(tab[0].id, "a");  
}