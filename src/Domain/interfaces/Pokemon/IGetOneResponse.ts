export interface GetOneResponse {
    data: {
      name: string;
      sprites: {
        other: {
          home: {
            front_default: string;
          };
        };
      };
      abilities: {
        ability: {
          name: string;
        };
      }[];
    };
  }