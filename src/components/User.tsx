import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function User() {
  return (
    
    <Avatar>
  <AvatarImage src="./user.png" />
  <AvatarFallback>Zu</AvatarFallback>
</Avatar>

  )
}

export default User