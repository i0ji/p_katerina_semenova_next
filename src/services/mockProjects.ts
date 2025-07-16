interface SlideModel {
  id: number;
  img: string;
}

interface SlidesDataModel {
  slides: SlideModel[];
  description: string;
}

const mockSlidesData = [
  'AnniversarySlides',
  'NagaStyleSlides',
  'NoraQuizSlides',
  'NoraStyleSlides',
  'PatternSlides',
  'SeagullSlides',
  'TsumSlides',
];

const getSlides = (projectName: string, count: number): SlideModel[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    img: `https://katerinasemenova.ru/${projectName}/${i + 1}.webp`,
  }));

export const mockProjects: SlidesDataModel[] = mockSlidesData.map(
  (project) => ({
    description: project,
    slides: getSlides(project, 5),
  })
);
