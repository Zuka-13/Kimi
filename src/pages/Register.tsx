import React, { useState } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

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
            // Optionally, redirect to login page or do something else
        } catch (error) {
            setError('An error occurred during registration');
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="w-full relative bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[50.3px] box-border gap-[50px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[31px] mq750:gap-[62px]">
            <HeaderDesktop />
            <main className="w-[1401.4px] flex flex-row items-start justify-start pt-[120px] px-[73px] box-border max-w-full lg:pl-9 lg:pr-9 lg:box-border">
                <section className="flex-1 flex flex-col items-end justify-start gap-[127.5px] max-w-full text-left text-54xl-7 text-black font-noto-serif lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px]">
                    <div className="bg-gray-200 min-h-screen flex flex-col">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                {error && <div className="text-red-500 mb-4">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                                        name="name"
                                        placeholder="First Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                                        name="surname"
                                        placeholder="Last Name"
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="email"
                                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                                        name="confirm_password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            name="age_confirmation"
                                            id="age_confirmation"
                                            required
                                        />
                                        <label htmlFor="age_confirmation" className="text-gray-600">
                                            I confirm that I am at least 18 years of age
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                                    >
                                        Create Account
                                    </button>
                                </form>
                                <div className="text-center text-sm text-gray-600 mt-4">
                                    By signing up, you agree to the
                                    <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                                        Terms of Service
                                    </a>{' '}
                                    and
                                    <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                            <div className="text-gray-600 mt-6">
                                Already have an account?
                                <a className="no-underline border-b border-blue-500 text-blue-500" href="../login/">
                                    Log in
                                </a>
                                .
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
