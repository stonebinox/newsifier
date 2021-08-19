const baseUrl = 'https://microservice.newsifier.com/api/v1';

export const getArticles = () => fetch(`${baseUrl}/article/scopes/lat/1/1`, {
  headers: {
    'X-Tenant': 'androidworld.newsifier.com',
  },
});