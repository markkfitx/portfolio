import NavItem from "@/components/navigation/navItem-two"
import data from "../../app/data/navigation.json"

export default function NavBar(){

    return(
        <div className="relative">
            <div className="absolute w-1/2 h-1/2 top-[-1rem] left-[-1rem] rounded-tl-md border-t-2 border-l-2 border-white/80 z-[-1]"></div>
            <div className="w-fit flex flex-col justify-center gap-4 z-10">
                {data.navigation.map((item,idx) =>{
                    return <NavItem key={`${item.label}-${idx}`} idx={idx} label={item.label} url={item.url}/>
                })}
            </div>
        </div>
    );

}