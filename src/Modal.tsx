import React, { MouseEventHandler, useState } from "react"
import project from "./types";
import { v4 as uuidv4 } from 'uuid'
import { motion, useAnimationControls } from 'framer-motion'

interface modalProps {
    isActive: boolean,
    toggleState: (e: React.MouseEvent<HTMLDivElement> | null) => void,
    project: project
}

function Modal({ toggleState, project }: modalProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const images = [project.image].concat(project.presentations)

    const wrapperVariants = {
        initial: {
            opacity: 0,
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    }

    const controls = useAnimationControls()

    function toggleModal() {
        setActiveIndex(0);
        toggleState(null);
    }

    return (<div className='min-w-screen fixed top-0 min-h-screen flex'>
        <div className="h-full w-full z-0 fixed left-0 bg-black opacity-30"
            onClick={toggleModal} ></div>
        <div className='w-full h-full z-1 flex justify-center fixed top-0 left-0 bottom-0
                            backdrop-blur-sm p-0 m-0' onClick={toggleModal}>

            <div className="relative justify-center flex flex-col place-self-center"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                }}>
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, scaleX: 0, transition: { duration: 0.15 } }}
                    transition={{ ease: "easeInOut" }}

                    className='relative  w-[90vmin] h-[90vmin] max-h-[90vmin]
                                    md:max-h-[75vmin] md:w-[75vmin] flex flex-col justify-content
                                    z-100 place-self-center bg-white shadow-lg rounded-sm px-3'>
                    <div className="absolute flex justify-center content-center
                    w-8 h-8 z-10 -top-4 -right-4 rounded-full items-center text-xl font-bold bg-white border border-gray-500" onClick={toggleModal}>
                        X
                    </div>

                    <div className="pointer-events-auto hover:cursor-pointer select-none absolute z-50 top-[50%] left-5 -translate-y-[50%] w-10 h-10 md:w-16 md:h-16
                        text-white text-3xl md:text-6xl bg-[#aaaaaaaa] rounded-sm focus:opacity-50"
                        onClick={() => {
                            controls.stop()
                            controls.set('initial')
                            controls.start('visible')
                            setActiveIndex(value => activeIndex <= 0 ? images.length - 1 : value - 1)
                        }}
                    >&larr;</div>
                    <div className="pointer-events-auto hover:cursor-pointer select-none absolute z-50 top-[50%] right-5 -translate-y-[50%] w-10 h-10 md:w-16 md:h-16
                        text-white text-3xl md:text-6xl bg-[#aaaaaaaa] rounded-sm"
                        onClick={() => {
                            controls.stop()
                            controls.set('initial')
                            controls.start('visible')
                            setActiveIndex(value => (value + 1) % images.length)
                        }}
                    >&rarr;</div>

                    <h1 className="font-bold text-slate-400">{project.title}</h1>
                    <motion.img
                        variants={wrapperVariants}
                        initial='visible'
                        animate={controls}
                        exit='exit'
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        src={images[activeIndex]} alt="project presentation"
                        className="w-auto h-4/5 max-h-full object-cover py-2" />
                    <div className="justify-start inline-flex gap-x-1 w-full bg-gray-300 px-2 overflow-x-scroll">
                        {images.map((string, index) => {
                            return <img key={uuidv4()}
                                className={(index === activeIndex ?
                                    "opacity-50 w-[8vmin] h-[8vmin] max-h-full object-cover" :
                                    "hover:opacity-50 transition ease-in-out w-[8vmin] h-[8vmin] max-h-full object-cover")}
                                src={string}
                                alt="project presentation preview" onClick={() => {
                                    setActiveIndex(index)
                                    controls.set('initial')
                                    controls.start('visible')
                                }} />
                        })}
                    </div>
                </motion.div>
            </div>
        </div >
    </div >)
}

export default Modal