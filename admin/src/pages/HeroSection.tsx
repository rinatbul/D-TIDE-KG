import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { api, type HeroSectionData } from '../lib/api';

export const HeroSection = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<HeroSectionData>({
    queryKey: ['heroSection'],
    queryFn: () => api.get<HeroSectionData>('/api/hero-section'),
  });

  const mutation = useMutation({
    mutationFn: (data: HeroSectionData) => api.put<HeroSectionData>('/api/hero-section', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['heroSection'] });
      alert('Данные успешно сохранены');
    },
    onError: (error) => {
      alert(`Ошибка при сохранении: ${error.message}`);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HeroSectionData>();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const onSubmit = (formData: HeroSectionData) => {
    mutation.mutate(formData);
  };

  if (isLoading) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Главный баннер</h1>
        <p>Загрузка...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Главный баннер</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Заголовок
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Заголовок обязателен' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
            Подзаголовок (используйте \n для переноса строки)
          </label>
          <textarea
            id="subtitle"
            rows={3}
            {...register('subtitle', { required: 'Подзаголовок обязателен' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.subtitle && (
            <p className="mt-1 text-sm text-red-600">{errors.subtitle.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="backgroundImage" className="block text-sm font-medium text-gray-700 mb-2">
            Путь к фоновому изображению
          </label>
          <input
            id="backgroundImage"
            type="text"
            {...register('backgroundImage', { required: 'Путь к изображению обязателен' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="/HeaderImage.png"
          />
          {errors.backgroundImage && (
            <p className="mt-1 text-sm text-red-600">{errors.backgroundImage.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="erasmusText" className="block text-sm font-medium text-gray-700 mb-2">
            Текст Erasmus
          </label>
          <input
            id="erasmusText"
            type="text"
            {...register('erasmusText', { required: 'Текст Erasmus обязателен' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.erasmusText && (
            <p className="mt-1 text-sm text-red-600">{errors.erasmusText.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </form>
    </div>
  );
};

