export const api = {
  async createBooking(bookingData) {
    try {
      const response = await fetch(`/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create booking');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }
};