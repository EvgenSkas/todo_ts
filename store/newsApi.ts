import { INewsItem } from "./newsModel";

const fakeData = [
  {
    id: 1,
    title: "Делаем CRUD приложение",
    text: "Делаем простое приложение без бэка",
    link: "https://https://www.npmjs.com/package/@types/react-router-dom",
    timestamp: new Date("12-14-2019")
  },
  {
    id: 2,
    title: "Знакомство с реакт hooks",
    text: "Здесть более детальная информация о хуках",
    link: "https://https://www.npmjs.com/other_address",
    timestamp: new Date("12-14-2019")
  },
  {
    id: 3,
    title: "Авторизация с помощью Google",
    text: "Здесь очень много тукста",
    link: "https://https://www.npmjs.com/third_address",
    timestamp: new Date("12-14-2019")
  }
];

interface INewsResponse {
  status: number;
  data: INewsItem[];
  error?: string;
}

export const getNews = (): Promise<INewsResponse> => {
  const response = new Promise<INewsResponse>(resolve => {
    resolve({
      status: 200,
      data: fakeData
    });
  });
  return response;
};
