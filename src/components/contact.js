import { MyContext } from "../context";
import { useContext } from "react";

const Contact = () => {

    const context = useContext(MyContext);
    const handlePushArrChar = context.handlePushArrChar;
    const handlePushArr = context.handlePushArr;
    const showTestArr = context.showTestArr;

    return (
        <div className='contact'>
            <div className='contact-masterhead'>
                <form onSubmit={handlePushArr}>
                    <div className='contact-info'>
                        <div>
                            <label>Name</label>
                            <input
                                type='text'
                                onChange={handlePushArrChar}
                            />
                        </div>
                        <div>
                            <label>Lastname</label>
                            <input />
                        </div>
                        <div>
                            <label>Email</label>
                            <input />
                        </div>
                        <div>
                            <label>Number</label>
                            <input />
                        </div>
                        <button type='submit'>submit</button>
                        <div>
                            <ul>
                                {showTestArr()}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;