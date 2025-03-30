import { cn } from "@/lib/utils"

const ProductPrice = ({value, className} : {value:number, className?:string}) => {
 const stringValue = value.toFixed(2)
const [intV, floatV] = stringValue.split('.')
  return (
    <p className={cn('text-2xl', className)}>
     <span className="text-xs align-super">$</span>
     {intV}
     <span className="text-xs align-super">.{floatV}</span>
    </p>
  )
}

export default ProductPrice