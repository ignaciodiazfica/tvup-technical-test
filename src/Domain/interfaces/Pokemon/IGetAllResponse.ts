export interface GetAllResponse {
    data: {
      results: {
        name: string;
        url: string;
        id?: number;
      }[];
      next: string | null;
      previous: string | null;
    };
  }