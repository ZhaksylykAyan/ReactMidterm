import React, {useState} from 'react'

const Main = () => {
    const [message, setMessage] = useState("")

    const handleAddMessage = e => () => {
        e.preventDefault()
        console.log(message)
    }

    return (<div className='w-full h-full text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full top-[10%] text-black'>
                    <form onSubmit={handleAddMessage}>
                        <input type='text' placeholder='Your message' onChange={(e) => setMessage(e.target.value)}/>
                        <button type='submit' className='text-black bg-blue-500'>Add Message</button>
                    </form>
                </div>
            </div>
        </div>)
}

export default Main