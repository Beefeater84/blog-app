export default function CategoriesCarousel() {
  return (
    <section
      className="container flex gap-[1rem] font-medium pt-[1rem] pb-[1rem]"
      aria-label="categories carusel"
    >
      <div className="w-[140px] h-[60px] flex items-center justify-center bg-active-color rounded-md">
        Sleeping Bag
      </div>
      <div className="w-[140px] h-[60px] flex items-center justify-center bg-active-color rounded-md">
        Sleeping Mat
      </div>
      <div className="w-[140px] h-[60px] flex items-center justify-center bg-active-color rounded-md">
        Shelter
      </div>
      <div className="w-[140px] h-[60px] flex items-center justify-center bg-active-color rounded-md">
        Clothing
      </div>
    </section>
  );
}
