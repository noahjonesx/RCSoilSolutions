# RC Soil Solutions Website

A modern, visually stunning Blazor WebAssembly website for RC Soil Solutions, a professional soil management services company. This project showcases how to build a beautiful, eye-catching business website using Blazor WebAssembly with modern CSS, animations, and responsive design.

## Project Overview

This is a single-page application (SPA) built with Blazor WebAssembly, designed to provide a fast, interactive user experience with rich visual elements and modern design patterns. The website includes:

- Engaging hero section with dynamic elements
- Interactive service showcases
- Testimonials from satisfied clients
- Contact form with validation
- Responsive design for all device sizes
- Modern animations and transitions
- Professional business sections (About, Services, Projects, etc.)

## Technologies Used

- **Blazor WebAssembly** - A client-side .NET web framework
- **ASP.NET Core** - Backend framework for hosting and API services
- **Bootstrap 5** - CSS framework for responsive design
- **Font Awesome** - Icon library
- **AOS** - Animate On Scroll library for scroll-based animations
- **BlazorAnimate** - Animation library for Blazor components
- **Blazored.LocalStorage** - Client-side storage for WebAssembly

## Project Structure

The project is structured as follows:

- `RCSoilSolutions.Web/` - Blazor WebAssembly project
  - `Components/` - Reusable UI components
  - `Pages/` - Page components (Index, About, Services, etc.)
  - `Shared/` - Shared layout components
  - `Services/` - Service classes for business logic
  - `wwwroot/` - Static assets
    - `css/` - CSS files (app.css, animations.css, pages.css)
    - `js/` - JavaScript files
    - `images/` - Image assets

## Getting Started

### Prerequisites

- [.NET 7.0 SDK](https://dotnet.microsoft.com/download/dotnet/7.0) or later
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) (recommended) or Visual Studio Code

### Running the Project

1. Clone the repository
2. Open Visual Studio 2022 and open the solution file (`RCSoilSolutions.sln`)
3. Set `RCSoilSolutions.Web` as the startup project
4. Press F5 to build and run the application
5. The website will open in your default browser

### Using .NET CLI

Alternatively, you can run the project from the command line:

```
cd RCSoilSolutions.Web
dotnet restore
dotnet build
dotnet run
```

## Customization

### Replacing Placeholder Images

The website uses placeholder images that should be replaced with actual high-quality images before deployment:

1. Replace all files in the `wwwroot/images/` directory with actual images
2. Ensure the replacement images use the same filenames to maintain compatibility

### Customizing Colors

The color scheme can be easily customized by editing the CSS variables in `wwwroot/css/app.css`:

```css
:root {
    /* Primary Brand Colors */
    --primary: #2e7d32;      /* Deep Green */
    --primary-light: #60ad5e; /* Light Green */
    --primary-dark: #005005;  /* Dark Green */
    
    /* Secondary Colors */
    --secondary: #795548;     /* Earth Brown */
    /* ... other color variables ... */
}
```

## Deployment

To deploy the application:

1. Publish the application using Visual Studio or the .NET CLI:
   ```
   dotnet publish -c Release
   ```

2. Deploy the published files to your web server or hosting platform
   
3. Ensure the web server is configured to route all requests to the `index.html` file

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from modern business websites
- Icons from Font Awesome
- Animations from AOS library
