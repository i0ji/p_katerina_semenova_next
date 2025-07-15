import {
  fetchProjectsStart,
  fetchProjectsFailure,
  fetchProjectsSuccess,
} from 'store/projectSlice';

export const fetchProjects =
  (projectName: string) => async (dispatch) => {
    try {
      console.log('Начинаю fetchProjects', projectName);
      dispatch(fetchProjectsStart());

      const response = await fetch(
        `https://katerinasemenova.ru/fetchData.php?project=${encodeURIComponent(
          projectName
        )}`
      );

      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status}`);
      }

      const data = await response.json();
      console.log('Данные с API:', data);

      if (
        typeof data !== 'object' ||
        !('slides' in data) ||
        !Array.isArray(data.slides) ||
        typeof data.description !== 'string'
      ) {
        throw new Error('Некорректный формат данных');
      }

      dispatch(fetchProjectsSuccess([data]));
      console.log('Данные отправлены в store');
    } catch (error) {
      dispatch(fetchProjectsFailure((error as Error).message));
      console.error('Ошибка загрузки данных:', error);
    }
  };
