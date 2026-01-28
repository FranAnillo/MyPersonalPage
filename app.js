
const languageSelector = document.querySelector('.language-selector');
const-
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('.language-selector');
    if(languageSelector) {
        languageSelector.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const lang = event.target.getAttribute('data-lang');
                setLanguage(lang);
            }
        });
    }

    setLanguage('es'); // Set default language
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    if(lang === 'en') {
        document.title = translations.en.title;
    } else if (lang === 'fr') {
        document.title = translations.fr.title;
    } else {
        document.title = translations.es.title;
    }
}
