export const api = {
  async getExcursions(featured = false) {
    try {
      const response = await fetch(`/api/excursions?featured=${featured}`);
      if (!response.ok) {
        throw new Error('Failed to fetch excursions');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching excursions:', error);
      throw error;
    }
  },

  async getExcursionById(id) {
    try {
      const response = await fetch(`/api/excursion?id=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch excursion');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching excursion:', error);
      throw error;
    }
  }
};