// export const AnniversarySlides = [
//   { id: 1000, img: './AnniversarySlides/a1.webp' },
//   { id: 1001, img: './AnniversarySlides/a2.webp' },
//   { id: 1002, img: './AnniversarySlides/a3.webp' },
//   { id: 1003, img: './AnniversarySlides/a4.webp' }
// ];

// import { fetchAnniversarySlides } from '@/services';

export async function fetchAnniversarySlides(): Promise<
  SlideModel[]
> {
  const apiUrl = 'https://katerinasemenova.ru/images.php';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Ошибка HTTP: ${response.status} - ${errorText}`
      );
    }

    const data: SlideModel[] = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении слайдов:', error);
    throw error;
  }
}
export const AnniversaryDescription = `Бассейн «Чайка» — оформление к\u00A065-летию бассейна — 2022`;
