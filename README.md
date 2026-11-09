# Math Calc — Calculadora Científica Standalone (PWA)

Webapp independiente y progresiva (PWA) de la **Calculadora Científica con Natural Display**, extraída de Math Universe para funcionar de manera 100% autónoma en móviles, tablets y ordenadores.

---

## Características
- **Escritura Natural de Fracciones**: botón `a/b` para crear fracciones verticales con navegación intuitiva (`◀`, `▶`, `Tab`).
- **Tecla S⇔D**: alternancia instantánea entre fracción exacta, decimal y radicales simplificados.
- **Tecla FACT**: descomposición de números enteros en factores primos ($72 = 2^3 \cdot 3^2$).
- **Funciones Científicas**: trigonometría (`sin`, `cos`, `tan` en `DEG`, `RAD`, `GRAD`), inversas (`sin⁻¹`, `cos⁻¹`, `tan⁻¹`), logaritmos (`log`, `ln`), combinatoria (`nCr`, `nPr`), potencias y raíces.
- **Resolutor de Ecuaciones de 2.º Grado**: modo `ax² + bx + c = 0` con discriminante ($\Delta$), vértice y desarrollo detallado paso a paso.
- **Cinta de Historial**: registro interactivo de cálculos para recuperar o reutilizar cualquier resultado previo.
- **Modos Claro y Oscuro**: conmutador integrado sin recargas.
- **100% Offline y PWA**: instalable en la pantalla de inicio de Android y iOS/iPhone con su propio icono.

---

## Cómo usarla / desplegarla

### Opción A: Probarla directamente desde Math Universe
Ya está integrada en tu web en la ruta:
```
https://tu-dominio.com/calc
```
O en local:
```
http://localhost:4321/calc
```
Al entrar desde el navegador del móvil, pulsa **«Añadir a la pantalla de inicio»** / **«Instalar aplicación»** y se instalará como una App independiente llamada **Math Calc**.

### Opción B: Subirla como proyecto independiente (Vercel, Netlify, GitHub Pages)
Esta carpeta `calculadora/` es un sitio estático completo sin dependencias:
1. Puedes arrastrar la carpeta `calculadora/` directamente a **Netlify Drop** o crear un proyecto estático en **Vercel**.
2. O subirla a un repositorio de GitHub y activar **GitHub Pages**.
3. Funcionará de forma autónoma con su propio dominio o subdominio (ej. `calc.tudominio.com`).
