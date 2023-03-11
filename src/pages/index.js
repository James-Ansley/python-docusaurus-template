import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeEditor from "@site/src/components/CodeEditor";


import styles from './index.module.css';


const code = `def foo():
    print("How much foo")
    print("would a foo bar bar")
    print("if a foo bar could bar foo?")
    
    
def bar():
    print("A foo bar would bar")
    print("as much foo as a foo bar could bar")
    print("if a foo bar could bar foo.")
    

foo()
print()
bar()
`


export default function Home() {
    return (
        <Layout title="Python Docusaurus Template">
            <main>
                <div className={styles.heroContainer}>
                    <h1>Python Docusaurus Template</h1>
                    <p className={styles.tagline}>A no-nonsense markdown-only template with runnable and editable Python code blocks</p>
                    <Link className={"button button--primary"} href={"docs/intro"}>Get Started</Link>
                    <div className={styles.codeEditorWrapper}>
                        <CodeEditor code={code} showButtons/>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
