const themeSwitcher = document.querySelector('#themeSwitcher');

navigator.geolocation.getCurrentPosition((position) => {
    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);
    if (isDay(sunset, sunrise)) {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }

    function isDay(sunset, sunrise) {
        const nowHours = new Date().getHours();
        return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
    }
})

const defaultTheme = localStorage.getItem('theme') || 'theme-light';

setTheme(defaultTheme); //default light krdiye

themeSwitcher.addEventListener('change', (e) => {
    setTheme(e.target.value);
});

function setTheme(theme){
    theme = theme || 'theme-light'; //empty h toh theme false hojayega automatically themelight aajayega
    document.documentElement.className = theme; //docment element se direct html tag ko pkd liye hain
    localStorage.setItem('theme', theme) //key is theme and then theme jo receive horha wo local storage mein store krrhe hain
    themeSwitcher.value = theme;

}