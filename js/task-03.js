const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// console.log(images[0].url);

const galleryEl = document.querySelector(`.gallery`);

// const firstLiEl = document.createElement(`li`);
// const firstImgEl = document.createElement(`img`);
// firstImgEl.src = images[0].url;
// firstImgEl.alt = images[0].alt;
// firstImgEl.width = 320;

// const secondLiEl = document.createElement(`li`);
// const secondImgEl = document.createElement(`img`);
// secondImgEl.src = images[1].url;
// secondImgEl.alt = images[1].alt;
// secondImgEl.width = 320;

// const lastLiEl = document.createElement(`li`);
// const lastImgEl = document.createElement(`img`);
// lastImgEl.src = images[2].url;
// lastImgEl.alt = images[2].alt;
// lastImgEl.width = 320;

// firstLiEl.append(firstImgEl);
// secondLiEl.append(secondImgEl);
// lastLiEl.append(lastImgEl);

// galleryEl.append(firstLiEl, secondLiEl, lastLiEl);

// RepetaStail 1
// const elements = [];

// for (let i = 0; i < images.length; i++) {
//   const element = images[i];

//   const liEl = document.createElement(`li`);
//   const imgEl = document.createElement(`img`);
//   liEl.append(imgEl);
//   imgEl.src = images[i].url;
//   imgEl.alt = images[i].alt;
//   imgEl.width = 320;

//   elements.push(liEl);
// }

// console.log(elements);

// galleryEl.append(...elements);

// RepetaStail 2
// const elems = images.map(img => {
//   const liEl = document.createElement(`li`);
//   const imgEl = document.createElement(`img`);
//   liEl.append(imgEl);
//   imgEl.src = img.url;
//   imgEl.alt = img.alt;
//   imgEl.width = 320;

//   return liEl;
// });

// galleryEl.append(...elems);

// RepetaStail 3
// const makeImages = values => {
//   return values.map(img => {
//     const liEl = document.createElement(`li`);
//     const imgEl = document.createElement(`img`);
//     liEl.append(imgEl);
//     imgEl.src = img.url;
//     imgEl.alt = img.alt;
//     imgEl.width = 320;
  
//     return liEl;
//   });
// };

// const elems = makeImages(images);

// console.log(...elems);

// galleryEl.append(...elems);

// insertAdjacentHTML
const markup = images
  .map(({ url, alt }) => {
    const liEl = document.createElement(`li`);
    liEl.insertAdjacentHTML(`afterbegin`, `<img src=${url} alt={alt} width="320">`);
    return liEl;
  });

  galleryEl.append(...markup);