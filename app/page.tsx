import { AcmeBlogComponent } from "@/components/acme-blog-component";
import { BlogComponent } from "@/components/blog-component";
import { SideComponent } from "@/components/side-component";
import Image from "next/image";
import FetchingInReact from "@/components/fetching-in-react";

export default function Home() {
  return (
    <main className="">
        <FetchingInReact />
      {/*<AcmeBlogComponent />*/}
    </main>
  );
}
