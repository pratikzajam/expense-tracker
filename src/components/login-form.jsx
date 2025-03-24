import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from 'sonner';
import { useNavigate } from "react-router-dom";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";

export function LoginForm({ className, ...props }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Tracks API call status
  const [error, setError] = useState(""); // Stores error message

  const navigate = useNavigate();



  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://expense-tracker-backend-rosy-iota.vercel.app/login",
        form
      );



      let userId=response?.data?.data.userId

      sessionStorage.setItem("userId",userId)
     
      
 


      toast.success(response?.data?.message || "sucessfully logged in");

      navigate('/dashboard');

    } catch (error) {

      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="zajampratik@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input onChange={handleChange} id="password" type="password" required />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a onClick={() => navigate("/register")} href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>


          </CardContent>
        </Card>
      </div>
    </>
  );
}
