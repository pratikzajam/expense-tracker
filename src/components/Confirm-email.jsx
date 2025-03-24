import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import axios from 'axios'
import { Toaster, toast } from 'sonner';
import { useNavigate } from "react-router-dom";

export function ConfirmEmail({
  className,
  ...props
}) {


  let email = sessionStorage.getItem("email");

  const [otp, setotp] = useState(null)

  const navigate = useNavigate();



  let handleSubmit = async () => {
    event.preventDefault();

    try {

      let result = await axios.post("https://expense-tracker-backend-rosy-iota.vercel.app/verify", {
        email: email,
        otp: otp
      })

      toast.success(result?.data?.message)
    

 
      setTimeout(() => {
        navigate('/dashboard');
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
            <CardTitle className="text-2xl">Verify Otp</CardTitle>
            <CardDescription>
              Enter otp to verify your email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="number">Enter Otp</Label>
                  <Input onChange={(event) => setotp(event.target.value)} id="number" type="password" placeholder="" required />
                </div>

                <Button type="submit" className="w-full">
                  Verify Otp
                </Button>

              </div>

            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
