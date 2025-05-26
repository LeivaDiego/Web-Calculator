# Proyecto 1

**Universidad del Valle de Guatemala**  
**Facultad de Ingeniería**  
**Departamento de Ciencias de la Computación**  
**Curso: Sistemas y Tecnologías Web**  

## Autor

Diego Leiva - 21752

## Calculadora React

Este proyecto es una calculadora simple construida con React, diseñada para practicar conceptos de:

- Componentes reutilizables
- Custom Hooks
- Testing con Vitest
- Linting sin punto y coma
- Storybook para documentación de componentes

## 🚀 Funcionalidades implementadas

- Operaciones básicas: suma, resta, multiplicación, división
- Operaciones adicionales: módulo, negación (+/-), punto decimal
- Lógica de errores: no se permiten negativos ni números mayores a 999999999
- Límite de 9 caracteres en el display
- Todos los inputs solo por botones (no teclado)
- Botón de "=" más ancho visualmente

## 📂 Estructura del proyecto

```text
src/
├── components/
│   ├── App.jsx
│   ├── Calculator.jsx
│   ├── Keypad.jsx
│   ├── Button.jsx
│   ├── Display.jsx
├── hooks/
│   └── useCalculator.js
├── styles/
│   ├── app.css
│   └── global.css
├── stories/
│   ├── Button.stories.jsx
│   ├── Keypad.stories.jsx
│   ├── Calculator.stories.jsx
│   ├── Display.stories.jsx
├── tests/
│   └── useCalculator.test.js
```

## 🧪 Scripts disponibles

### 🔧 Instalación

```bash
npm install
```

### ▶️ Ejecutar la app

```bash
npm run dev
```

### ✅ Ejecutar pruebas

```bash
npm test
```

### 🧼 Linting sin punto y coma

```bash
npm run lint
```

### 📚 Ejecutar Storybook

```bash
npm run storybook
```
