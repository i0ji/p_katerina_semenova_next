interface SlideModel {
  id: number;
  img: string;
}

interface SlidesDataModel {
  slides: Array<SlideModel>;
  description: string;
}

interface ProjectsState {
  projects: SlidesDataModel[];
  error: string | null;
  pending: boolean;
  loaded: boolean;
}
