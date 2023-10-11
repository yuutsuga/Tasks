"use client";

import Image from "next/image";
import { Body, Wrapper, Button } from "./triangle-sizes.style";
import { useState } from "react";

function TriangleSizes() {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const maxWidthSize = 810;
    const maxHeightSize = 450;

    function increaseWidth() {
        if (width < maxWidthSize) {
            setWidth(prevWidth => Math.min(prevWidth + 10, maxWidthSize))
        }
    }

    function increaseHeight() {
        if (height < maxHeightSize) {
            setHeight(prevHeight => Math.min(prevHeight + 10, maxHeightSize))
        }
    }

    return (
        <Body>
            <Wrapper>
                <Image src={'/triangle-rectangle.png'}
                alt="triangle" width={width} height={height}
                />
            </Wrapper>
                <div>
                    <Button onClick={increaseWidth}>+10W</Button>
                    <Button onClick={increaseHeight}>+10H</Button>
                </div>
        </Body>
    )
}

export default TriangleSizes;
