import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navbar}>
        Navigation Bar - CU Supplies
        <input
          style={{
            width: "50%",
            marginLeft: "5%",
            marginRight: "5%",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "30px",
          }}
        ></input>
        <div
          style={{
            marginRight: "5%",
          }}
        >
          Name
        </div>
        <div
          style={{
            marginRight: "5%",
          }}
        >
          Cart
        </div>
      </div>
      <div className={styles.carousel}>
        <div>Need school supplies? Shop now!</div>
        <div> big picture of school supplies here</div>
      </div>
      <main className={styles.main}>
        Fill this up with some default product pictures
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
