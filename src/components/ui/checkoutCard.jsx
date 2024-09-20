import { useDispatch } from "react-redux"

import { Counter } from "../shared"
import Image from "next/image"
import { Title } from ".";

import Trash from '../../../public/image/svg/trash.svg'
import { removeFromCart, setTotalPrice } from "@/redux/features/cartSlice"



export default function CheckoutCard ({ el }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(el.id));
    dispatch(setTotalPrice());
  }

  return (
    <div className="flex gap-2 py-5 justify-between">
      <div className="min-w-[40%]">
        <Image
          src={el.images[0]}
          alt={el.title}
          width={150}
          height={180}
          className="h-full  object-cover"
        />
      </div>

      <div className=" flex flex-col gap-5 w-full">
        <Title text={el.title} className="text-base font-semibold uppercase" />
        <div className="text-[#BABABA] font-medium flex normal-case">
          <p>{el.color}/</p>
          <p>{el.size}/</p>
          <p>Кількість {el.count}</p>
        </div>
        <div className="uppercase text-lg">
          <h3>{el.price} uah</h3>
        </div>
      </div>

      <div className="header-icon">
        <button className="header-link" onClick={handleRemove}>
          <Trash className='header-icon-shopping-cart' />
        </button>
      </div>
    </div>
  )
}