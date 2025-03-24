import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { Toaster, toast } from 'sonner';
import { useNavigate } from "react-router-dom";


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function RegisterForm({
    className,
    ...props
}) {


    const [form, formData] = useState({ email: "", password: "", confirmPassword: "" })


    const navigate = useNavigate();
   
    let handleSubmit = async () => {

        event.preventDefault()

        try {
            let result = await axios.post("https://expense-tracker-backend-rosy-iota.vercel.app/register", {
                email: form.email,
                password: form.password,
                confirmPassword: form.confirmPassword
            })

            toast.success(result?.data?.message)

  
                sessionStorage.setItem("email", form.email);
      

            setTimeout(() => {
                navigate('/confirmemail');
              }, "2000");

           

        } catch (error) {
            toast.error(error.response?.data?.message)
        }


    }




    return (
        <>
            <Toaster position="top-right" />
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Register</CardTitle>
                        <CardDescription>
                            Enter your email below to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input onChange={(event) => formData({ ...form, email: event.target.value })} id="email" type="email" placeholder="zajampratik@gmail.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>

                                    </div>
                                    <Input onChange={(event) => formData({ ...form, password: event.target.value })} id="password" type="password" required />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Confirm Password</Label>

                                    </div>
                                    <Input onChange={(event) => formData({ ...form, confirmPassword: event.target.value })} id="password" type="password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Register
                                </Button>

                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="#" className="underline underline-offset-4">
                                    Sign up
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
