import React from 'react'
import { Banner} from './SignUpElements'

export default function Banner1(props) {
    return (
        <Banner>
            {props.message}
        </Banner>
    )
}