# RC Soil Solutions Website

A beautiful, modern Blazor WebAssembly website for RC Soil Solutions, showcasing professional soil management services.

## Project Structure

This is a Blazor WebAssembly application with the following structure:

- `/Components` - Reusable UI components
- `/Pages` - Individual page components
- `/Services` - Service classes for data and business logic
- `/Shared` - Layout and shared components
- `/wwwroot` - Static assets (CSS, JavaScript, images)

## Prerequisites

- [.NET 7.0 SDK](https://dotnet.microsoft.com/download/dotnet/7.0) or later
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) (recommended) or Visual Studio Code

## Getting Started

### Option 1: Using Visual Studio 2022

1. Open the solution file (`RCSoilSolutions.sln`) in Visual Studio 2022
2. Right-click on the `RCSoilSolutions.Web` project in Solution Explorer and select "Set as Startup Project"
3. Press F5 or click the "Start Debugging" button to run the application

### Option 2: Using .NET CLI

1. Open a terminal or command prompt
2. Navigate to the project directory (`RCSoilSolutions.Web`)
3. Run the following commands:

```
dotnet restore
dotnet build
dotnet run
```

4. Open a web browser and navigate to `https://localhost:5001` or `http://localhost:5000`

## Development

### Adding Images

Replace the placeholder images in the `/wwwroot/images` directory with actual images for:

- Hero background (`hero-bg.jpg`)
- Service images (`service-1.jpg` through `service-6.jpg`)
- Testimonial author images (`testimonial-1.jpg` through `testimonial-4.jpg`)

### CSS Customization

The website uses custom CSS with variables for easy customization:

- `/wwwroot/css/app.css` - Main stylesheet with variables and component styles
- `/wwwroot/css/animations.css` - Animation styles and effects

### JavaScript

Custom JavaScript functionality is included in:

- `/wwwroot/js/app.js` - Animations, interactive elements, and utilities

## Deployment

To publish the application for deployment, use one of the following methods:

### Using Visual Studio 2022

1. Right-click on the `RCSoilSolutions.Web` project in Solution Explorer
2. Select "Publish..."
3. Follow the wizard to configure your publishing target (Azure, IIS, Folder, etc.)

### Using .NET CLI

```
dotnet publish -c Release -o ./publish
```

## Third-Party Libraries

This project uses the following libraries:

- [Bootstrap 5](https://getbootstrap.com/) - CSS framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [BlazorAnimate](https://github.com/mikoskinen/Blazor.Animate) - Animation components for Blazor
- [Blazored.LocalStorage](https://github.com/Blazored/LocalStorage) - Local storage for Blazor 