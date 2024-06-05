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
                <meta
                    httpEquiv="content-script-type"
                    content="text/javascript"
                />
                <meta httpEquiv="content-style-type" content="text/css" />
                <meta httpEquiv="content-language" content="en-GB" />
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
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    crossOrigin="anonymous"
                />
                <Script
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossOrigin="anonymous"
                    async={false} // Ensure jQuery loads synchronously
                />
                <Script data-goatcounter="https://lukelifts.goatcounter.com/count" async={false} src="//gc.zgo.at/count.js"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
