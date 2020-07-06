import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    @font-face {font-family: "Postmates Std";
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_regular-webfont.76d16a42c0e8ae6a71902060dfb96126.v2.eot"); /* IE9*/
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_regular-webfont.76d16a42c0e8ae6a71902060dfb96126.v2.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_regular-webfont.76d16a42c0e8ae6a71902060dfb96126.v2.woff2") format("woff2"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_regular-webfont.76d16a42c0e8ae6a71902060dfb96126.v2.woff") format("woff"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_regular-webfont.76d16a42c0e8ae6a71902060dfb96126.v2.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_regular-webfont.76d16a42c0e8ae6a71902060dfb96126.v2.svg#Postmates Std Medium") format("svg"); /* iOS 4.1- */
    font-weight: 200;
    }

    @font-face {font-family: "Postmates Std";
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.eot"); /* IE9*/
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.woff2") format("woff2"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.woff") format("woff"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.svg#Postmates Std Medium") format("svg"); /* iOS 4.1- */
    font-weight: 400;
    }

    @font-face {font-family: "Postmates Std";
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.eot"); /* IE9*/
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.woff2") format("woff2"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.woff") format("woff"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.svg#Postmates Std Medium") format("svg"); /* iOS 4.1- */
    font-weight: bold;
    }

    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }

    body *, body *::before, body *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Postmates Std", 'Helvetica Neue', sans-serif;
    outline: none;
    }


    /* CLEAR FIX */
    .clearfix::after {
    display: block;
    content: '';
    clear: both;
    }

    button {
    cursor: pointer;
    }

    /* reset css */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export default globalStyles;
