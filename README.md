# Front Links Herramientas

Aplicación web simple hecha con React, TypeScript y Tailwind CSS para mostrar herramientas educativas de programación mediante un listado desplegable.

---

## Instrucciones para levantar el proyecto

1. **Clonar el repositorio**

```bash
git clone <URL-del-repositorio>
cd <nombre-del-proyecto>
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173/`.

---

## Modificar links y datos

La información de las herramientas está almacenada en un archivo JSON ubicado en:

```
public/data/data.json
```

Para actualizar, editar ese archivo con la estructura adecuada. La aplicación lee este JSON en tiempo de ejecución para mostrar los datos.

---

## Tecnologías usadas

- React 
- TypeScript
- Tailwind CSS
- Lucide Icons (para íconos)

---

## Estructura general

```
public/
  └── data/
      └── data.json  ← Archivo con datos de herramientas

src/
  ├── components/       ← Componentes React
  ├── types/            ← Tipos TypeScript
  ├── App.tsx           ← Componente principal
  └── main.tsx          ← Punto de entrada
```
