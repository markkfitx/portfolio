import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { cn } from "@/lib/utils"
  import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
  ]
  
  export function DataTable({title, className}: {title: string, className?: string}) {
    return (
        <Card className={cn("w-full gap-0 py-3 p-3", className)}>
            <CardHeader className="p-0">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-[9px] font-medium tabular-nums md:text-[11px]">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold w-[100px] text-[9px]">Invoice</TableHead>
                            <TableHead className="font-bold text-[9px]">Status</TableHead>
                            <TableHead className="font-bold text-[9px]">Method</TableHead>
                            <TableHead className="font-bold text-right text-[9px]">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {invoices.map((invoice,idx) => (
                        <TableRow className={`text-[9px] border-none ${idx % 2 === 0 && "bg-neutral-100 rounded-md"}`} key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
  }
  