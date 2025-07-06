# Countries List Feature - Refactorización

Este módulo ha sido refactorizado aplicando las mejores prácticas de ingeniería de software para mejorar la mantenibilidad, reutilización y escalabilidad del código.

## 🏗️ Arquitectura

La refactorización ha dividido el componente monolítico original en múltiples módulos especializados:

```
src/features/countries-list/
├── types/              # Definiciones de tipos TypeScript
├── services/           # Servicios para API calls
├── hooks/              # Custom hooks para lógica de negocio
├── utils/              # Funciones utilitarias
├── components/         # Componentes reutilizables
│   ├── CountriesList/
│   ├── CountryCard/
│   ├── CountriesFilters/
│   └── CountriesGrid/
└── index.ts           # Exportaciones centralizadas
```

## 📝 Tipos (Types)

### `types/index.ts`

- **Country**: Interface para representar un país
- **CountriesFilters**: Interface para los filtros de búsqueda
- **CountriesResponse**: Interface para la respuesta de la API
- **UseCountriesReturn**: Interface para el retorno del hook useCountries
- **UseCountriesFiltersReturn**: Interface para el retorno del hook useCountriesFilters
- **DEFAULT_FILTERS**: Constante con los valores por defecto de los filtros

## 🌐 Servicios (Services)

### `services/countries.service.ts`

- **CountriesService**: Clase que encapsula todas las operaciones relacionadas con la API
- **fetchCountries()**: Método estático para obtener países desde la API GraphQL
- Manejo de errores robusto con mensajes descriptivos
- Validación de la estructura de respuesta

## 🪝 Custom Hooks

### `hooks/useCountries.ts`

- **useCountries**: Hook para manejar el estado de los países
- Retorna: `{ countries, loading, error, refetch }`
- Maneja estados de carga, error y refetch automático

### `hooks/useCountriesFilters.ts`

- **useCountriesFilters**: Hook para manejar los filtros y búsqueda
- Retorna: `{ filters, setSearchTerm, setSelectedContinent, setSelectedCurrency, clearFilters, filteredCountries, continents, currencies }`
- Implementa lógica de filtrado en tiempo real

## 🛠️ Utilidades (Utils)

### `utils/filters.utils.ts`

- **getUniqueItems**: Función para obtener elementos únicos de un array
- **getUniqueContinents**: Extrae continentes únicos de la lista de países
- **getUniqueCurrencies**: Extrae monedas únicas de la lista de países
- **filterCountries**: Aplica filtros a la lista de países
- **hasActiveFilters**: Verifica si hay filtros activos

## 🧩 Componentes Reutilizables

### `CountriesList/index.tsx`

- **Componente principal** que orquesta todos los subcomponentes
- Usa los custom hooks para manejar estado y lógica
- Maneja estados de carga y error

### `CountryCard/index.tsx`

- **Componente reutilizable** para mostrar información de un país
- Props: `{ country: Country }`
- Incluye navegación a la página de detalle del país

### `CountriesFilters/index.tsx`

- **Componente reutilizable** para los filtros de búsqueda
- Props: `{ filters, continents, currencies, callbacks... }`
- Incluye búsqueda por texto, continente y moneda

### `CountriesGrid/index.tsx`

- **Componente reutilizable** para mostrar la grilla de países
- Props: `{ countries, totalCountries, onClearFilters }`
- Incluye contador de resultados y mensaje de "sin resultados"

### `LoadingState.tsx`

- **Componente reutilizable** para mostrar estado de carga
- Usa Skeleton components para una mejor UX

### `ErrorState.tsx`

- **Componente reutilizable** para mostrar errores
- Props: `{ error, onRetry }`
- Incluye botón de reintentar

## 📦 Exportaciones

El archivo `index.ts` centraliza todas las exportaciones del módulo, facilitando las importaciones:

```typescript
// Importar todo desde un solo lugar
import { CountriesList, useCountries, Country } from '@/features/countries-list'
```

## 🎯 Beneficios de la Refactorización

1. **Separación de responsabilidades**: Cada archivo tiene una responsabilidad específica
2. **Reutilización**: Los componentes pueden ser reutilizados en otras partes de la aplicación
3. **Testabilidad**: Cada módulo puede ser probado independientemente
4. **Mantenibilidad**: El código es más fácil de mantener y actualizar
5. **Escalabilidad**: Fácil agregar nuevas funcionalidades sin afectar el código existente
6. **Tipos seguros**: TypeScript proporciona seguridad de tipos en toda la aplicación
7. **Legibilidad**: El código es más limpio y fácil de entender

## 🔄 Migración

Para usar el componente refactorizado, simplemente importa y usa `CountriesList` como antes:

```typescript
import { CountriesList } from '@/features/countries-list'

// En tu componente
;<CountriesList />
```

La API pública del componente principal permanece igual, pero ahora internamente usa la arquitectura modular.
