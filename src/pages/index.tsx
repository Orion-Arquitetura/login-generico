import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <main className={styles.main}>
        <form action="url" method="POST">
          <fieldset className={styles.fieldsetStyle}>
            <legend>Login</legend>
            <label>
              Email
              <input
                type="email"
                required
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                required
              />
            </label>

            <button type="submit">Entrar</button>
          </fieldset>
        </form>
      </main>
    </>
  );
}
