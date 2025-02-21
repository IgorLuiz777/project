# NCAR Website

## Estrutura de Mídia

Para adicionar novas mídias ao site, siga estas instruções:

### Localização dos Arquivos

As mídias devem ser organizadas nos seguintes diretórios:

```
public/media/
├── images/       # Para imagens gerais
├── videos/       # Para arquivos de vídeo
└── thumbnails/   # Para miniaturas dos vídeos
```

### Como Adicionar Novas Mídias

1. **Imagens**
   - Coloque os arquivos de imagem em `public/media/images/`
   - Formatos suportados: jpg, jpeg, png, webp
   - Nomeie os arquivos de forma descritiva (ex: `oficina-moderna.jpg`)

2. **Vídeos**
   - Coloque os arquivos de vídeo em `public/media/videos/`
   - Formatos suportados: mp4, webm
   - Crie uma miniatura correspondente em `public/media/thumbnails/`
   - Use o mesmo nome base para o vídeo e sua miniatura
     Exemplo:
     - Vídeo: `nossa-historia.mp4`
     - Miniatura: `nossa-historia-thumb.jpg`

### Recomendações para Arquivos

1. **Imagens**
   - Resolução recomendada: 1920x1080px
   - Formato preferido: .jpg para fotos, .png para imagens com transparência
   - Otimize as imagens para web antes de fazer upload

2. **Vídeos**
   - Resolução recomendada: 1920x1080px
   - Formato preferido: .mp4 com codificação H.264
   - Duração recomendada: até 2 minutos
   - Tamanho máximo: 10MB

3. **Miniaturas**
   - Resolução recomendada: 640x360px
   - Formato: .jpg
   - Tamanho máximo: 200KB

### Atualizando o Conteúdo

Após adicionar novas mídias, atualize o arquivo `src/components/MediaGallery.tsx` adicionando as referências aos novos arquivos no objeto `mediaContent`.

Exemplo:
```typescript
const mediaContent = {
  images: [
    {
      url: getMediaPath('sua-nova-imagem.jpg', 'images'),
      title: 'Título da Imagem',
      description: 'Descrição da imagem'
    },
    // ... outras imagens
  ],
  // ... resto do conteúdo
};
```