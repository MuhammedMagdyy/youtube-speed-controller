const speeds = [];
for (let i = 2.1; i <= 3.0; i += 0.05) {
  speeds.push(i.toFixed(2));
}

const container = document.getElementById('buttons');

speeds.forEach((speed) => {
  const btn = document.createElement('button');
  btn.textContent = `${speed}x`;
  btn.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (s) => {
          const v = document.querySelector('video');
          if (v) v.playbackRate = parseFloat(s);
        },
        args: [speed],
      });
    });
  };
  container.appendChild(btn);
});
