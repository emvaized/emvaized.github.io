class Project {
    constructor(name, description, thumbnail, logo, github, badges) {
      this.name = name;
      this.description = description;
      this.thumbnail = thumbnail;
      this.logo = logo;
      this.github = github;
      this.badges = badges;
    }
  }

const projects = {
    "Browser extensions (Chrome and Firefox)": {
        'logo': './assets/browser.png',
        'items': [
            /// name, description, screenshot, icon, link
            new Project(
                'SelectON', 
                'Provides popup with actions on text selection', 
                'https://github.com/emvaized/selecton-extension/blob/master/screenshots/screenshot.png?raw=true', 
                'https://github.com/emvaized/selecton-extension/raw/master/src/assets/icons/logo-new.png', 
                'https://github.com/emvaized/selecton-extension/tree/master', 
                [
                    'https://img.shields.io/chrome-web-store/users/pemdbnndbdpbelmfcddaihdihdfmnadi?label=users&logo=googlechrome&logoColor=white&color=blue', 
                    'https://img.shields.io/chrome-web-store/rating/pemdbnndbdpbelmfcddaihdihdfmnadi', 
                ]
            ),
            new Project(
                'Circle Mouse Gestures', 
                'Mouse gestures with visual representation of actions', 
                'https://github.com/emvaized/circle-mouse-gestures/blob/master/screenshots/screenshot.png?raw=true', 
                'https://github.com/emvaized/circle-mouse-gestures/blob/master/src/assets/icons/icon-new.png?raw=true', 
                'https://github.com/emvaized/circle-mouse-gestures/blob/master/',
                [
                    'https://img.shields.io/chrome-web-store/users/kkknhbbfjlibfjagilggkcelmcobgefa?label=users&logo=googlechrome&logoColor=white&color=blue',
                    'https://img.shields.io/chrome-web-store/rating/kkknhbbfjlibfjagilggkcelmcobgefa'
                ]
            ),
            new Project(
                'Open in Popup Window', 
                'Allows to open any links and images in a popup window', 
                'https://github.com/emvaized/open-in-popup-window-extension/blob/main/screenshots/context-menu.png?raw=true', 
                'https://github.com/emvaized/open-in-popup-window-extension/blob/main/src/assets/icon.png?raw=true', 
                'https://github.com/emvaized/open-in-popup-window-extension',
                [
                    'https://img.shields.io/chrome-web-store/users/gmnkpkmmkhbgnljljcchnakehlkihhie?label=users&logo=googlechrome&logoColor=white&color=blue)](https://chrome.google.com/webstore/detail/open-in-popup-window/gmnkpkmmkhbgnljljcchnakehlkihhie',
                    'https://img.shields.io/amo/users/open-in-popup-window?color=%23FF6611&label=users&logo=Firefox'
                ]
            ),
            new Project(
                'Google Tweaker', 
                'Customize the Google Search page', 
                'https://lh3.googleusercontent.com/dHV7KuW2w8ZhsYUCiQD9NY5s7bkKML2kmph7ucVoKkWXmful7OGyaACjOd76-9hW8cYQBwbaI-cXsgOycA-Cai6vNHA=s1280-w1280-h800',
                'https://github.com/emvaized/google-tiles-extension/blob/master/icons/icon-new.png?raw=true', 
                'https://github.com/emvaized/google-tiles-extension',
                [
                    'https://img.shields.io/chrome-web-store/users/cjbgjibpaopnjfbhipjfckeodbaednbg?label=users&logo=googlechrome&logoColor=white&color=blue',
                    'https://img.shields.io/chrome-web-store/rating/cjbgjibpaopnjfbhipjfckeodbaednbg'
                ]
            ),
            new Project(
                'Text reflow on zoom', 
                'Reflows all text after a pinch gesture on a phone', 
                'https://github.com/emvaized/text-reflow-on-zoom-mobile/blob/main/assets/illustration.gif?raw=true', 
                'https://github.com/emvaized/text-reflow-on-zoom-mobile/blob/main/src/icon.png?raw=true', 
                'https://github.com/emvaized/text-reflow-on-zoom-mobile',
                [
                    'https://img.shields.io/amo/users/text-reflow-on-zoom-mobile?color=%23FF6611&label=Firefox+users&logo=Firefox)](https://addons.mozilla.org/firefox/addon/text-reflow-on-zoom-mobile/',
                    'https://img.shields.io/amo/rating/text-reflow-on-zoom-mobile'
                ]
            ),
            new Project(
                'Linkover', 
                'Loads info about any link on hover or long click', 
                'https://github.com/emvaized/linkover-extension/blob/main/screenshots/4.png?raw=true', 
                'https://github.com/emvaized/linkover-extension/blob/main/src/assets/icon.png?raw=true', 
                'https://github.com/emvaized/linkover-extension',
                [
                    'https://img.shields.io/chrome-web-store/users/hnjipbfndeondflbdhomiiohbmkjobfc?label=users&logo=googlechrome&logoColor=white&color=blue',
                    'https://img.shields.io/amo/users/linkover?color=%23FF6611&label=users&logo=Firefox'
                ]
            ),
        ],
    },

    'Windows': {
        'logo': './assets/windows-logo.png',
        'items': [
            new Project(
                'Modern Inverted Mouse Cursors',
                'Recreates standard inverted mouse cursors in Windows with a modern design',
                'https://github.com/emvaized/modern_inverted_mouse_cursors/blob/main/screenshots/all_cursors_with_title.png?raw=true',
                'https://github.com/emvaized/modern_inverted_mouse_cursors/blob/main/screenshots/illustration_of_inversion.gif?raw=true',
                'https://github.com/emvaized/modern_inverted_mouse_cursors/',
                [
                    'https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbackend.deviantart.com%2Foembed%3Furl%3Dhttps%3A%2F%2Fwww.deviantart.com%2Femvaized%2Fart%2FModern-Inverted-Mouse-Cursors-for-Windows-10-11-1016675934&query=%24.community.statistics._attributes.views&logo=DeviantArt&logoColor=00e59b&label=views&labelColor=black&color=grey',
                    'https://img.shields.io/github/downloads/emvaized/modern_inverted_mouse_cursors/total?label=downloads'
                ]
            )
        ],
    },

    'KDE Plasma': {
        'logo': './assets/kde-logo.png',
        'items': [
            new Project(
                'KDE Snap Assist',
                'KWin script which suggests other windows on window snap',
                'https://github.com/emvaized/kde-snap-assist/blob/main/assets/screenshot.png?raw=true',
                'https://github.com/emvaized/kde-snap-assist/blob/main/assets/logo.png?raw=true',
                'https://github.com/emvaized/kde-snap-assist/',
                [
                    'https://img.shields.io/badge/dynamic/xml?url=https%3A%2F%2Fapi.kde-look.org%2Focs%2Fv1%2Fcontent%2Fdata%2F1875687&query=%2Focs%2Fdata%2Fcontent%2Fdownloads&logo=kde&label=downloads'
                ]
            )
        ],
    },

}

