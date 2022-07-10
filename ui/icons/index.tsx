import HomeIcon from "./home.svg";
import styled from "styled-components";

export function Casita({ className }: any) {
  return <HomeIcon className={className}></HomeIcon>;
}

export const CasitaVioleta = styled(Casita)`
  stroke: violet;
`;

export const CasitaGreen = styled(HomeIcon)`
  stroke: green;
`;
