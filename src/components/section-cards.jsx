import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import axios from 'axios'
import { useEffect,useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"










export function SectionCards() {

  const [stat,setStat]=useState("");

  let UserId = sessionStorage.getItem("userId");

  let fetchData = async () => {

    try {

      let response = await axios.post("https://expense-tracker-backend-rosy-iota.vercel.app/getstatistics", {
        userId: UserId
      })


      setStat(response.data)

    

    } catch (error) {
      
    }



  }


  console.log()


  useEffect(() => {

    fetchData()

  }, [])







  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 overflow-x-auto sm:justify-start md:grid md:grid-cols-2 lg:grid-cols-3 lg:px-6">
      <Card className="w-full min-w-[280px] sm:w-[48%] md:w-[45%] lg:w-auto">
        <CardHeader className="relative">
          <CardDescription>Total Savings</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
         { stat?.data?.totalSavings}
          </CardTitle>

        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>

      <Card className="w-full min-w-[280px] sm:w-[48%] md:w-[45%] lg:w-auto">
        <CardHeader className="relative">
          <CardDescription>Total Earning</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
          { stat?.data?.totalIncome}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingDownIcon className="size-3" />
              -20%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">
            Down 20% this period <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>

      <Card className="w-full min-w-[280px] sm:w-[48%] md:w-[45%] lg:w-auto">
        <CardHeader className="relative">
          <CardDescription>Total Expense</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
          { stat?.data?.totalExpense}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">
            Strong user retention <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Engagement exceeds targets
          </div>
        </CardFooter>
      </Card>


    </div>
  );
}