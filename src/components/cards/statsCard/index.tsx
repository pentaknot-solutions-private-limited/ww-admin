import React from 'react'
import Image from 'next/image'

export default function StatusCard({ name, number, imgSrc, backgroundColor, color }: any) {
    return (
        <div className="status-card" style={{ background: backgroundColor }}>
            <Image
                src={imgSrc}
                alt="logo"
                width={70}
                height={70}
            />
            <div className="status-card-content">
                <h5>{number}</h5>
                <h6 style={{ color: color }}>{name}</h6>
            </div>
        </div>
    )
}
