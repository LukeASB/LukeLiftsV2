import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        /> */}
        {/* <link rel="stylesheet" href="css/globals.css" /> */}
      </Head>
      <body>
        {/* <div className="full-screen-container"> */}
          <Main />
        {/* </div> */}
        <NextScript />
        {/* <!-- Bootstrap JS and dependencies --> */}
        {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}
      </body>
    </Html>
  );
}
