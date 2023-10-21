import Head from "next/head"
import 'semantic-ui-css/semantic.min.css'

export default function DefaultLayout({ children }) {
    return (<>
        <Head>
            <title>APP</title>
            
        </Head>
        <main>
            {children}
        </main>
    </>);
}