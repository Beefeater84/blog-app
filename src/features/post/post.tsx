import Image from "next/image";

export default function PostLine({ post }) {
  const { title, description, img, user } = post;
  return (
    <article className="bg-white rounded-3xl p-[1rem] flex gap-[2rem] mb-[1rem]">
      {img && (
        <Image
          className="rounded-2xl drop-shadow-md"
          src={img}
          width="230"
          height="150"
          alt="How to Create an Invoice for First Time"
        />
      )}

      <div>
        <h3 className="text-normal-color font-semibold text-lg pb-[0.5rem]">
          {title}
        </h3>
        <div className="font-roboto text-grey-color mb-[1rem]">
          <p>{description}</p>
        </div>
        <div className="text-xs flex items-center gap-[1rem]">
          {user.image && (
            <img
              className="rounded-full"
              src={user.image}
              width="36"
              height="36"
              alt="author"
            />
          )}

          <div>
            <p className="text-blue-color font-semibold">{user.name}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
