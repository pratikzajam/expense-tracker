import React from "react";
import axios from 'axios';
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Toaster, toast } from 'sonner';


const AddTransaction = () => {

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({ transaction_type: "", category: "", date: "", amount: null, Description: "" })

  let handleSubmit = async (event) => {
    event.preventDefault();

    

    try {

      let UserId=sessionStorage.getItem("userId");

      console.log(UserId)
    
      let response = await axios.post("https://expense-tracker-backend-rosy-iota.vercel.app/addtransaction", {

        userId: UserId,
        amount: form.amount,
        type: form.transaction_type,
        category: form.category,
        date: form.date,
        description: form.Description
      })


      setOpen(false)

      toast.success(response?.data?.message)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }







  };


  return (
    <>
      <Toaster position="top-right" />
      <Dialog open={open} onOpenChange={setOpen}>

        <DialogTrigger asChild>
          <Button variant="outline">Add Transaction</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogDescription>
              Enter your transaction details below and click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>

            {/* Form Content */}
            <div className="space-y-6">
              {/* Transaction Type */}
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="transaction-type" className="text-right">
                  Transaction Type
                </Label>
                <div className="col-span-3">
                  <Select onValueChange={(value) => setForm((prev) => ({ ...prev, transaction_type: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Transaction Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup >
                        <SelectItem value="income">Income</SelectItem>
                        <SelectItem value="expense">Expense</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Category */}
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <div className="col-span-3">
                  <Select onValueChange={(value) => setForm((prev) => ({ ...prev, category: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup >
                        <SelectItem value="salary">Salary</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="rent">Rent</SelectItem>
                        <SelectItem value="groceries">Groceries</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="investment">Investment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))} type="date" id="date" className="col-span-3" />
              </div>

              {/* Amount Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input onChange={(event) => setForm((prev) => ({ ...prev, amount: Number(event.target.value) }))} type="number" id="amount" placeholder="Enter amount" className="col-span-3" />
              </div>

              {/* Description Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 items-start gap-4">
                <Label htmlFor="description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea onChange={(event) => setForm((prev) => ({ ...prev, Description: event.target.value }))}
                  id="description"
                  placeholder="Enter transaction details..."
                  className="resize-none col-span-3 h-24"
                />
              </div>
            </div>




            <DialogFooter className="flex justify-end mt-2">
              <Button type="submit">Save Transaction</Button>
            </DialogFooter>
          </form>
        </DialogContent>


      </Dialog>



    </>
  );


};

export default AddTransaction;
