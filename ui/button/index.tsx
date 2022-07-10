import styles from "./styles.module.css";
import styled from "styled-components";

type PrimatyButtonProps = {
  text: string;
};

export const BaseButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export function PrimaryButton({ text }: any) {
  return <BaseButton>{text}</BaseButton>;
}

export const SecondaryButton = styled(BaseButton)`
  background: palevioletred;
`;
