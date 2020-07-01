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
    }

    @font-face {font-family: "Postmates Std";
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.eot"); /* IE9*/
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.woff2") format("woff2"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.woff") format("woff"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_medium-webfont.c6387854ff992fdbca6d851036ae9dfe.v2.svg#Postmates Std Medium") format("svg"); /* iOS 4.1- */
    }

    @font-face {font-family: "Postmates Std";
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.eot"); /* IE9*/
    src: url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.woff2") format("woff2"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.woff") format("woff"), /* chrome firefox */
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://buyer-static-gcp.postmates.com/dist/prod/postmates_std_bold-webfont.bb9e7af73aa6ec20ca2b91dedd91a0fe.v2.svg#Postmates Std Medium") format("svg"); /* iOS 4.1- */
    }

    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: "Postmates Std", 'Helvetica Neue', sans-serif;
        font-size: 14px;
    }
`;

export default globalStyles;
