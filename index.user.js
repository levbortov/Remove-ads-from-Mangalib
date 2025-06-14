// ==UserScript==
// @name             Remove ads from Mangalib
// @name:ru          Удалить рекламу с главной Мангалиба
// @version          1.3
// @description      Deletes the slider with the advertisement on the main page of the website.
// @description:ru   Удаляет слайдер с рекламой на главной странице сайта.
// @match            https://mangalib.me/
// @match            https://mangalib.me/ru?section=home-updates
// @run-at           document-idle
// @grant            none
// ==/UserScript==

const PARENT_SELECTOR = '#app > div.page > div.container.container_offset.fade > div';
const TARGET_SELECTOR = 'div.section[data-home-block="slider"]';

(function() {
    'use strict';

    function removeTarget() {
        const parent = document.querySelector(PARENT_SELECTOR);
        const target = parent?.querySelector(TARGET_SELECTOR);
        if (target) {
            target.remove();
            return true;
        }
        return false;
    }

    if (!removeTarget()) {
        const observer = new MutationObserver(() => {
            if (removeTarget()) observer.disconnect();
        });
        observer.observe(document, { childList: true, subtree: true });
    }
})();
