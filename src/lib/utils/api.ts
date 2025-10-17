// Base API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Helper function to handle API responses
async function handleResponse(response: Response) {
  const data = await response.json();

  if (!response.ok) {
    return {
      status: false,
      message: data.error || 'Something went wrong'
    }
  } else {
    return {
      status: true,
      message: data
    }
  }

}

// Function to get auth headers
// local storage was never set
function getAuthHeaders() {
  // localStorage is only available in the browser. Guard access for SSR.
  let token: string | null = null;
  if (typeof window !== 'undefined' && window.localStorage) {
    token = localStorage.getItem('authToken');
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
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
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  update: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
      credentials: 'include',
    });
    if (response.status === 204) {
      return {
        status: true,
        message: 'blog successfully deleted'
      }
    }
    return handleResponse(response);
  },
};

// Project-Onboarding API functions
export const projectOnboardingApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/project-onboarding`);
    return handleResponse(response);
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/project-onboarding/${id}`);
    return handleResponse(response);
  },

  create: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/project-onboarding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
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