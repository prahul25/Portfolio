import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";

const jetbrain_font = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-black bg-white">
      <div
        className="absolute top-0 dark:bg-[#111827] bg-[#6666FF] border rounded-xl"
        style={{
          height: "calc(100vh - 5vh)",
          width: "calc(100vw - 2vw)",
          margin: "2.5vh 2.5vw",
        }}
      >
        {/* Your content here */}
        <div className="absolute top-48 flex w-full flex-col-reverse md:flex-row">
          {/* text part start from here */}
          <div
            className={`flex w-full justify-center text-4xl ${jetbrain_font.className}`}
          >
            <p>

            Hello I&apos;m Rahul
            </p>
            
          </div>
          {/* text part end here */}
          {/* image part start from here  */}
          <div className="flex w-full justify-center">for image</div>
          {/* image part end here */}
        </div>
      </div>
    </main>
  );
}
