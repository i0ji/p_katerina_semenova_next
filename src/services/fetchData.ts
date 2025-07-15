import { AppDispatch } from 'store/store';
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from 'store/projectSlice';

export const fetchProjects = () => async (dispatch: AppDispatch) => {
  dispatch(fetchProjectsStart());

  const projectNames = [
    'AnniversarySlides',
    'NagaStyleSlides',
    'NoraQuizSlides',
    'NoraStyleSlides',
    'PatternSlides',
    'SeagullSlides',
    'TsumSlides',
  ];
  try {
    const responses = await Promise.all(
      projectNames.map((name) =>
        fetch(`http://31.31.196.245/fetchData.php?project=${name}`)
      )
    );

    const data = await Promise.all(
      responses.map(async (res) => {
        if (!res.ok) {
          throw new Error(`Ошибка запроса: ${res.status}`);
        }
        return await res.json();
      })
    );

    dispatch(fetchProjectsSuccess(data));
  } catch (error: any) {
    dispatch(fetchProjectsFailure(error.message));
  }
};
