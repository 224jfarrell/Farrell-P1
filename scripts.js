const fonts = ['Agbalumo', 'Bebas Neue', 'Edu TAS Beginner', 'Graduate', 'IBM Plex Sans', 'Josefin Slab', 'Linefont', 'Monofur', 'Montserrat', 'Nabla', 'Noto Sans Japanese', 'Noto Sans Korean', 'Noto Serif Simplified Chinese', 'Nunito Sans', 'Open Sans', 'Roboto Mono'];
let fontResult;
let i = 0;
let A = document.getElementById('header');
function fontOrder(font){
    if(i < fonts.length){
        i++;
        font = fonts[i - 1];
        console.log(font);
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
            console.log('nothing');
            break;
    }
}
setInterval(fontOrder, 100);