import Image from 'next/image'

const ImageWrapper = ({ src, alt, width, height, layout, priority }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      priority={priority}
    />
  )
}

export default ImageWrapper
