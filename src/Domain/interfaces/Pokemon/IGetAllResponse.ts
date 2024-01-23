export interface GetAllResponse {
    data: {
      results: {
        name: string;
        url: string;
        id?: number;
      }[];
    };
  }