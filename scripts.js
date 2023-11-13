const fonts = ['Agbalumo', 'Bebas Neue', 'Edu TAS Beginner', 'Graduate', 'IBM Plex Sans', 'Josefin Slab', 'Linefont', 'Monofur', 'Montserrat', 'Nabla', 'Noto Sans Japanese', 'Noto Sans Korean', 'Noto Serif Simplified Chinese', 'Nunito Sans', 'Open Sans', 'Roboto Mono'];
let fontResult;
let int;
let i = 0;
let j = 0;
let k = 0;
let A = document.getElementById('header');
let B = document.getElementById('prog');
let C = document.getElementById('tooltips');
let D = document.getElementById('percent');
let E = document.getElementById('to-hide');
let F = document.getElementById('change');
let G = document.getElementById('unhide');
let H = document.getElementById('unhide-s');

function fontOrder(font){
    if(i < fonts.length){
        i++;
        font = fonts[i - 1];
    }
    if(i == fonts.length){
        setTimeout(i = 0, 500);
    }
    switch(font){
        case 'Agbalumo':
            A.style.fontFamily = "'Agbalumo', script";
            A.innerText = "----Joseph Farrell Student Portfolio (YEAR 3)----";
            break;
        case 'Bebas Neue':
            A.style.fontFamily = "'Bebas Neue', sans-serif";
            break;
        case 'Edu TAS Beginner':
            A.style.fontFamily = "'Edu TAS Beginner', sans-serif";
            break;
        case 'Graduate':
            A.style.fontFamily = "'Graduate', serif";
            break;
        case 'IBM Plex Sans':
            A.style.fontFamily = "'IBM Plex Sans', sans-serif";
            break;
        case 'Josefin Slab':
            A.style.fontFamily = "'Josefin Slab', serif";
            break;
        case 'Linefont':
            A.style.fontFamily = "'Linefont', script";
            break;
        case 'Monofur':
            A.style.fontFamily = "'Monofur', monospace";
            break;
        case 'Montserrat':
            A.style.fontFamily = "'Montserrat', sans-serif";
            break;
        case 'Nabla':
            A.style.fontFamily = "'Nabla', script";
            break;
        case 'Noto Sans Japanese':
            A.style.fontFamily = "'Noto Sans JP', sans-serif";
            A.innerText = "----ジョセフ・ファレルの学生ポートフォリオ (3 年生)----";
            break;
        case 'Noto Sans Korean':
            A.style.fontFamily = "'Noto Sans KR', sans-serif";
            A.innerText = "----Joseph Farrell 학생 포트폴리오(3학년)----";
            break;
        case 'Noto Serif Simplified Chinese':
            A.style.fontFamily = "'Noto Serif SC', serif";
            A.innerText = "----约瑟夫·法雷尔学生作品集(三年级)----";
            break;
        case 'Nunito Sans':
            A.style.fontFamily = "'Nunito Sans', sans-serif";
            A.innerText = "----Joseph Farrell Student Portfolio (YEAR 3)----";
            break;
        case 'Open Sans':
            A.style.fontFamily = "'Open Sans', sans-serif";
            break;
        case 'Roboto Mono':
            A.style.fontFamily = "'Roboto Mono', monospace";
            A.innerText = "----Портфоліо студента Джозефа Фаррелла (3 курс)----"
            break;
        default:
            break;
    }
}

function fontLoad(font){
    if(k <= fonts.length){
        k++;
        font = fonts[k - 1];
    }
    if(k == fonts.length + 1){
        font = "Segoe UI";
    }
    switch(font){
        case 'Agbalumo':
            C.style.fontFamily = "'Agbalumo', script";
            break;
        case 'Bebas Neue':
            C.style.fontFamily = "'Bebas Neue', sans-serif";
            break;
        case 'Edu TAS Beginner':
            C.style.fontFamily = "'Edu TAS Beginner', sans-serif";
            break;
        case 'Graduate':
            C.style.fontFamily = "'Graduate', serif";
            break;
        case 'IBM Plex Sans':
            C.style.fontFamily = "'IBM Plex Sans', sans-serif";
            break;
        case 'Josefin Slab':
            C.style.fontFamily = "'Josefin Slab', serif";
            break;
        case 'Linefont':
            C.style.fontFamily = "'Linefont', script";
            break;
        case 'Monofur':
            C.style.fontFamily = "'Monofur', monospace";
            break;
        case 'Montserrat':
            C.style.fontFamily = "'Montserrat', sans-serif";
            break;
        case 'Nabla':
            C.style.fontFamily = "'Nabla', script";
            break;
        case 'Noto Sans Japanese':
            C.style.fontFamily = "'Noto Sans JP', sans-serif";
            C.innerText = "フォントを読み込んでいます...";
            break;
        case 'Noto Sans Korean':
            C.style.fontFamily = "'Noto Sans KR', sans-serif";
            C.innerText = "글꼴 로드 중...";
            break;
        case 'Noto Serif Simplified Chinese':
            C.style.fontFamily = "'Noto Serif SC', serif";
            C.innerText = "正在加载字体...";
            break;
        case 'Nunito Sans':
            C.style.fontFamily = "'Nunito Sans', sans-serif";
            C.innerText = "Loading fonts...";
            break;
        case 'Open Sans':
            C.style.fontFamily = "'Open Sans', sans-serif";
            break;
        case 'Roboto Mono':
            C.style.fontFamily = "'Roboto Mono', monospace";
            C.innerText = "Завантаження шрифтів..."
            break;
        case 'Segoe UI':
            C.style.fontFamily = "'Segoe UI', sans-serif";
            C.innerText = 'Fonts loaded!';
            k = 210;
            clearInterval(int);
        default:
            break;
    }
}

function load(){
    if(j < 1000){
        j++;
        B.style.width = `${j / 10}%`
        D.innerText = `${j / 10}%`
    }
    if(j == 100){
        C.innerText = "Loading fonts..."
        int = setInterval(fontLoad, 350);
    }
    if(j == 750){
        C.innerText = "Almost Done!"
    }
    if(j == 1000){
        E.style.animationName = 'fadeOut';
        E.style.animationDuration = "1.5s";
        E.style.animationFillMode = "forwards";
        E.style.animationTimingFunction = "ease-in-out";
        F.style.animationName = 'bg';
        F.style.animationDuration = '1.5s'
        F.style.animationDelay = '1s';
        F.style.animationFillMode = 'forwards';
        F.style.animationTimingFunction = 'ease-in-out';
        G.style.animationName = 'fadeIn';
        G.style.animationDelay = "1s";
        G.style.animationDuration = "1.5s";
        G.style.animationFillMode = "forwards";
        G.style.animationTimingFunction = 'ease-in-out';
        H.style.animationName = 'fadeIn-s';
        H.style.animationDelay = "1s";
        H.style.animationDuration = "1.5s";
        H.style.animationFillMode = "forwards";
        H.style.animationTimingFunction = 'ease-in-out';
    }
}

function skip(){
    j = 1000;
}

setInterval(fontOrder, 150);
setInterval(load, 13);