import '../styles/style.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-grid.min.css';
import '../bootstrap.bundle.min.js';
import {
  renderNavbar, renderShow, addEventToCommentBtn, displayLikes,
} from './renderDOM.js';

document.addEventListener('DOMContentLoaded', async () => {
  await renderNavbar();
  await renderShow();
  await addEventToCommentBtn();
  await displayLikes();
});
