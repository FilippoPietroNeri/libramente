import { cache } from 'react';

export const fetchData = cache(() =>
  fetch('/api/video/', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
  }).then((res) => res.json())
);