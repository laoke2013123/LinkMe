import Image from "next/image";

export default function ProfileIcon({image}){
    return(
        <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto bg-marble flex">
            <Image src={image} width={256} height={256} alt="avatar"/>
        </div>
      )
}