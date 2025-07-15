// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchProjects = createAsyncThunk(
//   'projects/fetchProjects',
//   async (_, { rejectWithValue }) => {
//     try {
//       const projectNames = ['project1', 'project2'];

//       const responses = await Promise.all(
//         projectNames.map((name) =>
//           fetch(`http://31.31.196.245/fetchData.php?project=${name}`)
//         )
//       );

//       const data = await Promise.all(
//         responses.map(async (res) => {
//           if (!res.ok) {
//             throw new Error(`Ошибка запроса: ${res.status}`);
//           }
//           return await res.json();
//         })
//       );

//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
