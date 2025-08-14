'use client';

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/ui/login.module.css";
import clsx from "clsx";
import Link from "next/link";

function Login() {
    interface FormError {
        username: string;
        password: string;
    }

    const router = useRouter();



    return (
        <div className={styles["login-container"]}>
            <div className={styles["login-box"]}>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={
                        values => {
                            //   const errors:FormError = {
                            //       username: "",
                            //       password: ""
                            //   };
                            const errors: Partial<FormError> = {};
                            if (!values.username) {
                                errors.username = "Required";
                            }
                            if (!values.password) {
                                errors.password = "Required";
                            }

                            return errors;
                        }
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            if (values.username === 'admin' && values.password === '789456123') {
                                alert('Login successful!');
                                router.push("/dashboard")
                            } else {
                                alert('Unauthorized!');
                            }
                            console.log("Submitted values:", values);
                            setSubmitting(false);
                        }, 3000)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={styles["login-form"]}>
                            <div className={styles["input-group"]}>
                                <label htmlFor="username">Username: </label>
                                <Field type="text" name="username" id="username" />
                                <ErrorMessage name="username" component="div" className={styles["login-error"]} />
                            </div>
                            <div className={"input-group"}>
                                <label htmlFor="password">Password: </label>
                                <Field type="password" name="password" id="password" />
                                <ErrorMessage name="password" component="div" className={styles["login-error"]} />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={clsx({
                                "bg-slate-500": isSubmitting
                            })}>Login</button>
                            <div className="flex items-center justify-center pt-5"><Link href="/" className="text-3xl">🔙</Link></div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={styles["side-box"]}>
                <h1 className="text-6xl pb-5 font-extrabold">Welcome to the Login Page</h1>
                <p>Please enter your credentials to access your account.</p>
                <p>If you don't have an account, please <a href="#">register</a>.</p>
            </div>
        </div>
    )
}

export default Login;