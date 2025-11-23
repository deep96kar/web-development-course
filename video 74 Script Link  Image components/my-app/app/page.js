import Image from "next/image";

export default function Home() {
  return (
     <div 
     className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" alt="" />
     </div>
  );
}