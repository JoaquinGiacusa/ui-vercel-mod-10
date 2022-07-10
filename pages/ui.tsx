import { Title, Subtitle, Body } from "ui/typography";
import styled from "styled-components";

const BodyRojo = styled(Body)`
  color: red;
`;

export default function UiPage() {
  return (
    <div>
      <Title>Soy el Titulo</Title>
      <Subtitle>El subtitulo va aca</Subtitle>
      <Body>
        Para este componente elegí 3 íconos de https://feathericons.com/ y
        descargá los svgs. Ubicá los svgs dentro de la carpeta de este
        componente e importalos desde el index.tsx de ui/icons. Exportá todos
        tus íconos nuevamente.
      </Body>
      <BodyRojo>
        Esto es importante para que el resto de tu sistema no se entere que está
        importando un svg sino un componente de React estandar.
      </BodyRojo>
    </div>
  );
}
