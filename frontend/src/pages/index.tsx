import Sidebar from "@/components/Elements/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <div> 
      <div style={{ display: "flex" }}> 
        <Sidebar />
        <div style={{ alignItems: "center", marginLeft: "20px" }}>
          
        </div> 
      </div> 
    </div>
  );
}
