# Hooks Lab

A comprehensive learning project demonstrating custom React Hooks implementation patterns. This application showcases practical, reusable hooks for common use cases with interactive examples and demonstrations.

## Features

- **useDebounce Hook** - Delays value updates to optimize performance in search operations and form inputs
- **usePagination Hook** - Simplifies pagination logic with automatic page calculations and navigation controls
- **Interactive Demos** - Live examples of each hook in action
- **Type-Safe Implementation** - Full TypeScript support with generic types
- **Production-Ready Patterns** - Best practices for custom hook development
- **Responsive Components** - Clean, functional UI for hook demonstrations

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 6
- **Build Tool**: Vite
- **Styling**: CSS
- **Linting**: ESLint with React Hooks support
- **Compiler**: React Compiler via Babel

## Project Structure

```
src/
├── hooks/                    # Custom React hooks
│   ├── useDebounce.ts       # Debounce hook implementation
│   └── usePagination.ts     # Pagination hook implementation
├── components/              # Demo components
│   ├── DebounceSearchDemo.tsx # useDebounce showcase
│   └── PaginationDemo.tsx     # usePagination showcase
├── App.tsx                  # Root component
├── main.tsx                 # Application entry point
└── readMe.md               # This file
```

## Hooks Reference

### useDebounce

A generic hook that delays value updates, useful for optimizing expensive operations like API calls in search functionality.

**Signature:**

```typescript
useDebounce<T>(value: T, delay?: number = 500): T
```

**Parameters:**

- `value` - The value to debounce
- `delay` - Optional delay in milliseconds (default: 500ms)

**Returns:**

- The debounced value that updates after the specified delay

**Example:**

```typescript
const [search, setSearch] = useState("");
const debouncedSearch = useDebounce(search, 300);

// Use debouncedSearch in API calls or filters
```

**Use Cases:**

- Search input fields
- Autocomplete features
- Auto-save functionality
- Form validation triggers
- Window resize handlers

### usePagination

A hook that manages pagination state and provides utility functions for navigating through paginated data.

**Signature:**

```typescript
usePagination(
  totalItems: number,
  itemsPerPage?: number = 10,
  initialPage?: number = 1
): PaginationState
```

**Parameters:**

- `totalItems` - Total number of items to paginate
- `itemsPerPage` - Items displayed per page (default: 10)
- `initialPage` - Starting page number (default: 1)

**Returns Object:**

- `currentPage` - The current active page number
- `totalPages` - Total number of pages
- `startIndex` - Start index for slicing the items array
- `endIndex` - End index for slicing the items array
- `itemsOnCurrentPage` - Number of items on the current page
- `canNextPage` - Boolean indicating if next page is available
- `canPreviousPage` - Boolean indicating if previous page is available
- `setPage(pageNumber)` - Function to jump to a specific page
- `nextPage()` - Function to go to the next page
- `previousPage()` - Function to go to the previous page

**Example:**

```typescript
const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const pagination = usePagination(items.length, 10);
const currentItems = items.slice(pagination.startIndex, pagination.endIndex);

// Use pagination state and functions for UI controls
```

**Use Cases:**

- Data tables
- Product listing pages
- Search results
- Comment sections
- Any list-based data display

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory

   ```bash
   cd hooks-lab
   ```

3. Install dependencies
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Hook Implementation Details

### useDebounce Implementation Pattern

The `useDebounce` hook uses the following pattern:

1. Maintains local state for the debounced value
2. Sets up a timeout when the input value changes
3. Clears the timeout if the value changes before the delay completes
4. Returns the delayed value

**Key Points:**

- Generic type `<T>` allows debouncing any type of value
- Cleanup function prevents memory leaks
- Configurable delay for different use cases

### usePagination Implementation Pattern

The `usePagination` hook provides:

1. Current page state management
2. Calculation of page boundaries and indices
3. Navigation functions with built-in bounds checking
4. Boolean flags to enable/disable navigation buttons

**Key Points:**

- Automatic index calculation for array slicing
- Prevents invalid page numbers
- Separates pagination logic from UI concerns
- Returns all necessary data for complete pagination UI

## Demo Components

### DebounceSearchDemo

Demonstrates the `useDebounce` hook by showing:

- Real-time search input value
- Debounced value that updates after 500ms
- Visual comparison of immediate vs. debounced updates

### PaginationDemo

Demonstrates the `usePagination` hook by showing:

- A list of 120 items paginated in groups of 10
- Current page indicator
- Previous/Next navigation buttons
- Disabled state when at first/last page

## Best Practices Demonstrated

- **Custom Hooks** - Encapsulating reusable logic in hooks
- **Generic Types** - Using TypeScript generics for flexible, type-safe code
- **Hook Dependencies** - Proper dependency arrays in useEffect
- **Cleanup Functions** - Preventing memory leaks with cleanup
- **Separation of Concerns** - Logic hooks separate from presentation components
- **Accessibility** - Disabled button states managed properly
- **Performance** - Debouncing optimizes expensive operations

## Learning Outcomes

By studying this project, you'll understand:

✅ How to create custom React Hooks  
✅ TypeScript generic types in hook development  
✅ useEffect and dependency management  
✅ State management patterns  
✅ Performance optimization techniques  
✅ Pagination algorithms  
✅ Debouncing and throttling concepts  
✅ Reusable component patterns

## Common Patterns

### Using useDebounce with API Calls

```typescript
const [search, setSearch] = useState("");
const debouncedSearch = useDebounce(search, 500);

useEffect(() => {
  // Make API call only when debouncedSearch changes
  if (debouncedSearch) {
    fetchSearchResults(debouncedSearch);
  }
}, [debouncedSearch]);
```

### Using usePagination with Filtering

```typescript
const [filter, setFilter] = useState("");
const filteredItems = items.filter((item) => item.includes(filter));
const pagination = usePagination(filteredItems.length, 10);
const displayItems = filteredItems.slice(
  pagination.startIndex,
  pagination.endIndex,
);
```

## Contributing

When contributing to this project:

1. Follow the existing hook implementation patterns
2. Maintain TypeScript strict typing throughout
3. Add cleanup functions for any side effects
4. Include proper dependency arrays
5. Run `npm run lint` before committing code
6. Create demo components for new hooks

## Testing Custom Hooks

Tips for testing custom hooks:

- Use the React Testing Library `renderHook` function
- Test hook behavior in isolation
- Verify state updates and callbacks
- Check cleanup functions execute properly

## License

This project is part of the 2026-RTT-27 training program.

---

**Last Updated**: 2026-09-11
