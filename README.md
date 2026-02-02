# customer-count-widget

A customer count widget that displays the total customer count from Google Sheets.

## Features

- Displays customer count in a clean, responsive widget
- Fetches real-time data from Google Apps Script
- Multiple widget variations available (different styling)
- Thai language support

## Testing

This project includes automated tests to ensure the widget functions correctly.

### Running Tests

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

The test suite includes:
- HTML structure validation
- CSS class verification
- Script tag presence checks
- Document structure tests
- Character encoding validation

## Files

- `index.html` - Main widget implementation
- `counter_new_custom.html` - Custom styled version
- Various other HTML files for different configurations
