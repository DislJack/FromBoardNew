import type { JSX } from "react";
import BestSupportIcon from "../assets/advantages/bestSupport.tsx";
import BoardIcon from "../assets/advantages/board.tsx";
import ClearInfoIcon from "../assets/advantages/clearInfo.tsx";
import DeliveryIcon from "../assets/advantages/delivery.tsx";
import GaranteeIcon from "../assets/advantages/garantee.tsx";
import PackageIcon from "../assets/advantages/package.tsx";

type TmockCards = {
  id: number,
  title: string,
  text: string,
  icon: JSX.Element
};

const mockCards: TmockCards[] = [
  {
    id: 1,
    title: 'Растоможка груза',
    text: 'Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза',
    icon: <BoardIcon />
  },
  {
    id: 2,
    title: 'Надёжная упаковка',
    text: 'Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и в отличном состоянии',
    icon: <PackageIcon />
  },
  {
    id: 3,
    title: 'Быстро и выгодно',
    text: 'Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее.',
    icon: <DeliveryIcon />
  },
  {
    id: 4,
    title: 'Удобный сервис',
    text: 'Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и беззаботным',
    icon: <BestSupportIcon />
  },
  {
    id: 5,
    title: 'Прозрачность работы',
    text: 'Мы предоставляем полный контроль над каждым этапом доставки, от момента заказа до момента прибытия заказа',
    icon: <ClearInfoIcon />
  },
  {
    id: 6,
    title: 'Страхование груза',
    text: 'Наше страхование обеспечивает полную защиту и покрытие почти все неприятные и неожиданные ситуации',
    icon: <GaranteeIcon />
  }
];

export default mockCards;