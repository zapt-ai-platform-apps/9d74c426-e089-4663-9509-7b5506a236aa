import { useState, useEffect } from 'react';
import { api } from './api';
import * as Sentry from '@sentry/browser';

export function useFeaturedExcursions() {
  const [excursions, setExcursions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await api.getExcursions(true);
        setExcursions(data);
      } catch (error) {
        console.error('Error fetching featured excursions:', error);
        Sentry.captureException(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { excursions, loading, error };
}

export function useExcursions() {
  const [excursions, setExcursions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await api.getExcursions();
        setExcursions(data);
      } catch (error) {
        console.error('Error fetching excursions:', error);
        Sentry.captureException(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { excursions, loading, error };
}

export function useExcursion(id) {
  const [excursion, setExcursion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await api.getExcursionById(id);
        setExcursion(data);
      } catch (error) {
        console.error(`Error fetching excursion with id ${id}:`, error);
        Sentry.captureException(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { excursion, loading, error };
}