export interface ITimeline {
  id: string;
  taskName: string;
  description: string;
  outputMemo: string;
  likeCount: number;
  user: {
    id: string;
    userName: string;
    avatar: string;
  };
  label: {
    id: string;
    labelName: string;
    color: string;
  }[];
}

export interface ITimelineService {
  useGet: () => ITimeline[] | undefined;
}
