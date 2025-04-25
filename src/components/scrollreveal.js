ScrollReveal({ reset: false });

ScrollReveal().reveal('.fade-in', { 
  duration: 2000,
  delay: 500,
});

ScrollReveal().reveal('#left-fade-in', {
  duration: 2000,
  delay: 500,
  origin: 'left',
  distance: '50px'
});

ScrollReveal().reveal('#right-fade-in', {
  duration: 2000,
  delay: 500,
  origin: 'right',
  distance: '50px'
});

ScrollReveal().reveal('#top-fade-in', {
  duration: 2000,
  delay: 500,
  origin: 'top',
  distance: '50px'
});

ScrollReveal().reveal('#bottom-fade-in', {
  duration: 2000,
  delay: 500,
  origin: 'bottom',
  distance: '50px'
});

