import React, { useState, useMemo } from 'react';
import { Search, Filter, X, Heart, Eye, DollarSign } from 'lucide-react';
import type { Animal, AnimalSearchFilters } from '../types';

// Datos dummy para la búsqueda
const dummyAnimals: (Animal & { price: number })[] = [
  {
    id: '1',
    name: 'Torito',
    species: 'Bovino',
    breed: 'Angus',
    birthDate: new Date('2020-03-15'),
    weight: 450,
    gender: 'male',
    color: 'Negro',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-01-15'),
    ownerId: 'user1',
    vetExaminations: [],
    paymentStatus: 'paid',
    price: 25000
  },
  {
    id: '2',
    name: 'Lechera Bella',
    species: 'Bovino',
    breed: 'Holstein',
    birthDate: new Date('2019-05-20'),
    weight: 520,
    gender: 'female',
    color: 'Blanco y Negro',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-02-01'),
    ownerId: 'user2',
    vetExaminations: [],
    paymentStatus: 'paid',
    price: 30000
  },
  {
    id: '3',
    name: 'Corcel',
    species: 'Equino',
    breed: 'Criollo',
    birthDate: new Date('2018-08-10'),
    weight: 420,
    gender: 'male',
    color: 'Marrón',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-03-10'),
    ownerId: 'user3',
    vetExaminations: [],
    paymentStatus: 'paid',
    price: 45000
  },
  {
    id: '4',
    name: 'Ovejita Dulce',
    species: 'Ovino',
    breed: 'Corriedale',
    birthDate: new Date('2021-04-05'),
    weight: 65,
    gender: 'female',
    color: 'Blanco',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-04-15'),
    ownerId: 'user1',
    vetExaminations: [],
    paymentStatus: 'paid',
    price: 8000
  },
  {
    id: '5',
    name: 'Cochino Feliz',
    species: 'Porcino',
    breed: 'Yorkshire',
    birthDate: new Date('2022-01-20'),
    weight: 180,
    gender: 'male',
    color: 'Rosado',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-05-01'),
    ownerId: 'user4',
    vetExaminations: [],
    paymentStatus: 'paid',
    price: 12000
  },
  {
    id: '6',
    name: 'Yegua Estrella',
    species: 'Equino',
    breed: 'Cuarto de Milla',
    birthDate: new Date('2017-12-03'),
    weight: 480,
    gender: 'female',
    color: 'Alazán',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-06-01'),
    ownerId: 'user5',
    vetExaminations: [],
    paymentStatus: 'paid',
    price: 55000
  }
];

const AnimalSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<AnimalSearchFilters>({
    priceRange: { min: 0, max: 100000 }
  });
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const species = ['Bovino', 'Equino', 'Ovino', 'Porcino', 'Caprino'];
  const healthStatuses = [
    { value: 'healthy', label: 'Saludable' },
    { value: 'sick', label: 'Enfermo' },
    { value: 'under-treatment', label: 'En tratamiento' }
  ];

  const filteredAnimals = useMemo(() => {
    return dummyAnimals.filter(animal => {
      // Filtro por término de búsqueda
      const matchesSearch = !searchTerm || 
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.breed.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtro por especie
      const matchesSpecies = !filters.species || animal.species === filters.species;

      // Filtro por raza
      const matchesBreed = !filters.breed || animal.breed === filters.breed;

      // Filtro por precio
      const matchesPrice = !filters.priceRange || 
        (animal.price >= filters.priceRange.min && animal.price <= filters.priceRange.max);

      // Filtro por estado de salud
      const matchesHealth = !filters.healthStatus || animal.healthStatus === filters.healthStatus;

      // Filtro por género
      const matchesGender = !filters.gender || animal.gender === filters.gender;

      // Filtro por edad
      const animalAge = new Date().getFullYear() - animal.birthDate.getFullYear();
      const matchesAge = !filters.ageRange || 
        (animalAge >= filters.ageRange.min && animalAge <= filters.ageRange.max);

      return matchesSearch && matchesSpecies && matchesBreed && matchesPrice && 
             matchesHealth && matchesGender && matchesAge;
    });
  }, [searchTerm, filters]);

  const calculateAge = (birthDate: Date) => {
    return new Date().getFullYear() - birthDate.getFullYear();
  };

  const toggleFavorite = (animalId: string) => {
    setFavorites(prev => 
      prev.includes(animalId) 
        ? prev.filter(id => id !== animalId)
        : [...prev, animalId]
    );
  };

  const clearFilters = () => {
    setFilters({ priceRange: { min: 0, max: 100000 } });
    setSearchTerm('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Búsqueda de Animales</h1>
        <p className="text-gray-600">Encuentra animales por tipo, precio y características específicas</p>
      </div>

      {/* Barra de búsqueda */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por nombre, especie o raza..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              showFilters 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Filter size={20} />
            Filtros
          </button>
        </div>

        {/* Filtros expandibles */}
        {showFilters && (
          <div className="border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Especie */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Especie</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={filters.species || ''}
                  onChange={(e) => setFilters({ ...filters, species: e.target.value || undefined })}
                >
                  <option value="">Todas las especies</option>
                  {species.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Rango de precio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Precio Máximo</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input
                    type="number"
                    placeholder="50000"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={filters.priceRange?.max || ''}
                    onChange={(e) => setFilters({
                      ...filters,
                      priceRange: {
                        min: filters.priceRange?.min || 0,
                        max: parseInt(e.target.value) || 100000
                      }
                    })}
                  />
                </div>
              </div>

              {/* Estado de salud */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estado de Salud</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={filters.healthStatus || ''}
                  onChange={(e) => setFilters({ ...filters, healthStatus: e.target.value || undefined })}
                >
                  <option value="">Todos</option>
                  {healthStatuses.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>

              {/* Género */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={filters.gender || ''}
                  onChange={(e) => setFilters({ ...filters, gender: e.target.value as 'male' | 'female' | undefined })}
                >
                  <option value="">Ambos</option>
                  <option value="male">Macho</option>
                  <option value="female">Hembra</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2"
              >
                <X size={16} />
                Limpiar Filtros
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Resultados */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Resultados ({filteredAnimals.length} animales encontrados)
          </h2>
        </div>

        {filteredAnimals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron animales con los criterios de búsqueda</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Limpiar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimals.map(animal => (
              <div key={animal.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{animal.name}</h3>
                  <button
                    onClick={() => toggleFavorite(animal.id)}
                    className={`p-1 rounded-full ${
                      favorites.includes(animal.id)
                        ? 'text-red-500'
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <Heart size={20} fill={favorites.includes(animal.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Especie:</span> {animal.species}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Raza:</span> {animal.breed}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Edad:</span> {calculateAge(animal.birthDate)} años
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Peso:</span> {animal.weight} kg
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Estado:</span> 
                    <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
                      animal.healthStatus === 'healthy' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {animal.healthStatus === 'healthy' ? 'Saludable' : 'En tratamiento'}
                    </span>
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-green-600">
                    ${animal.price.toLocaleString()}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                    <Eye size={16} />
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalSearchPage;