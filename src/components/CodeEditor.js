import React, {useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useColorMode} from '@docusaurus/theme-common';
import {usePython} from "react-py";

import "./CodeEditor.css"

const editorOptions = {
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    highlightActiveLine: false,
    showPrintMargin: false,
    showGutter: false,
};

const editorOnLoad = editor => {
    editor.renderer.setScrollMargin(10, 10, 0, 0);
    editor.renderer.setPadding(16);
    editor.moveCursorTo(0, 0);
};

export default function CodeEditor(props) {
    const [input, setInput] = useState(props.code.trimEnd());
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        setInput(props.code.trimEnd());
        setShowOutput(false)
    }, [props.code])

    const {
        runPython,
        stdout,
        stderr,
        isLoading,
        isRunning,
        interruptExecution,
    } = usePython();

    const {colorMode} = useColorMode();
    const isBrowser = useIsBrowser();

    let AceEditor = null;
    if (isBrowser) {
        AceEditor = require('react-ace').default;
        require("ace-builds/src-noconflict/mode-python");
        require("ace-builds/src-noconflict/theme-textmate");
        require("ace-builds/src-noconflict/theme-idle_fingers");
        require("ace-builds/src-noconflict/ext-language_tools");
    }

    function reset() {
        setShowOutput(false);
        setInput(props.code.trimEnd())
    }

    function run() {
        setShowOutput(true);
        return runPython(input);
    }

    function stop() {
        setShowOutput(false);
        interruptExecution();
    }

    function isMobile() {
        return !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    }

    return <BrowserOnly fallback={<pre style={{margin: 0, padding: "0.55rem"}}>{input}</pre>}>
        {
            () => <div className={"code-editor"}>
                <div
                    className={"code-editor-window"}
                    style={showOutput ? {borderRadius: ".25em .25em 0 0"} : {}}
                >
                    <AceEditor
                        value={input}
                        mode="python"
                        name="CodeBlock"
                        fontSize={'0.9rem'}
                        theme={colorMode === 'dark' ? "idle_fingers" : "textmate"}
                        onChange={(newValue, e) => setInput(newValue)}
                        width='100%'
                        maxLines={Infinity}
                        style={{backgroundColor: "rgba(0, 0, 0, 0)"}}
                        onLoad={editorOnLoad}
                        editorProps={{$blockScrolling: true}}
                        setOptions={editorOptions}
                    />
                    <div className={"button-container"}
                         style={props.showButtons || isMobile() ? {opacity: 100} : {}}>
                        {isLoading ?
                            (<span>Loading...</span>)
                            : (
                                <>
                                    {!isRunning ?
                                        <button
                                            className={"icon-button"}
                                            disabled={isLoading || isRunning}
                                            onClick={run}
                                            aria-label={"Run Code"}
                                            title={"Run Code"}
                                        >
                                            <span className={"icon lsf-icon"} title={"play"}></span>
                                        </button>
                                        :
                                        <button
                                            className={"icon-button"}
                                            disabled={isLoading || !isRunning}
                                            onClick={stop}
                                            aria-label={"Stop Code"}
                                            title={"Stop Code"}
                                        >
                                            <span className={"icon lsf-icon"} title={"stop"}></span>
                                        </button>
                                    }
                                    <button
                                        className={"icon-button"}
                                        onClick={reset}
                                        aria-label={"Reset Code Window"}
                                        title={"Reset Code Window"}
                                    >
                                        <span className={"icon lsf-icon"} title={"refresh"}></span>
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
                {showOutput && (
                    <pre className={"output-window"}>
                        <span>{stdout}</span>
                        <span style={{color: "var(--text-code-error)"}}>{stderr}</span>
                    </pre>
                )}
            </div>
        }
    </BrowserOnly>
}
