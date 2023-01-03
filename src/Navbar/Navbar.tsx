import React from 'react'

export default function Navbar({ children }: any) {
    return (
        <nav style={{ display: "flex" }}>
            <h3>Hello There</h3>
            <ul style={{ display: "flex", listStyle:"none" }}>
                {children}
            </ul>
        </nav>
    )
}
