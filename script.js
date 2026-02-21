// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
                  const modelViewerVariants = document.querySelector("model-viewer#shoe");
                  const select = document.querySelector('#variant');

                  modelViewerVariants.addEventListener('load', () => {
                    const names = modelViewerVariants.availableVariants;
                    for (const name of names) {
                      const option = document.createElement('option');
                      option.value = name;
                      option.textContent = name;
                      select.appendChild(option);
                    }
                    // Adds a default option.
                    const option = document.createElement('option');
                    option.value = 'default';
                    option.textContent = 'Default';
                    select.appendChild(option);
                  });

                  select.addEventListener('input', (event) => {
                    modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
                  });
const modelViewerColor = document.querySelector("model-viewer#color");

                  document.querySelector('#color-controls').addEventListener('click', (event) => {
                    const colorString = event.target.dataset.color;
                    const [material] = modelViewerColor.model.materials;
                    material.pbrMetallicRoughness.setBaseColorFactor(colorString);
                  });

document.querySelector('model-viewer').addEventListener('progress', onProgress);