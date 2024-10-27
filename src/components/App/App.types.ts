export interface ApiResponse {
  results: Image[];
  total_pages: number;
  total: number;
}

export interface Image {
  id: string;
  alt_description: string;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string | null;
    location: string | null;
  };
}
