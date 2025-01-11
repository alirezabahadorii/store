import {MotionGraphics} from "@/components/MotionGraphics";
import {Items} from "@/components/Items";
import Information from "@/components/Information";


export default function Home() {
  return (
      <section className="mainStore lg:!w-full pt-20 lg:pt-40 px-0">
          <MotionGraphics/>
          <Items/>
          <Information/>
      </section>
      );
      }