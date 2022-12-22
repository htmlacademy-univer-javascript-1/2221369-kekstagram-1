import { imgUploadPreview } from './form.js';

let currentEffect;

const SLIDER_OPTIONS_DEFAULT = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function( value ) {
      if ( Number.isInteger( value ) ) {
        return value.toFixed( 0 );
      }
      return value.toFixed( 1 );
    },
    from: function( value ) {
      return parseFloat( value );
    },
  },
};

const Effects = {
  chrome: {
    filter: 'grayscale',
    units: '',
    sliderValue: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  sepia: {
    filter: 'sepia',
    units: '',
    sliderValue: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  marvin: {
    filter: 'invert',
    units: '%',
    sliderValue: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    sliderValue: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
  heat: {
    filter: 'brightness',
    units: '',
    sliderValue: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
};

const effectList = document.querySelector('.effects__list');
const slider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
noUiSlider.create(slider, SLIDER_OPTIONS_DEFAULT);

function setUiSliderSettings(evt) {
  if (evt.target.value === 'none') {
    hideUiSlider();
    imgUploadPreview.removeAttribute( 'style' );
    imgUploadPreview.removeAttribute( 'class' );
  } else {
    showUiSlider();
  }
}

function addEffect(evt) {
  if (evt.target && evt.target.closest('input[type="radio"]')) {
    currentEffect = Effects[ evt.target.value ];
    imgUploadPreview.removeAttribute('class');
    imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
    setUiSliderSettings(evt);
  }
}

function hideUiSlider() {
  slider.classList.add( 'hidden' );
  slider.setAttribute( 'disabled', true );
  effectValue.value = '';
}

function showUiSlider() {
  slider.noUiSlider.updateOptions( currentEffect.sliderValue );
  slider.removeAttribute( 'disabled' );
  slider.classList.remove( 'hidden' );
  slider.noUiSlider.on( 'update', () => {
    imgUploadPreview.style.filter = `${currentEffect.filter}(${slider.noUiSlider.get()}${currentEffect.units})`;
    effectValue.value = slider.noUiSlider.get();
  } );
}

export { effectList, addEffect, hideUiSlider };
