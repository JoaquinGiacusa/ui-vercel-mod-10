import { TextField } from "ui/textfield";
import Head from "next/head";

export default function Critical() {
  return (
    <div>
      <Head>
        <title>Critical Page</title>
      </Head>
      <TextField></TextField>
      <div className="title">Hola</div>
      <link rel="stylesheet" href="/regular.css" />
    </div>
  );
}

// export default function Critical() {
//   return <div>HOla </div>;
// }
