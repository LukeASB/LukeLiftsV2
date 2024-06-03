import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
                />
                <meta
                    name="bingbot"
                    content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
                />
                <link rel="canonical" href="https://www.lukelifts.com/" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <meta
                    http-equiv="content-script-type"
                    content="text/javascript"
                />
                <meta http-equiv="content-style-type" content="text/css" />
                <meta http-equiv="content-language" content="en-GB" />
                <meta name="author" content="LukeLifts" />
                <meta
                    name="description"
                    content="LukeLifts provides Personal Training Programmes and Fitness Blog content. I help people with their fitness related challenges and to achieve extraordinary goals."
                />
                <meta
                    name="keywords"
                    content="LukeLifts, fitness, exercise, bodybuilding, powerlifting, weightlifting, personal training, PT"
                />
                <meta
                    property="og:title"
                    content="LukeLifts Personal Training Programmes &#124; LukeLifts Blog"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="LukeLifts" />
                <meta property="og:locale" content="en_GB" />
                <link
                    rel="shortcut icon"
                    href="../assets/favicon.png"
                    type="image/x-icon"
                />
                <Script
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossOrigin="anonymous"
                    async={false} // Ensure jQuery loads synchronously
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
