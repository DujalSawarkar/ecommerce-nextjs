import Image from "next/image";
import Link from "next/link";
import star from "../public/star.png";

interface CardProps {
  data: {
    id: string;
    item_type: string;
    rate: number;
    imageUrl: string;
    title: string;
    discount?: number;
    price: number;
    discountPercent?: number;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const id = data.id;
  const type = data.item_type;
  const divArray = Array.from({ length: data.rate }, (_, index) => index);

  return (
    <Link href={`/product/${id}`}>
      <div className="transition ease-in-out duration-400 my-4 hover:scale-105 hover:cursor-pointer">
        <Image
          src={data.imageUrl}
          alt="#"
          width={288}
          height={320}
          className="rounded-[15px] h-[20rem] w-[18rem] bg-[#F0EEED] my-2"
        />
        <h3 className="text-xl font-bold leading-[27px] uppercase text-left">
          {data.title}
        </h3>
        <div className="flex items-center">
          {divArray.map((_, index) => (
            // <Image
            //   key={index}
            //   src={star}
            //   alt="star"
            //   className="w-[18.49px] h-[18.49px] m-[0.5rem_0.1rem_0.5rem_0]"
            // />

            <h1>start</h1>
          ))}
          <p className="ml-1 pt-1">{`${data.rate}.0/5`}</p>
        </div>
        <div className="flex items-center gap-4">
          {data.discount ? (
            <>
              <h2 className="text-xl font-bold leading-[32px]">
                ${data.discount}
              </h2>
              <p className="text-xl font-bold leading-[32px] line-through text-gray-500">
                ${data.price}
              </p>
              <div className="flex justify-center items-center bg-[#FDDDDE] rounded-full px-3 py-1 text-[#F53131]">
                -{data.discountPercent}%
              </div>
            </>
          ) : (
            <h2 className="text-xl font-bold leading-[32px]">${data.price}</h2>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
