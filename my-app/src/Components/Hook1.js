// import React, { useEffect, useRef, useState } from 'react'
// import { Row } from 'react-bootstrap'

// function Hook() {

//     const [value, setValue] = useState('default')
//     const renderCounter = useRef(1)
//     const inpRef = useRef(null)
//     const prevValue = useRef("")
//     console.log(renderCounter)

//     useEffect(() => {
//         renderCounter.current++;
//         console.log(inpRef.current.value)
//     })

//     useEffect(() => {
//         prevValue.current = value

//     },[value])

//   const focus = () => inpRef.current.focus()
  
    

//     return (
//         <Row>
//             <h1>Test ikkinchi sayt</h1>
//             <h3>Amount : {renderCounter.current}</h3>
//             <p>Value : {prevValue.current}</p>
//             <input
//                 type="text"
//                 onChange={(e) => setValue(e.target.value)}
//                 value={value}
//                 ref={inpRef}
//             />

//             <button onClick={focus}>click</button>

//         </Row>
//     )
// }

// export default Hook;
