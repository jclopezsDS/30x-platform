# 📋 Placeholders & TODOs - 30X Platform MVP

**Status**: 🟡 En Progreso  
**Última actualización**: Oct 26, 2025

---

## 🔴 CRÍTICO (Debe Verificarse)

### Typeform URLs - Parámetros "xxxxx"
**Archivos afectados**: 3  
**Ocurrencias**: 6

#### 1. EverybodyAI.tsx
```tsx
// Línea 69 - Hero CTA
ctaLink="https://form.typeform.com/to/beHsSd8p?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"

// Línea 230 - CTASection
ctaLink="https://form.typeform.com/to/beHsSd8p?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"
```

#### 2. Fundraising.tsx
```tsx
// Línea 69 - Hero CTA
ctaLink="https://form.typeform.com/to/XBJqESrb?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"

// Línea 241 - CTASection
ctaLink="https://form.typeform.com/to/XBJqESrb?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"
```

#### 3. Navigation.tsx
```tsx
// Línea 38 - EverybodyAI
case "/everybody-ai":
  return "https://form.typeform.com/to/beHsSd8p?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx";

// Línea 40 - Fundraising
case "/fundraising":
  return "https://form.typeform.com/to/XBJqESrb?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx";
```

**Pregunta**: ¿Estos parámetros son placeholders o tracking IDs reales?  
**Acción**: Reemplazar `xxxxx` con valores correctos o eliminar si no son necesarios

---

## 🟡 IMPORTANTE (Mejora UX)

### 1. SocialProof Component - Logos Placeholder
**Archivos**: `src/components/SocialProof.tsx`  
**Usado en**: 
- `ThirtyX.tsx` (Executive)
- `XtremeSales.tsx`
- `Fundraising.tsx` (2 secciones)

**Descripción**: Actualmente muestra cajas grises genéricas sin logos reales

**Opciones**:
- [ ] Agregar logos reales de empresas/VCs
- [ ] Usar imágenes SVG de clientes
- [ ] Eliminar componente si no hay logos disponibles
- [ ] Mantener como está (diseño minimalista)

**Acción recomendada**: Decidir si agregar logos o eliminar secciones

---

### 2. MentorCard Component - Fotos Placeholder
**Archivos**: `src/components/MentorCard.tsx`  
**Usado en**:
- `ThirtyX.tsx` (Mentores del programa Executive)
- `XtremeSales.tsx` (Instructores)
- `EverybodyAI.tsx` (Profesores)

**Descripción**: Cards de mentores sin fotos reales

**Opciones**:
- [ ] Agregar fotos reales de mentores
- [ ] Usar avatares con iniciales
- [ ] Usar placeholders de Unsplash/Placeholder.com
- [ ] Mantener como está

**Acción recomendada**: Obtener fotos de mentores o usar avatares

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
| Crítico | 1 | 0 | 1 |
| Importante | 2 | 0 | 2 |
| SEO | 1 | 0 | 1 |
| Opcional | 2 | 0 | 2 |
| **TOTAL** | **6** | **0** | **6** |

---

## 🎯 PRÓXIMOS PASOS (Prioridad)

1. **CRÍTICO**: Verificar y actualizar Typeform URLs
2. **IMPORTANTE**: Decidir sobre logos y fotos de mentores
3. **SEO**: Crear/actualizar meta tags y imagen OG
4. **OPCIONAL**: Crear páginas legales o eliminar links

---

**Formato para actualizar**:
- Cuando actualices un placeholder, marca con ✅ en la sección COMPLETADO
- Documenta cambios en este archivo
- Haz commit con mensaje: `chore: Update [PLACEHOLDER_NAME]`
