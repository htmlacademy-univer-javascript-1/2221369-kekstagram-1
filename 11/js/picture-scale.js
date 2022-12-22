import { imgUploadPreview } from './form.js';

const ScaleParameters = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const scaleContainer = document.querySelector('.img-upload__scale');
const scaleValue = scaleContainer.querySelector('.scale__control--value');

const onScaleButtonClick = (evt) => {
  const scaleInput = parseInt(scaleValue.value, 10);
  let scaleImg = scaleInput;
  const scaleButton = evt.target;

  if (scaleButton.classList.contains('scale__control--smaller')) {
    scaleImg = Math.max(scaleInput - ScaleParameters.STEP, ScaleParameters.MIN);
    scaleValue.value = `${scaleImg}%`;
  }
  else if (scaleButton.classList.contains('scale__control--bigger')) {
    scaleImg = Math.min(scaleInput + ScaleParameters.STEP, ScaleParameters.MAX);
    scaleValue.value = `${scaleImg}%`;
  } else {
    return;
  }

  imgUploadPreview.style.transform = `scale(${scaleImg / 100})`;
};
export { onScaleButtonClick, scaleContainer };