document.addEventListener("DOMContentLoaded", init);

function init(){
    const keys = Object.keys(projects);

    // keys.forEach(function(category){
    for(let i = 0, l = keys.length; i < l; i++){
        const category = keys[i];

        let card = document.createElement('div');
        card.className = 'card';
        card.style.opacity = 0;

        const categoryTitle = document.createElement('h4');
        categoryTitle.className = 'category-title';
        categoryTitle.innerText = category;
        card.appendChild(categoryTitle);

        if (projects[category].logo){
            const categoryLogo = document.createElement('img');
            categoryLogo.className = 'logo';
            categoryLogo.src = projects[category].logo;
            categoryTitle.prepend(categoryLogo)
        }

        const scroller = document.createElement('ul');
        scroller.className = 'horizontal-list';
        card.appendChild(scroller)

        /// scroll buttons
        if (projects[category].items.length > 1){
            const leftArrow = document.createElement('div');
            leftArrow.className = 'arrow arrow-left';
            leftArrow.title = 'Scroll left';

            const iconBack = document.createElement('img');
            iconBack.className = 'arrow-icon';
            iconBack.src = './assets/arrow-forward-ios.png';
            iconBack.style.transform = 'rotate(180deg) translate(2px)';
            leftArrow.appendChild(iconBack);
            card.appendChild(leftArrow);

            const rightArrow = document.createElement('div');
            rightArrow.className = 'arrow arrow-right';
            rightArrow.title = 'Scroll right';

            const iconForward = document.createElement('img');
            iconForward.className = 'arrow-icon';
            iconForward.src = './assets/arrow-forward-ios.png';
            rightArrow.appendChild(iconForward);
            card.appendChild(rightArrow);

            leftArrow.onclick = function(){
                scroller.scrollBy({
                    left: -230,
                    behavior: "smooth",
                });
            }
            rightArrow.onclick = function(){
                scroller.scrollBy({
                    left: 230,
                    behavior: "smooth",
                })
            }
        }

        function onCarouselScroll(){
            const leftArrow = card.querySelector('.arrow-left');
            const rightArrow = card.querySelector('.arrow-right');
            if (scroller.scrollLeft > 10){
                leftArrow.style.visibility = 'visible';
            } else {
                leftArrow.style.visibility = 'hidden';
            }
            if (scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 40){
                rightArrow.style.visibility = 'visible';
            } else {
                rightArrow.style.visibility = 'hidden';
            }
        }
        scroller.onscroll = onCarouselScroll;
        setTimeout(onCarouselScroll, 100);

        projects[category].items.forEach(function(project){
            const projectCard = document.createElement('li');
            projectCard.className = 'inner';

            if (project.thumbnail) {
                const thumbnail = document.createElement('img');
                thumbnail.className = 'thumbnail';
                thumbnail.height = '150px';
                thumbnail.loading = 'lazy';
                thumbnail.src= project.thumbnail;
                projectCard.appendChild(thumbnail);
            }

            const title = document.createElement('div');
            title.className = 'title';
            title.innerText = project.name;
            projectCard.appendChild(title);
            if (project.logo) {
                const logo = document.createElement('img');
                logo.className = 'logo';
                logo.src = project.logo;
                title.prepend(logo)
            }

            if (project.description) {
                const description = document.createElement('span');
                description.innerText = project.description;
                description.className = 'description';
                projectCard.appendChild(description);
            }

            if (project.badges) {
                const margin = document.createElement('br');
                projectCard.appendChild(margin);
                project.badges.forEach(function(badge){
                    const img = document.createElement('img');
                    img.src = badge;
                    img.className = 'badge';
                    img.loading = 'lazy';
                    projectCard.appendChild(img);
                })
            }

            if (project.github){
                const link = document.createElement('a');
                link.href = project.github;
                link.target = '_blank';
                link.appendChild(projectCard);
                scroller.appendChild(link);
            } else {
                scroller.appendChild(projectCard)
            }
            // projectCard.onclick = function(){window.open(project.github, '_blank')}
    
        })
        // container.appendChild(card)
        document.body.insertBefore(card, document.getElementById('last-card'))
    }

    // document.addEventListener('scroll', function(){
    //     const scrollTop = window.scrollY; 
    //     const docHeight = document.documentElement.scrollHeight; 
    //     const winHeight = window.innerHeight; 
    //     const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    //     const waves = document.querySelector('.waves');
    //     waves.style.height = 50.0 + (40.0 * Math.max(0, ( Math.round(scrollPercent) / 100))) + '%';
    // })

    /// Animate all cards
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++){
        const card = cards[i];
        card.style.zIndex = 6 - i;
        if (i > 0) {
            card.style.animationDelay = ((i - 1) / 4) + 's';
            card.classList.add('animated-card');
            setTimeout(function(){
                card.style.opacity = 1;
            }, ((i / 4) * 1000));
        }
    }
}