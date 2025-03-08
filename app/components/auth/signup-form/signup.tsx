"use client";
import { RegisterForm } from "@/app/types/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Signup() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterForm>({
        defaultValues: { firstName: '', lastName: '', email: '', password: '' }
    });
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const namePattern = /^[a-zA-Z]+$/;
    const handleClose = () => {
        router.back();
        // window.history.go(-2);
    }
    async function handlePostData(data: RegisterForm) {
        console.log(data);
    }
    return (
        <>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Create an account
                </h3>
                <button onClick={handleClose} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handleSubmit((data) => console.log(data))} role="form">
                    <div>
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                        <input type="text" {...register("firstName", { required: 'firstName is required to register', pattern: { value: namePattern, message: 'invalid firstName pattern' } })} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="james" />
                        {errors.firstName && <p className="text-red-500" data-testid="firstName-error">{errors.firstName?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                        <input type="text" {...register("lastName", { required: 'lastName is required to register', pattern: { value: namePattern, message: 'invalid lastName pattern' } })} id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="james" />
                        {errors.lastName && <p className="text-red-500" data-testid="lastName-error">{errors.lastName?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" {...register("email", { required: 'email is required to register', pattern: { value: emailPattern, message: 'invalid email pattern' } })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                        {errors.email && <p className="text-red-500" data-testid="email-error">{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" {...register("password", { required: 'password is required to register', pattern: { value: passwordPattern, message: 'password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number' } })} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.password && <p className="text-red-500" data-testid="password-error">{errors.password?.message}</p>}
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Account</button>
                </form>
            </div>
        </>
    )
}
