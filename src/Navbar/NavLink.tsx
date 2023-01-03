import React from 'react'

export default function NavLink({ link, title }: any) {
    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    )
}
