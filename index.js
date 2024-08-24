class Project {
    constructor(name, description, thumbnail, logo, github, chrome, firefox) {
      this.name = name;
      this.description = description;
      this.thumbnail = thumbnail;
      this.logo = logo;
      this.github = github;
      this.chrome = chrome;
      this.firefox = firefox;
    }
  }

const projects = {
    "Chrome / Firefox extensions": {
        'logo': './assets/browser.png',
        'items': [
            new Project(
                'Selecton', 
                'Selecton provides popup with actions on text selection', 
                'https://github.com/emvaized/selecton-extension/blob/master/screenshots/screenshot.png?raw=true', 
                'https://github.com/emvaized/selecton-extension/raw/master/icons/logo-new.png', 
                'https://github.com/emvaized/selecton-extension/tree/master', 
            ),
            new Project(
                'Circle Mouse Gestures', 
                'Mouse gestures with visual representation of actions', 
                'https://github.com/emvaized/circle-mouse-gestures/blob/master/screenshots/screenshot.png?raw=true', 
                'https://github.com/emvaized/circle-mouse-gestures/blob/master/icons/icon-new.png?raw=true', 
                'https://github.com/emvaized/circle-mouse-gestures/blob/master/',
            ),
            new Project(
                'Google Tweaker', 
                'Customize the Google Search page', 
                'https://lh3.googleusercontent.com/dHV7KuW2w8ZhsYUCiQD9NY5s7bkKML2kmph7ucVoKkWXmful7OGyaACjOd76-9hW8cYQBwbaI-cXsgOycA-Cai6vNHA=s1280-w1280-h800',
                'https://github.com/emvaized/google-tiles-extension/blob/master/icons/icon-new.png?raw=true', 
                'https://github.com/emvaized/google-tiles-extension', 
            ),
            new Project(
                'Open in Popup Window', 
                'Allows to open any links and images in a popup window', 
                'https://github.com/emvaized/open-in-popup-window-extension/blob/main/screenshots/context-menu.png?raw=true', 
                'https://github.com/emvaized/open-in-popup-window-extension/blob/main/icon.png?raw=true', 
                'https://github.com/emvaized/open-in-popup-window-extension',
            ),
        ],
    },

    'Kwin scripts for KDE Plasma': {
        'logo': './assets/kde-logo.png',
        'items': [
            new Project(
                'KDE Snap Assist',
                'Suggests other window thumbnails on snap',
                'https://github.com/emvaized/kde-snap-assist/blob/main/assets/screenshot.png?raw=true',
                'https://github.com/emvaized/kde-snap-assist/blob/main/assets/logo.png?raw=true',
                'https://github.com/emvaized/kde-snap-assist/'
            )
        ],
    },

    'Windows': {
        'logo': './assets/windows-logo.png',
        'items': [
            new Project(
                'Modern Inverted Mouse Cursors',
                'Recreates standard inverted mouse cursors in Windows with a modern design',
                'https://github.com/emvaized/modern_inverted_mouse_cursors/blob/main/screenshots/all_cursors_with_title.png?raw=true',
                '',
                'https://github.com/emvaized/modern_inverted_mouse_cursors/'
            )
        ],
    }
}

document.addEventListener("DOMContentLoaded", init);

function init(){
    const keys = Object.keys(projects);

    keys.forEach(function(category){
        let card = document.createElement('div');
        card.className = 'card';
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

        projects[category].items.forEach(function(project){
            const projectCard = document.createElement('li');
            projectCard.className = 'inner';

            if (project.thumbnail) {
                const thumbnail = document.createElement('img');
                thumbnail.className = 'thumbnail';
                thumbnail.height = '150px';
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

            if (project.github){
                const link = document.createElement('a');
                link.href = project.github;
                link.appendChild(projectCard);
                scroller.appendChild(link);
            } else {
                scroller.appendChild(projectCard)
            }
            // projectCard.onclick = function(){window.open(project.github, '_blank')}
    
        })
        // container.appendChild(card)
        document.body.insertBefore(card, document.getElementById('last-card'))
    })
}



