import type { NextPage } from "next";
import { PrimaryButton, SecondaryButton } from "ui/button";
import { Casita } from "ui/icons";
import { CasitaVioleta, CasitaGreen } from "ui/icons";

const Home: NextPage = () => {
  return (
    <div>
      <PrimaryButton text="hola"></PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <Casita></Casita>
      <CasitaVioleta></CasitaVioleta>
      <CasitaGreen></CasitaGreen>
      <SecondaryButton>Secondary</SecondaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
    </div>
  );
};

export default Home;
