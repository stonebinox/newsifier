export type AuthorType = {
  id: number;
  name: string;
  username: string;
  email: string;
  status: string;
}

export type ArticleTagType = {
  id: number;
  title: string;
  slug: string;
}

export type ArticleType = {
  id: number;
  title: string;
  is_sticky: boolean;
  in_headline: 'yes' | 'no';
  type: string;
  enable_comments: boolean;
  comments_count: number;
  claps_count: number;
  claps_users_count: number;
  source: string;
  source_url: string;
  image_id: number;
  slug: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  is_published: boolean;
  user_id: number;
  video_id: string;
  views: number;
  meta_title: string;
  meta_description: string;
  status: string;
  url: string;
  bold_title: number;
  is_bold: boolean;
  author: AuthorType;
  image: string;
  thumbnails: any;
  tags: ArticleTagType[];
  primary_tag: ArticleTagType;
  content?: any[];
}

export type CommentType = {
  id: number;
  replay_to: boolean;
  content: string;
  date: string;
  date_and_time: string;
  replies_count: number;
  likes_count: number;
  username: string;
  user_id: number;
  user_likes: number;
  user_avatar: string;
  user_url: string;
  level: number;
  replies: any[],
  can_like_it: boolean;
  status: string;
  created_at: Date;
  updated_at: Date;
  flagged: number;
  show_as_dark: boolean;
  author_role: string;
  show_author_role: boolean;
  show_the_badge: boolean;
  can_edit: boolean;
  can_delete: boolean;
}