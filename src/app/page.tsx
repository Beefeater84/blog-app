import CategoriesCarousel from "@/widgets/caregories-carousel/categories-carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-[150px] flex items-center bg-white dark:bg-black shadow-inner">
        <div className="container">
          <h1 className="page-title">Blog about hiking</h1>
        </div>
      </div>
      <CategoriesCarousel />

      <section>
        <div className="container">
          <h2>Popular Posts</h2>

          <div>
            <article className="bg-white rounded-3xl p-[1rem] flex gap-[2rem]">
              <Image
                className="rounded-2xl drop-shadow-md"
                src="/post-images/1.jpg"
                width="230"
                height="150"
                alt="How to Create an Invoice for First Time"
              />
              <div>
                <h3 className="text-normal-color font-semibold text-lg pb-[0.5rem]">
                  How to Create an Invoice for First Time
                </h3>
                <div className="font-roboto text-grey-color mb-[1rem]">
                  <p>
                    How many free autoresponders have you tried? Really how
                    many? And how many emails did you get through using them?
                    How do you know?.
                  </p>
                </div>
                <div className="text-xs flex items-center gap-[1rem]">
                  <Image
                    className="rounded-full"
                    src="/authors/1.jpg"
                    width="36"
                    height="36"
                    alt="author"
                  />
                  <div>
                    <p className="text-blue-color font-semibold">Author name</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
