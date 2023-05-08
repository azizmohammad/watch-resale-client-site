import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='grid bg-gray-400 rounded-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center py-12 px-5 mb-8 '>
            <div className=" overflow-hidden bg-info rounded-lg shadow-lg text-gray-100 ">

                <div className="px-4 py-2">
                    <h4 className='text-xl font-semibold uppercase text-gray-100'>What are the different ways to manage a state in a React application?</h4>
                </div>

                <div className="flex items-center justify-between px-4 py-2 ">
                    <h3 className="text-lg font-semibold text-gray-900">Answer:- Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.When you have state management in place data actually flows from your app to state and vice versa. </h3>
                </div>
            </div>
            <div className=" overflow-hidden bg-info rounded-lg shadow-lg text-gray-100 ">

                <div className="px-4 py-2">
                    <p className=' font-semibold uppercase text-gray-100'>How does prototypical inheritance work?</p>
                </div>

                <div className="flex items-center justify-between px-4 py-2 ">
                    <h3 className="text-lg font-semibold text-gray-900">Answer:- The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</h3>
                </div>
            </div>

            <div className=" overflow-hidden bg-info rounded-lg shadow-lg text-gray-100 ">

                <div className="px-4 py-2">
                    <h4 className='text-xl font-semibold uppercase text-gray-100'>What is a unit test? Why should we write unit tests?</h4>
                </div>

                <div className="flex items-center justify-between px-4 py-2 ">
                    <h3 className="text-lg font-semibold text-gray-900">Answer:- The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</h3>
                </div>
            </div>

            <div className=" overflow-hidden bg-info rounded-lg shadow-lg text-gray-100 ">

                <div className="px-4 py-2">
                    <h4 className='text-xl font-semibold uppercase text-gray-100'>React vs. Angular vs. Vue?</h4>
                </div>

                <div className="flex items-center justify-between px-4 py-2 ">
                    <h3 className="text-lg font-semibold text-gray-900">Answer:-The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either. This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.
                        In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.</h3>
                </div>
            </div>

        </div>
    );
};

export default Blog;