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
        <Card className={cn("w-full gap-0 border border-white/10 bg-zinc-900/80 p-3 py-3 text-zinc-100 shadow-none", className)}>
            <CardHeader className="p-0">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-[9px] font-medium tabular-nums md:text-[11px]">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold w-[100px] text-[9px] text-white/60">Invoice</TableHead>
                            <TableHead className="font-bold text-[9px] text-white/60">Status</TableHead>
                            <TableHead className="font-bold text-[9px] text-white/60">Method</TableHead>
                            <TableHead className="font-bold text-right text-[9px] text-white/60">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {invoices.map((invoice,idx) => (
                        <TableRow className={`border-none text-[9px] ${idx % 2 === 0 ? "rounded-md bg-zinc-800/50" : ""}`} key={invoice.invoice}>
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
  