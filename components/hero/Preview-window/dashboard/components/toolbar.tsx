import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/datepicker";
import CurrencySelect from "./currency-select";
export default function Toolbar() {
    const currDate = new Date()
    return (
        <div className="relative flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start md:gap-2 gap-1">
                <DatePicker value={currDate} />
                <DatePicker value={currDate} />
                <CurrencySelect />
            </div>
        </div>
    )
}