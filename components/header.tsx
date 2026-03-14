import NavBar from "@/components/navigation/navbar"

export default function Header(){

    return(
        <div className="container-fluid flex flex-row justify-between content-center w-full mx-[0.68em] absolute md:p-8 p-4">
            <span className="text-sm text-white font-bold uppercase m-0 leading-4 align-middle">Mark<br></br>Kirby</span>
            <NavBar/>
        </div>
    );

}