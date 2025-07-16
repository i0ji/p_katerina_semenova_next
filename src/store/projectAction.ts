import { AppDispatch } from './store';
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from './projectSlice';

import { mockProjects } from 'services/mockProjects';

export const fetchProjects = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchProjectsStart());

    //OPTION: DEV ENV
    if (process.env.NODE_ENV === 'development') {
      await new Promise((res) => setTimeout(res, 500));
      dispatch(fetchProjectsSuccess(mockProjects));
      return;
    }

    //OPTION: PROD ENV
    const res = await fetch('https://katerinasemenova.ru/fetchData.php');
    
    if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
    const data: SlidesDataModel[] = await res.json();
    dispatch(fetchProjectsSuccess(data));
  } catch (error: unknown) {
    let message = 'Неизвестная ошибка';
    if (error instanceof Error) {
      message = error.message;
    }
    dispatch(fetchProjectsFailure(message));
  }

  //     const res = await fetch('https://katerinasemenova.ru/fetchData.php');
  //     if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
  //     const data: SlidesDataModel[] = await res.json();
  //     dispatch(fetchProjectsSuccess(data));
  //   } catch (error: unknown) {
  //     let message = 'Неизвестная ошибка';
  //     if (error instanceof Error) {
  //       message = error.message;
  //     }
  //     dispatch(fetchProjectsFailure(message));
  //   }
};
