/*import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTours = async () => {
  const response = await axios.get('/api/v1/tours');
  return response.data;
};

const { data: tours, isLoading, isError } = useQuery('tours', fetchTours);

import { useMutation } from 'react-query';

const createTourMutation = async (tourData) => {
  const response = await axios.post('/api/v1/tours', tourData);
  return response.data;
};

const {
  mutate: createTour,
  isLoading: isCreatingTour,
  isError: createTourError,
} = useMutation(createTourMutation);

const handleCreateTour = (tourData) => {
  createTour(tourData);
};
import axios from 'axios';

const updateTourDetails = async (tourId, updatedData) => {
    try {
        const response = await axios.patch(`/api/v1/tours/${tourId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating tour:', error);
        throw error;
    }
};*/
