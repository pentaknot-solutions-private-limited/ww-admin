import React from 'react'

interface sidebarItemsTypes {
    svgIcon: any,
    label: string,
    onClick?: any,
    active?: any
    style?: any,

}
interface sidebarLogoTypes {
    src: string,
    name: string,
    onClick?: any,

}
export function SidebarLogoItem({ src, name, onClick }: sidebarLogoTypes) {
    return (
        <div className="sidebar-logo" onClick={onClick}>
            <img src={src} alt="logo" />
            <p>
                {name}
            </p>
        </div>
    )
}
export default function SidebarListItem({ svgIcon, label, onClick, active, style }: sidebarItemsTypes) {
    return (
        <div style={style} className={active ? "sidebar-list-item is-active" : "sidebar-list-item"} onClick={onClick}>
            <span>
                {svgIcon}
            </span>
            <p>{label}</p>
        </div>
    )
}
