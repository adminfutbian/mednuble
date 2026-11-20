const fs = require('fs');
const path = require('path');

const carpetas = [
  'src/app/(auth)/login',
  'src/app/(sistema)/admision',
  'src/app/(sistema)/agenda',
  'src/app/(sistema)/pacientes/[id]',
  'src/app/(sistema)/box/[citaId]',
  'src/app/(sistema)/admin/usuarios',
  'src/app/(sistema)/admin/caja',
  'src/components/ui',
  'src/components/layout',
  'src/components/pacientes',
  'src/components/agenda',
  'src/components/clinica',
  'src/context',
  'src/lib/pdf',
  'src/services',
  'src/types',
];

const archivos = [
  'src/app/(auth)/login/page.tsx',
  'src/app/(sistema)/layout.tsx',
  'src/app/(sistema)/page.tsx',
  'src/app/(sistema)/admision/page.tsx',
  'src/app/(sistema)/agenda/page.tsx',
  'src/app/(sistema)/pacientes/page.tsx',
  'src/app/(sistema)/pacientes/[id]/page.tsx',
  'src/app/(sistema)/box/[citaId]/page.tsx',
  'src/app/(sistema)/admin/usuarios/page.tsx',
  'src/app/(sistema)/admin/caja/page.tsx',
  'src/app/layout.tsx',
  'src/app/globals.css',
  'src/context/AuthContext.tsx',
  'src/lib/firebase.ts',
  'src/lib/rut.ts',
  'src/services/pacientesService.ts',
  'src/services/citasService.ts',
  'src/services/atencionesService.ts',
  'src/types/index.ts',
];

// Crear carpetas
carpetas.forEach((carpeta) => {
  fs.mkdirSync(path.join(process.cwd(), carpeta), { recursive: true });
});

// Crear archivos vacíos (sin sobrescribir si ya existen)
archivos.forEach((archivo) => {
  const rutaCompleta = path.join(process.cwd(), archivo);
  if (!fs.existsSync(rutaCompleta)) {
    fs.writeFileSync(rutaCompleta, '', 'utf8');
  }
});

console.log('Estructura creada correctamente.');