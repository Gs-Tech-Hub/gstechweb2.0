// Base API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Helper function to handle API responses
async function handleResponse(response: Response) {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Something went wrong');
  }
  
  return data;
}

// Function to get auth headers
function getAuthHeaders() {
  const token = localStorage.getItem('authToken');
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

// Blog API functions
export const blogApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/blogs`);
    return handleResponse(response);
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
    return handleResponse(response);
  },

  create: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  update: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (response.status === 204) {
      return true;
    }
    return handleResponse(response);
  },
};

// Portfolio API functions
export const portfolioApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio`);
    return handleResponse(response);
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/${id}`);
    return handleResponse(response);
  },

  create: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  update: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (response.status === 204) {
      return true;
    }
    return handleResponse(response);
  },
};