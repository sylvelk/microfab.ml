import React from 'react'
import { Box, Button } from "@chakra-ui/react"
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'
import testFunc from '../lib/test'



class Svg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    createRect() {
        var draw = SVG().addTo('#svgBox').size(300, 130)
        var polygon = draw.polygon('50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40')
        polygon.fill('#f06').move(20, 20)
    }

    render() {
        return (
            <Box>
                <div id='svgBox'>
                </div>
                <svg>
                </svg>
                <Button onClick={this.createRect}>
                    Click me !
                </Button>
            </Box>
        )
    }
}

export default Svg;
