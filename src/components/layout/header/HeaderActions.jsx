{/* USER */}
<button
  className="
    flex h-11 w-11
    items-center justify-center
    rounded-xl
    transition-all duration-300
    hover:bg-[#FFFF00]/20
    hover:scale-105
    hover:ring-2 hover:ring-[#FFFF00]/40
    group
  "
>
  {isAuthenticated ? (
    <UserCircle2 
      size={30} 
      className="text-white transition-all duration-300 group-hover:text-[#FFFF00]" 
    />
  ) : (
    <User 
      size={30} 
      className="text-white transition-all duration-300 group-hover:text-[#FFFF00]" 
    />
  )}
</button>

{/* NOTIFICATION */}
<button
  className="
    flex h-11 w-11
    items-center justify-center
    rounded-xl
    transition-all duration-300
    hover:bg-[#FFFF00]/20
    hover:scale-105
    hover:ring-2 hover:ring-[#FFFF00]/40
    group
  "
>
  <Bell
    size={30}
    className="text-white transition-all duration-300 group-hover:text-[#FFFF00]"
  />
</button>
