const baseUrl = 'https://microservice.newsifier.com/api/v1';
const articleUrl  = 'https://androidworld.newsifier.com/api/v1';

export const getArticles = (page) => fetch(`${baseUrl}/article/scopes/lat/1/${page}`, {
  headers: {
    'X-Tenant': 'androidworld.newsifier.com',
  },
});

export const getArticle = (articleId) => fetch(`${articleUrl}/article-as-visitor/${articleId}?include=clapsCount,commentsCount`, {
  headers: {
    'X-Tenant': 'androidworld.newsifier.com',
    'Authorization': 'Bearer m8tiFyxZrZD1NGWNAjSu7dpPV8hlJOMLOqS2sWCGXXFllxFsHmGwrD3oT2Son1kXaEM6iRL22nLsgBPp',
  },
});

export const getComments = (articleId) => fetch(`${baseUrl}/article/${articleId}/comments/0`, {
  headers: {
    'X-Tenant': 'androidworld.newsifier.com',
  },
});
