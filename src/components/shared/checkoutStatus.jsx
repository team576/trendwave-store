'use client'
import { useDispatch, useSelector } from "react-redux";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import CheckoutCard from "../ui/checkoutCard";
import { useState, useEffect } from "react";
import { SquarePen } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClockIcon from '/public/image/svg/clock.svg';

export default function CheckoutStatus() {
    const goods = useSelector(state => state.goods.goods);
    const { cart, totalPrice } = useSelector(state => state.cart);
    const [storedClientData, setStoredClientData] = useState(null);
    const [storedDeliveryData, setStoredDeliveryData] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const clientData = JSON.parse(localStorage.getItem('clientData'));
        const deliveryData = JSON.parse(localStorage.getItem('deliveryData'));
        setStoredClientData(clientData);
        setStoredDeliveryData(deliveryData);
        console.log(clientData);
        console.log(deliveryData);
    }, []);

    console.log(storedClientData);
    return(
        <div className="border-[1px] font-medium text-base text-[#121212] border-[#EDEDED] p-6 flex flex-col gap-6">
            <h3 className="uppercase font-semibold text-2xl">Статус оформлення</h3>
            <div className="bg-[#E2ECFF] text-[#0047FF] uppercase text-sm rounded-[3px] p-2 px-[14px] w-fit flex gap-2">
                <ClockIcon/>
                оформлення
            </div>
            <div>
            <Accordion type="single" collapsible className="w-full overflow-y-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Усі товари</AccordionTrigger>
                    <div>
                        
                        {Array.isArray(goods) &&
                            cart[0] && (
                                <div className="w-full rounded">
                                    <CheckoutCard el={cart[0]} />
                                </div>
                            )
                        }
                    </div>
                    <AccordionContent>
                        {Array.isArray(goods) &&
                            cart.slice(1).map((el) => {
                            return (
                                <div key={el.id} className="w-full rounded">
                                    <CheckoutCard el={el} />
                                </div>
                            );
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            {pathname === '/checkout/payment' && 
            
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3"> 
                    <div className="flex justify-between">
                        <h4 className="uppercase font-semibold text-lg">Адреса доставки</h4>
                        <Link href={'/checkout/delivery'}> <SquarePen/></Link>
                    </div>
                    {storedDeliveryData && 
                        <div className="normal-case flex flex-col gap-2">
                            <p>{storedDeliveryData.selectedDivision}</p>
                            <p>{storedDeliveryData.selectedCity}</p>
                        </div>
                    }
                </div>
                <div className="flex flex-col gap-3"> 
                    <div className="flex justify-between">
                        <h4 className="uppercase font-semibold text-lg">Дані отримувача</h4>
                        <Link href={'/checkout/delivery'}> <SquarePen/></Link>
                    </div>
                    {storedClientData && 
                        <div className="normal-case flex flex-col gap-1">
                            <div className="flex gap-1">
                                <p>{storedClientData.firstName}</p>
                                <p>{storedClientData.lastName}</p>
                            </div>
                            <p>{storedClientData.email}</p>
                            <p>{storedClientData.phone}</p>
                        </div>
                    }
                </div>
            </div>
            }
            </div>
        </div>
    )
}