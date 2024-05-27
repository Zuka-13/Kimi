import React, { useState } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, surname, email, password })
            });

            if (!response.ok) {
                const data = await response.json();
                setError(`Registration failed: ${data.message}`);
                return;
            }

            alert('User registered successfully');
            navigate('/login');
        } catch (error) {
            setError('An error occurred during registration');
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="w-full relative bg-darkslategray-200 flex flex-col items-center justify-center pt-0 px-0 pb-[50.3px] box-border gap-[50px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[31px] mq750:gap-[62px]">
            <HeaderDesktop />
            <main className="w-[1401.4px] flex flex-row items-start justify-start pt-[120px] px-[73px] box-border max-w-full lg:pl-9 lg:pr-9 lg:box-border">
                <section className="flex-1 flex flex-col items-center justify-center gap-[127.5px] max-w-full text-left text-12xl text-black font-noto-serif lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px]">

                    <div className="flex flex-col items-center w-[600px] mx-auto bg-white rounded-lg pt-12 my-5">
                        <div className="flex justify-center items-center w-[500px] h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                            <div className="flex items-center justify-center w-full lg:p-12">
                                <div className="flex items-center xl:p-10">
                                    <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl" onSubmit={handleSubmit}>
                                        <h3 className="mb-3 text-14xl font-extrabold text-dark-grey-900">Sign Up</h3>

                                        {error && <div className="text-red-500 mb-4">{error}</div>}
                                        <div className="items-center align-center">
                                            <label htmlFor="name" className="mb-2 text-sm py-2 text-center text-grey-900">First Name*</label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="First Name"
                                                className="flex items-center w-full px-5 py-4 mb-7 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />

                                            <label htmlFor="surname" className="mb-2 text-sm py-2 text-center text-grey-900">Last Name*</label>
                                            <input
                                                id="surname"
                                                type="text"
                                                placeholder="Last Name"
                                                className="flex items-center w-full px-5 py-4 mb-7 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                                value={surname}
                                                onChange={(e) => setSurname(e.target.value)}
                                                required
                                            />

                                            <label htmlFor="email" className="mb-2 text-sm py-2 text-center text-grey-900">Email*</label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="mail@loopple.com"
                                                className="flex items-center w-full px-5 py-4 mb-7 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />

                                            <label htmlFor="password" className="mb-2 text-sm py-2 text-center text-grey-900">Password*</label>
                                            <input
                                                id="password"
                                                type="password"
                                                placeholder="Enter a password"
                                                className="flex items-center w-full px-5 py-4 mb-7 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />

                                            <label htmlFor="confirm_password" className="mb-2 text-sm py-2 text-center text-grey-900">Confirm Password*</label>
                                            <input
                                                id="confirm_password"
                                                type="password"
                                                placeholder="Confirm Password"
                                                className="flex items-center w-full px-5 py-4 mb-7 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />

                                            <div className="flex items-center mb-8">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2"
                                                    name="age_confirmation"
                                                    id="age_confirmation"
                                                    required
                                                />
                                                <label htmlFor="age_confirmation" className="text-grey-900">
                                                    I confirm that I am at least 18 years old
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-yellow-500 px-6 py-5 mb-5 text-sm 
                                                font-bold leading-none text-white transition duration-300 md:w-96 
                                                rounded-2xl hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-100"
                                            >
                                                Create Account
                                            </button>


                                            <p className="text-sm leading-relaxed text-grey-900">
                                                By signing up, you agree to the{' '}
                                                <a className="font-bold text-grey-700" href="#">
                                                    Terms of Service
                                                </a>{' '}
                                                and{' '}
                                                <a className="font-bold text-grey-700" href="#">
                                                    Privacy Policy
                                                </a>
                                                .
                                            </p>
                                            <div className="text-grey-900 mt-6 text-center">
                            Already have an account?{' '}
                            <a className="font-bold text-purple-blue-500" href="../login/">
                                Log in
                            </a>
                            .
                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </main>
            <FooterDesktop />
        </div>
    );
};

export default Register;
