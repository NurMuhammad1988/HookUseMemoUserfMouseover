import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Row } from 'react-bootstrap'


function complate(num) {
    console.log("complate");
    let i = 0;
    while (i < 1000) i++;
    return num + 2;
}


function Hook() {


    const [value, setValue] = useState(10)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {
            color: colored ? "crimson" : "green",

        }
    }, [colored])

   

    const computed = useMemo(() => {
        return complate(value)
    })


    useEffect(() => {
        console.log('style was change')
    }, [styles])



    return (
        <Row>
            <h1 style={styles}>Test uchinchi sayt : {computed}</h1>

            <button onClick={() => setValue((prev) => prev + 1)}>Add +</button>

            <button onClick={() => setValue((prev) => prev - 1)}>Delete --</button>

            <button onClick={() => setColored((prev) => !prev)}>Edit</button>


        </Row>
    )
}

export default Hook;
