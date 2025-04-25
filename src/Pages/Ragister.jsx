import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify';


function Ragister() {
    const Registeruser = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user Created");
            toast.success("user Created")
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            toast.error("user not Created")
            
            // ..
          });





    }

    return (
        <div className="flex items-center justify-center min-h-screen   mt-8">

            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>
                <form onSubmit={Registeruser} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold text-gray-600">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-600">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-600">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Create a password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>
                    
                    <button
                     type="button"
                     className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-yellow-500 font-semibold hover:text-black transition duration-300"> Login with Google
                     </button>
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Already have an account?
                        <a href="/login" className="text-blue-600 font-semibold">Login</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Ragister