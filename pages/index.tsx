import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import LayOut from "@/layout/layout";
import RunningCatContainer from "@/components/running-cat-container";
import { RunningCatRail } from "@/components/running-cat-rail";
import RunningCat from "@/components/running-cat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayOut>
      <RunningCatContainer>
        <RunningCatRail>
          <RunningCat />
        </RunningCatRail>
      </RunningCatContainer>
    </LayOut>
  );
}
