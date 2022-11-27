import React, { useState } from 'react';


const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

const Blog = () => {
    return (
        <div className=' '>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Blogs
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="232db96b-4aa2-422f-9086-5a77996d1df1"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative text-primary">Hey</span>
                            </span>{' '}
                            <span className='text-secondary'>did you know?</span>
                        </h2>
                        <p className="text-base text-accent md:text-xl ">
                            Knowledge is power. Get along with our blogs to never ending journey of learning.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Item title="What are the different ways to manage a state in a React application?">
                            <p className='text-2xl text-green-600'>useState is the first tool you should reach for to manage state in your components. useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.Many developers are inclined to use built-in React features like the Context API to manage their state.</p>
                        </Item>
                        <Item title="How does prototypical inheritance work?">
                            <p className='text-2xl text-green-600'>When we read a property from object , and it's missing, JavaScript automatically takes it from the prototype. Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                        </Item>
                        <Item title="What is a unit test? Why should we write unit tests?">
                            <p className='text-2xl text-green-600'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </Item>
                        <Item title="React vs. Angular vs. Vue?">
                            <p className='text-2xl text-green-600'>
                                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. Is React better than Vue?
                                One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds.</p>
                        </Item>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
