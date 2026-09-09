// config.jsx — single source of truth for the WhatsApp contact link.
//
// Loaded before every component, so changing the prefilled message here
// changes every CTA on the site at once. Previously the same link was
// hand-written in five files with four different messages, which is how
// they drifted apart.

const WA_NUMBER  = '353833604182';
const WA_MESSAGE = "Hi Ronan, I'm interested in starting with 1-1 coaching. What does it involve?";
const WA_LINK    = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

Object.assign(window, { WA_NUMBER, WA_MESSAGE, WA_LINK });
