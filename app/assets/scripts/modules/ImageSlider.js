import Flickity from 'flickity';

var flky = new Flickity( '.banner__slider', {
  // options, defaults listed
 
  accessibility: true,
  // enable keyboard navigation, pressing left & right keys
 
  adaptiveHeight: true,
  // set carousel height to the selected slide
 
  autoPlay: false,
  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second
 
  cellAlign: 'center',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
 
  cellSelector: undefined,
  // specify selector for cell elements
 
  contain: true,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled
 
  draggable: true,
  // enables dragging & flicking
  // if at least 2 cells
 
  dragThreshold: 1,
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices
 
  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells
 
  friction: 0.2,
  // smaller number = easier to flick farther
 
  groupCells: false,
  // group cells together in slides
 
  initialIndex: 0,
  // zero-based index of the initial selected cell
 
  lazyLoad: false,
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells
 
  percentPosition: false,
  // sets positioning in percent values, rather than pixels
  // Enable if items have percent widths
  // Disable if items have pixel widths, like images
 
  prevNextButtons: false,
  // creates and enables buttons to click to previous & next cells
 
  pageDots: true,
  // create and enable page dots
 
  resize: true,
  // listens to window resize events to adjust size & positions
 
  rightToLeft: false,
  // enables right-to-left layout
 
  setGallerySize: false,
  // sets the height of gallery
  // disable if gallery already has height set with CSS
 
  watchCSS: false,
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }
 
  wrapAround: true
  // at end of cells, wraps-around to first for infinite scrolling
 
});