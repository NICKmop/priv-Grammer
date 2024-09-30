"use client"
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("");

interface componentsType {
    children?: React.ReactNode;
    title?: string;

}

const UcStudy = () => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <label>
                <Form />
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={(e) => {
                        setTheme(e.target.checked ? "dark" : "light")
                    }}
                />
                Use Dark Mode
            </label>
        </ThemeContext.Provider>
    )
}

function Form({ children }: componentsType) {
    return (
        <Panel title="Welcome">
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    );
}

function Panel({ title, children }: componentsType) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children }: componentsType) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    );
}
export default UcStudy;