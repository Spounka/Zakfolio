import React from 'react'

export default function NavLink({ link, title }: any) {
    return (
        <a className={'px-2 md:px-5 font-semibold text-slate-400 hover:text-slate-700'} href={link} > {title}</a >
    )
}
