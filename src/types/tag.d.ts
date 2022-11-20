export interface TagState {
  tags: TagResponse[] | null;
}

export interface TagResponse {
  tagNames: string[];
}
