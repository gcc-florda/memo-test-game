import React from 'react'
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti'

export default function WinnerConffeti() {
    const { width, height } = useWindowSize()
    return (
        <Confetti
            width={width ? width : 0}
            height={height ? height : 0}
        />
    )
}