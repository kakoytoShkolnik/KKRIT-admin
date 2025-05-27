import { TImageValidation } from '../types/validation'

const getImageExtensionsValidationResult = (img: TImageValidation) => {
  const allowedExtensions = /^image\/(png|jpe?g|webp)$/
  if (img.url) {
    return
  }

  if (!allowedExtensions.test(img.rawFile.type)) {
    return `Недопустимый формат ${
      img.rawFile.type.split('/')[1]
    }! Допускается только jpeg, jpg, png и webp`
  }
}

export const allowedImageExtension = () => (img?: TImageValidation) => {
  if (!img) {
    return
  }

  return getImageExtensionsValidationResult(img)
}

export const allowedImageExtensions = () => (imgs?: TImageValidation[]) => {
  if (!imgs) {
    return
  }

  for (const img of imgs) {
    return getImageExtensionsValidationResult(img)
  }
}
