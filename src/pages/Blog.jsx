import banner from "../assets/images/banner3.avif";
import { FaDownload } from "react-icons/fa";

const Blog = () => {
    return (
        <div
            className="bg-cover bg-no-repeat bg-fixed min-h-screen px-2 py-10 md:px-10 lg:px-20 flex justify-center items-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className='bg-black bg-opacity-90 rounded-lg m-auto p-6 pt-10 relative'>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl text-gray-300 font-semibold mb-2">Differences between Uncontrolled and Controlled Components</h3>
                        <p className='text-gray-400'>
                            Controlled components are those whose value is controlled by React, while uncontrolled components manage their own state. This difference can have a significant impact on how you structure your components and manage data flow within your application.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-gray-300 font-semibold mb-2">How to Validate React Props using PropTypes</h3>
                        <p className='text-gray-400'>
                            When building React components, it&apos;s important to validate the props being passed to them. PropTypes is a library that allows you to specify the type and shape of the props your component expects. This not only helps catch errors early on in development, but also makes your code more readable and maintainable.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-gray-300 font-semibold mb-2">Difference between Node.js and Express.js</h3>
                        <p className='text-gray-400'>
                            Node.js and Express.js are both popular frameworks for building web applications using JavaScript. While Node.js is a runtime environment that allows you to run JavaScript outside of the browser, Express.js is a web application framework built on top of Node.js. Understanding the differences between these two technologies can help you decide which one to use for your next project.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-gray-300 font-semibold mb-2">What is a Custom Hook, and Why Will You Create a Custom Hook?</h3>
                        <p className='text-gray-400'>
                            Custom hooks are a powerful feature of React that allow you to reuse logic across multiple components. They are functions that use React&apos;s built-in hooks, such as useState or useEffect, to encapsulate complex logic into a single, reusable hook. Creating custom hooks can help simplify your code and make it more modular, allowing you to focus on building the best user experience possible.
                        </p>
                    </div>
                </div>

                <div className="text-white absolute top-2 right-2 flex gap-3">
                    <h2 className="text-lg font-bold">Download this blog as PDF</h2>
                    <button className="border bg-white shadow rounded-md border-ui-red p-2"><FaDownload className="text-ui-red" /></button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
