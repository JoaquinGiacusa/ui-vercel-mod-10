import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";

//esto hace que los styled components se cargen antes que todo lo otro para no ver el parpadeo
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        /> */}
          {/*base.css */}
          {/* <link rel="stylesheet" href="/base.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

//lo de aca va directo al sever, no se analiza mas
//aca se ponene fuentes para toda la pagina
//en _app si se analaiza cada vez que se entra a una page

// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
//           rel="stylesheet"
//         /> */}
//         {/*base.css */}
//         {/* <link rel="stylesheet" href="/base.css" /> */}
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
