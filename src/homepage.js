function homePage() {
  document.getElementById('content').innerHTML = '';
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('homeContainer');
  homeContainer.innerHTML = `<div> this is a test </div><div> this is a test</div><div> this is a test</div>`;
  content.appendChild(homeContainer);
}

export default homePage;
