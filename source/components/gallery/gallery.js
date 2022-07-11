
class Gallery {
  constructor(container, items, controls) {
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
    });

    this.carouselArray.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  setCurrentState(direction) {

    if (direction.className === 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }

    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      if(control === 'previous'){
        document.querySelector(`.gallery-controls-${control}`).innerHTML = '<svg width="32" height="52" viewBox="0 0 32 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 6.79533C31.5 1.63497 25.3176 -1.01174 21.5836 2.55007L2.31003 20.9348C-0.581208 23.6927 -0.581203 28.3072 2.31003 31.0651L21.5836 49.4498C25.3176 53.0116 31.5 50.3649 31.5 45.2046V45.2046C31.5 43.6005 30.8432 42.0664 29.6826 40.9593L19.31 31.0651C16.4188 28.3072 16.4188 23.6927 19.31 20.9348L29.6826 11.0406C30.8432 9.93345 31.5 8.39937 31.5 6.79533V6.79533Z" fill="#C4C4C4"/>\n' +
          '</svg>';
      }

      if(control === 'next'){
        document.querySelector(`.gallery-controls-${control}`).innerHTML = '<svg width="32" height="52" viewBox="0 0 32 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.14948e-05 45.2048C2.10436e-05 50.3652 6.18241 53.0119 9.91642 49.4501L29.19 31.0653C32.0812 28.3074 32.0812 23.6929 29.19 20.935L9.91642 2.55029C6.1824 -1.01152 2.1489e-05 1.63519 2.10379e-05 6.79556C2.08977e-05 8.39959 0.656772 9.93368 1.81744 11.0408L12.19 20.935C15.0812 23.6929 15.0812 28.3074 12.19 31.0653L1.81744 40.9595C0.656773 42.0667 2.1635e-05 43.6008 2.14948e-05 45.2048Z" fill="#C4C4C4"/>\n' +
          '</svg>';
      }

    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

if(galleryContainer){
  const exampleGallery = new Gallery(galleryContainer, galleryItems, galleryControls);
  exampleGallery.setControls();
  exampleGallery.useControls();
}


