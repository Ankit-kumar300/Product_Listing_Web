import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from './FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import { Context } from './MainContext';
import { GoogleAuthProvider } from "firebase/auth";


function Login() {

    const { user, setUser } = useContext(Context)
    const negitive = useNavigate()

    const Loginuser = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                const user = userCredential.user;
                setUser(user.accessToken);
                toast.success("User login succefully")
                negitive('/Home')


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error("User Not found")
                console.log("error");

            });
    }


    const Loginwithgoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                setUser(user.accessToken);
                toast.success("User login succefully")
                negitive('/Home')

                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
                <form onSubmit={Loginuser} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold text-gray-600">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-600">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button

                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-yellow-500 hover:text-black font-semibold transition duration-300"
                    >
                        Login
                    </button>

                    <button
                        type="button"
                        onClick={Loginwithgoogle}
                        className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-yellow-500 font-semibold hover:text-black transition duration-300"> Login with Google
                    </button>



                    <p className="text-center text-sm text-gray-600 mt-2">
                        Don't have an account?
                        <Link to={'/ragister'} className="text-purple-600 font-semibold">Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login