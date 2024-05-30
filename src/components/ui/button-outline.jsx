import { Button } from "@/components/ui/button"

export function ButtonOutline({children, onClick}) {


  return <Button onClick={onClick} variant="outline">{children}</Button>
}
