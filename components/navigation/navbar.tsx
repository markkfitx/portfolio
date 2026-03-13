import NavItem from "@/components/navigation/navItem"
import data from "../../app/data/navigation.json"

export default function NavBar(){

    return(
        <div className="w-full flex flex-row justify-center gap-12">
            {data.navigation.map((item,idx) =>{
                return <NavItem key={`${item.label}-${idx}`} idx={idx} label={item.label} url={item.url}/>
            })}
        </div>
    );

}