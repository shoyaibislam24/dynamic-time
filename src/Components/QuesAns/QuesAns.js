import React from 'react';
import './QuesAns.css';

const QuesAns = () => {
    return (
        <div className='blog'>
            <h1 className='blog-name'>Blog Section</h1>
            <div className="ques-ans">
                <h2 className='ques'>1. How Does REACT Work?</h2>
                <div className="ans">
                    A JavaScript library for building user interfaces.It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.
                    One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.
                </div>
                <h2 className='ques'>2. What are the differences Between props and state?</h2>
                <div className="props-state ans">
                    <div className='props'>
                        <h3>props</h3>
                        <p>
                            1.The Data is passed from one component to another. <br />
                            2.It is Immutable (cannot be modified). <br />
                            3.Props can be used with state and functional components. <br />
                            4.Props are read-only.
                        </p>
                    </div>
                    <div className='state'>
                        <h3>state</h3>
                        <p>
                            1.The Data is passed within the component only. <br />
                            2.It is Mutable ( can be modified). <br />
                            3.State can be used only with the state components/class component. <br />
                            4.State is both read and write.
                        </p>
                    </div>
                </div>
                <h2 className='ques'>3. Other uses of useEffect hook except API Data Load?</h2>
                <div className="ans">
                    1. Render an input box and store its value with useState . Then set the document.title in an effect. <br />
                    2. Add a click handler to the document, and print a message every time the user clicks. <br />
                    3. Running on state change: validating input field. <br />
                    4. HRunning on state change: live filtering. <br />
                    5. Running on state change: trigger animation on new array value. <br />
                    6. Running on props change: update paragraph list on fetched API data update. <br />
                                
                </div>

            </div>

            <div className="footer">
                @-Copyright-2022
            </div>
        </div>
    );
};

export default QuesAns;