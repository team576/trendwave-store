import { Title } from "@/components/ui";


export default function Page() {
    const textPage = {
        title: 'Політика конфіденційності',
        p1: 'Реєструючись, ви надаєте онлайн-магазину  «Name» згоду на обробку всіх введених для реєстрації даних з метою  належного надання послуг зазначених в договорі Публічної оферти.  Належне надання послуг передбачає передачу вашої інформації  транспортно-кур’єрській службі за допомогою якої здійснюється доставка  товару до складу в місті покупця.',
        subtitle1: 'ЗБІР ОСОБИСТОЇ ІНФОРМАЦІЇ',
        li1: [
            '1.1. Під час реєстрації на сайті ми  просимо вас повідомити необхідну особисту інформацію в обсязі, який є  потрібним для надання послуг. Ми залишаємо за собою право вимагати  надати додаткову особисту інформацію в разі потреби.',
            '1.2. Файли cookie – коли ви заходите  на наш сайт, ми відправляємо один або кілька файлів cookie на ваш  комп’ютер або інший пристрій. Файли cookie використовуються для того,  щоб підвищувати якість послуг, що надаються: зберігати налаштування  користувача.',
            '1.3. Інформація про відвідування –  при доступі на сайт наші сервери автоматично записують певну інформацію.  Ці журнали сервера можуть містити таку інформацію, як веб-запит,  IP-адреса, тип і мова браузера, дату і час запиту.'
        ],
        subtitle2: 'НАДАННЯ ДОСТУПУ ДО ІНФОРМАЦІЇ',
        li2: [
            '2.1. Ми надаємо доступ до вашої особистої інформації іншим особам тільки за таких обмежених обставин:',
            '2.1.1. У нас є на це ваш дозвіл. Для передачі будь-якої конфіденційної інформації нам потрібна ваша згода.',
            '2.1.2. У нас є достатні підстави вважати, що доступ, використання, збереження або розкриття такої інформації необхідний для:',
            '2.1.2.1. дотримання законодавства  України, в тому числі надання інформації на вимогу фізичних і юридичних  осіб, установ, організацій будь-якої форми власності або державних  органів, які мають право на отримання такої інформації згідно з  законодавством України;',
            '2.1.2.2. розслідування потенційних  порушень Публічної оферти, що передбачає надання інформації про вас у  відповідь на належним чином оформлений адвокатський запит з інформацією  про порушення;',
            '2.1.2.3. виявлення і запобігання шахрайських дій, а також вирішення проблем безпеки та усунення технічних несправностей.'
        ],
        subtitle3: 'ЗАХИСТ ІНФОРМАЦІЇ',
        li3: [
            '3.1. Ми вживаємо всіх необхідних заходів  для захисту даних від несанкціонованого доступу, зміни, розкриття чи  знищення. До цих заходів відносяться, зокрема, внутрішня перевірка  процесів збору, зберігання і обробки даних і заходів безпеки, включаючи  відповідне шифрування і заходи щодо забезпечення фізичної безпеки даних  для запобігання несанкціонованого доступу. '
        ],
        subtitle4: 'ДОСТУП ДО ОСОБИСТОЇ ІНФОРМАЦІЇ ТА ЇЇ ОНОВЛЕННЯ',
        li4: [
            '4.1. Ми робимо все від нас залежне, щоб  надати вам доступ до ваших особистих даних і або виправити їх, якщо вони  невірні, або вилучити за вашим запитом, якщо тільки їх зберігання не  відповідає закону або не обумовлено законними діловими цілями. Перед  обробкою запитів ми просимо користувачів підтвердити свою особу і  інформацію, яку вони хочуть отримати, виправити або видалити',
        ],
        subtitle5: 'ЗМІНА ДІЙСНОЇ ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ',
        li5: [
            '5.1. Дійсна політика конфіденційності  може час від часу змінюватися. Зміни, що вносяться до політики  конфіденційності, будуть опубліковані на цій сторінці.'
        ],
    }


    return(
        <div className="border-l-[1px] text-sm font-mont border-[#EDEDED] w-full px-10 flex flex-col gap-5 text-[#4D4D4D]">
            <Title text={textPage.title} size="lg" className=' font-semibold uppercase text-[#212121]' />
            <div className="flex flex-col gap-5">
            <p>{textPage.p1}</p>
                <div className="h-10 flex items-center">
                    <Title text={textPage.subtitle1} size="xs" className='font-semibold uppercase text-[#212121]' />
                </div>
                <ol className="flex flex-col gap-2 list-none list-inside">
                    {textPage.li1.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>

            <div className="flex flex-col gap-5">
            <Title text={textPage.subtitle2} size="xs" className='font-semibold uppercase text-[#212121]' />
                <ol className="flex flex-col gap-2 list-none list-inside">
                    {textPage.li2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ol>

                <Title text={textPage.subtitle3} size="xs" className='font-semibold uppercase text-[#212121]' />
                <ul className="flex flex-col gap-2 list-none list-inside">
                    {textPage.li3.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <Title text={textPage.subtitle4} size="xs" className='font-semibold uppercase text-[#212121]' />
                <ul className="flex flex-col gap-2 list-none list-inside">
                    {textPage.li4.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <Title text={textPage.subtitle5} size="xs" className='font-semibold uppercase text-[#212121]' />
                <ul className="flex flex-col gap-2 list-none list-inside">
                    {textPage.li5.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            
        </div>
    )
}