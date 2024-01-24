import Image from "next/image";
import styles from "./page.module.css";
import Add from "./components/add";
import Display from "./components/display";

export default function Home() {
  return (
    <main className={styles.main}>

      <Add/>
      <Display/>
     </main>
  );
}
