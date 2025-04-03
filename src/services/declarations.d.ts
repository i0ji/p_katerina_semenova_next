interface SlideModel {
  id: number;
  img: string;
}

interface SlidesDataModel {
  slides: Array<SlideModel>;
  description: string;
}
type GlideInstanceModel = {
  mount: () => void;
  destroy: () => void;
  go: (pattern: '>' | '<' | `=${number}`) => void;
  index: number;
  on: (
    event:
      | 'run'
      | 'run.before'
      | 'run.after'
      | 'mount.before'
      | 'mount.after'
      | 'update',
    callback: (data?: {
      index?: number;
      direction?: string;
    }) => void
  ) => void;
};
