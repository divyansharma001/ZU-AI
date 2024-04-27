import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function Choose() {
  return (
    <Select>
  <SelectTrigger className="w-[180px] h-[22px] border border-[#EFEFEF] text-[#686868]">
    <SelectValue placeholder="Today, 13 Sep 2021" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="yesterday">Yesterday, 12 Sep 2021</SelectItem>
    <SelectItem value="tomorrow">Tomorrow, 14 Sep 2021</SelectItem>
  </SelectContent>
</Select>

  )
}

export default Choose