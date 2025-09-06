# Modern React Portfolio Website

A professional, modern, and responsive portfolio website built with React featuring a clean design, smooth animations, and mobile-first approach.

## 🚀 Features

- **Modern Split Layout Homepage** - Left side profile image, right side introduction with download CV button
- **Responsive Navigation** - Clean top navigation with smooth transitions
- **Animated Components** - Framer Motion animations throughout the site
- **Professional Sections**:
  - Home with hero section and stats
  - Resume with timeline experience and education
  - Skills with interactive progress bars
  - Contact with functional form and social links
- **Modern Design System** - Consistent colors, typography, and spacing
- **Mobile Responsive** - Optimized for all device sizes
- **Professional Typography** - Inter font for modern, clean appearance

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Comprehensive icon library
- **CSS3** - Modern CSS with custom properties and grid/flexbox
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Resume.js
│   │   ├── Resume.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Design Features

- **Color Scheme**: Modern blue gradient (#2563eb to #06b6d4)
- **Typography**: Inter font family for professional appearance  
- **Shadows**: Soft, layered shadows for depth
- **Border Radius**: Consistent rounded corners (16px for cards, 8px for buttons)
- **Animations**: Smooth fade-in, slide-in, and hover effects
- **Grid Layouts**: CSS Grid for responsive, professional layouts

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Customization

### Personal Information
- Update profile image in `Home.js` (line 19)
- Modify name, description, and stats in `Home.js`
- Update contact information in `Contact.js`
- Replace social media links throughout components

### Content
- **Resume**: Edit experience, education, and certifications in `Resume.js`
- **Skills**: Modify skill categories and proficiency levels in `Skills.js`
- **Contact**: Update contact methods and form handling in `Contact.js`

### Styling
- **Colors**: Modify CSS custom properties in `index.css` and `App.css`
- **Typography**: Update font imports and font-family declarations
- **Layout**: Adjust grid layouts and spacing in individual CSS files

### CV Download
- Add your CV file to the `public` folder
- Update the file path in `Home.js` handleDownloadCV function

## 📱 Responsive Design

- **Desktop**: Full split layout with all features
- **Tablet**: Stacked layout with maintained functionality  
- **Mobile**: Single column, optimized touch interactions

## 🔧 Performance Optimizations

- Lazy loading of components
- Optimized animations with Framer Motion
- Minimal bundle size with tree-shaking
- Efficient CSS with custom properties
- Mobile-first responsive design

## 🌟 Key Components

### Navbar
- Fixed position with backdrop blur
- Active state indicators
- Mobile hamburger menu
- Smooth scroll behavior

### Home Page  
- Split layout design
- Profile image with decorative elements
- Call-to-action buttons
- Statistics showcase
- Social media links

### Resume Page
- Timeline layout for experience
- Card-based education section  
- Certification badges
- Download functionality

### Skills Page
- Categorized skill sections
- Animated progress bars
- Tools and technologies grid
- Interactive hover effects

### Contact Page
- Functional contact form
- Contact information cards
- Social media integration
- Form validation and submission

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out through the contact form or create an issue in the repository.

---

**Built with ❤️ and modern web technologies**