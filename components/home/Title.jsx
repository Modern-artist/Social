import React from 'react'

const Title = ({ title: title, icon: Icon }) => {
    return (
        <div className='text-slate-100 text-sm px-4 py-1 rounded-full flex gap-2 items-center border border-slate-700 bg-slate-800 w-fit h-fit'>
            <Icon size={16} />
            <span className=''>{title}</span>
        </div>
    )
}

export default Title