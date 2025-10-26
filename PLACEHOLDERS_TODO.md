# 📋 Placeholders & TODOs - 30X Platform MVP

**Status**: 🟡 En Progreso  
**Última actualización**: Oct 26, 2025

---


## ✅ COMPLETADO

### 1. SocialProof Component - Logos ✅
**Archivos**: `src/components/SocialProof.tsx`  
**Usado en**: 
- ✅ `ThirtyX.tsx` (Executive)
- ✅ `XtremeSales.tsx`
- ✅ `Fundraising.tsx` (2 secciones)
- ✅ `EverybodyAI.tsx`

**Cambios**: 
- Agregado prop `logoImage` opcional
- Muestra imagen real si está disponible
- Fallback a grid de placeholders si no hay imagen
- Integrado `/assets/logos-empresas.webp` en todas las páginas

---

### 2. MentorCard Component - Fotos ✅
**Archivos**: `src/components/MentorCard.tsx`  
**Usado en**:
- ✅ `ThirtyX.tsx` (Mentores del programa Executive)

**Cambios**:
- Agregado prop `image` opcional
- Muestra foto real si está disponible
- Fallback a placeholder gris si no hay imagen
- Integradas fotos en ThirtyX:
  - Dylan Rosemberg: `/assets/Dylan Rosemberg.webp`
  - Andrés Bilbao: `/assets/Andres Bilbao.webp`
  - Daniel Bilbao: `/assets/Daniel Bilbao.webp`

---

## 🟠 IMPORTANTE (SEO & Meta Tags)

### 1. Meta Tags en index.html
**Archivo**: `index.html`

#### Problemas:
```html
<!-- Línea 15 - OG Image no existe -->
<meta property="og:image" content="https://www.30x.org/og-image.jpg" />

<!-- Línea 20 - Twitter Image no existe -->
<meta name="twitter:image" content="https://www.30x.org/og-image.jpg" />

<!-- Línea 10 - Canonical URL -->
<link rel="canonical" href="https://www.30x.org/" />
```

**Acciones pendientes**:
- [ ] Crear/subir imagen OG personalizada (1200x630px recomendado)
- [ ] Verificar URL canonical (¿es `https://www.30x.org/` o `https://30x-platform.vercel.app/`?)
- [ ] Actualizar rutas de imágenes

---

## 🟡 OPCIONAL (Puede Esperar)

### 1. Footer - Links Legales
**Archivo**: `src/components/Footer.tsx`  
**Líneas**: 127-132

```tsx
<Link to="#" className="hover:text-secondary transition-colors">
  Términos y Condiciones
</Link>
<Link to="#" className="hover:text-secondary transition-colors">
  Política de Privacidad
</Link>
```

**Opciones**:
- [ ] Crear páginas `/terms` y `/privacy`
- [ ] Eliminar links hasta tenerlas
- [ ] Apuntar a documento externo
- [ ] Mantener como están (placeholder)

**Acción recomendada**: Crear páginas o eliminar links

---

### 2. SocialProof - Texto Genérico
**Archivos**: `ThirtyX.tsx`, `XtremeSales.tsx`, `Fundraising.tsx`

**Ejemplos**:
```tsx
<SocialProof title="We've helped dozens of startups raise capital..." />
<SocialProof title="Trusted by leaders from..." />
```

**Acción**: Verificar si estos textos son correctos o necesitan actualización

---

## ✅ COMPLETADO

- ✅ Footer - Links sociales reales (LinkedIn, Instagram, YouTube)
- ✅ Footer - Email genérico eliminado
- ✅ Footer - Twitter eliminado
- ✅ Footer - Programas actualizados (Executive, AI First VC)
- ✅ Navegación - 5 programas funcionales
- ✅ Home - Card AI First VC agregada
- ✅ Rutas - `/ai-first-vc` funcional
- ✅ Animaciones - Implementadas en todas las páginas
- ✅ Responsive - Diseño mobile-first

---

## 📊 RESUMEN

| Categoría | Total | Completado | Pendiente |
|-----------|-------|-----------|-----------|
| Importante | 2 | 2 | 0 |
| SEO | 1 | 0 | 1 |
| Opcional | 2 | 0 | 2 |
| **TOTAL** | **5** | **2** | **3** |

---

## 🎯 PRÓXIMOS PASOS (Prioridad)

1. **SEO**: Crear/actualizar meta tags y imagen OG
2. **OPCIONAL**: Crear páginas legales o eliminar links

---

**Formato para actualizar**:
- Cuando actualices un placeholder, marca con ✅ en la sección COMPLETADO
- Documenta cambios en este archivo
- Haz commit con mensaje: `chore: Update [PLACEHOLDER_NAME]`
